import { AppBar } from "@mui/material";
import { FC } from "react";
import Logo from "../Logo/Logo";
import SearchForm from "../SearchForm/SearchForm";

type TProps = {
  value: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

const Header: FC<TProps> = ({ value, setInputValue }) => {
  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        minHeight: "78px",
        width: "100%",
        boxShadow: 1,
        px: 8,
      }}
    >
      <Logo />
      <SearchForm
        onSubmit={() => void 0}
        value={value}
        setInputValue={setInputValue}
        size="small"
        sxRoot={{ ml: "40px" }}
      />
    </AppBar>
  );
};

export default Header;
