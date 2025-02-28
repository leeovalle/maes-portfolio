import About from "./components/About"
import Hero from "./components/Hero"
import Header from "./components/Header"
import Portfolio from "./components/Portfolio"
import Booking from "./components/Booking"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Booking />
      <Footer />
    </div>
  )
}

export default App