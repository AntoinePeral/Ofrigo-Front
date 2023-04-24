import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";

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
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [label, setLabel] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email: ", email);
    console.log("Label: ", label);
    console.log("Content: ", content);

    axios.post("http://kevin-lienard-server.eddi.cloud/message", {
      email: email,
      label: label,
      content: content,
    })
      .then((response) => {
        console.log(response);
        alert("Message envoyé avec succès!");
      })
      .catch((error) => {
        console.log(error);
        alert("Une erreur est survenue. Veuillez réessayer plus tard.");
      });
  };

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