import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

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
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email: ", email);
    console.log("Message: ", message);
    // mettre le formulaire à votre backend ici
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
          id="message"
          label="Message"
          variant="outlined"
          margin="normal"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
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
