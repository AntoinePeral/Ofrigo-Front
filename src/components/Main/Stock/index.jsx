import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";
import {

  } from "../../../store/Ingredient/action";

import {
    IconButton,
    InputBase,
    Paper,
    Chip,
    Stack,
    CardMedia,
    CardContent,
    CardActionArea,
    Typography,
    Card,
    Box,
    FormControlLabel,
    Switch,
  } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import {
    FETCH_CATEGORYS,
  } from "../../../store/Stock/action";
import { Category } from "@mui/icons-material";

function Stock () {

    const dispatch = useDispatch();

    const handleOnChange = (event) => {
        const onChangeInput = event.target.value;

        setInputValue(event.target.value);
        console.log(event.target.value)
    };

    const handleSubmit = () => {
        console.info("You clicked the Chip.");
    };

    const handleClickSortIngredient = (event) =>{
        const categorySelect = event.target.innerText
        console.log(categorySelect)
    }

    //Etats locaux
    const [inputValue, setInputValue] = useState('');
    const [isToggled, setIsToggled] = useState(false);
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    //Etat du switch
    const handleToggle = (event) => {
        setIsToggled(!isToggled);
        console.log(event)
    };

    useEffect(() => {
        dispatch({ type: FETCH_CATEGORYS });
      }, [dispatch]);
    
      const { categoryList } =
      useSelector((state) => state.reducerStock);
      console.log(categoryList)

    return(
        <div>
            <h2>Dans ma cuisine, il y a ...</h2>
            <Paper
            component="form"
            sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                maxWidth: 500,
            }}
            >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
            </IconButton>

            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Ingredient"
                autoFocus="true"
                value={inputValue}
                inputProps={{ "aria-label": "Ingredient" }}
                onChange={(event) => {
                handleOnChange(event);
                }}
                onSubmit={(event) => {
                handleSubmit(event);
                }}
            />
            </Paper>
                <h2>Catégories</h2>
                <Stack
                
                spacing={1}
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                variant={"outlined"}
                color={"success"}>

                    {categoryList && categoryList.map((categorie) =>{
                        return(
    
                            <Chip
                                key={categorie.id}
                                label={categorie.label}
                                onClick={(event) => {
                                    handleClickSortIngredient(event);
                                }}
                            />
                            
                        )
                    }
                    )}

                </Stack>

                <div>

                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea
                        sx={{ 
                            display: "flex",
                            flexDirection: "rows"
                            }}>
                        <CardMedia
                            component="img"
                            height="30"
                            width="10"
                            image={`../../../../Pictures/Ingredients/Farine.jpg`}
                            alt="aubergine"
                        />
                        <CardContent>

                            <Typography gutterBottom variant="h5" component="div">
                                aymeric
                            </Typography>
          
                        </CardContent>

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
                    </CardActionArea>
                </Card>
            </div>
        </div>

    )
}

export default Stock;