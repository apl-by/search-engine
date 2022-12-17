import { createTheme } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";

let theme = createTheme({
  palette: {
    primary: indigo,
  },
});

theme.typography.h1 = {
  fontSize: "86px",
  fontWeight: 600,
  color: indigo[900],
  [theme.breakpoints.up("xs")]: {
    fontSize: "60px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "78px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "86px",
  },
};

export default theme;
