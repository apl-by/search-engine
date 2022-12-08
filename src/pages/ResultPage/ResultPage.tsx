import { Box, Pagination } from "@mui/material";
import Header from "../../components/Header/Header";
import { FC } from "react";
import Footer from "../../components/Footer/Footer";
import SearchList from "../../components/SearchList/SearchList";
import Main from "../../components/Main/Main";

type TProps = {
  value: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

const ResultPage: FC<TProps> = ({ value, setInputValue }) => {
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
      <Header value={value} setInputValue={setInputValue} />
      <Main>
        <SearchList />
        <Pagination sx={{ mt: "10px" }}></Pagination>
      </Main>

      <Footer />
    </Box>
  );
};

export default ResultPage;
