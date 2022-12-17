import { Box, Icon, Typography, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component={"footer"}
      sx={{
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
      }}
    >
      <Typography
        variant="body2"
        sx={{
          mb: "0",
          mr: "40px",
          "@media (max-width: 600px)": {
            mr: 0,
            my: 1,
          },
        }}
      >
        &copy; Apl-by, 2022
      </Typography>
      <Box
        sx={{
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
        }}
      >
        <Link href="https://github.com/apl-by" target="_blank" rel="noreferrer">
          <Icon>
            <GitHubIcon />
          </Icon>
        </Link>
        <Link href="https://t.me/apl_by" target="_blank" rel="noreferrer">
          <Icon>
            <TelegramIcon />
          </Icon>
        </Link>
        <Link href="mailto:mymail15-87y@yandex.ru">
          <Icon>
            <EmailOutlinedIcon />
          </Icon>
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
