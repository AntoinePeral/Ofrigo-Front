import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

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
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/connexion";
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
