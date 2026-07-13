import Navbar from "./src/components/Navbar/Navbar";
import Hero from "./src/components/Hero/Hero";
import heroWallpaper from './src/assets/images/hero_wallpaper.webp';

function App() {

  const bgImagen = {
        backgroundImage: `url(${heroWallpaper})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        position: "relative",
  };

  return (
    <section style={bgImagen} className="overflow-hidden min-h-screen">
      <Navbar/>
      <Hero/>
    </section>
  )
}

export default App