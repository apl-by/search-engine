import { Container } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        backgroundColor: blueGrey[50],
        minHeight: "100vh",
      }}
    >
      <Outlet />
    </Container>
  );
};

export default Layout;
