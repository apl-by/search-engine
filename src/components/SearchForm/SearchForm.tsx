import Form from "../common/Form/Form";
import SearchInput from "../common/SearchInput/SearchInput";
import { FC } from "react";
import { SxProps, Theme } from "@mui/material/styles";

type TProps = {
  onSubmit: () => void;
  sxRoot?: SxProps<Theme>;
  value: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

const SearchForm: FC<TProps> = ({ sxRoot, onSubmit, value, setInputValue }) => {
  return (
    <Form noValidate sxRoot={sxRoot} onSubmit={onSubmit}>
      <SearchInput value={value} setInputValue={setInputValue} />
    </Form>
  );
};

export default SearchForm;
