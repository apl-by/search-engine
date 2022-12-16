import { AppBar } from "@mui/material";
import Logo from "../Logo/Logo";
import SearchForm from "../SearchForm/SearchForm";
import { blueGrey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { FC } from "react";

type TProps = {
  inputState: [string, React.Dispatch<React.SetStateAction<string>>];
};

const Header: FC<TProps> = ({ inputState }) => {
  const [, setInput] = inputState;
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: blueGrey[50],
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        minHeight: "78px",
        width: "100%",
        boxShadow: 0,
        px: 8,
        borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
      }}
    >
      <Link
        style={{ textDecoration: "none" }}
        to="/"
        onClick={() => setInput("")}
      >
        <Logo />
      </Link>
      <SearchForm
        inputState={inputState}
        size="small"
        sxRoot={{ ml: "40px" }}
      />
    </AppBar>
  );
};

export default Header;
