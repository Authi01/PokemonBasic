import React, { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import "./ProductListingPage.css";
import { fetchPokemonList } from "../Api";

const ProductListingPage = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemonList();
        setPokemonList(data);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, []);

  const getImageUrl = (id) => {
    const paddedId = String(id).padStart(3, "0");
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedId}.png`;
  };

  return (
    <div className="product-listing">
      <h1 className="centered">Pokemon List</h1>
      <div className="pokemon-grid">
        {pokemonList.map((pokemon) => {
          const imageUrl = getImageUrl(pokemon.url.split("/")[6]);
          console.log("Image URL:", imageUrl);
          return (
            <PokemonCard
              key={pokemon.name}
              pokemon={pokemon}
              imageUrl={imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductListingPage;
