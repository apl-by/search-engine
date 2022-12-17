const sxSearchItem = {
  card: {
    display: "flex",
    maxWidth: "650px",
    width: "100%",
    backgroundColor: "rgba(255,255,255, 0.2)",
    boxShadow: 1,
    borderRadius: "15px",
    border: "1px solid rgba(0, 0, 0, 0.2)",
  },
  content: {
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
  },
  content__title: {
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
  },
  content__link: {
    width: "80%",
    "@media (max-width: 600px)": {
      fontSize: "15px",
    },
  },
  "content__text-wrapper": {
    width: "100%",
  },
  content__text: {
    overflowWrap: "anywhere",
    "@media (max-width: 600px)": {
      fontSize: "13px",
    },
  },
  "content__text-chip": {
    cursor: "pointer",
    opacity: "0.7",
    ":hover": {
      opacity: "1",
      color: "#311b92",
    },
  },
};

export default sxSearchItem;
