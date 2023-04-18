import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { styled } from "@mui/system";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 50,
  padding: "50px",
  width:"50%",
  margin:"0 auto",
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

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setEmailError(!validateEmail(emailValue));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
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
        <StyledButton variant="contained" color="primary" type="submit">
          Connexion
        </StyledButton>
      </LoginForm>
    </Container>
  );
}

export default LoginPage;
