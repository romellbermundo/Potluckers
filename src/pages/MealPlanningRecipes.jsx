import React from "react";
import RecipeSearch from "../components/RecipeSearch";

function MealPlanningRecipes() {
  return (
    <div id="SuperWrap">
      <div className="container">
        <div className="one">
          <div className="title-main">
            <h1>Find New Recipes</h1>
          </div>
          <RecipeSearch />
        </div>
      </div>
    </div>
  );
}

export default MealPlanningRecipes;
