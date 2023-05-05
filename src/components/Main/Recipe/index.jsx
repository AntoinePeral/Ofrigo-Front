import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import SoupKitchenRoundedIcon from "@mui/icons-material/SoupKitchenRounded";

const Recipe = ({ recipe }) => {
  return (
    <Card sx={{ minWidth: 275, mb: 2, height: 500 }}>
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
      <CardMedia
        component="img"
        height="150"
        width="150"
        image={`http://antoineperal-server.eddi.cloud${recipe.picture}`}
        alt={recipe.label}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{ height: 30 }}>
          Ingredients:
        </Typography>
        <Grid container sx={{ height: 120 }}>
          {recipe.ingredient.map((ingredient, index) => (
            <Grid item xs={6} key={index}>
              <Typography variant="body2" color="text.secondary">
                • {ingredient.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          alignItems="center"
          spacing={1}
          mt={2}
          justifyContent="space-between"
        >
          <Grid item>
            <AccessTimeIcon />
            <Typography variant="body1">{recipe.time}</Typography>
          </Grid>
          <Grid item>
            <SoupKitchenRoundedIcon />
            <Typography variant="body1">{recipe.difficulty}</Typography>
          </Grid>
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
