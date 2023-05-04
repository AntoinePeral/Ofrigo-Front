import React from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";

const Footer = () => {
  const style = {
    width: "100%",
    backgroundColor: "#1C6EA4",
    background:
      "-moz-linear-gradient(left, #1C6EA4 0%, #2388CB 50%, #144E75 100%)",
    background:
      "-webkit-linear-gradient(left, #1C6EA4 0%, #2388CB 50%, #144E75 100%)",
    background:
      "linear-gradient(to right, #1C6EA4 0%, #2388CB 50%, #144E75 100%)",
    color: "#FFF",
    padding: "20px 0",
    position: "fixed",
    bottom: 0,
    paddingLeft: 0,
  };

  return (
    <Box sx={style}>
      <Container maxWidth="xs">
        <Grid container justifyContent="space-around" alignItems="center">
          <Grid item>
            <Link underline="hover" color="inherit" href="/contact">
              <Typography>Contact</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link underline="hover" color="inherit" href="/CGU">
              <Typography>CGU</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link underline="hover" color="inherit" href="/CGV">
              <Typography>CGV</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link underline="hover" color="inherit" href="/About">
              <Typography>About</Typography>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
