//import de react/react-redux
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Import des composants et actions
import Recipe from "../Recipe";
import { FETCH_RECIPES } from "../../../store/Recipes/action";

// Import des composants MUI
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Container, Box } from "@mui/material";

const Recipes = () => {
  //Récupération des données du store Redux :

  const recipes = useSelector((state) => state.reducerRecipes.recipes);

  const proposedIngredients = useSelector(
    (state) => state.reducerSearch.proposedIngredient
  );

  const { difficulty, time, grades } = useSelector(
    (state) => state.reducerFilter
  );
  //Dispatch
  const dispatch = useDispatch();

  //Etats locaux
  const [isToggled, setIsToggled] = useState(false);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  //Etat du switch
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  //Récupération des recettes
  useEffect(() => {
    dispatch({ type: FETCH_RECIPES });
  }, [dispatch]);

  //Filtre et tri des recettes en fonction des ingrédients
  useEffect(() => {
    //Bouton Filtre

    const applyFilters = (recipes) => {
      return recipes.filter((recipe) => {
        const filterByDifficulty = difficulty
          ? recipe.difficulty === difficulty
          : true;
        const filterByTime = time ? recipe.time <= time : true;
        const filterByGrades = grades ? recipe.grades >= grades : true;

        const filterByIngredients = isToggled
          ? recipe.ingredient.every(
              (ingredient) =>
                proposedIngredients &&
                proposedIngredients.includes(ingredient.label)
            )
          : recipe.ingredient.some(
              (ingredient) =>
                proposedIngredients &&
                proposedIngredients.includes(ingredient.label)
            );

        return (
          filterByDifficulty &&
          filterByTime &&
          filterByGrades &&
          filterByIngredients
        );
      });
    };

    // Barre de recherche

    const newFilteredRecipes = applyFilters(recipes);
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
  }, [proposedIngredients, recipes, difficulty, time, grades, isToggled]);

  return (
    <Container maxWidth="sm">
      <Box display="flex" justifyContent="center">
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={isToggled}
                onChange={handleToggle}
                inputProps={{ "aria-label": "toggle source" }}
              />
            }
            label={
              isToggled
                ? "Vous avez tous les ingrédients !"
                : "Il vous manque quelques ingrédients ..."
            }
          />
        </FormGroup>
      </Box>

      <Box maxHeight="60vh" overflow="auto">
        {filteredRecipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </Box>
    </Container>
  );
};

export default Recipes;
