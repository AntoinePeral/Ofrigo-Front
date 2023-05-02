import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 50,
  padding: "50px",
  width: "50%",
  margin: "0 auto",
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    console.log("useEffect called");
    const token = localStorage.getItem("token");
    if (token) {
      console.log(token);
    }
  }, []);

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setEmailError(!validateEmail(emailValue));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("ici");
    try {
      const response = await axios.post(
        "http://antoineperal-server.eddi.cloud/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      window.location.href = "/accueil";
    } catch (error) {
      setErrorMessage(
        "Erreur lors de la connexion. Veuillez vérifier vos identifiants."
      );
    }
  };

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  return (
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
  );
}

export default LoginPage;
