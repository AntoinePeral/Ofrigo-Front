import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import axios from "axios";
import { Margin } from "@mui/icons-material";
import { Stack } from "@mui/material";

const RootBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 50,
});

const InputField = styled(TextField)({
  width: "100%",
  marginBottom: 20,
});

const SubmitButton = styled(Button)({});

function UpdateAccountPage() {
  const [lastName, setLastName] = useState(localStorage.first_name);
  const [firstName, setFirstName] = useState(localStorage.last_name);
  const [email, setEmail] = useState(localStorage.email);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordRequirements, setPasswordRequirements] = useState("");

  console.log(localStorage);

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleClickDelete = async (event) => {
    event.preventDefault();

    try {
      const jwtToken = localStorage.getItem("token");

      axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;

      const response = await axios.delete(
        "http://antoineperal-server.eddi.cloud/me/profile",
        {
          last_name: lastName,
          first_name: firstName,
          email: email,
          password: password,
        }
      );
      localStorage.removeItem("token"); // Supprime le token stocké dans localStorage
      localStorage.removeItem("first_name"); // Supprime le token stocké dans localStorage
      localStorage.removeItem("last_name"); // Supprime le token stocké dans localStorage
      localStorage.removeItem("email"); // Supprime le token stocké dans localStorage
      window.location.href = "/accueil";
    } catch (error) {
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage(
          "Une erreur s'est produite. Veuillez réessayer plus tard."
        );
      }
    }
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCreateAccount = async (event) => {
    event.preventDefault();
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&\/$.#!?§:;+\-%])[A-Za-z\d!?:;@$!%*?&\/$.#%\-]{8,}$/u;
    if (password.match(passwordRegex)) {
      try {
        const jwtToken = localStorage.getItem("token");

        axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;

        const response = await axios.put(
          "http://antoineperal-server.eddi.cloud/me/profile",
          {
            last_name: lastName,
            first_name: firstName,
            email: email,
            password: password,
          }
        );
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("first_name", response.data.account.first_name);
        localStorage.setItem("last_name", response.data.account.last_name);
        localStorage.setItem("email", response.data.account.email);
        window.location.href = "/profil/stock";
      } catch (error) {
        if (error.response.status === 400) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage(
            "Une erreur s'est produite. Veuillez réessayer plus tard."
          );
        }
      }
    } else {
      setPasswordRequirements(
        "Le mot de passe doit contenir au moins une majuscule, un chiffre, un caractère spécial et être composé d'au moins 8 caractères"
      );
    }
  };

  return (
    <Box>
      <Box mb={12}>
        <form onSubmit={handleCreateAccount}>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <InputField
                id="last-name"
                label="Last name"
                value={lastName}
                onChange={handleLastNameChange}
                style={{ marginTop: "12px" }}
              />
            </Grid>
            <Grid item>
              <InputField
                id="first-name"
                label="First name"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </Grid>
            <Grid item>
              <InputField
                id="email"
                label="Email"
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item>
              <InputField
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordRequirements && <p>{passwordRequirements}</p>}
            </Grid>
            <Grid
              item
              spacing={2}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Stack spacing={2}>
                <SubmitButton variant="contained" type="submit" size="large">
                  Sauvegarder
                </SubmitButton>
                <Button
                  size="small"
                  variant="contained"
                  color="error"
                  size="large"
                  onClick={(event) => {
                    handleClickDelete(event);
                  }}
                >
                  Supprimer
                </Button>
              </Stack>
              <Box marginBottom="12px" />
            </Grid>
          </Grid>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </Box>
    </Box>
  );
}
export default UpdateAccountPage;
