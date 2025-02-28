import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black/20 backdrop-blur-sm text-white z-50">
      <nav className="container mx-auto px-6 py-4 md:py-6 lg:py-8 flex justify-between items-center">
        {/* Logo - Enlarged on Desktop */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold md:font-extrabold">
          Mae Rose
        </h1>

        {/* Hamburger Menu Button (Mobile) */}
        <button 
          className="md:hidden text-white text-3xl focus:outline-none" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu - Enlarged on Desktop */}
        <ul className="hidden md:flex md:space-x-12 lg:space-x-16">
          <li><a href="#home" className="text-base md:text-lg lg:text-xl hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="text-base md:text-lg lg:text-xl hover:text-gray-400">About</a></li>
          <li><a href="#portfolio" className="text-base md:text-lg lg:text-xl hover:text-gray-400">Portfolio</a></li>
          <li><a href="#booking" className="text-base md:text-lg lg:text-xl hover:text-gray-400">Book Now</a></li>
        </ul>

        {/* Mobile Menu (Toggled) */}
        <div className={`absolute top-16 left-0 w-full bg-black/90 backdrop-blur-sm flex flex-col items-center space-y-6 py-6 transition-transform duration-300 ease-in-out md:hidden 
          ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
        >
          <a href="#home" className="text-white text-lg hover:text-gray-400" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="text-white text-lg hover:text-gray-400" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#portfolio" className="text-white text-lg hover:text-gray-400" onClick={() => setMenuOpen(false)}>Portfolio</a>
          <a href="#booking" className="text-white text-lg hover:text-gray-400" onClick={() => setMenuOpen(false)}>Book Now</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
