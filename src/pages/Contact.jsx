// Importations des modules et composants nécessaires
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";

// Définition du style de la boîte principale
const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  minHeight: "80vh",
  backgroundColor: "#f5f5f5",
  boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
  padding: "20px",
});

// Définition du style de la boîte du formulaire
const FormContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fff",
  boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
  padding: "20px",
  width: "100%",
  maxWidth: "400px",
  borderRadius: "5px",
  margin: "20px",
});

const Contact = () => {
  // Déclaration des états avec useState()
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [label, setLabel] = useState("");

 // Définition de la fonction de soumission du formulaire 
  const handleSubmit = (event) => {
 // Empêcher le rechargement de la page par défaut
    event.preventDefault();
    console.log("Email: ", email);
    console.log("Label: ", label);
    console.log("Content: ", content);
// Vérifier que le champ du message contient au moins 40 caractères
    if (content.length < 40) {
      alert("Le champ Message doit contenir au moins 40 caractères.");
      return;
    }
// Envoyer la demande POST à l'API et gérer les réponses
    axios
      .post("http://kevin-lienard-server.eddi.cloud/contact", {
        email: email,
        label: label,
        content: content,
      })
      .then((response) => {
        console.log(response);
        alert("Message envoyé avec succès!");
        window.location.reload(); // rafraîchir la page
      })
      .catch((error) => {
        console.log(error);
        alert("Une erreur est survenue. Veuillez réessayer plus tard.");
      });
  };
// Affichage du formulaire
  return (
    <Container>
      <h1>Contactez-nous</h1>
      <FormContainer component="form" onSubmit={handleSubmit}>
        <TextField
          id="email"
          label="Adresse e-mail"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          fullWidth
        />
        <TextField
          id="label"
          label="Titre"
          variant="outlined"
          margin="normal"
          value={label}
          onChange={(event) => setLabel(event.target.value)}
          required
          fullWidth
        />
        <TextField
          id="content"
          label="Message"
          variant="outlined"
          margin="normal"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          required
          fullWidth
          multiline
          rows={6}
        />
        <Button variant="contained" color="primary" type="submit">
          Envoyer
        </Button>
      </FormContainer>
    </Container>
  );
};

export default Contact;