import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";
import axios from "axios";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {} from "../../../store/Ingredient/action";

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
  useTheme,
  useMediaQuery,
  Grid,
} from "@mui/material";

import CancelIcon from "@mui/icons-material/Cancel";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  FETCH_CATEGORYS,
  filterIngredient,
  filterIngredientByCategory,
  FETCH_INGREDIENT_STOCK,
  UPDATE_USER_STOCK_INGREDIENT,
} from "../../../store/Stock/action";

import {
  FETCH_INGREDIENT,
  Update_User_Stock_Ingredient,
} from "../../../store/Search/action";

import { Category, Padding } from "@mui/icons-material";

function Stock() {

  const dispatch = useDispatch();

  //Etats locaux
  const [inputValue, setInputValue] = useState("");

  //Récupération des variables des states et mise à jour des composant si changement d'état
  const { ingredientList } = useSelector((state) => state.reducerSearch);
  const { ListFilterStock } = useSelector((state) => state.reducerStock);
  const { UserIngredient } = useSelector((state) => state.reducerStock);
  const { categoryList } = useSelector((state) => state.reducerStock);

  useEffect(() => {
    dispatch({ type: FETCH_CATEGORYS });
  }, []);

  useEffect(() => {
    dispatch({ type: FETCH_INGREDIENT });
  }, []);

  useEffect(() => {
    dispatch({ type: FETCH_INGREDIENT_STOCK });
  }, []);

  //MediaQuery
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const handleOnChange = (event) => {
    const onChangeInput = event.target.value;

    dispatch(filterIngredient(onChangeInput, ingredientList));

    setInputValue(event.target.value);
  };

  function isStored(UserIngredient, ingredient) {
    return UserIngredient.map((ingredient) => ingredient.label).includes(
      ingredient
    );
  }

  const handleSubmit = () => {
    console.info("You clicked the Chip.");
  };

  const handleClickSortIngredient = (event) => {
    const categorySelect = event.target.innerText;
    console.log(event);

    setInputValue('');

    dispatch(filterIngredientByCategory(categorySelect, ingredientList));
  };

  //Etat du switch
  const handleToggle = async (event) => {

    const ingredientSelect = event.target.name;

    setInputValue('');

    console.log("USER INGREDIENT:", UserIngredient);

    if (!isStored(UserIngredient, ingredientSelect)) {
      const jwtToken = localStorage.getItem("token");

      axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;

      const idIngredient = ingredientList.find(
        (ingredient) => ingredient.label == ingredientSelect
      ).id;
      console.log(idIngredient);
      let response;

      response = await axios

        .post("http://kevin-lienard-server.eddi.cloud/me/profile/ingredient", {
          ingredient_id: idIngredient,
        })

        .then((response) => {
          console.log(response.data.ingredient);

          dispatch({
            type: UPDATE_USER_STOCK_INGREDIENT,
            action: response.data.ingredient,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      const jwtToken = localStorage.getItem("token");

      axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
      console.log("déjà en stock");

      const idIngredient = ingredientList.find(
        (ingredient) => ingredient.label == ingredientSelect
      ).id;

      let response = await axios

        .delete(
          `http://kevin-lienard-server.eddi.cloud/me/profile/ingredient/${idIngredient}`
        )

        .then((response) => {
          console.log(response);
          console.log(response.status);

          dispatch({ type: FETCH_INGREDIENT_STOCK });
          dispatch({ type: FETCH_INGREDIENT });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  
  console.log(ListFilterStock);
  return (
    <Grid
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          marginLeft: 40,
        }}
      >
        Dans ma cuisine, il y a ...
      </h2>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          maxWidth: 1200,
          minWidth: 300,
          marginLeft: 5,
        }}
      >
        <IconButton
          type="button"
          sx={{
            p: "10px",
          }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>

        <InputBase
          sx={{
            ml: 1,
            flex: 1,
          }}
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
      <h2
        style={{
          marginLeft: 40,
        }}
      >
        Catégories
      </h2>

      <div
        style={{
          marginLeft: 40,
        }}
      >
        {categoryList &&
          categoryList.map((categorie) => {
            return (
              <Chip
                sx={{
                  m: 0.5,
                  "&:hover, &:focus": {
                    backgroundColor: "blue",
                  },
                }}
                key={categorie.id}
                label={categorie.label}
                onClick={(event) => {
                  handleClickSortIngredient(event);
                }}
              />
            );
          })}
      </div>
      <div
        className="test4"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "30px",
          minWidth: 300,
          maxWidth: 1400,
        }}
      >
        {ListFilterStock &&
          ListFilterStock.map((ingredient) => {
            return (
              <div
                key={ingredient.id}
                style={{
                  margin: 4,
                  display: "flex",
                  minWidth: 300,
                  maxWidth: 300,
                }}
              >
                <Card sx={{ maxWidth: 300, minWidth: 300 }}>
                  <CardActionArea
                    sx={{
                      display: "flex",
                      flexDirection: "rows",
                      justifyContent: "space-between",
                      Padding: 5,
                    }}
                  >
                    <FormControlLabel
                      sx={{
                        display: "flex",
                        flexDirection: "rows",
                        m: 1,
                      }}
                      control={
                        <Switch
                          defaultChecked={isStored(
                            UserIngredient,
                            ingredient.label
                          )}
                          onChange={(event) => {
                            handleToggle(event);
                          }}
                          name={ingredient.label}
                        />
                      }
                      label={ingredient.label}
                    />

                    <CardMedia
                      sx={{
                        borderRadius: 1,
                        gap: 2,
                        boxShadow: 5,
                        minwidth: 100,
                        maxWidth: 100,
                        m: 1,
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
            );
          })}
      </div>
    </Grid>
  );
}

export default Stock;
