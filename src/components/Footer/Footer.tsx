import { Box, Icon, Typography, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useTheme } from "@mui/material/styles";
import getSxFooter from "./sx";
import { useMemo } from "react";

const Footer = () => {
  const theme = useTheme();
  const sxFooter = useMemo(() => getSxFooter(theme), [theme]);

  return (
    <Box component={"footer"} sx={sxFooter.footer}>
      <Typography variant="body2" sx={sxFooter.footer__copyright}>
        &copy; Apl-by, 2022
      </Typography>
      <Box sx={sxFooter.footer__links}>
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
