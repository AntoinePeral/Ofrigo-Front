import React from "react";
import FilterButton from "../components/Main/FilterButton";
import SearchBar from "../components/Main/SearchBar";
import Recipes from "../components/Main/Recipes";

import { Container, Box, Grid } from "@mui/material";

const Profile = () => {
  return (
    <Container maxWidth="lg">
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <FilterButton />
          <SearchBar />
        </Grid>
        <Grid item>
          <Recipes />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
