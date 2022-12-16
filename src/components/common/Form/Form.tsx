import { Box } from "@mui/material";
import React, { FC } from "react";
import { SxProps, Theme } from "@mui/material/styles";

type TProps = {
  children: React.ReactNode;
  sxRoot?: SxProps<Theme>;
  size?: "small" | "medium" | undefined;
} & React.FormHTMLAttributes<HTMLFormElement> &
  React.RefAttributes<HTMLFormElement>;

const Form: FC<TProps> = ({ children, sxRoot, size, ...rest }) => {
  const sizePropSx = {
    maxWidth:
      size === "medium" ? "600px" : size === "small" ? "460px" : undefined,
  };

  return (
    <Box
      component={"form"}
      noValidate
      sx={[
        { maxWidth: "600px", width: "100%" },
        sizePropSx,
        ...(Array.isArray(sxRoot) ? sxRoot : [sxRoot]),
      ]}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Form;
