import { Box } from "@mui/material";
import { FC } from "react";

type TProp = {
  children: React.ReactNode;
};

const Main: FC<TProp> = ({ children }) => {
  return (
    <Box
      component={"main"}
      sx={{
        flex: "1",
        px: 8,
        py: 2,
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
};

export default Main;
