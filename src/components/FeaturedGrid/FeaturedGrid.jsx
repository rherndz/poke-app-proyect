import { PokemonCard } from '../PokemonCard/PokemonCard';

export const FeaturedGrid = ({ pokemons, isLoading }) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
      
      {/* header section */}
      <div className="flex justify-between items-center mb-10 border-b-2 border-pok-dark-100 text-pok-dark-100 pb-6">
        <h2 className="font-black text-xl sm:text-2xl md:text-2xl tracking-wide text-pok-dark-100">
          Pokémon Destacados
        </h2>
        
        <a className="inline-flex items-center justify-center gap-1 text-xs sm:text-sm font-bold  bg-pok-dark-100 cursor-pointer text-pok-slate-50 hover:bg-pok-red-400 hover:text-pok-slate-50 rounded-2xl px-4 py-2">
          Ver todos 
        </a>
      </div>

      {/* loading state or content */}
      {isLoading ? (
        <div className="w-full flex flex-col items-center justify-center py-20 gap-3">
          <div className="w-10 h-10 border-4 border-pok-red-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-pok-slate-50 text-sm font-medium animate-pulse">
            Loading pokemons...
          </p>
        </div>
      ) : (
        
        /* grid of featured Pokémon */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-items-center">
          {pokemons.map((pokemon) => {
            
            const pokemonTypes = pokemon.types.map((item) => item.type.name);

            return (
              <PokemonCard
                key={pokemon.id} 
                id={`#${String(pokemon.id).padStart(3, '0')}`} 
                name={pokemon.name}
                image={pokemon.sprites?.other?.['official-artwork']?.front_default || pokemon.sprites?.front_default}
                types={pokemonTypes}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};