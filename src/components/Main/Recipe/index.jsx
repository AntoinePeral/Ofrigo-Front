import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// Icons MaterialUI
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import SoupKitchenRoundedIcon from "@mui/icons-material/SoupKitchenRounded";

const Recipe = ({ recipe }) => {
  // const getFilenameFromPath = (path) => {
  //   const imagePath = path.split("/").pop().replace(/-/g, " ");
  //   return imagePath;
  // };
  // const imageName = getFilenameFromPath(recipe.picture);
  // const imageSrc = `./app/api/picture/${imageName}`;
  // console.log(`"${recipe.picture}"`);
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      {/* Titre de la carte  */}
      <CardHeader title={recipe.label} />
      {/* Image de la carte  */}
      <CardMedia
        component="img"
        height="150"
        width="150"
        src={`"${recipe.picture}"`}
        alt={recipe.label}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {/* Ingredients de la carte */}
          Ingrédients:
        </Typography>
        <Grid container>
          {recipe.ingredient.map((ingredient, index) => (
            <Grid item xs={6} key={index}>
              <Typography variant="body3" color="text.secondary">
                {ingredient.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
        {/* Icones + Texte correspondant */}
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
  );
};

export default Recipe;
