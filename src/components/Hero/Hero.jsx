import pokdexImg from "../../assets/images/pokedex.webp";
import searchIcon from "../../assets/icon/search_icon.webp";

const hero = () => {
  return (
    <section className="w-full flex justify-center mt-10 sm:mt-10 md:mt-10  lg:mb-15 ">
      <div className="max-w-7xl mx-auto grid mt-15 mbe-1.5 grid-cols-1 md:grid-cols-2 lg:mt-6 gap-8 items-center bg-pok-slate-50/8 backdrop-blur-md">
        
        {/* action panel */}
        <div className="flex flex-col gap-4 p-6 sm:p-8 md:p-10 md:mt-45 lg:p-12 xl:p-16 text-slate-900">
          
          {/* heading */}
          <div className="flex flex-col gap-1">
            <h2 className="text-white font-sans text-xl font-bold tracking-wide sm:text-2xl">
              Bienvenido a la
            </h2>

            <h1 className="font-sans font-black text-4xl tracking-wider uppercase sm:text-5xl md:text-6xl">
              <span className="text-pok-slate-50">POKÉ</span>
              <span className="text-pok-red-400">DEX</span>
            </h1>
          </div>
            
          {/* descriptive text */}
          <p className="text-pok-slate-50/80 font-sans text-sm font-medium leading-relaxed max-w-md sm:text-base">
            "Domina el conocimiento del mundo Pokémon. Desde los clásicos iniciales de Kanto hasta los últimos descubrimientos legendarios, toda la información que necesitas para tu viaje está al alcance de un clic."
          </p>

          {/* search bar */}
          <div className="w-full flex items-center bg-white rounded-xl overflow-hidden shadow-lg focus-within:ring-2 focus-within:ring-pok-red-400/50 transition-all duration-200">
            <input type="text" placeholder="Buscar Pokémon por nombre o número..." className="w-full px-4 py-3.5 bg-transparent text-slate-800 placeholder-slate-400 font-sans text-sm font-medium focus:outline-none sm:text-base"/>
            <button className="bg-pok-red-500 text-white p-3.5 flex items-center justify-center cursor-pointer">
              <img src={searchIcon} alt="search icon" className="w-8" />
            </button>
          </div>

          {/* Buttom action  */}
          <div className="flex">
            <button className="inline-flex items-center gap-2 bg-pok-red-500 text-white font-sans font-black tracking-wide text-sm px-6 py-3 rounded-xl shadow-md hover:brightness-110 active:scale-95 transition-all duration-200 cursor-pointer">
              Explorar Pokédex
              
            </button>
          </div>
        </div>

        {/* image panel */}
        <div className="w-full flex justify-center p-6 sm:p-8 md:p-0">
          <img src={pokdexImg} alt="Pokédex" className="w-full max-w-sm h-auto object-contain sm:max-w-md md:max-xl"/>
        </div>
      </div>
    </section>
  )
}

export default hero