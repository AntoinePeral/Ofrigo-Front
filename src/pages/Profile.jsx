import React from "react";
import FilterButton from "../components/Main/FilterButton";
import SearchBar from "../components/Main/SearchBar";
import Recipes from "../components/Main/Recipes";
import { Button } from "@mui/material";

const Profile = () => {
  return (
    <div>
      <FilterButton />
      <SearchBar />
      <Recipes />
    </div>
  );
};

export default Profile;
