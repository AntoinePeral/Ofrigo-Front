import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Grid,
  Typography,
  Container,
  CardContent,
} from "@mui/material";

const About = () => {
  const teamMembers = [
    {
      name: "Antoine PERAL",
      roles: ["Développeur Back", "Scrum Master", "Lead Dev Back"],
      image: "../Pictures/equipe/pictureAntoine.png",
    },
    {
      name: "Aymeric AGU",
      roles: [
        "Développeur Front",
        "Product Owner",
        "Référent technique Techno",
      ],
      image: "../Pictures/equipe/Aymeric.jpg",
    },
    {
      name: "Jean-Marc NAGAU",
      roles: ["Développeur Front", "Lead Dev Front"],
      image: "../Pictures/equipe/Jean-Marc.png",
    },
    {
      name: "Freddy GAUDRE",
      roles: [
        "Développeur Front",
        "Référent technique git",
        "Rédaction de la documentation technique",
      ],
      image: "../Pictures/equipe/freddy.jpg",
    },
    {
      name: "Kevin LIENARD",
      roles: ["Développeur Back", "Lead Dev Back", "Scrum Master"],
      image: "../Pictures/equipe/Kevin-Lienard.jpg",
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
        <Box mt={4}>
          <Typography
            variant="h4"
            style={{ fontFamily: "Pacifico, cursive", color: "#146C94" }}
            sx={{ mb: 4 }}
          >
            Notre équipe
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          mb={12}
          alignContent="center"
          maxHeight="90vh"
          sx={{ mt: 4 }}
        >
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 300, minWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={member.image}
                    alt={member.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {member.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {member.roles.map((role, index) => (
                        <li key={index}>{role}</li>
                      ))}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    En savoir plus
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box
        sx={{
          textAlign: "center",
          py: 2,
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "white",
          zIndex: 100,
        }}
      >
        <Typography variant="body2">
          2023 - Mon Entreprise. Tous droits réservés.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
