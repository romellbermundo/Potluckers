import axios from "axios";

export const createNewPotluck = async (potluck) => {
  console.log(potluck);
  const response = await axios({
    method: "POST",
    url: `/potluck`,
    data: potluck,
  });
  const newDBPotluck = await response.data;
  return newDBPotluck;
};

export const getexistingPotluck = async (potluckId) => {
  const response = await axios({
    method: "get",
    url: `/potluck/byid/${potluckId}`,
  });
  const potluck = await response.data;
  console.log("Potluck at API:", potluck);
  return potluck;
};

export const updateExistingPotluck = async (potluck) => {
  const response = await axios.put(`/potluck/`, potluck);
  const updatedPotluck = await response.data;
  return updatedPotluck;
};

export const getAllPotlucks = async () => {
  const response = await axios.get(`/potluck/findAll`);
  const allPotlucks = await response.data;
  return allPotlucks;
};

export const getPotluckByEmail = async (email) => {
  const response = await axios({
    method: "get",
    url: `/potluck/byemail/${email}`,
  });
  const potluck = await response.data;
  console.log("Potluck at API:", potluck);
  return potluck;
};
