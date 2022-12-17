import { Box } from "@mui/material";
import SearchForm from "../../components/SearchForm/SearchForm";
import Title from "../../components/Title/Title";
import { titleMainText, titleSecondaryText } from "./data";
import { FC } from "react";

type TProps = {
  inputState: [string, React.Dispatch<React.SetStateAction<string>>];
};

const StartPage: FC<TProps> = ({ inputState }) => {
  return (
    <Box
      component={"main"}
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: {
          xs: 1,
          sm: 3,
        },
      }}
    >
      <Title
        sxRoot={{
          mt: {
            xs: 13,
            sm: 15,
          },
          mb: {
            xs: 2,
            sm: 3,
            md: 4,
          },
        }}
        mainText={titleMainText}
        secondaryText={titleSecondaryText}
      />
      <SearchForm inputState={inputState} />
    </Box>
  );
};

export default StartPage;
