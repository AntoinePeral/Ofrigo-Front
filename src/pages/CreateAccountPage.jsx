import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import axios from "axios";

// Stylisation des composants MUI avec des styles en ligne
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
// Composant principal qui crée une page pour la création de compte
function CreateAccountPage() {
   // Déclaration des états pour les champs de saisie et les messages d'erreur
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordRequirements, setPasswordRequirements] = useState("");

  // Fonctions pour gérer les changements de valeurs dans les champs de saisie
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
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
// Fonction pour gérer la création du compte à partir des données saisies
  const handleCreateAccount = async (event) => {
    event.preventDefault();
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
 // Vérification de la conformité du mot de passe avec l'expression régulière   
    if (password.match(passwordRegex)) {
      try {
        const response = await axios.post("http://kevin-lienard-server.eddi.cloud/register", {
          last_name: lastName,
          first_name: firstName,
          email: email,
          password: password,
        });
        localStorage.setItem("token", response.data.accessToken);// Stockage du token d'accès dans le local storage
        window.location.href = "/accueil";
      } catch (error) {
        // Gestion des erreurs de requête HTTP
        if (error.response.status === 400) {
          setErrorMessage("Erreur lors de la création du compte. Veuillez vérifier les données saisies.");
        } else {
          setErrorMessage("Une erreur s'est produite. Veuillez réessayer plus tard.");
        }
      }
    } else {
      setPasswordRequirements("Le mot de passe doit contenir au moins une majuscule, un chiffre, un caractère spécial et être composé d'au moins 8 caractères");
    }
  };

  return (
    <RootBox>
      <form onSubmit={handleCreateAccount}>
        <InputField
          id="last-name"
          label="Last name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <InputField
          id="first-name"
          label="First name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <InputField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <InputField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          helperText="Le mot de passe doit contenir au moins une majuscule, un chiffre, un caractère spécial et être composé d'au moins 8 caractères"
        />
        {passwordRequirements && <p>{passwordRequirements}</p>}
        <SubmitButton variant="contained" type="submit">
          Créer un compte
        </SubmitButton>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      <Link to="/connexion">Vous avez déjà un compte ? Log in</Link>
    </RootBox>
  );
}

export default CreateAccountPage;
