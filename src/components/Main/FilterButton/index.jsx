import React, { useState, useEffect } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import "./style.scss";
import {
  Radio,
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
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleFilterOpen,
  resetNumberFilter,
  udapteFilter,
  FETCH_TAG,
} from "../../../store/Filter/action";

function FilterButton() {
  const { isFilterOpen, numberFilter, grades, difficulty, time, tags } =
    useSelector((state) => state.reducerFilter);

  const dispatch = useDispatch();

  const handleClickTime = (event) => {
    const filterValue = event.target.value;
    const filterTag = "time";
    console.log(difficulty);
    dispatch(udapteFilter(filterTag, filterValue));
  };

  const handleClickDifficulty = (event) => {
    const filterValue = event.target.value;
    const filterTag = "difficulty";
    dispatch(udapteFilter(filterTag, filterValue));
  };

  const handleClickGrades = (event) => {
    console.log(event);
    const filterValue = event.target.value;

    const filterTag = "grades";
    dispatch(udapteFilter(filterTag, filterValue));
  };

  const marks = [
    {
      value: 25,
      label: "30min",
    },
    {
      value: 50,
      label: "1h",
    },
    {
      value: 75,
      label: "1h30",
    },
    {
      value: 100,
      label: "2h",
    },
  ];

  useEffect(() => {
    dispatch({ type: FETCH_TAG });
  }, [dispatch]);

  return (
    <div>
      <div
        className="filterRecipies"
        style={{
          display: "flex",
          flexDirection: "row",
          minWidth: 300,
          maxWidth: 600,
          marginBottom: 10,
        }}
      >
        <div className="filterRecipies__title">
          <Badge badgeContent={parseInt(`${numberFilter}`)} color="primary">
            <FilterAltIcon
              onClick={() => {
                dispatch(toggleFilterOpen());
              }}
            />
          </Badge>
        </div>
        <div>Filtre</div>
      </div>
      <div>
        {isFilterOpen && (
          <Card
            sx={{
              maxWidth: 300,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2>Trier par:</h2>

            <FormControl>
              <FormLabel id="time">Temps</FormLabel>

              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={`${time}`}
                name="radio-buttons-group"
                className="test"
              >
                <div
                  style={{
                    maxWidth: 300,
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <FormControlLabel
                    value="30"
                    control={
                      <Radio
                        onClick={(event) => {
                          handleClickTime(event);
                        }}
                      />
                    }
                    label="30min"
                  />

                  <FormControlLabel
                    value="60"
                    control={
                      <Radio
                        onClick={(event) => {
                          handleClickTime(event);
                        }}
                      />
                    }
                    label="1h"
                  />

                  <FormControlLabel
                    value="90"
                    control={
                      <Radio
                        onClick={(event) => {
                          handleClickTime(event);
                        }}
                      />
                    }
                    label="1h30min"
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
                <div
                  style={{
                    maxWidth: 300,
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <FormControlLabel
                    value="Facile"
                    control={
                      <Radio
                        onClick={(event) => {
                          handleClickDifficulty(event);
                        }}
                      />
                    }
                    label="Facile"
                  />

                  <FormControlLabel
                    value="Moyenne"
                    control={
                      <Radio
                        onClick={(event) => {
                          handleClickDifficulty(event);
                        }}
                      />
                    }
                    label="Moyenne"
                  />

                  <FormControlLabel
                    value="Très facile"
                    control={
                      <Radio
                        onClick={(event) => {
                          handleClickDifficulty(event);
                        }}
                      />
                    }
                    label="Très facile"
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
              ></RadioGroup>
            </FormControl>

            <Stack spacing={1}>
              <Rating
                name="half-rating"
                defaultValue={parseFloat(`${grades}`)}
                precision={0.5}
                max={5}
                size="medium"
                onChange={(event) => {
                  handleClickGrades(event);
                }}
              />
            </Stack>

            <CardActions>
              <Button
                size="small"
                variant="outlined"
                onClick={() => {
                  dispatch(resetNumberFilter());
                  dispatch(toggleFilterOpen());
                }}
              >
                Annuler
              </Button>

              <Button
                size="small"
                variant="contained"
                onClick={() => {
                  dispatch(toggleFilterOpen());
                }}
              >
                Enregistrer
              </Button>
            </CardActions>
          </Card>
        )}
      </div>
    </div>
  );
}

export default FilterButton;
