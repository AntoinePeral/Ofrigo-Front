import React, { useEffect } from "react";
import FilterButton from "../components/Main/FilterButton";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes } from "../store/Recipes/action"
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Typography,
    Grid,
  } from "@mui/material";
  
// Icons MaterialUI
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import SoupKitchenRoundedIcon from "@mui/icons-material/SoupKitchenRounded";

const Recipies = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchRecipes());
    },[]);
    
    const { recipes } = useSelector((state) => state.reducerRecipes);
   
    
    return (
        <div>
            <h2>Vous pouvez trouver toutes nos recettes</h2>

            <FilterButton />


            {recipes && recipes.map((recipe) => (
                
                <Card sx={{ minWidth: 275, mb: 2 }} key={recipe.id}>
                    {/* Titre de la carte  */}
                    <CardHeader title={recipe.label} />
                          {/* Image de la carte  */}
                        <CardMedia
                            component="img"
                            height="150"
                            width="150"
                            image={recipe.picture}
                            alt={recipe.label}
                        />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        {/* Ingredients de la carte */}
                        Ingredients:
                        </Typography>
                        <Grid container>
                        {recipe.ingredient.map((ingredient, index) => (
                            <Grid item xs={6} key={index}>
                            <Typography variant=""body3 color="text.secondary">
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
                            <Typography variant="body1">{recipe.time}</Typography>
                        </Grid>
                        {/* Difficulté de la recette  */}
                        <Grid item>
                            <SoupKitchenRoundedIcon />
                            <Typography variant="body1">{recipe.difficulty}</Typography>
                        </Grid>
                        {/* Note de la recette  */}
                        <Grid item>
                            <StarIcon />
                            <Typography variant="body1">{recipe.rate}</Typography>
                        </Grid>
                        </Grid>
                    </CardContent>

                </Card>
            )
            )}

        </div>
  );

};

export default Recipies;