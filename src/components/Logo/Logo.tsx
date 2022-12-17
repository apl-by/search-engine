import { Box, Typography } from "@mui/material";
import SvgFilter from "../common/SvgFilter/SvgFilter";
import { svgFilterId } from "./data";
import sxLogo from "./sx";

const Logo = () => {
  return (
    <Box>
      <Typography paragraph noWrap sx={sxLogo.logo}>
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
