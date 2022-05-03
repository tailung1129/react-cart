import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import fist from "../assets/img/footer/footer_fist.png";
import language from "../assets/img/footer/language.png";
import replace from "../assets/img/footer/replace.png";

const theme = createTheme();

theme.typography.body2 = {
  fontSize: 25,
  fontFamily: "Roboto",
  position: "relative",
  top: "25px",
  "@media (max-width:1228px)": {
    fontSize: 18
  },
  "@media (max-width:926px)": {
    fontSize: 12
  }
};
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer">
        <Grid container>
          <Grid item xs={4} pl={10} pt={3}>
            <img src={fist}></img>
          </Grid>
          <Grid item xs={4}>
            <ThemeProvider theme={theme}>
              <Typography ml={3} variant="body2">
                © 2022 mysouq. All right reserved
              </Typography>
            </ThemeProvider>
          </Grid>
          <Grid item xs={2.68}></Grid>
          <Grid item xs={0.4}>
            <img className="center" src={language}></img>
          </Grid>
          <Grid>
            <img className="center" src={replace}></img>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
