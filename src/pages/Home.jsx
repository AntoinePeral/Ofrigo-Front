import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import frigoOuvert from "../components/pictures/frigo_ouvert.png";
import frigoFerme from "../components/pictures/frigo_fermé.jpg";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [frigoOuvert, frigoFerme];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);

  return (
    <Container maxWidth="md">
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} style={{ textAlign: "center", marginTop: "30px" }}>
          <Typography
            variant="h4"
            style={{ fontFamily: "Pacifico, cursive", color: "#146C94" }}
          >
            Bienvenue sur O'Frigo
          </Typography>
          <Typography variant="h6" gutterBottom style={{ color: "#19A7CE" }}>
            Votre assistant culinaire intelligent
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Card>
            <CardContent>
              <Typography variant="body1">
                OFrigo vous aide à cuisiner de délicieux repas tout en réduisant
                le gaspillage alimentaire. Découvrez un large choix de recettes
                adaptées à vos ingrédients et préférences.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/recette"
              >
                Voir les recettes
              </Button>
            </CardActions>
          </Card>
          <Card style={{ marginTop: "16px" }}>
            <CardContent>
              <Typography variant="body1">
                Créez un compte et renseignez votre stock utilisateur. Ainsi,
                OFrigo vous proposera des recettes sur mesure, en tenant compte
                de la difficulté, du temps de préparation et des notes
                attribuées par la communauté. Rejoignez-nous et cuisinons
                ensemble de manière responsable et savoureuse !
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/creer-compte"
              >
                S'inscrire
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <img
            src={images[currentImageIndex]}
            alt="Recettes"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
