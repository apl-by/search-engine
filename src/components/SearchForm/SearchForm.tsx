import Form from "../common/Form/Form";
import SearchInput from "../common/SearchInput/SearchInput";
import { FC } from "react";
import { SxProps, Theme } from "@mui/material/styles";

type TProps = {
  onSubmit: () => void;
  value: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  sxRoot?: SxProps<Theme>;
  size?: "small" | "medium" | undefined;
};

const SearchForm: FC<TProps> = ({
  sxRoot,
  onSubmit,
  value,
  setInputValue,
  size,
}) => {
  return (
    <Form noValidate sxRoot={sxRoot} onSubmit={onSubmit} size={size}>
      <SearchInput value={value} setInputValue={setInputValue} size={size} />
    </Form>
  );
};

export default SearchForm;
