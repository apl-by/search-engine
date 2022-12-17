import {
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { FC, useRef } from "react";
import { useLocation } from "react-router-dom";

type TProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  size?: "small" | "medium" | undefined;
};

const SearchInput: FC<TProps> = ({ value, setValue, size }) => {
  const inputRef = useRef<HTMLInputElement>();
  const { pathname } = useLocation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clearInput = () => {
    setValue("");
    if (inputRef.current !== undefined) inputRef.current.focus();
  };

  return (
    <TextField
      id="input-search"
      name="q"
      autoFocus={pathname === "/"}
      inputRef={inputRef}
      placeholder="Try to search"
      fullWidth
      onChange={handleChange}
      value={value}
      size={size}
      inputProps={{ maxLength: "300" }}
      InputProps={{
        sx: { borderRadius: "50px", boxShadow: 2 },
        startAdornment: (
          <InputAdornment position="start" disablePointerEvents>
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment
            position="end"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <IconButton
              onClick={clearInput}
              size={size}
              sx={{ display: value === "" ? "none" : "flex" }}
            >
              <CloseRoundedIcon />
            </IconButton>
            <Divider
              orientation="vertical"
              sx={{ display: "flex", height: 30, mx: 0.5 }}
            />
            <Button
              type="submit"
              disabled={value.trim() === ""}
              sx={{ p: { xs: 0, sm: 1 } }}
              size={size}
            >
              search
            </Button>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
