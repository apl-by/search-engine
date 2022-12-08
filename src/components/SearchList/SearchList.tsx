import { Box, Stack } from "@mui/material";
import SearchItem from "../SearchItem/SearchItem";

const SearchList = () => {
  return (
    <Stack
      component={"ul"}
      direction={"column"}
      spacing={2}
      sx={{
        width: "100%",
        m: 0,
        p: 0,
      }}
    >
      <SearchItem
        data={{
          title: "Shrimp and Chorizo Paella",
          link: "September 14, 2016",
          text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem `,
        }}
      />
      <SearchItem
        data={{
          title: "Shrimp and Chorizo Paella",
          link: "September 14, 2016",
          text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem ducimus distinctio id consequuntur  ipsum animi minus repellendus dignissimos, ex laboriosam reprehenderit  quis molestias consequatur iure ad nostrum consectetur minima hic!ddd sd ddfgdg `,
        }}
      />
    </Stack>
  );
};

export default SearchList;
