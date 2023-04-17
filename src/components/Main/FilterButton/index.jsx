import { React } from "react";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import "./style.scss"
import { Radio,
         Rating,
         FormLabel,
         FormControl,
         FormControlLabel,
         RadioGroup, 
         Card,
         Stack,
         Badge,
         CardActions,
         Button,
        } from '@mui/material';
import { useSelector, 
         useDispatch 
        } from "react-redux";
import {toggleFilterOpen, 
        resetNumberFilter,
        udapteFilter,
        } from "../../../store/Filter/action";



function FilterButton () {

    const { isFilterOpen,
            numberFilter,
            grades,
            difficulty,
            time,
         } = useSelector(
        (state) => state.reducerFilter,
      );

    const dispatch = useDispatch();

    const handleClickTime = (event) => {
        
        const filterValue = event.target.value;
        const filterTag = "time"
        console.log(filterValue)
        dispatch(udapteFilter(filterTag, filterValue));
        
        
    };

    const handleClickDifficulty = (event) => {
        
        const filterValue = event.target.value;
        const filterTag = "difficulty"
        dispatch(udapteFilter(filterTag, filterValue));

    };

    const handleClickGrades = (event) => {
        
        const filterValue = event.target.value;
        const filterTag = "grades";
        dispatch(udapteFilter(filterTag, filterValue));

    };


    const marks = [
        {
          value: 25,
          label: '30min',
        },
        {
          value: 50,
          label: '1h',
        },
        {
          value: 75,
          label: '1h30',
        },
        {
          value: 100,
          label: '2h',
        },

      ];

    return(
<<<<<<< HEAD

        <div
        className="filterRecipies">
            <div
            className="filterRecipies__title">
                <Badge badgeContent={parseInt(`${numberFilter}`)} 
                color="primary">

                    <FilterAltIcon
                   onClick={() => {

                    dispatch(toggleFilterOpen());
                    
                  }} 
                    />
                </Badge>
                <div>Filtre</div>
            </div>

                {isFilterOpen && (<Card sx={{ 
                maxWidth: 300,
                 }}>

                <h2>Trier par:</h2>


                    <FormControl>

                        <FormLabel id="time">Temps</FormLabel>
                                
                        <RadioGroup
        
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue={`${time}`} 
                            name="radio-buttons-group"
                            className="test"

                        >
        
                            <div>
        
                                <FormControlLabel
        
                                    value="30" 
                                    control={<Radio />} 
                                    label="30min"
                                    onClick={(event) => {handleClickTime(event)}}
                                            
                                />
        
                                <FormControlLabel
        
                                    value="60" 
                                    control={<Radio />} 
                                    label="1h"
                                    onClick={(event) => {handleClickTime(event)}}
                                        
                                />
        
                                <FormControlLabel 
                                            
                                    value="90" 
                                    control={<Radio />} 
                                    label="1h30min"
                                    onClick={(event) => {handleClickTime(event)}}
                                        
                                />
                                    
                            </div>
        
                        </RadioGroup>

                    </FormControl>
                

                    <FormControl>

                        <FormLabel id="difficulty">Difficulté</FormLabel>
                                
                        <RadioGroup

                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue={`${difficulty}`} 
                            name="radio-buttons-group"
                            className="test"


                        >

                            <div>

                                <FormControlLabel

                                    value="Facile" 
                                    control={<Radio />} 
                                    label="Facile"
                                    onClick={(event) => {handleClickDifficulty(event)}}
                                    
                                />

                                <FormControlLabel

                                    value="Moyen" 
                                    control={<Radio />} 
                                    label="Moyen"
                                    onClick={(event) => {handleClickDifficulty(event)}}
                                
                                />

                                <FormControlLabel 
                                    
                                    value="Difficile" 
                                    control={<Radio />} 
                                    label="Difficile"
                                    onClick={(event) => {handleClickDifficulty(event)}}
                                
                                />
                            
                            </div>

                        </RadioGroup>

                    </FormControl>

                    <FormControl>

                        <FormLabel id="Notes">Notes</FormLabel>
                                
                        <RadioGroup

                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            className="test"
                        
                        >


                        </RadioGroup>

                    </FormControl>

                    <Stack spacing={1}>

                        <Rating

                            name="half-rating" 
                            defaultValue={parseFloat(`${grades}`)} 
                            precision={0.5}
                            max={5}
                            size="medium"
                            onClick={(event) => {handleClickGrades(event)}}

                        />
        
                    </Stack>

                    <CardActions>

                        <Button 
                            size="small"
                            variant="outlined"
                            onClick={() => {
                                dispatch(resetNumberFilter());
                                dispatch(toggleFilterOpen());
                            }}>Annuler</Button
                        >

                        <Button 
                            size="small"
                            variant="contained"
                            onClick={() => {
                                dispatch(toggleFilterOpen());
                            }}
                            >Enregistrer</Button>
                        
                    </CardActions>

                </Card>)}
=======
        <div>
>>>>>>> origin/feature_Recipes_Recipe
        </div>
    )
}

export default FilterButton;