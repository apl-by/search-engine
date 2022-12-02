import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { indigo } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: indigo,
  },
  typography: {
    h1: {
      fontSize: "86px",
      fontWeight: 600,
      color: "#1a237e",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
