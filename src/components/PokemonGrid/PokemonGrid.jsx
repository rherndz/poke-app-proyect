import { PokemonCard } from '../PokemonCard/PokemonCard';

export const PokemonGrid = ({ pokemons }) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
      
      {/* header section */}
      <div className="flex justify-between items-baseline mb-6 border-b border-pok-slate-50 pb-4">
        <h2 className="text-white font-sans text-xl font-bold tracking-wide sm:text-2xl">
          Todos los Pokémon
        </h2>
        <span className="text-xs font-mono font-bold text-slate-500">
          {pokemons.length} resultados
        </span>
      </div>

      {/* grid responvide desing mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 justify-items-center">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            types={pokemon.types}
          />
        ))}
      </div>

    </section>
  );
};