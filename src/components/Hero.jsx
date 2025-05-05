import maeImage from '../assets/images/Mae.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Social Media Sidebar */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 z-20">
        <a 
          href="https://www.instagram.com/hey_mae_rose/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition-colors"
        >
          <i className="fab fa-instagram text-xl"></i>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <i className="fab fa-youtube text-xl"></i>
        </a>
        <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <i className="fab fa-spotify text-xl"></i>
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <i className="fab fa-tiktok text-xl"></i>
        </a>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="z-10">
            <h1 className="text-6xl font-bold mb-6">Mae Rose</h1>
            <p className="text-xl text-gray-400 mb-8">Singer • Actress • Performer</p>
            <a href="#booking" className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
              Book Now
            </a>
          </div>
          
          {/* Right Image */}
          <div className="relative h-[600px] hidden md:block">
            <img 
              src={maeImage}
              alt="Mae Rose" 
              className="absolute right-0 h-full w-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent"></div>
          </div>
        </div>
      </div>

      {/*Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 z-0"></div>
    </section>
  )
}

export default Hero
