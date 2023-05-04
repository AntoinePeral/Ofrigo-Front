import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";
import api from "../../../api";
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
  Container,
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

import { Category, GpsFixed, Padding } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";
import blue from "@mui/material/colors/blue";
import { pink } from "@mui/material/colors";
import { isDisabled } from "@testing-library/user-event/dist/utils";

function Stock() {
  /**
   * Sur cette page on a besoin de:
   * - récupérer tous les ingrédients
   * - pouvoir filtrer par ingrédient. C'est donc simplement un filter qui est fait sur la liste des ingrédients stockée en front.
   * - récupérer toutes les catégories
   * - pouvoir filtrer par catégorie, pareil pas d'appels API, mais un filtre en local.
   * - Pouvoir cocher un ingrédient pour le mettre dans son stock
   * MVP de cette page :
   * - récupérer tous les ingrédients
   * - pouvoir cocher un ingrédient pour le mettre dans son stock
   */

  // Variables d'état utiles pour les ingrédients et userIngredients
  const [ingredients, setIngredients] = useState([]);
  const [initialIngredients, setInitialIngredients] = useState([]);
  const [userIngredients, setUserIngredients] = useState([]);
  const [refreshUserIngredients, setRefreshUserIngredients] = useState(true);
  const [categories, setCategories] = useState([]);
  const [categorySelected, setCategorySelected] = useState(null);
  const dispatch = useDispatch();

  // On récupère les ingrédients seulement au chargement de la page
  useEffect(() => {
    api
      .get("/ingredient")
      .then((response) => {
        console.log(response.data);
        setInitialIngredients(response.data);
        setIngredients(response.data);
      })
      .catch((err) => console.log(err));

    api
      .get("/category")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // On récupère le stock de l'utilisateur seulement au chargement de la page
  useEffect(() => {
    if (refreshUserIngredients) {
      api
        .get("/me/profile/ingredient")
        .then((response) => {
          setUserIngredients(response.data);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setRefreshUserIngredients(false);
        });
    }
  }, [refreshUserIngredients]);

  useEffect(() => {
    dispatch({ type: FETCH_INGREDIENT_STOCK });
  }, []);

  const isIngredientInUserStock = (ingredientId) => {
    const inUserStock = userIngredients.find(
      (userIngredient) => userIngredient.id === ingredientId
    )
      ? true
      : false;

    return inUserStock;
  };

  const handleToggleOnIngredient = (event) => {
    const ingredientId = Number(event.target.value);

    if (!isIngredientInUserStock(ingredientId)) {
      api
        .post("/me/profile/ingredient", {
          ingredient_id: ingredientId,
        })
        .then((response) => {
          setRefreshUserIngredients(true);
        })
        .catch((error) => {
          // Si la requête s'est mal passée, on décoche l'ingrédient qu'on avait coché temporairement, le temps que la requête se fasse
          console.log(error);
        })
        .finally(() => {});
    } else {
      api
        .delete(`/me/profile/ingredient/${ingredientId}`)
        .then((response) => {
          console.log(response);
          setRefreshUserIngredients(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;

    if (value) {
      const ingredientsFiltered = initialIngredients.filter((ingredient) =>
        ingredient.label.toLowerCase().includes(value.toLowerCase())
      );

      setIngredients(ingredientsFiltered);
    } else {
      setIngredients(initialIngredients);
    }
  };

  const handleClickOnCategory = (catId) => {
    const categoryId = Number(catId);

    if (categorySelected === categoryId) {
      setCategorySelected(null);
      setIngredients(initialIngredients);
    } else {
      setCategorySelected(catId);
      const ingredientsFiltered = initialIngredients.filter(
        (ingredient) => ingredient.category_id === categoryId
      );
      setIngredients(ingredientsFiltered);
    }
  };

  return (
    <>
      <box
        sx={{
          position: "fixed",
        }}
      >
        <h2 style={{}}>Dans ma cuisine, il y a ...</h2>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            maxWidth: 1200,
            minWidth: 300,
            justifyContent: "center",
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
            inputProps={{ "aria-label": "Ingredient" }}
            onChange={(event) => {
              handleSearchChange(event);
            }}
          />
        </Paper>
        <h2 style={{}}>Catégories</h2>
        <box sx={{}}>
          <Stack
            direction="row"
            spacing={1}
            overflow="scroll"
            minWidth={300}
            maxWidth={800}
            sx={{
              "@media (max-width: 600px)": {
                maxWidth: "300px",
              },
              marginBottom: 2,
            }}
          >
            {categories &&
              categories.map((category) => {
                return (
                  <Chip
                    variant={
                      categorySelected === category.id ? "filled" : "outlined"
                    }
                    color={
                      categorySelected === category.id ? "primary" : "primary"
                    }
                    key={category.id}
                    label={category.label}
                    onClick={(event) => {
                      handleClickOnCategory(category.id);
                    }}
                  />
                );
              })}
          </Stack>
        </box>
      </box>
      <Box
        sx={{
          flexGrow: 1,
          position: "fixed",
          top: "320px",
          overflow: "scroll",
          marginBottom: "10",
        }}
      >
        <Grid
          container
          maxWidth="lg"
          spacing={2}
          justifyContent="center"
          mb={12}
          maxHeight="50vh"
        >
          {ingredients &&
            ingredients.map((ingredient) => {
              return (
                <Grid item alignItems="center" key={ingredient.id}>
                  <Card
                    sx={{
                      minWidth: "300px",
                      maxWidth: "300px",
                    }}
                  >
                    <CardActionArea
                      sx={{
                        display: "flex",
                        flexDirection: "rows",
                        justifyContent: "space-between",
                        Padding: 5,
                        minHeight: "100px",
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
                            checked={isIngredientInUserStock(ingredient.id)}
                            onChange={handleToggleOnIngredient}
                            name={ingredient.label}
                            value={ingredient.id}
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
                        image={`http://antoineperal-server.eddi.cloud${ingredient.picture}`}
                        /*image={`../../../../Pictures/Ingredients/${ingredient.label}.jpg`}*/
                        alt={`${ingredient.label}`}
                      />
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </>
  );

  // //Etats locaux
  // const [inputValue, setInputValue] = useState("");

  // //Récupération des variables des states et mise à jour des composant si changement d'état
  // const { ingredientList } = useSelector((state) => state.reducerSearch);
  // const { ListFilterStock } = useSelector((state) => state.reducerStock);
  // const { UserIngredient } = useSelector((state) => state.reducerStock);
  // const { categoryList } = useSelector((state) => state.reducerStock);

  // useEffect(() => {
  //   dispatch({ type: FETCH_CATEGORYS });
  // }, []);

  // useEffect(() => {
  //   dispatch({ type: FETCH_INGREDIENT });
  // }, []);

  // useEffect(() => {
  //   dispatch({ type: FETCH_INGREDIENT_STOCK });
  // }, []);

  // //MediaQuery
  // const theme = useTheme();
  // const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // const handleOnChange = (event) => {
  //   const onChangeInput = event.target.value;

  //   dispatch(filterIngredient(onChangeInput, ingredientList));

  //   setInputValue(event.target.value);
  // };

  // /**
  //  *
  //  * @param {Array} UserIngredient - Liste of user ingredient in the state stock
  //  * @param {string} ingredient - Ingredient choose by the user
  //  * @returns
  //  */
  // function isStored(UserIngredient, ingredient) {
  //   return UserIngredient.map((ingredient) => ingredient.label).includes(
  //     ingredient
  //   );
  // }

  // const handleSubmit = () => {
  //   console.info("You clicked the Chip.");
  // };

  // const handleClickSortIngredient = (event) => {
  //   const categorySelect = event.target.innerText;
  //   console.log(event);

  //   setInputValue('');

  //   dispatch(filterIngredientByCategory(categorySelect, ingredientList));
  // };

  // //Etat du switch
  // const handleToggle = async (event) => {

  //   const ingredientSelect = event.target.name;

  //   setInputValue('');

  //   console.log("USER INGREDIENT:", UserIngredient);

  //   if (!isStored(UserIngredient, ingredientSelect)) {
  //     const jwtToken = localStorage.getItem("token");

  //     axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;

  //     const idIngredient = ingredientList.find(
  //       (ingredient) => ingredient.label == ingredientSelect
  //     ).id;
  //     console.log(idIngredient);
  //     let response;

  //     response = await axios

  //       .post("http://antoineperal-server.eddi.cloud/me/profile/ingredient", {
  //         ingredient_id: idIngredient,
  //       })

  //       .then((response) => {
  //         console.log(response.data.ingredient);

  //         dispatch({
  //           type: UPDATE_USER_STOCK_INGREDIENT,
  //           action: response.data.ingredient,
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } else {
  //     const jwtToken = localStorage.getItem("token");

  //     axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
  //     console.log("déjà en stock");

  //     const idIngredient = ingredientList.find(
  //       (ingredient) => ingredient.label == ingredientSelect
  //     ).id;

  //     let response = await axios

  //       .delete(
  //         `http://antoineperal-server.eddi.cloud/me/profile/ingredient/${idIngredient}`
  //       )

  //       .then((response) => {
  //         console.log(response);
  //         console.log(response.status);

  //         dispatch({ type: FETCH_INGREDIENT_STOCK });
  //         dispatch({ type: FETCH_INGREDIENT });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // };

  // console.log(ListFilterStock);
  // return (
  //   <Grid
  //     style={{
  //       display: "flex",
  //       flexDirection: "column",
  //       alignItems: "center",
  //     }}
  //   >
  //     <h2
  //       style={{
  //         marginLeft: 40,
  //       }}
  //     >
  //       Dans ma cuisine, il y a ...
  //     </h2>
  //     <Paper
  //       component="form"
  //       sx={{
  //         p: "2px 4px",
  //         display: "flex",
  //         alignItems: "center",
  //         maxWidth: 1200,
  //         minWidth: 300,
  //         marginLeft: 5,
  //       }}
  //     >
  //       <IconButton
  //         type="button"
  //         sx={{
  //           p: "10px",
  //         }}
  //         aria-label="search"
  //       >
  //         <SearchIcon />
  //       </IconButton>

  //       <InputBase
  //         sx={{
  //           ml: 1,
  //           flex: 1,
  //         }}
  //         placeholder="Ingredient"
  //         autoFocus="true"
  //         value={inputValue}
  //         inputProps={{ "aria-label": "Ingredient" }}
  //         onChange={(event) => {
  //           handleOnChange(event);
  //         }}
  //         onSubmit={(event) => {
  //           handleSubmit(event);
  //         }}

  //       />
  //     </Paper>
  //     <h2
  //       style={{
  //         marginLeft: 40,
  //       }}
  //     >
  //       Catégories
  //     </h2>

  //     <div
  //       style={{
  //         marginLeft: 40,
  //       }}
  //     >
  //       {categoryList &&
  //         categoryList.map((categorie) => {
  //           return (
  //             <Chip
  //               sx={{
  //                 m: 0.5,
  //                 "&:hover, &:focus": {
  //                   backgroundColor: "blue",
  //                 },
  //               }}
  //               key={categorie.id}
  //               label={categorie.label}
  //               onClick={(event) => {
  //                 handleClickSortIngredient(event);
  //               }}
  //             />
  //           );
  //         })}
  //     </div>
  //     <div
  //       className="test4"
  //       style={{
  //         display: "flex",
  //         flexDirection: "row",
  //         flexWrap: "wrap",
  //         margin: "30px",
  //         minWidth: 300,
  //         maxWidth: 1400,
  //       }}
  //     >
  //       {ListFilterStock &&
  //         ListFilterStock.map((ingredient) => {
  //           return (
  //             <div
  //               key={ingredient.id}
  //               style={{
  //                 margin: 4,
  //                 display: "flex",
  //                 minWidth: 300,
  //                 maxWidth: 300,
  //               }}
  //             >
  //               <Card sx={{ maxWidth: 300, minWidth: 300 }}>
  //                 <CardActionArea
  //                   sx={{
  //                     display: "flex",
  //                     flexDirection: "rows",
  //                     justifyContent: "space-between",
  //                     Padding: 5,
  //                   }}
  //                 >
  //                   <FormControlLabel
  //                     sx={{
  //                       display: "flex",
  //                       flexDirection: "rows",
  //                       m: 1,
  //                     }}
  //                     control={
  //                       <Switch
  //                         defaultChecked={isStored(
  //                           UserIngredient,
  //                           ingredient.label
  //                         )}
  //                         onChange={(event) => {
  //                           handleToggle(event);
  //                         }}
  //                         name={ingredient.label}
  //                       />
  //                     }
  //                     label={ingredient.label}
  //                   />

  //                   <CardMedia
  //                     sx={{
  //                       borderRadius: 1,
  //                       gap: 2,
  //                       boxShadow: 5,
  //                       minwidth: 100,
  //                       maxWidth: 100,
  //                       m: 1,
  //                     }}
  //                     component="img"
  //                     height="30"
  //                     width={10}
  //                     image={`../../../../Pictures/Ingredients/${ingredient.label}.jpg`}
  //                     alt={`${ingredient.label}`}
  //                   />
  //                 </CardActionArea>
  //               </Card>
  //             </div>
  //           );
  //         })}
  //     </div>
  //   </Grid>
  // );
}

export default Stock;
