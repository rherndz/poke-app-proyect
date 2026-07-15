export default function PokemonTypes() {
  return (
    
    <section className="bg-pok-dark-200 py-10 px-5">
        <div className="flex justify-around flex-wrap gap-4 md:gap-2 cursor-pointer">
      
            {/* fire card */}
            <a className="bg-poke-fire text-pok-slate-50 px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-md hover:scale-105 transition-transform">
                🔥 FUEGO
            </a>

            {/* water card */}
            <a className="bg-poke-water text-pok-slate-50 px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-md hover:scale-105 transition-transform">
                💧 AGUA
            </a>

            {/* plant card */}
            <a className="bg-poke-plant text-pok-slate-50 px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-md hover:scale-105 transition-transform">
                🍃 PLANTA
            </a>

            {/* electric card */}
            <a className="bg-poke-electric text-pok-slate-50 px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-md hover:scale-105 transition-transform">
                ⚡ ELÉCTRICO
            </a>

            {/* pychic card */}
            <a className="bg-poke-pychic text-pok-slate-50 px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-md hover:scale-105 transition-transform">
                👁️ PSÍQUICO
            </a>

            {/* dragon card */}
            <a className="bg-poke-dragon text-pok-slate-50 px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-md hover:scale-105 transition-transform">
                🐲 DRAGÓN
            </a>

        </div>
    </section>

  );
};
