
{/* URL PokeAPI*/}

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemonBlock = async (startId, endId) => {
  try {
    const basePokemons = [];
    
    for (let i = startId; i <= endId; i++) {
      const response = await fetch(`${BASE_URL}/${i}`);
      if (response.ok) {
        const data = await response.json();
        basePokemons.push(data);
      }
    }
    
    return basePokemons;

  } catch (error) {
    console.error("Error en el servicio de PokéAPI:", error);
    return [];
  }
};