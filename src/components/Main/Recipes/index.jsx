import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Recipe from "../Recipe";
import { FETCH_RECIPES } from "../../../store/Recipes/action";
import { FETCH_INGREDIENT_STOCK } from "../../../store/Stock/action";

import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const Recipes = () => {
  const recipes = useSelector((state) => state.reducerRecipes.recipes);
  const proposedIngredients = useSelector(
    (state) => state.reducerSearch.proposedIngredient
  );
  const { difficulty, time, grades } = useSelector(
    (state) => state.reducerFilter
  );

  const userIngredient = useSelector(
    (state) => state.reducerStock.UserIngredient
  );
  const dispatch = useDispatch();

  const [isToggled, setIsToggled] = useState(false);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    dispatch({ type: FETCH_RECIPES });
    setInitialLoad(false);
  }, [dispatch]);

  useEffect(() => {
    dispatch({ type: FETCH_INGREDIENT_STOCK });
  }, []);

  const getCombinedIngredients = useCallback(() => {
    const userIngredientLabels = userIngredient.map(
      (ingredient) => ingredient.label
    );
    return Array.from(
      new Set([...proposedIngredients, ...userIngredientLabels])
    );
  }, [proposedIngredients, userIngredient]);

  //Tri des recettes en fonction du composant Filtre
  const applyFilters = useCallback(
    (recipes, alwaysIncludeAllIngredients = false) => {
      const combinedIngredients = getCombinedIngredients();

      const filteredRecipes = recipes.filter((recipe) => {
        const filterByDifficulty = difficulty
          ? recipe.difficulty === difficulty
          : true;
        const filterByTime = time ? recipe.time <= time : true;
        const filterByGrades = grades ? recipe.rate >= grades : true;
        const filterByIngredients =
          alwaysIncludeAllIngredients || isToggled
            ? recipe.ingredient.every(
                (ingredient) =>
                  combinedIngredients &&
                  combinedIngredients.includes(ingredient.label)
              )
            : recipe.ingredient.some(
                (ingredient) =>
                  combinedIngredients &&
                  combinedIngredients.includes(ingredient.label)
              );
        return (
          filterByDifficulty &&
          filterByTime &&
          filterByGrades &&
          filterByIngredients
        );
      });

      // Trier les recettes par leur note
      const sortedRecipes = filteredRecipes.sort((a, b) => b.grades - a.grades);

      return sortedRecipes;
    },
    [difficulty, time, grades, isToggled, getCombinedIngredients]
  );

  //  tri des recettes en fonction des ingrédients ajoutées dans le panier
  useEffect(() => {
    const combinedIngredients = getCombinedIngredients();
    const newFilteredRecipes = applyFilters(recipes);
    newFilteredRecipes.sort((a, b) =>
      a.ingredient.filter((ingredient) =>
        combinedIngredients.includes(ingredient.label)
      ).length <
      b.ingredient.filter((ingredient) =>
        combinedIngredients.includes(ingredient.label)
      ).length
        ? 1
        : -1
    );
    setFilteredRecipes(newFilteredRecipes);
  }, [
    recipes,
    difficulty,
    time,
    grades,
    isToggled,
    applyFilters,
    getCombinedIngredients,
  ]);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <Container maxWidth="lg">
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={isToggled}
                      onChange={handleToggle}
                      inputProps={{ "aria-label-label": "toggle source" }}
                    />
                  }
                />
              </FormGroup>
            </Grid>
            <Grid item>
              <Typography
                component="div"
                variant="subtitle1"
                textAlign="center"
              >
                {isToggled
                  ? "Vous avez tous les ingrédients !"
                  : "Il vous manque quelques ingrédients ..."}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {initialLoad ? (
            <Paper
              sx={{
                padding: 2,
                textAlign: "center",
              }}
            >
              <Typography variant="h4" mb={2}>
                Bienvenue sur O'Frigo !
              </Typography>
              <Typography variant="body1" textAlign="center" mb={2}>
                Pour commencer, tapez le nom d'un ingrédient dans la barre de
                recherche ci-dessus. Vous pouvez également utiliser les filtres
                pour affiner votre recherche.
              </Typography>
              <Typography variant="body1" textAlign="center">
                Par exemple, essayez de rechercher "tomate" pour découvrir des
                recettes délicieuses à base de tomates.
              </Typography>
            </Paper>
          ) : (
            <Box maxHeight="70vh" overflow="auto">
              <Grid container spacing={2}>
                {filteredRecipes.map((recipe) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={recipe.id}>
                    <Link
                      to={`/recipes/${recipe.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <div>
                        <Recipe recipe={recipe} />
                      </div>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};
export default Recipes;
