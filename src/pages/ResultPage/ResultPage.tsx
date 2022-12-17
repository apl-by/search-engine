import { Box, Pagination, Typography } from "@mui/material";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchList from "../../components/SearchList/SearchList";
import Main from "../../components/Main/Main";
import { FC, useEffect, useState, useCallback } from "react";
import { TResData } from "../../types/types";
import { useLocation, useNavigate } from "react-router-dom";
import { alertMessages, BASE_URL } from "../../utils/data";
import UiAlert from "../../components/UiAlert/UiAlert";

type TProps = {
  inputState: [string, React.Dispatch<React.SetStateAction<string>>];
};

const ResultPage: FC<TProps> = ({ inputState }) => {
  const [, setInput] = inputState;

  const [resData, setResData] = useState<TResData | null>(null);
  const [isFakeData, setIsFakeData] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const loadData = useCallback(
    (controller: AbortController) => {
      fetch(BASE_URL + search, {
        signal: controller.signal,
      })
        .then((res) => {
          if (res.ok) return res.json();
          throw new Error("Server error");
        })
        .then((res: TResData) => {
          if (res.limit !== undefined) {
            setIsFakeData(true);
            setInput(res.query);
            setResData(res);
            return;
          }
          setIsFakeData(false);
          setResData(res);
        })
        .catch((e) => {
          if (e.name === "AbortError") return;
          setError(e);
        });
    },
    [search, setInput]
  );

  useEffect(() => {
    let controller = new AbortController();
    setError(null);
    loadData(controller);

    return () => controller.abort();
  }, [search, loadData]);

  const handlePagination = (e: React.ChangeEvent<unknown>, p: number) => {
    const newSearch = search.replace(/page=\d+/, `page=${p}`);
    navigate(pathname + newSearch);
    setResData(null);
  };

  const insertJSX = (resData: TResData | null) => {
    if (error)
      return (
        <Typography variant="body1">
          {"An error has occurred. Try again later"}
        </Typography>
      );
    if (resData === null) return <></>;
    if (resData.commonLength === 0)
      return (
        <Typography variant="body1">
          {"Nothing was found for your query"}
        </Typography>
      );
    return (
      <>
        <SearchList data={resData.searchResult} />
        <Pagination
          onChange={handlePagination}
          page={resData.page}
          count={Math.ceil(resData.commonLength / 10)}
          sx={{ mt: "10px" }}
        ></Pagination>
      </>
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Header inputState={inputState} />
      <Main>{insertJSX(resData)}</Main>
      <Footer />

      <UiAlert type={"error"} depsOf={error} message={alertMessages.error} />
      <UiAlert
        type={"info"}
        depsOf={isFakeData}
        message={
          resData && resData.limit === 0
            ? alertMessages.limit
            : resData
            ? alertMessages.apiError
            : ""
        }
      />
    </Box>
  );
};

export default ResultPage;
