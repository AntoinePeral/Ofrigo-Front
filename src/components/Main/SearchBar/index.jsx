import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";

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
  Grid,
} from "@mui/material";

import {
  filterIngredient,
  UpdateFilterList,
  RemoveAnIngredientFromList,
  FETCH_INGREDIENT,
  ClearListIngredient,
} from "../../../store/Search/action";

function SearchBar() {
  const dispatch = useDispatch();

  const [reducerSearch] = useState(null);

  const [inputValue, setInputValue] = useState("");

  const { proposedIngredient, listFilter, ingredientList, listtest } =
    useSelector((state) => state.reducerSearch);

  const handleClickRemoveIngredient = (event) => {
    const ingredient =
      event.target.parentElement.parentElement.firstChild.innerText;

    dispatch(RemoveAnIngredientFromList(ingredient, proposedIngredient));
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleClickIngredient = (event) => {
    const ingredient = event.target.innerText;
    setInputValue("");
    dispatch(UpdateFilterList(ingredient, proposedIngredient));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("ok");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleChange = (event) => {
    const { value: inputValue, name } = event.target;

    //changeField(inputValue, name);
  };

  const handleOnChange = (event) => {
    const onChangeInput = event.target.value;

    setInputValue(event.target.value);

    dispatch(filterIngredient(onChangeInput, ingredientList));

    if (onChangeInput == "") {
      dispatch(ClearListIngredient());
    }
  };

  useEffect(() => {
    dispatch({ type: FETCH_INGREDIENT });
  }, []);

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Grid container justifyContent="center">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              maxWidth: 2000,
              marginBottom: 5,
            }}
          >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>

            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                minWidth: 300,
                maxWidth: 600,
              }}
              placeholder="Ingredient"
              autoFocus={true}
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
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justifyContent="center" minWidth={275} flexWrap="wrap">
          {proposedIngredient &&
            proposedIngredient.map((ingredient, id) => {
              return (
                <Chip
                  key={ingredient.id}
                  label={ingredient}
                  onDelete={(event) => {
                    handleClickRemoveIngredient(event);
                  }}
                />
              );
            })}
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justifyContent="center" minWidth={275} flexWrap="wrap">
          {listFilter &&
            listFilter.map((ingredient, id) => {
              return (
                <Grid item>
                  <Card
                    sx={{ minWidth: 135, maxWidth: 135, mb: 2 }}
                    onClick={(event) => {
                      handleClickIngredient(event);
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="50"
                      width="50"
                      image={`../../../../Pictures/Ingredients/${ingredient.label}.jpg`}
                      alt={ingredient.label}
                    />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent
                        sx={{
                          flex: "1 0 auto",
                        }}
                      >
                        <Typography component="div" variant="h7" align="left">
                          {ingredient.label}
                        </Typography>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SearchBar;
