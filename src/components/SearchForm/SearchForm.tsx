import Form from "../common/Form/Form";
import SearchInput from "../common/SearchInput/SearchInput";
import React, { FC } from "react";
import { SxProps, Theme } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";

type TProps = {
  sxRoot?: SxProps<Theme>;
  size?: "small" | "medium" | undefined;
  inputState: [string, React.Dispatch<React.SetStateAction<string>>];
};

const SearchForm: FC<TProps> = ({ sxRoot, size, inputState }) => {
  const [input, setInput] = inputState;

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const to = "/search";
    const newSearch = `?q=${input}&num=1`;
    if (pathname + search === to + newSearch) return;
    navigate(to + newSearch);
  };

  return (
    <Form sxRoot={sxRoot} size={size} onSubmit={handleSubmit}>
      <SearchInput value={input} setValue={setInput} size={size} />
    </Form>
  );
};

export default SearchForm;
