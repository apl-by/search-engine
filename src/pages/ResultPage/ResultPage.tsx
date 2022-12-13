import { Box, Pagination } from "@mui/material";
import Header from "../../components/Header/Header";
import { FC, useContext } from "react";
import Footer from "../../components/Footer/Footer";
import SearchList from "../../components/SearchList/SearchList";
import Main from "../../components/Main/Main";
import StateContext from "../../contexts/StateContext";

const ResultPage: FC = () => {
  const { inputValue, setInputValue } = useContext(StateContext);

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
      <Header value={inputValue} setValue={setInputValue} />
      <Main>
        <SearchList />
        <Pagination sx={{ mt: "10px" }}></Pagination>
      </Main>

      <Footer />
    </Box>
  );
};

export default ResultPage;
