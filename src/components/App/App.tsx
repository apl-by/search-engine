import React from "react";
import Container from "@mui/material/Container";
// import { useTheme } from '@mui/material/styles';
import { grey } from "@mui/material/colors";
import MainPage from "../../pages/MainPage/MainPage";

const App = () => {
  // const theme = useTheme()
  return (
    <Container
      maxWidth="xl"
      sx={{ bgcolor: grey[50] , minHeight: "100vh" }}
    >
      <MainPage></MainPage>
    </Container>
  );
};

export default App;
