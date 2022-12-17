import { Card, CardContent, Typography, Link, Box } from "@mui/material";
import { FC, useLayoutEffect, useRef, useState } from "react";
import { getShortText } from "../../utils/utils";
import sxSearchItem from "./sx";

type TProp = {
  data: { title: string; link: string; text: string; lang: string };
};

// Количество строк для короткого текста
const requiredRowCount = 3;

const SearchItem: FC<TProp> = ({ data }) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const [shortText, setShortText] = useState("");
  const [showFullText, setShowFullText] = useState(false);

  useLayoutEffect(() => {
    const div = boxRef.current as HTMLDivElement;
    const paragraph = textRef.current as HTMLParagraphElement;
    const cardWidth = Number(div.clientWidth);
    const { fontSize, fontFamily } = window.getComputedStyle(paragraph);
    const { text } = data;

    const shortTextValue = getShortText({
      text,
      fontSize,
      fontFamily,
      cardWidth,
      requiredRowCount,
    });
    setShortText(shortTextValue);
  }, [data]);

  return (
    <Card component={"li"} sx={sxSearchItem.card}>
      <CardContent sx={sxSearchItem.content}>
        <Link
          href={data.link}
          target="_blank"
          rel="noreferrer"
          underline="none"
          sx={sxSearchItem.content__title}
        >
          {data.title}
        </Link>
        <Link
          href={data.link}
          target="_blank"
          rel="noreferrer"
          sx={sxSearchItem.content__link}
        >
          {data.link}
        </Link>
        <Box ref={boxRef} sx={sxSearchItem["content__text-wrapper"]}>
          <Typography
            variant="body2"
            ref={textRef}
            sx={sxSearchItem.content__text}
          >
            {shortText === "" || showFullText ? data.text : shortText}
            {shortText !== "" && (
              <Typography
                variant="caption"
                component={"span"}
                onClick={() => setShowFullText(!showFullText)}
                sx={sxSearchItem["content__text-chip"]}
              >
                {showFullText ? "   Скрыть" : "...Читать ещё"}
              </Typography>
            )}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SearchItem;
