import { useState } from 'react'
import logo from '../../assets/icon/pokeball_icon.webp'

const navbarlinks = [
    {id:1,title:"Inicio",link:"/"},
    {id:3,title:"Pokemones",link:"/"},
    {id:4,title:"Tipos",link:"/"},
    {id:5,title:"Noticias",link:"/"},
    {id:6,title:"Blog",link:"/"}
]

const Navbar = () => {

    {/* state hamburger-menu */}
    const [isOpen, setIsOpen] = useState(false)

    const ToggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
    <nav className='w-full fixed left-0 py-3 top-0 z-50 bg-pok-dark-200 border-pok-red-400 border-b bg-opacity-30'>
        <section className='flex justify-between items-center px-7 py-3 sm:px12 sm:py-3 sm:justify-around '>
            
            {/* logo */}
            <div className='flex items-center gap-3'>
                <img src={logo} alt='logo del sitio' className='w-10 h-10 md:w-11 md:h-11 object-contain drop-shadow-[0_0_8px_rgba(255,0,63,0.3)]'/>

                <h1 className='tracking-widest text-pok-slate-50 uppercase text-xl md:text-2xl cursor-pointer'>Poké<span className='text-pok-red-500'>dex</span></h1>
            </div>

            {/* button hamburger-menu */}
            <button onClick={ToggleMenu} className="block md:hidden text-pok-slate-50 hover:text-white font-bold text-xl p-1"> 
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    {/* validation function */}
                    {isOpen ? (<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>) : (<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>)}
                </svg>
            </button>

            {/* navegation */}
            <div className='hidden md:block'>
                <ul className='flex items-center gap-6 lg:gap-8'>
                    {navbarlinks.map((link) =>(
                        <li key={link.id}>
                            <a className='text-pok-slate-50 sm:text-lg text-sm font-bold tracking-wide hover:text-pok-red-500 transition-t transition-colors duration-200' href={link.link}> {link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* buttom mode dark/light */}
            <div className='hidden md:block items-center gap-4'>
                <button aria-label="Toggle Theme" className="p-2.5 rounded-xl bg-poke-dark-100 hover:bg-slate-800 border border-slate-800 text-poke-gold hover:text-pok-yellow-400 active:scale-95 transition-all shadow-md flex items-center justify-center cursor-pointer">
                    <span className="text-lg">🌙</span>
                </button>
            </div>
        </section>

        {/* -- navegation mobile -- */}
        <div  className={`md:hidden absolute mt-3 w-full bg-pok-dark-100 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
            <ul className='flex flex-col px-4 py-2'>
                    {navbarlinks.map((link) =>(
                        <li key={link.id} className='py-2 text-center'>
                            <a className='text-pok-slate-50 hover:text-pok-red-500 transition-t transition-colors duration-200 hover:border-b' href={link.link} onClick={() => setIsOpen(false)}> {link.title}</a>
                        </li>
                    ) )}
            </ul>

            {/* buttom mode dark/light */}
            <div className='flex flex-col'>
                <button aria-label="Toggle Theme" className="p-2.5 bg-poke-dark-100 hover:bg-slate-800 border border-slate-800 text-poke-gold hover:text-amber-300 active:scale-95 transition-all shadow-md flex items-center justify-center cursor-pointer">
                    <span className="text-lg">🌙</span>
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar