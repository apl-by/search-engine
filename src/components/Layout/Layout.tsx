import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import sxLayout from "./sx";

const Layout = () => {
  return (
    <Container maxWidth="xl" disableGutters sx={sxLayout.layout}>
      <Outlet />
    </Container>
  );
};

export default Layout;
