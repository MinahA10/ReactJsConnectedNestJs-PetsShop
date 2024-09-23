import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../assets/logo.png";

function Copyright() {
  return (
    <Typography color="black" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/" style={{ color: "black" }}>
        Minah Andrianiaina
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "30vh",
        backgroundColor: "white",
        color: "white",
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          align="center"
          sx={{ color: "black" }}
        >
          <img height="50px" src={logo} alt="logo" /> Pets Shop
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item>
              {/*<Link href="/" variant="body1" underline="hover" sx={{ color: 'black' }}>Accueil</Link>*/}
            </Grid>
          </Grid>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
            <Grid item>
              <IconButton
                color="inherit"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener"
              >
                <FacebookIcon sx={{ color: "blue" }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                color="inherit"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener"
              >
                <InstagramIcon sx={{ color: "blue" }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                color="inherit"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener"
              >
                <LinkedInIcon sx={{ color: "blue" }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                color="inherit"
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener"
              >
                <TwitterIcon sx={{ color: "blue" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            backgroundColor: "white",
            color: "black",
          }}
        >
          <Container maxWidth="sm">
            <Copyright />
          </Container>
        </Box>
      </Container>
    </Box>
  );
}
