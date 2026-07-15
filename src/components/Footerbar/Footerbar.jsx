import logo from '../../assets/icon/pokeball_icon.webp'

const medialinks = [
    {id:1,title:"Github",link:"https://github.com/rherndz"},
    {id:2,title:"Documentacion",link:"https://github.com/rherndz/poke-app-proyect"},
    {id:3,title:"PokéAPI",link:"https://pokeapi.co/"},
]


export function Footerbar() {
  return (
    <footer className='w-full py-3  bg-pok-dark-200 border-pok-red-400 border-t bg-opacity-30'>

        <section className='flex justify-around items-center sm:px12 sm:py-3 px-1 py-3 '>
            {/* logo */}
            <div className='flex flex-col items-left gap-3'>
                <div className='flex flex-row gap-4 items-center border-b border-pok-slate-50 mb-1 py-2'>
                    <img src={logo} alt='logo del sitio' className='w-10 h-10 md:w-11 md:h-11 object-contain drop-shadow-[0_0_8px_rgba(255,0,63,0.3)]'/>

                    <h2 className='tracking-widest text-pok-slate-50 uppercase text-xl md:text-2xl cursor-pointer'>Poké<span className='text-pok-red-500'>dex</span></h2>
                </div>

                <div className='flex flex-col items-left items-left gap-3'>
                    <p className='text-pok-slate-50/80 font-sans text-sm leading-relaxed max-w-md sm:text-base'>Tu fuente de informacion Pokémon</p>
                    <p className='text-pok-slate-50/80 font-sans text-sm font-medium leading-relaxed max-w-md sm:text-base'>Datos proporcionados por PokéAPI</p>

                    <p className='tracking-widest text-pok-slate-50 uppercase text-sm md:text-1xl cursor-pointer'>© 2026 Poké<span className='text-pok-red-500'>dex</span></p>
                </div>
                
            </div>

            <div className='flex flex-col items-left'>
                <h3 className='text-pok-slate-50 sm:text-sm text-sm font-bold tracking-wide mb-3 border-b border-pok-slate-50 py-2'>Proyecto</h3>
                
                <ul className='flex flex-col items-start gap-3 lg:gap-2'>
                    {medialinks.map((mlink) =>(
                        <li key={mlink.id}>
                            <a className='text-pok-slate-50 sm:text-sm text-sm tracking-wide hover:text-pok-red-500 transition-t transition-colors duration-200' target="_blank" href={mlink.link}>
                                {mlink.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            

        </section>

    </footer>
  )
}
