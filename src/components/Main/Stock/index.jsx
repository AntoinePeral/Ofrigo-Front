import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";
import axios from "axios";
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
} from "@mui/material";

import CancelIcon from "@mui/icons-material/Cancel";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  FETCH_CATEGORYS,
  filterIngredient,
  filterCategory,
  FETCH_INGREDIENT_STOCK,
} from "../../../store/Stock/action";

import { FETCH_INGREDIENT } from "../../../store/Search/action";

import { Category, Padding } from "@mui/icons-material";

function Stock() {
  const dispatch = useDispatch();

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

  const { ingredientList } = useSelector((state) => state.reducerSearch);

  const { ListFilterStock, UserIngredient } = useSelector(
    (state) => state.reducerStock
  );

  const handleSubmit = () => {
    console.info("You clicked the Chip.");
  };

  const handleClickSortIngredient = (event) => {
    const categorySelect = event.target.innerText;

    dispatch(filterCategory(categorySelect, ingredientList));
  };

  //Etat du switch
  const handleToggle = async (event) => {
    const ingredientSelect = event.target.name;

    if (!isStored(UserIngredient, ingredientSelect)) {
      const jwtToken = localStorage.getItem("token");

      axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;

      const idIngredient = ingredientList.find(
        (ingredient) => ingredient.label == ingredientSelect
      ).id;
      console.log(idIngredient);
      let response;

      response = await axios

        .post("http://antoineperal-server.eddi.cloud/me/profile/ingredient", {
          ingredient_id: idIngredient,
        })

        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      dispatch({ type: FETCH_INGREDIENT_STOCK });
      dispatch({ type: FETCH_INGREDIENT });
    } else {
      const jwtToken = localStorage.getItem("token");

      axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
      console.log("déjà en stock");

      const idIngredient = ingredientList.find(
        (ingredient) => ingredient.label == ingredientSelect
      ).id;

      let response = await axios

        .delete(
          `http://antoineperal-server.eddi.cloud/me/profile/ingredient/${idIngredient}`
        )

        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      dispatch({ type: FETCH_INGREDIENT_STOCK });
      dispatch({ type: FETCH_INGREDIENT });
    }
  };

  //Etats locaux
  const [inputValue, setInputValue] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const { categoryList, UserProfil } = useSelector(
    (state) => state.reducerStock
  );

  useEffect(() => {
    dispatch({ type: FETCH_CATEGORYS });
  }, []);

  useEffect(() => {
    dispatch({ type: FETCH_INGREDIENT });
  }, []);

  useEffect(() => {
    dispatch({ type: FETCH_INGREDIENT_STOCK });
  }, []);

  return (
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
      <div className="test2">
        {categoryList &&
          categoryList.map((categorie) => {
            return (
              <Chip
                sx={{
                  m: 0.5,
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

      <div className="test4">
        {ListFilterStock &&
          ListFilterStock.map((ingredient) => {
            return (
              <div className="test5">
                <Card sx={{ maxWidth: 300, minWidth: 200 }} key={ingredient.id}>
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
                          checked={isStored(UserIngredient, ingredient.label)}
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
                        width: 100,
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
    </div>
  );
}

export default Stock;
