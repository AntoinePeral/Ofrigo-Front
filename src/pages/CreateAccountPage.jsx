import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import axios from "axios";

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

function CreateAccountPage() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordRequirements, setPasswordRequirements] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleCreateAccount = async (event) => {
    event.preventDefault();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&\/$.#!?§:;+\-%])[A-Za-z\d!?:;@$!%*?&\/$.#%\-]{8,}$/u;

    if (password !== confirmPassword) {setErrorMessage("Les mots de passe ne correspondent pas.");
return;
}
if (password.match(passwordRegex)) {
try {
const response = await axios.post(
"http://kevin-lienard-server.eddi.cloud/register",
{
last_name: lastName,
first_name: firstName,
email: email,
password: password,
}
);
localStorage.setItem("token", response.data.accessToken);
localStorage.setItem("first_name",response.data.account.first_name)
localStorage.setItem("last_name",response.data.account.last_name)
localStorage.setItem("email",response.data.account.email)
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
</Grid>
<Grid item>
<InputField
             id="confirm-password"
             label="Confirm password"
             type="password"
             value={confirmPassword}
             onChange={handleConfirmPasswordChange}
           />
</Grid>
{passwordRequirements && <Grid item>{passwordRequirements}</Grid>}
<Grid item>
<SubmitButton variant="contained" type="submit">
Créer un compte
</SubmitButton>
<Box marginBottom="12px" />
</Grid>
</Grid>
</form>
{errorMessage && <p>{errorMessage}</p>}
<Box display="flex" justifyContent="center">
<Link to="/connexion">Vous avez déjà un compte ? Log in</Link>
</Box>
</Box>
</Box>
);
}

export default CreateAccountPage;







