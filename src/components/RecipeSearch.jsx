import React, { useState } from "react";
// import { CUISINES, INTOLERANCES } from "./searchOptions";
import "./recipeSearch.css";
import { complexSearchGet } from "../api/recipeAPIs";
import RecipeCard from "./RecipeCard";

function RecipeSearch() {
  // const [selectedIntolerances, setSelectedIntolerances] = useState(null);
  // const [selectedCuisines, setSelectedCuisines] = useState(null);
  const [queryString, setQueryString] = useState(null);
  const [results, setResults] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await complexSearchGet(queryString);
    setResults(result.results);
  };

  return (
    <div className="formContainer search-container">
      <form className="searchbox" onSubmit={handleSubmit}>
        <label>Search: </label>
        <input
          name="inputtext"
          type="text"
          onChange={(e) =>
            setQueryString({ name: e.target.name, value: e.target.value })
          }
        />
        {/* <div>
          <label>Intolerances: </label>
          <Select
            options={INTOLERANCES}
            isMulti={true}
            onChange={setSelectedIntolerances}
          />
        </div> */}
        {/* <div>
          <label>Cuisines: </label>
          <Select
            options={CUISINES}
            isMulti={true}
            onChange={setSelectedCuisines}
          />
        </div> */}
        <button className="btn btn--green search-btn">submit</button>
      </form>

      {results && <h2>Search Results</h2>}
      <div className="cardContainer">
        {results && [
          results.map((r) => {
            // return <RecipeSearchCard key={r.id} recipe={r} />;
            return <RecipeCard key={r.id} recipe={r} />;
          }),
        ]}
      </div>
    </div>
  );
}

export default RecipeSearch;
