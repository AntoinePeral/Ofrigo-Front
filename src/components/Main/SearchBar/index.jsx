

import { React, useEffect, useState } from "react";
import { useSelector, 
         useDispatch, 
   } from "react-redux";
import SearchIcon from '@mui/icons-material/Search';



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
    
} from '@mui/material';

import {filterIngredient,
        UpdateFilterList,
        ResetFilterList,
        RemoveAnIngredientFromList,
        FETCH_INGREDIENT,
    } from "../../../store/Search/action";





function SearchBar () {

    const dispatch = useDispatch();

    const [ reducerSearch ] = useState(null);

    const { proposedIngredient,
            listFilter,
            ingredientList,
            listtest,} = useSelector((state => state.reducerSearch));

            
    const handleClickResetFilter = (event) => {
        dispatch(ResetFilterList())
    }

    const handleClickRemoveIngredient = (event) => {
        
        const ingredient = event.target.parentElement.parentElement.firstChild.innerText;
        console.log(ingredient)
        dispatch(RemoveAnIngredientFromList(ingredient,proposedIngredient))
    }


    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleClickIngredient = (event) => {

        const ingredient = event.target.innerText;
        dispatch(UpdateFilterList(ingredient,proposedIngredient))

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("ok")
        
    };
    
    const handleDelete = () => {

        console.info('You clicked the delete icon.');
    };

    const handleChange = (event) => {
        const { value: inputValue, name } = event.target;
        //changeField(inputValue, name);
    };

    const handleOnChange = (event) =>{

        const onChangeInput = event.target.value;

        
        dispatch(filterIngredient(onChangeInput,ingredientList))
        console.log(ingredientList)


    }

    useEffect(() => {
        dispatch({ type: FETCH_INGREDIENT });
      }, [dispatch]);



    return(
        <div
        style={{

            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center'
            
                }}
        >
        <div
            style={{

                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
                
                    }}
        >

            <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' , maxWidth: 500}}
            >
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                
                    <SearchIcon />

                </IconButton>

                <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Ingredient"
                inputProps={{ 'aria-label': 'Ingredient' }}
                onChange={(event) => {handleOnChange(event)}}
                onSubmit={(event)=> {handleSubmit(event)}}
                />
            
            </Paper>
        </div>
        <div
            style={{

                display: 'flex',
                flexDirection: 'row',
                minWidth: 275,
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                maxWidth: 500,
        
            }}>

            {proposedIngredient && proposedIngredient.map((ingredient,id) => {

                return(
                        
                        <Chip

                            label={ ingredient }
                            onDelete={(event)=>{handleClickRemoveIngredient(event)}}

                        />
                    
                )
            })}

        </div>
        <div
            style={{

                display: 'flex',
                flexDirection: 'row',
                minWidth: 275,
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                maxWidth: 500,
                
            }}>
            
            {listFilter && listFilter.map((ingredient,id) => {
                
                return(
                    
                    <div
                    >

                    <Card sx={{ minWidth: 135,
                                maxWidth: 135,
                                mb: 2,
                                }}
                                onClick={(event) => {handleClickIngredient(event)}}
                                >
                        
                        <CardMedia

                            component="img"
                            height="50"
                            width="50"
                            image="https://assets.afcdn.com/recipe/20191204/103408_w1000h668c1cx3083cy1808cxb5600cyb3738.webp"
                            alt={ingredient.label}

                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <CardContent sx={{ 
                            flex: '1 0 auto',
                            }}>
                            <Typography 
                                component="div" 
                                variant="h7"
                                align="left"
                                
                                
                            >
                                {ingredient.label}
                            </Typography>
                  
                          </CardContent>
                  
                        </Box>
                      </Card>
                    </div>


                )
            })}

 

        </div>
        </div>
    )
}

export default SearchBar;

