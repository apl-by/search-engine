import { Box } from "@mui/material";
import React, { FC } from "react";
import { SxProps, Theme } from "@mui/material/styles";

type TProps = {
  children: React.ReactNode;
  onSubmit: () => void;
  noValidate?: boolean;
  sxRoot?: SxProps<Theme>;
};

const Form: FC<TProps> = ({ children, onSubmit, noValidate, sxRoot }) => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <Box
      component={"form"}
      noValidate={noValidate}
      onSubmit={handleSubmit}
      sx={[
        { maxWidth: "600px", width: "100%" },
        ...(Array.isArray(sxRoot) ? sxRoot : [sxRoot]),
      ]}
    >
      {children}
    </Box>
  );
};

export default Form;
