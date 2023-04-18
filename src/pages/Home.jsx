import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import frigoOuvert from "../components/pictures/frigo_ouvert.png";
import frigoFerme from "../components/pictures/frigo_fermé.jpg";

const RootBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 50,

  // Media Query pour les écrans plus petits
  "@media (min-width: 768px)": {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

const ImageBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: 10,

  // Media Query pour les écrans plus petits
  "@media (min-width: 768px)": {
    marginBottom: 0,
  },
});

const StyledButton = styled(Button)({
  marginTop: 10,
});

const images = [frigoOuvert, frigoFerme];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <RootBox>
      <ImageBox>
        <img
          src={images[currentImageIndex]}
          alt="Recettes"
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
        <Typography variant="h5" align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <StyledButton variant="contained" color="primary" component={Link} to="/">
          Voir les recettes
        </StyledButton>
      </ImageBox>
      <ImageBox>
        <img
          src={images[(currentImageIndex + 1) % images.length]}
          alt="Inscrivez-vous"
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
        <Typography variant="h5" align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <StyledButton variant="contained" color="primary" component={Link} to="/creer-compte">
          S'inscrire
        </StyledButton>
      </ImageBox>
    </RootBox>
  );
};

export default Home;
