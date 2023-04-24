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
import { Container } from "@mui/material";

const Recipes = () => {
  //Récupération des données du store Redux :

  const recipes = useSelector((state) => state.reducerRecipes.recipes);

  const proposedIngredients = useSelector(
    (state) => state.reducerSearch.proposedIngredient
  );

  const { difficulty, time, grades } = useSelector(
    (state) => state.reducerFilter
  );
  console.log("test1", { time });
  console.log("test2", { grades });
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
        console.log("recipe.grades:", recipe.grades);
        const filterByGrades = grades ? recipe.grades >= grades : true;

        const filterByIngredients = recipe.ingredient
          ? recipe.ingredient.some(
              (ingredient) =>
                proposedIngredients &&
                proposedIngredients.includes(ingredient.label)
            )
          : false;

        console.log("filterByTime:", filterByTime);
        console.log("filterByGrades:", filterByGrades);
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
  }, [proposedIngredients, recipes, difficulty, time, grades]);

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
