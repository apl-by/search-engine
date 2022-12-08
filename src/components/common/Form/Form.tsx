import { Box } from "@mui/material";
import React, { FC } from "react";
import { SxProps, Theme } from "@mui/material/styles";

type TProps = {
  children: React.ReactNode;
  onSubmit: () => void;
  noValidate?: boolean;
  sxRoot?: SxProps<Theme>;
  size?: "small" | "medium" | undefined;
};

const Form: FC<TProps> = ({ children, onSubmit, noValidate, sxRoot, size }) => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const sizePropSx = {
    maxWidth:
      size === "medium" ? "600px" : size === "small" ? "460px" : undefined,
  };

  return (
    <Box
      component={"form"}
      noValidate={noValidate}
      onSubmit={handleSubmit}
      sx={[
        { maxWidth: "600px", width: "100%" },
        sizePropSx,
        ...(Array.isArray(sxRoot) ? sxRoot : [sxRoot]),
      ]}
    >
      {children}
    </Box>
  );
};

export default Form;
