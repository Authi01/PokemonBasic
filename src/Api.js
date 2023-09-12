import axios from "axios";

export const fetchPokemonList = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    return response.data.results;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
};

export const fetchPokemonDetails = async (name) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    return response.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
};
