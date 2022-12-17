import { Card, CardContent, Typography, Link, Box } from "@mui/material";
import { FC, memo, useLayoutEffect, useRef, useState } from "react";
import { getShortText } from "../../utils/utils";

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
    <Card
      component={"li"}
      sx={{
        display: "flex",
        maxWidth: "650px",
        width: "100%",
        backgroundColor: "rgba(255,255,255, 0.2)",
        boxShadow: 1,
        borderRadius: "15px",
        border: "1px solid rgba(0, 0, 0, 0.2)",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          p: 1,
          "&:last-child": { pb: 1 },
          "& .MuiLink-root": {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          },
        }}
      >
        <Link
          href={data.link}
          target="_blank"
          rel="noreferrer"
          underline="none"
          sx={{
            fontSize: "20px",
            lineHeight: "1.2",
            width: "90%",
            color: "#1a237e",
            "@media (max-width: 600px)": {
              fontSize: "17px",
            },
            ":visited": {
              color: "#880e4f",
            },
            ":hover": {
              color: "green",
            },
          }}
        >
          {data.title}
        </Link>
        <Link
          href={data.link}
          target="_blank"
          rel="noreferrer"
          sx={{
            width: "80%",
            "@media (max-width: 600px)": {
              fontSize: "15px",
            },
          }}
        >
          {data.link}
        </Link>
        <Box
          ref={boxRef}
          sx={{
            width: "100%",
          }}
        >
          <Typography
            variant="body2"
            ref={textRef}
            sx={{
              overflowWrap: "anywhere",
              "@media (max-width: 600px)": {
                fontSize: "13px",
              },
            }}
          >
            {shortText === "" || showFullText ? data.text : shortText}
            {shortText !== "" && (
              <Typography
                variant="caption"
                component={"span"}
                onClick={() => setShowFullText(!showFullText)}
                sx={{
                  cursor: "pointer",
                  opacity: "0.7",
                  ":hover": {
                    opacity: "1",
                    color: "#311b92",
                  },
                }}
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
