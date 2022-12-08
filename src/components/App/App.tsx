import { useState } from "react";
import Container from "@mui/material/Container";
// import { useTheme } from '@mui/material/styles';
import { blueGrey } from "@mui/material/colors";
import StartPage from "../../pages/StartPage/StartPage";
import ResultPage from "../../pages/ResultPage/ResultPage";

const App = () => {
  // const theme = useTheme()
  const [inputValue, setInputValue] = useState("");

  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        backgroundColor: blueGrey[50],
        minHeight: "100vh",
      }}
    >
      <ResultPage value={inputValue} setInputValue={setInputValue}></ResultPage>
      {/* <StartPage value={inputValue} setInputValue={setInputValue}></StartPage> */}
    </Container>
  );
};

export default App;
