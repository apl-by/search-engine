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
};

const SearchInput: FC<TProps> = ({ value, setInputValue }) => {
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
      InputProps={{
        sx: { borderRadius: "50px" },
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
              sx={{ display: value === "" ? "none" : "flex" }}
            >
              <CloseRoundedIcon />
            </IconButton>
            <Divider
              orientation="vertical"
              sx={{ display: "flex", height: 30, mx: 0.5 }}
            />
            <Button type="submit" disabled={value.trim() === ""}>
              search
            </Button>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
