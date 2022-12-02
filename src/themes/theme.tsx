import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    h1: {
      // fontSize: "92px",
      fontWeight: 600,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
