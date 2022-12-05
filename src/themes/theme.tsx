import { createTheme } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";

let theme = createTheme({
  palette: {
    primary: indigo,
  },
  typography: {
    h1: {
      fontSize: "86px",
      fontWeight: 600,
      color: indigo[900],
    },
  },
});

export default theme;
