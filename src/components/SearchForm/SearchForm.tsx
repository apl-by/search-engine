import Form from "../common/Form/Form";
import SearchInput from "../common/SearchInput/SearchInput";
import { FC } from "react";
import { SxProps, Theme } from "@mui/material/styles";

type TProps = {
  onSubmit: () => void;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  sxRoot?: SxProps<Theme>;
  size?: "small" | "medium" | undefined;
};

const SearchForm: FC<TProps> = ({
  sxRoot,
  onSubmit,
  value,
  setValue,
  size,
}) => {
  return (
    <Form noValidate sxRoot={sxRoot} onSubmit={onSubmit} size={size}>
      <SearchInput value={value} setValue={setValue} size={size} />
    </Form>
  );
};

export default SearchForm;
