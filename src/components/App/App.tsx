import React from "react";
import Container from "@mui/material/Container";
// import { useTheme } from '@mui/material/styles';
import { blue } from "@mui/material/colors";
import MainPage from "../../pages/MainPage/MainPage";
import theme from "../../themes/theme";

const App = () => {
  // const theme = useTheme()
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundImage: "linear-gradient(#e8eaf6, #f5f5f5)",
        minHeight: "100vh",
      }}
    >
      <MainPage></MainPage>
    </Container>
  );
};

export default App;
