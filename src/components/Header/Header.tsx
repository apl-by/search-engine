import { AppBar } from "@mui/material";
import { FC } from "react";
import Logo from "../Logo/Logo";
import SearchForm from "../SearchForm/SearchForm";
import { blueGrey } from "@mui/material/colors";

type TProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const Header: FC<TProps> = ({ value, setValue }) => {
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
      <Logo />
      <SearchForm
        onSubmit={() => void 0}
        value={value}
        setValue={setValue}
        size="small"
        sxRoot={{ ml: "40px" }}
      />
    </AppBar>
  );
};

export default Header;
