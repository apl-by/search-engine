import { Box, Icon, Typography } from "@mui/material";
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
        minHeight: "60px",
        width: "100%",
        px: 8,
        mt: 3,
        borderTop: "1px solid rgba(0, 0, 0, 0.3) ",
      }}
    >
      <Typography variant="body2" sx={{ mr: "40px" }}>
        &copy; Apl-by, 2022
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100px",
          "& .MuiIcon-root": {
            color: theme.palette.primary.light,
            mb: "5px",
            "&:hover": {
              color: theme.palette.primary.dark,
            },
          },
        }}
      >
        <Icon>
          <GitHubIcon />
        </Icon>
        <Icon>
          <TelegramIcon />
        </Icon>
        <Icon>
          <EmailOutlinedIcon />
        </Icon>
      </Box>
    </Box>
  );
};

export default Footer;
