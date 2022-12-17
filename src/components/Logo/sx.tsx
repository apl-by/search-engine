import { indigo } from "@mui/material/colors";
import { svgFilterId } from "./data";

const sxLogo = {
  logo: {
    color: indigo[900],
    fontSize: "32px",
    m: 0,
    position: "relative",
    cursor: "pointer",
    userSelect: "none",
    filter: `blur(1.2px) url(#${svgFilterId})`,
    "@media (max-width: 600px)": {
      fontSize: "26px",
    },
    "@media (max-width: 450px)": {
      fontSize: "22px",
    },
  },
};

export default sxLogo;
