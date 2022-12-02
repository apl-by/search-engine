import {
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const SearchInput = () => {
  return (
    <TextField
      id="input-search"
      autoFocus
      placeholder="Try to search"
      fullWidth
      
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
            <IconButton>
              <CloseRoundedIcon />
            </IconButton>
            <Divider
              orientation="vertical"
              sx={{ display: "flex", height: 30, mx: 0.5 }}
            />
            <Button type="submit">search</Button>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
