import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import frigoOuvert from "../components/pictures/frigo_ouvert.png";
import frigoFerme from "../components/pictures/frigo_fermé.jpg";


// Définition de la composante Home
const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [frigoOuvert, frigoFerme];

  // Utilisation de useEffect pour gérer le changement d'image toutes les 5 secondes
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);
    // Nettoyage de l'interval lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);

  return (
    <>
      <main style={{ height: "100vh",}}>
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
            <img
              src={images[currentImageIndex]}
              alt="Recettes"
              style={{ width: "50%", height: "auto", objectFit: "contain", boxShadow: "-16px -8px 12px 4px rgba(39,112,255,0.61)" }}
            />
            <Typography variant="h5" align="justify" padding="20px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/"
              sx={{ marginTop: 2 }}
            >
              Voir les recettes
            </Button>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
            <img
              src={images[(currentImageIndex + 1) % images.length]}
              alt="Inscrivez-vous"
              style={{ width: "50%", height: "auto", objectFit: "contain", boxShadow: "-16px -8px 12px 4px rgba(39,112,255,0.61)" }}
            />
            <Typography variant="h5" align="justify" padding="20px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/creer-compte"

              sx={{ marginTop: 2 }}
            >
              S'inscrire
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
