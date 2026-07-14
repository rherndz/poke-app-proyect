export const PokemonCard = ({ id, name, image, types }) => {
  return (
    <div className="bg-pok-dark-100 rounded-2xl p-4 border border-pok-dark-200 flex flex-col justify-between items-start transition-all duration-300 hover:border-white hover:scale-[1.02] w-full max-w-85 sm:max-w-full">
      
      {/* pokemon image container */}
      <div className="w-full h-40 sm:h-48 flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-pok-slate-50 p-3">
        <img src={image} alt={name} className="max-w-full max-h-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105" loading="lazy"
        />
      </div>

      {/* pokemon details info */}
      <div className="w-full">
        <h3 className="font-bold text-base sm:text-lg text-pok-slate-50 capitalize mb-1 tracking-wide">
          {name}
        </h3>
        
        <div className="flex w-full justify-between items-center mt-2">
          
          {/* visual formatted ID */}
          <span className="text-xs font-semibold text-pok-slate-50 tracking-wider">
            {id}
          </span>

          {/* types badges container */}
          <div className="flex gap-1.5">
            {types.map((t, index) => (
              <span 
                key={index} 
                className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md bg-gray-400 text-pok-slate-50 border border-pok-slate-50 cursor-pointer"
              >
                {typeof t === 'object' ? (t.type?.name || t.name) : t}
              </span>
            ))}
          </div>
          
        </div>
      </div>

    </div>
  );
};