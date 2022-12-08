import { Box } from "@mui/material";
import SearchForm from "../../components/SearchForm/SearchForm";
import Title from "../../components/Title/Title";
import { titleMainText, titleSecondaryText } from "./data";
import { FC } from "react";

type TProps = {
  value: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

const StartPage: FC<TProps> = ({ value, setInputValue }) => {
  return (
    <Box
      component={"main"}
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Title
        sxRoot={{ mt: 15, mb: 4 }}
        mainText={titleMainText}
        secondaryText={titleSecondaryText}
      />
      <SearchForm
        onSubmit={() => void 0}
        value={value}
        setInputValue={setInputValue}
      />
    </Box>
  );
};

export default StartPage;
