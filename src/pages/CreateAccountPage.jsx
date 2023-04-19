import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

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

const SubmitButton = styled(Button)({
  width: "100%",
});

function CreateAccountPage() {
  // initialisation des variables d'état
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [motDePasse, setMotDePasse] = useState("");

  // gestionnaires d'événements pour mettre à jour les variables d'état
  const handleNomChange = (event) => {
    setNom(event.target.value);
  };

  const handlePrenomChange = (event) => {
    setPrenom(event.target.value);
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmail(email);
    // Vérification du format de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleMotDePasseChange = (event) => {
    setMotDePasse(event.target.value);
  };

  // fonction de validation des données de formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Nom : ${nom}`);
    console.log(`Prénom : ${prenom}`);
    console.log(`Email : ${email}`);
    console.log(`Mot de passe : ${motDePasse}`);
  };

  return (
    <RootBox>
      <h1>Créer un compte</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Nom"
          variant="outlined"
          value={nom}
          onChange={handleNomChange}
        />
        <InputField
          label="Prénom"
          variant="outlined"
          value={prenom}
          onChange={handlePrenomChange}
        />
        <InputField
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
          error={emailError}
          helperText={emailError ? "Format d'email invalide" : ""}
        />
        <InputField
          label="Mot de passe"
          variant="outlined"
          type="password"
          value={motDePasse}
          onChange={handleMotDePasseChange}
        />
        <SubmitButton variant="contained" color="primary" type="submit">
          Créer un compte
        </SubmitButton>
      </form>
      <p>
        Vous avez déjà un compte ?{" "}
        <Link to="/Connexion">Connectez-vous ici.</Link>
      </p>
    </RootBox>
  );
}

export default CreateAccountPage;
