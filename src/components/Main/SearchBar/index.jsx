

import { React } from "react";
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
    } from "../../../store/Search/action";





function SearchBar () {

    const dispatch = useDispatch();

    const { proposedIngredient,
            listFilter,
            ingredientList,
            listtest } = useSelector((state => state.reducerSearch));

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
        console.log(onChangeInput)
        console.log(ingredientList)
    }

    return(

        <div>
            <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
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


            {proposedIngredient && proposedIngredient.map((ingredient,id) => {

                return(
                        
                        <Chip

                            label={ ingredient }
                            onDelete={(event)=>{handleClickRemoveIngredient(event)}}

                        />
                    
                )
            })}
            

            {listFilter && listFilter.map((ingredient,id) => {

                return(
                    <div
                    onClick={(event) => {handleClickIngredient(event)}}
                    >

                    <Card sx={{ display: 'flex',
                                flexDirection: 'row',
                                width: 150 }}>
                        
                        <CardMedia

                            component="img"
                            sx={{ width: 50 }}
                            image="/static/images/cards/live-from-space.jpg"
                            alt="Live from space album cover"

                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                {ingredient}
                            </Typography>
                  
                          </CardContent>
                  
                        </Box>
                      </Card>
                    </div>


                )
            })}

 

        </div>
        
    )
}

export default SearchBar;

