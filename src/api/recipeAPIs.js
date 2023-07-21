import axios from "axios";

export const complexSearchGet = async (searchCriteria) => {
  console.log(searchCriteria);
  const response = await axios({
    method: "get",
    url: `/recipes/complexSearch?query=${searchCriteria.value}`,
  });
  const recipes = await response.data;
  return recipes;
};

export const randomRecipeGet = async () => {
  const response = await axios({
    method: "get",
    url: `/recipes/randomRecipe`,
  });
  const recipes = await response.data;
  return recipes;
};

export const getRecipeIngredients = async (_id) => {
  const response = await axios({
    method: "get",
    url: `/recipes/ingredients/${_id}`,
  });
  const recipes = await response.data;
  return recipes;
};

export const getRecipeById = async (_id) => {
  const response = await axios({
    method: "get",
    url: `/recipes/recipeInformation/${_id}`,
  });
  const recipes = await response.data;

  return recipes;
};
