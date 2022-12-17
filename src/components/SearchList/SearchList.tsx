import { Stack } from "@mui/material";
import { TResItem } from "../../types/types";
import SearchItem from "../SearchItem/SearchItem";
import { FC } from "react";

type TProps = {
  data: Array<TResItem>;
};

const SearchList: FC<TProps> = ({ data }) => {
  return (
    <Stack
      component={"ul"}
      direction={"column"}
      spacing={"12px"}
      sx={{
        width: "100%",
        m: 0,
        p: 0,
      }}
    >
      {data.map((i) => (
        <SearchItem
          key={i.id}
          data={{
            title: i.name,
            link: i.url,
            text: i.snippet,
            lang: i.language,
          }}
        />
      ))}
    </Stack>
  );
};

export default SearchList;
