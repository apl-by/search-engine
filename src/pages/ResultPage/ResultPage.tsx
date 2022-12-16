import { Box, Pagination, Typography } from "@mui/material";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchList from "../../components/SearchList/SearchList";
import Main from "../../components/Main/Main";
import { FC, useEffect, useState } from "react";
import { TResData } from "../../types/types";
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../utils/data";

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

  useEffect(() => {
    let controller = new AbortController();
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

    return () => controller.abort();
  }, [search, setInput]);

  const handlePagination = (e: React.ChangeEvent<unknown>, p: number) => {
    const newSearch = search.replace(/num=\d+/, `num=${p}`);
    navigate(pathname + newSearch);
    setResData(null);
  };

  const insertJSX = (resData: TResData | null) => {
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
    </Box>
  );
};

export default ResultPage;
