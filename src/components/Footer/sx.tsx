import { Theme } from "@mui/material/styles";

const getSxFooter = (theme: Theme) => {
  const sxFooter = {
    footer: {
      display: "flex",
      alignItems: "center",
      minHeight: "70px",
      width: "100%",
      px: { xs: 1, sm: 6, md: 8 },
      borderTop: "1px solid rgba(0, 0, 0, 0.3) ",
      "@media (max-width: 600px)": {
        flexDirection: "column",
        pb: 2,
      },
    },
    footer__copyright: {
      mb: "0",
      mr: "40px",
      "@media (max-width: 600px)": {
        mr: 0,
        my: 1,
      },
    },
    footer__links: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100px",
      "@media (max-width: 600px)": {
        width: "140px",
      },
      "& .MuiLink-root": {
        color: theme.palette.primary.light,

        mb: "5px",
        display: "flex",
        "@media (max-width: 600px)": {
          color: theme.palette.primary.dark,
        },
        "&:hover": {
          color: theme.palette.primary.dark,
        },
      },
    },
  };
  return sxFooter;
};

export default getSxFooter;
