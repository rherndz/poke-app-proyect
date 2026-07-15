import { useState } from "react";

import searchIcon from "../../assets/icon/search_icon.webp";

export default function SearchHero(){

  const[searchPok, setSearchP] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();

  console.log("Buscando el pokemon:", searchPok);
};

return(
  <form onSubmit={handleSubmit} className=''>
    <div className="w-full flex items-center bg-white rounded-xl overflow-hidden shadow-lg focus-within:ring-2 focus-within:ring-pok-red-400/50 transition-all duration-200">
            
        <input type="text" placeholder="Buscar Pokémon por nombre o número..." className=" w-full px-4 py-3.5 bg-transparent text-slate-800 placeholder-slate-400 font-sans text-sm font-medium focus:outline-none sm:text-base" value={searchPok} onChange={e => setSearchP(e.target.value)}/>

        <button type="submit" className="bg-pok-red-500 text-white p-3.5 flex items-center justify-center cursor-pointer">
            <img src={searchIcon} alt="search icon" className="w-8" />
        </button>
    </div>
  </form>
);
};