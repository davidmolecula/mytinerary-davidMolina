import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Carousel from './components/Carousel2.jsx';
import TituloCarousel from './components/TituloCarousel.jsx'
import './App.css';
import './styles/Header.css';
import './styles/Hero.css'




function App() 
{

  
  return (
    <>
    <Header/>
    <Hero/>
    <TituloCarousel/>
    <Carousel/>
      <Footer/>
    </>
    
  )
}

export default App