import { Backdrop, Alert } from "@mui/material";
import { useState, useEffect, FC } from "react";

type TProps = {
  type: "error" | "info" | "success" | "warning";
  depsOf: Error | boolean | null;
  message: string;
};

const UiAlert: FC<TProps> = ({ type, depsOf, message }) => {
  const [needShow, setNeedShow] = useState(false);

  useEffect(() => {
    if (depsOf) return setNeedShow(true);
    setNeedShow(false);
  }, [depsOf]);

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={needShow}
      onClick={() => setNeedShow(false)}
    >
      <Alert variant="filled" severity={type}>
        {message}
      </Alert>
    </Backdrop>
  );
};

export default UiAlert;
