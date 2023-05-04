import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

// Définition du style de la div Container avec MUI System
const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 50,
});
// Définition du style du titre avec MUI System
const Title = styled("h1")({
  marginBottom: "50px",
});
// Définition du style du bouton de déconnexion avec MUI System
const StyledButton = styled(Button)({
  width: "100%",
  marginTop: "20px",
  backgroundColor: "#dc3545",
  "&:hover": {
    backgroundColor: "#c82333",
  },
});

function LogoutPage() {
  // Fonction pour gérer la déconnexion de l'utilisateur
  const handleLogout = () => {
    localStorage.removeItem("token");// Supprime le token stocké dans localStorage
    localStorage.removeItem("first_name");
    localStorage.removeItem("last_name");
    localStorage.removeItem("email_name");
    window.location.href = "/connexion";// Redirige l'utilisateur vers la page de connexion
  };

  return (
    <Container>
      <Title>Etes-vous sûr de vouloir vous déconnecter ?</Title>
      <StyledButton variant="contained" color="primary" onClick={handleLogout}>
        Se déconnecter
      </StyledButton>
    </Container>
  );
}

export default LogoutPage;
