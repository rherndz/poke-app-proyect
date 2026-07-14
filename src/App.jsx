import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import { Footerbar } from './components/Footerbar/Footerbar.jsx';
import heroWallpaper from "./assets/images/hero_wallpaper.webp";

import { usePokemons } from './hooks/usePokemons.jsx';
import { FeaturedGrid } from './components/FeaturedGrid/FeaturedGrid.jsx';

import { PokemonGrid } from './components/PokemonGrid/PokemonGrid.jsx';

function App() {

  const { pokemons, isLoading, error } = usePokemons(0, 16);

  const bgImagen = {
        backgroundImage: `url(${heroWallpaper})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        position: "relative",
  };

  const pokemonsDestacados = pokemons ? pokemons.slice(0, 4) : [];

  {/*API error handling*/}
  if (error) {
    return(
      <main className="bg-pok-dark-100 min-h-screen text-pok-slate-50 flex items-center justify-center p-4">
        <div className="bg-pok-dark-200 border border-pok-red-500/30 p-8 rounded-2xl max-w-md text-center shadow-2xl">
          <h2 className="text-xl font-bold text-pok-red-500 mb-2">¡Ups! Algo salió mal</h2>
          <p className="text-sm text-pok-slate-50 mb-6">No pudimos conectar con la Pokédex.</p>
          <button onClick={() => window.location.reload()} className="bg-pok-red-500 text-pok-slate-50 px-5 py-2 rounded-xl text-sm font-bold hover:brightness-110 transition-all">
            Reintentar
          </button>
        </div>
      </main>
    )
  }
  /* uploading data web */
  if (isLoading || !pokemons) {
    return (
      <main className="bg-pok-dark-100 min-h-screen text-pok-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-pok-red-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm font-medium text-pok-slate-50 animate-pulse">Cargando Pokédex...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-mist-400 min-h-screen">
      <Navbar/>

      <section style={bgImagen} className="overflow-hidden min-h-screen">
        <Hero/>
      </section>

      <section className="p-4 my-4 ">
        <FeaturedGrid pokemons={pokemonsDestacados} isLoading={isLoading}/>
      </section>

      <section className="py-8 my-4 ">
        <PokemonGrid pokemons={pokemons} />
      </section>
      
      <Footerbar/>
    </main>    
  );
}

export default App