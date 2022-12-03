import { useState } from "react";
import Container from "@mui/material/Container";
// import { useTheme } from '@mui/material/styles';
import { blueGrey } from "@mui/material/colors";
import MainPage from "../../pages/MainPage/MainPage";

const App = () => {
  // const theme = useTheme()
  const [inputValue, setInputValue] = useState("")

  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: blueGrey[50],
        minHeight: "100vh",
      }}
    >
      <MainPage value={inputValue} setInputValue={setInputValue}></MainPage>
    </Container>
  );
};

export default App;
