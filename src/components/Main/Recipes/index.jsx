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
  const recipes = useSelector((state) => state.reducerRecipes.recipes);
  const currentSource = useSelector((state) => state.reducerRecipes.source);

  const dispatch = useDispatch();

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);

    // Détermination de la nouvelle source de recettes
    const newSource =
      currentSource === "testRecipesWithoutAllIngredients"
        ? "testRecipesWithAllIngredients"
        : "testRecipesWithoutAllIngredients";

    // Envoi de l'action au store Redux pour mettre à jour la source
    dispatch(toggleRecipesSource(newSource));
  };

  return (
    <Container maxWidth="sm">
      <FormGroup>
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
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </Container>
  );
};

export default Recipes;
