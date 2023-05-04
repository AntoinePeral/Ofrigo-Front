import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { AlignHorizontalCenter } from "@mui/icons-material";

const Copyright = () => {

    return (
        <Box sx={{ position: "fixed", spacing: 1, flexGrow: 1, top:"100px", overflow:"scroll", marginBottom:"10", height: "80vh" }} >
        <Grid
          container
          maxWidth="lg"
          spacing={2}
          justifyContent="center"
          mb={12}
          maxHeight="90vh"
          
          
        >
        
        <Card sx={{ maxWidth: 345, minWidth: 345, marginBottom:10 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="Antoine PERAL"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Antoine PERAL
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Developpeur Back
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Scrum Master
                </Typography>
                <Typography variant="body2" color="text.secondary">
                
                Lead Dev Back
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>

        <Card sx={{ maxWidth: 345, minWidth: 345, marginBottom:10 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="Aymeric AGU"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Aymeric AGU
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Developpeur Front
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Product Owner
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Référent technique Techno
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
        <Card sx={{ maxWidth: 345, minWidth: 345, marginBottom:10 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="Freddy GAUDRE"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Freddy GAUDRE
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Developpeur Front
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Référent technique git
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
        <Card sx={{ maxWidth: 345, minWidth: 345, marginBottom:10}}>
          <CardActionArea
          >
            <CardMedia
              component="img"
              height="140"
              image={`../../Pictures/equipe/Jean-Marc.png`}
              alt="Jean-Marc NAGAU"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Jean-Marc NAGAU
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Developpeur Front
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lead Dev Front
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
        <Card sx={{ maxWidth: 345, minWidth: 345, marginBottom:10}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="Kevin LIENARD"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Kevin LIENARD
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Developpeur Back
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lead dev Back
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
        <div>
        <p>2023 - Mon Entreprise. Tous droits réservés.</p>
        </div>
        </Grid>

        </Box>
      );

};

export default Copyright;