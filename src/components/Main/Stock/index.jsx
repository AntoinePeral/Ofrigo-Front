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
    Button,
    ButtonGroup,
  } from "@mui/material";

import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import {
    FETCH_CATEGORYS,
  } from "../../../store/Stock/action";

  import {
    FETCH_INGREDIENT,
  } from "../../../store/Search/action";

import { Category, Padding } from "@mui/icons-material";

function isStored (userIngredient, ingredient) {

    return (userIngredient[0].ingredient.map(ingredient => ingredient.label).includes(ingredient));
    
};

function Stock () {

    const dispatch = useDispatch();

    const handleOnChange = (event) => {
        const onChangeInput = event.target.value;

        setInputValue(event.target.value);
        
    };

    const { ingredientList } =
    useSelector((state) => state.reducerSearch);
    
    const handleSubmit = () => {
        console.info("You clicked the Chip.");
    };

    const handleClickSortIngredient = (event) =>{
        const categorySelect = event.target.innerText
        
    }

      //Etat du switch
  const handleToggle = (event) => {
    console.log(event)
    setIsToggled(!isToggled);
  };

    //Etats locaux
    const [inputValue, setInputValue] = useState('');
    const [isToggled, setIsToggled] = useState(false);
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    useEffect(() => {
        dispatch({ type:FETCH_INGREDIENT });
      }, [dispatch]);


    useEffect(() => {
        dispatch({ type:FETCH_CATEGORYS });
      }, [dispatch]);
    
      const { categoryList, UserProfil } =
      useSelector((state) => state.reducerStock);

      console.log(UserProfil)
      

    return(
        <div>
            <h2>Dans ma cuisine, il y a ...</h2>
            <Paper
            component="form"
            sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                maxWidth: 1200,
                minWidth: 300,

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
                <div
                className="test2">

                    {categoryList && categoryList.map((categorie) =>{
                        return(

                                <Chip
                                    sx={{
                                        m:0.5
                                    }}
                                    key={categorie.id}
                                    label={categorie.label}
                                    onClick={(event) => {
                                        handleClickSortIngredient(event);
                                    }}
                                />
 
                            
                        )
                    }
                    )}

                </div>
            
            <div
            className="test4">
                
                {ingredientList && ingredientList.map((ingredient) =>{
                        
                    return(
    
                        <div
                        className="test5">

                            <Card sx={{ maxWidth: 300,
                                        minWidth:200 }}
                                        key={ingredient.id}
                            >

                                <CardActionArea
                                    sx={{ 
                                        display: "flex",
                                        flexDirection: "rows",
                                        justifyContent: "space-between",
                                        Padding:5,
                                        }}
                                    
                                    
                                >

                                    <FormControlLabel
                                        sx={{ 
                                            display: "flex",
                                            flexDirection: "rows",
                                            m:1,
                                            
                                            }}

                                        control={
                                            <Switch checked={isStored(UserProfil,ingredient.label)} onChange={(event) => {handleToggle(event)}} name={ingredient.label} />
                                        }
                                        label={ingredient.label}
                                    />

                                    <CardMedia
                                        sx={{
                                            borderRadius: 1,
                                            gap: 2,
                                            boxShadow: 5,
                                            width: 100,
                                            m:1,
                                        }}
                                        component="img"
                                        height="30"
                                        width={10}
                                        image={`../../../../Pictures/Ingredients/${ingredient.label}.jpg`}
                                        alt={`${ingredient.label}`}
                                    />

                                </CardActionArea>

                            </Card>

                        </div>
                            
                    )
                })}
            </div>
        </div>
    )
}

export default Stock;