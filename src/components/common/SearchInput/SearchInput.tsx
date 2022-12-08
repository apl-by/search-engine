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

type TProps = {
  value: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  size?: "small" | "medium" | undefined;
};

const SearchInput: FC<TProps> = ({ value, setInputValue, size }) => {
  const inputRef = useRef<HTMLInputElement>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
    if (inputRef.current !== undefined) inputRef.current.focus();
  };

  return (
    <TextField
      id="input-search"
      autoFocus
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
            <Button type="submit" disabled={value.trim() === ""} size={size}>
              search
            </Button>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
