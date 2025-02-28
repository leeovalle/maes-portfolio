import maeTwoImage from '../assets/images/Mae2.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-900/20 to-blue-900/20 z-0">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    <img
                    src={maeTwoImage}
                    alt="professional headshot"  
                    className="rounded-lg shadow-lg w-full object-cover" 
                    />
                </div>
                <div>
                    <h2 className="text-4xl font-bold mb-6">About Me</h2>
                    <p className="text-lg mb-6">
                    With over a decade of experience in both music and acting, I've had the privilege
                    of performing on various stages across the country. My passion for entertainment
                    drives me to deliver unforgettable performances.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <span className="text-yellow-400 mr-2">🎤</span> Professional vocalist
                        </li>
                        <li className="flex items-center">
                            <span className="text-yellow-400 mr-2">🎬</span> Experienced actress
                        </li>
                        <li className="flex items-center">
                            <span className="text-yellow-400 mr-2">🎹</span> Skilled musician
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </section>
  )
}

export default About