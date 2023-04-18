import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FETCH_RECIPES } from "../../../store/Recipes/action";

// Import des composants
import Recipe from "../Recipe";

// Import des composants MUI
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Container } from "@mui/material";

const Recipes = () => {
  const test = useSelector((state) => state.reducerSearch);
  console.log(test);

  const recipes = useSelector((state) => state.reducerRecipes.recipes);
  console.log(recipes);

  const selectedIngredients = useSelector(
    (state) => state.reducerSearch.listFilter
  );

  const proposedIngredients = useSelector(
    (state) => state.reducerSearch.proposedIngredient
  );

  const dispatch = useDispatch();

  const [isToggled, setIsToggled] = useState(false);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    dispatch({ type: FETCH_RECIPES });
  }, [dispatch]);

  useEffect(() => {
    const newFilteredRecipes = recipes.filter((recipe) =>
      recipe.ingredient
        ? recipe.ingredient.some(
            (ingredient) =>
              proposedIngredients &&
              proposedIngredients.includes(ingredient.label)
          )
        : false
    );
    newFilteredRecipes.sort((a, b) =>
      a.ingredient.filter((ingredient) =>
        proposedIngredients.includes(ingredient.label)
      ).length <
      b.ingredient.filter((ingredient) =>
        proposedIngredients.includes(ingredient.label)
      ).length
        ? 1
        : -1
    );
    setFilteredRecipes(newFilteredRecipes);
  }, [proposedIngredients, recipes]);

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
      {filteredRecipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </Container>
  );
};

export default Recipes;
