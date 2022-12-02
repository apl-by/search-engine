import { Box } from "@mui/material";
import React, { FC } from "react";

type TProps = {
  children: React.ReactNode;
};

const Form: FC<TProps> = ({ children }) => {
  return (
    <Box
      component={"form"}
      noValidate
      sx={{ maxWidth: "600px", width: "100%" }}
    >
      {children}
    </Box>
  );
};

export default Form;
