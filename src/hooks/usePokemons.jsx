import { useState, useEffect } from "react";
import { fetchPokemonBlock } from "../services/pokemonService";

export const usePokemons = (startId, endId) => {

    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] =useState(true);

    useEffect (() => {
        const loadPokemonData = async () => {
        setIsLoading(true);
        const data = await fetchPokemonBlock(startId, endId)
        setPokemons(data);
        setIsLoading(false);
        };

        loadPokemonData();
    }, [startId, endId]);

    return {pokemons, isLoading};
}