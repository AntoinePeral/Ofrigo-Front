import React, { useEffect } from "react";
import FilterButton from "../components/Main/FilterButton";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes } from "../store/Recipes/action";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Box,
  Container,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";

// Icons MaterialUI
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import SoupKitchenRoundedIcon from "@mui/icons-material/SoupKitchenRounded";

const Recipies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  const { recipes } = useSelector((state) => state.reducerRecipes);
  const { difficulty, time, grades } = useSelector(
    (state) => state.reducerFilter
  );

  const applyFilters = (recipe) => {
    const filterByDifficulty = difficulty
      ? recipe.difficulty === difficulty
      : true;
    const filterByTime = time ? parseInt(recipe.time) <= parseInt(time) : true;
    const filterByRate = grades
      ? parseFloat(recipe.rate) >= parseFloat(grades)
      : true;

    return filterByDifficulty && filterByTime && filterByRate;
  };

  const filteredRecipes = recipes.filter(applyFilters);

  return (
    <Container maxWidth="lg">
      <Paper sx={{ p: 3 }}>
        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontFamily: "Pacifico, cursive",
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "black",
            }}
          >
            Retrouvez ici l'ensemble nos recettes !
          </Typography>
        </Box>

        <FilterButton />

        <Box maxHeight="70vh" overflow="auto">
          <Grid container spacing={2}>
            {filteredRecipes &&
              filteredRecipes.map((recipe) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={recipe.id}>
                  <Link
                    to={`/recipes/${recipe.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Card
                      sx={{ minWidth: 275, mb: 2, height: 500 }}
                      key={recipe.id}
                    >
                      {/* Titre de la carte  */}
                      <CardHeader
                        sx={{ height: 60 }}
                        title={
                          <Typography
                            variant="h6"
                            sx={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              maxWidth: "100%",
                            }}
                          >
                            {recipe.label}
                          </Typography>
                        }
                      />
                      {/* Image de la carte  */}
                      <CardMedia
                        component="img"
                        height="150"
                        width="150"
                        image={`http://antoineperal-server.eddi.cloud${recipe.picture}`}
                        alt={recipe.label}
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ height: 30 }}
                        >
                          {/* Ingredients de la carte */}
                          Ingredients:
                        </Typography>
                        <Grid container sx={{ height: 120 }}>
                          {recipe.ingredient.map((ingredient, index) => (
                            <Grid item xs={6} key={index}>
                              <Typography
                                variant="body3"
                                color="text.secondary"
                              >
                                • {ingredient.label}
                              </Typography>
                            </Grid>
                          ))}
                        </Grid>
                        {/* Icones + Texte corresspondant */}
                        <Grid
                          container
                          alignItems="center"
                          spacing={1}
                          mt={2}
                          justifyContent="space-between"
                        >
                          {/* Temps de préparation */}
                          <Grid item>
                            <AccessTimeIcon />
                            <Typography variant="body1">
                              {recipe.time}
                            </Typography>
                          </Grid>
                          {/* Difficulté de la recette  */}
                          <Grid item>
                            <SoupKitchenRoundedIcon />
                            <Typography variant="body1">
                              {recipe.difficulty}
                            </Typography>
                          </Grid>
                          {/* Note de la recette  */}
                          <Grid item>
                            <StarIcon />
                            <Typography variant="body1">
                              {recipe.rate}
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default Recipies;
