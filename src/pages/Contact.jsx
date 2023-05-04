import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import axios from "axios";

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  /*
background: "-moz-linear-gradient(left, #1C6EA4 0%, #2388CB 50%, #144E75 100%)",
background: "-webkit-linear-gradient(left, #1C6EA4 0%, #2388CB 50%, #144E75 100%)",
background: "linear-gradient(to right, #1C6EA4 0%, #2388CB 50%, #144E75 100%)",
*/
  /*backgroundColor:"#F6F1F1",*/
  minHeight: "100vh",
  /*
boxShadow: "-16px -8px 12px 4px rgba(39,112,255,0.61)",
*/
  width: "100%",
});

const FormContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  /*
    background: "-moz-linear-gradient(left, #1C6EA4 0%, #C9FFE5 50%, #144E75 100%)",
    background: "-webkit-linear-gradient(left, #1C6EA4 0%, #C9FFE5 50%, #144E75 100%)",
    background: "linear-gradient(to right, #1C6EA4 0%, #C9FFE5 50%, #144E75 100%)",
    */
  minHeight: "100vh",
  /*
    boxShadow: "-16px -8px 12px 4px rgba(39,112,255,0.61)",
    */
  width: "100%",
  "@media (min-width: 600px)": {
    width: "80%",
  },
});

const Contact = () => {
  const [email, setEmail] = useState(localStorage.email);
  const [content, setContent] = useState("");
  const [label, setLabel] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email: ", email);
    console.log("Label: ", label);
    console.log("Content: ", content);
    if (content.length < 40) {
      alert("Le champ Message doit contenir au moins 40 caractères.");
      return;
    }
    axios
      .post("http://antoineperal-server.eddi.cloud/contact", {
        email: email,
        label: label,
        content: content,
      })
      .then((response) => {
        console.log(response);
        alert("Message envoyé avec succès!");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.response.data);
        setErrorMessage(error.response.data.message);
      });
  };

  return (
    <Container>
      <h1>Contactez-nous</h1>
      <FormContainer component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
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
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="label"
              label="Titre"
              variant="outlined"
              margin={"normal"}
              value={label}
              onChange={(event) => setLabel(event.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
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
          </Grid>
          {errorMessage && (
            <Grid item xs={12}>
              <p>{errorMessage}</p>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Envoyer
            </Button>
          </Grid>
        </Grid>
      </FormContainer>
    </Container>
  );
};

export default Contact;
