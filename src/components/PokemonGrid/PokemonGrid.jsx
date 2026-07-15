import { PokemonCard } from '../PokemonCard/PokemonCard';

export const PokemonGrid = ({ pokemons }) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
      
      {/* header section */}
      <div className="flex justify-between items-baseline mb-10 border-b-2 border-pok-dark-100 pb-6">
        <h2 className="font-black text-xl sm:text-2xl md:text-2xl tracking-wide text-pok-dark-100">
          Todos los Pokémon
        </h2>

         <a className="flex items-center justify-center gap-1 text-xs sm:text-sm font-bold  bg-pok-dark-100 cursor-pointer text-pok-slate-50 hover:bg-pok-red-400 hover:text-pok-slate-50 rounded-2xl px-4 py-2 ">
          Ver todos 
        </a>
      </div>

      {/* grid with all the pokemon  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 justify-items-center">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={`#${String(pokemon.id).padStart(3, '0')}`} 
            name={pokemon.name}
            image={pokemon.sprites?.other?.['official-artwork']?.front_default || pokemon.sprites?.front_default}
            types={pokemon.types}
          />
        ))}
      </div>

    </section>
  );
};