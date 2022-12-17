import { Box } from "@mui/material";
import { FC } from "react";
import sxMain from "./sx";

type TProp = {
  children: React.ReactNode;
};

const Main: FC<TProp> = ({ children }) => {
  return (
    <Box component={"main"} sx={sxMain.main}>
      {children}
    </Box>
  );
};

export default Main;
