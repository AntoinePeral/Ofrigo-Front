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
    
      <main style={{ marginBottom:"60",}}>
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
          <div style={{ flex: 1, display: "flex", overflow:"scroll", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "750px", }}>
            <img
              src={images[currentImageIndex]}
              alt="Recettes"
              style={{ width: "50%", height: "auto", objectFit: "contain", marginTop:"300px"}}
            />
            <Typography variant="h5" align="justify" padding="20px">
            Bienvenue sur OFrigo, votre assistant culinaire intelligent pour cuisiner de délicieux repas et réduire le gaspillage alimentaire. En cliquant sur le bouton "Recettes", découvrez un large choix de recettes adaptées à vos ingrédients et préférences.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/recette"
              sx={{ marginTop: 2 }}
            >
              Voir les recettes
            </Button>
            <Typography variant="h5" align="justify" padding="20px">
            Pour une expérience optimale, créez un compte et renseignez votre stock utilisateur. Ainsi, OFrigo vous proposera des recettes sur mesure, en tenant compte de la difficulté, du temps de préparation et des notes attribuées par la communauté. Rejoignez-nous et cuisinons ensemble de manière responsable et savoureuse ! 
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
    
  );
};

export default Home;
