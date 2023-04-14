import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Import des composants
import Recipe from "../Recipe";

// Import des actions Redux
import { toggleRecipesSource } from "../../../store/Recipes/action";

// Import des composants MUI
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Container } from "@mui/material";

const Recipes = () => {
  // Récupération des données depuis le store Redux
  const recipes = useSelector((state) => state.reducerRecipes.recipes);
  const currentSource = useSelector((state) => state.reducerRecipes.source);

  // Initialisation du dispatch pour envoyer des actions au store Redux
  const dispatch = useDispatch();

  // Gestion de l'état local pour le switch
  const [isToggled, setIsToggled] = useState(false);

  // Gestionnaire de l'événement de basculement du switch
  const handleToggle = () => {
    // Mise à jour de l'état local pour le switch
    setIsToggled(!isToggled);

    // Détermination de la nouvelle source de recettes
    const newSource =
      currentSource === "testRecipesWithAllIngredients"
        ? "testRecipesWithoutAllIngredients"
        : "testRecipesWithAllIngredients";

    // Envoi de l'action au store Redux pour mettre à jour la source
    dispatch(toggleRecipesSource(newSource));
  };

  return (
    <Container maxWidth="sm">
      {/* Utilisation d'un FormGroup pour organiser le contrôle du switch */}
      <FormGroup>
        {/* Utilisation d'un FormControlLabel pour afficher le label à côté du switch */}
        <FormControlLabel
          control={
            <Switch
              checked={isToggled}
              onChange={handleToggle}
              inputProps={{ "aria-label": "toggle source" }}
            />
          }
          label={isToggled ? "On" : "Off"}
        />
      </FormGroup>
      /* Affichage des recettes */
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </Container>
  );
};

export default Recipes;