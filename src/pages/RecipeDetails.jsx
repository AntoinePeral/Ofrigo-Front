import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Card from "@mui/material/Card";
import { ListItemButton, ListItemText, Checkbox } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Container from "@mui/material/Container";
import { fetchRecipes } from "../store/Recipes/action"

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import SoupKitchenRoundedIcon from "@mui/icons-material/SoupKitchenRounded";

const RecipeDetails = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const dispatch = useDispatch();
  

  

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    console.log(selectedIndex)
  };

  const { recipeId } = useParams();

  const recipes = useSelector((state) => state.reducerRecipes.recipes);
  const [recipe, setRecipe] = useState(null);

  console.log(recipe)

  useEffect(() => {
    const foundRecipe = recipes.find((r) => r.id === parseInt(recipeId, 10));
    if (foundRecipe) {
      setRecipe(foundRecipe);
    }
  }, [recipes, recipeId]);

  useEffect(() => {
    dispatch(fetchRecipes());
},[]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (

    <Container
      maxWidth="md"
      sx={{
        maxHeight: "90vh",
        overflow: "auto",
        marginTop: "1rem",
      }}
    >
      <Card>
        <CardHeader title={recipe.label} />
        <CardMedia
          component="img"
          height="200"
          width="200"
          image={`http://kevin-lienard-server.eddi.cloud${recipe.picture}`}
          alt={recipe.label}
        />
        <CardContent>
          <Grid
            container
            alignItems="center"
            spacing={2}
            mt={2}
            justifyContent="space-between"
          >
            {/* Temps de préparation */}
            <Grid item display="flex" alignItems="center">
              <AccessTimeIcon />
              <Typography variant="body1">{recipe.time}</Typography>
            </Grid>
            {/* Difficulté de la recette  */}
            <Grid item display="flex" alignItems="center">
              <SoupKitchenRoundedIcon />
              <Typography variant="body1">{recipe.difficulty}</Typography>
            </Grid>
            {/* Note de la recette  */}
            <Grid item display="flex" alignItems="center">
              <StarIcon />
              <Typography variant="body1">{recipe.rate}</Typography>
            </Grid>
          </Grid>
          <Typography variant="h5" mt={2} marginBottom="1rem">
            Ingredients:
          </Typography>

          <Grid container spacing={1}>
            {recipe.ingredient &&
              recipe.ingredient.map((ingredient, index) => (
                <Grid item xs={4} key={index} display="flex">
                  <Checkbox />
                  <ListItemText
                    primary={`${ingredient.label}`}
                    secondary={ingredient.quantity}
                  />
                </Grid>
              ))}
          </Grid>
          <Typography variant="h5" mt={2}>
            Instructions:
          </Typography>

          <List>
            {recipe.step &&
              recipe.step.map((step, index) => (
                <ListItemButton
                  key={index}
                  selected={selectedIndex === index}
                  onClick={(event) => handleListItemClick(event, index)}
                >
                  <ListItemText
                    primary={`${index + 1}. ${step.content
                      .replace(/^\d+\./, "")
                      .trim()}`}
                  />
                </ListItemButton>
              ))}
          </List>
        </CardContent>
      </Card>
    </Container>
                    /*}*/);
};

export default RecipeDetails;
