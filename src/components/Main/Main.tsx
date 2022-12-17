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
        display: "flex",
        flexDirection: "column",
        flex: "1",
        px: { xs: 2, sm: 6, md: 8 },
        py: 2,
        width: "100%",
        position: "relative",
        "@media (max-width: 600px)": {
          alignItems: "center",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default Main;
