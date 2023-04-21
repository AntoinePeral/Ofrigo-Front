import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 50,
});

const Title = styled("h1")({
  marginBottom: "50px",
});

const StyledButton = styled(Button)({
  width: "100%",
  marginTop: "20px",
  backgroundColor: "#dc3545",
  "&:hover": {
    backgroundColor: "#c82333",
  },
});

function LogoutPage() {
  const handleLogout = async () => {
    try {
      await axios.post("http://kevin-lienard-server.eddi.cloud/logout", null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      localStorage.removeItem("token");
      window.location.href = "/connexion";
    } catch (error) {
      console.log(error);
    }
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
