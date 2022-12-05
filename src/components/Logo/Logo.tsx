import { Box, Typography } from "@mui/material";
import SvgFilter from "../common/SvgFilter/SvgFilter";
import { svgFilterId } from "./data";
import { indigo } from "@mui/material/colors";

const Logo = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        noWrap
        sx={{
          color: indigo[900],
          position: "relative",
          cursor: "pointer",
          userSelect: "none",
          filter: `blur(1.2px) url(#${svgFilterId})`,
        }}
        aria-label="Logo"
      >
        Apl-by
      </Typography>
      <SvgFilter
        svgFilterId={svgFilterId}
        filterValues="1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 320 -90"
      />
    </Box>
  );
};

export default Logo;