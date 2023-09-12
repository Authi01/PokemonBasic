import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonDetails } from "../Api";

const ProductDescriptionPage = () => {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemonDetails(name);
        setPokemonDetails(data);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, [name]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  const getImageUrl = (id) => {
    // Pokemon image is in 001 format
    const paddedId = String(id).padStart(3, "0");
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedId}.png`;
  };

  return (
    <div>
      <h1>Pokémon Details</h1>
      <h2>{pokemonDetails.name}</h2>
      <img src={getImageUrl(pokemonDetails.id)} alt={pokemonDetails.name} />
      <p>Height: {pokemonDetails.height} decimetres</p>
      <p>Weight: {pokemonDetails.weight} hectograms</p>
    </div>
  );
};

export default ProductDescriptionPage;
