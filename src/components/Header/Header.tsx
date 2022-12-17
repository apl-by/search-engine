import { AppBar } from "@mui/material";
import Logo from "../Logo/Logo";
import SearchForm from "../SearchForm/SearchForm";
import { Link } from "react-router-dom";
import { FC } from "react";
import sxHeader from "./sx";

type TProps = {
  inputState: [string, React.Dispatch<React.SetStateAction<string>>];
};

const Header: FC<TProps> = ({ inputState }) => {
  const [, setInput] = inputState;

  return (
    <AppBar position="sticky" sx={sxHeader.header}>
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
        sxRoot={{ ml: { xs: "15px", sm: "30px", md: "40px" } }}
      />
    </AppBar>
  );
};

export default Header;
