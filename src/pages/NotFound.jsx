import React from "react";
import cryingCowboyEmoji from "../components/pictures/crying-cowboy-emoji.jpg";

function NotFound() {
return (
<div className="not-found"
style={{
display: "flex",
flexDirection: "column",
justifyContent: "center",
alignItems: "center",
textAlign: "center",
padding: "2rem",
boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
borderRadius: "5px",
overflow: "auto",
//height: "calc(100vh - (60px + 2rem))", /* 60px pour la hauteur du footer, 2rem pour l'espace de remplissage */
}}
>
<h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>404 Not Found</h1>
<p style={{ marginBottom: "1rem" }}>
Désolé, la page que vous recherchez est introuvable. <br />
Peut-être que vous avez suivi un lien incorrect ou que vous avez tapé une URL incorrecte.
</p>
<img
src={cryingCowboyEmoji}
alt="Page introuvable"
style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", borderRadius: "5px", width: "100%", maxWidth: "500px" }}
/>
<div style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}>
<button
onClick={() => (window.location.href = "/accueil")}
style={{
backgroundColor: "white",
color: "black",
border: "1px solid black",
borderRadius: "5px",
padding: "0.5rem 1rem",
cursor: "pointer",
transition: "transform 0.2s ease-in-out"
}}
onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
onMouseOut={(e) => e.target.style.transform = "scale(1)"}
>
Retour
</button>
</div>
</div>
);
}

export default NotFound;