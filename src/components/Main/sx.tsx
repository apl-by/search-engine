const sxMain = {
  main: {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    px: { xs: 2, sm: 6, md: 8 },
    py: 2,
    width: "100%",
    position: "relative",
    "@media (max-width: 600px)": {
      alignItems: "center",
    },
  },
};

export default sxMain;
