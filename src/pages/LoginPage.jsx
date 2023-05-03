import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";

// Styled components pour le formulaire de connexion
const Container = styled("div")({
  marginTop: 50,
});

const Title = styled("h1")({
  marginBottom: "50px",
});

const LoginForm = styled("form")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const StyledTextField = styled(TextField)({
  width: "100%",
  marginBottom: 20,
});

const StyledButton = styled(Button)({
  width: "100%",
});

function LoginPage() {
  // Déclaration des états locaux utilisés dans le composant
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Hook d'effet pour vérifier si un token existe dans le stockage local (lorsque le composant est monté)
    console.log("useEffect called");
    const token = localStorage.getItem("token");
    if (token) {
      console.log(token);
    }
  }, []);

  // Gestionnaire de changement d'email
  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setEmailError(!validateEmail(emailValue));
  };

  // Gestionnaire de changement de mot de passe
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Gestionnaire de soumission du formulaire de connexion
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("ici");
    try {
      // Appel à l'API pour se connecter avec les informations saisies par l'utilisateur
      const response = await axios.post(
        "http://kevin-lienard-server.eddi.cloud/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response);
      // Enregistrement du token d'accès dans le stockage local et redirection vers la page d'accueil
      localStorage.setItem("token", response.data.accessToken);
      window.location.href = "/accueil";
    } catch (error) {
      console.log(error.response.data);
      // Affichage d'un message d'erreur si la connexion échoue
      setErrorMessage(error.response.data.message);
    }
  };

  // Fonction de validation d'email
  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  // Rendu du composant
  return (
    <Box
      sx={{
        maxHeight: "70vh",
        overflow: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "12px",
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <Grid item>
          <Container>
            <Title>Se connecter avec son email</Title>
            <LoginForm onSubmit={handleSubmit}>
              <StyledTextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
                helperText={emailError ? "Email invalide" : ""}
              />
              <StyledTextField
                label="Mot de passe"
                variant="outlined"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              {errorMessage && <p>{errorMessage}</p>}
              <StyledButton variant="contained" color="primary" type="submit">
                Connexion
              </StyledButton>
            </LoginForm>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LoginPage;
