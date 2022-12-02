import { Box } from "@mui/material";
import SearchForm from "../../components/SearchForm/SearchForm";
import Title from "../../components/Title/Title";
import { titleMainText, titleSecondaryText } from "./data";

const MainPage = () => {
  return (
    <Box
      component={"main"}
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Title
        sxRoot={{ mt: 15, mb: 4 }}
        mainText={titleMainText}
        secondaryText={titleSecondaryText}
      />
      <SearchForm />
    </Box>
  );
};

export default MainPage;
