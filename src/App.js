import './App.css';
import Hero from './Frontend/Components/Hero';
import Landingpage from './Frontend/Components/landingPage';
import Navbar from './Frontend/Components/Navbar';
import About from './Frontend/Components/About'
import Whyus from './Frontend/Components/Whyus';
import Footer from './Frontend/Components/Footer';
import Pricing from './Frontend/Components/Pricing'
import Projects from './Frontend/Components/Projects';
import Contact from './Frontend/Components/Contact';

function App() {
  return (
    <>
      <Landingpage />
      <Navbar />  
      <Hero />
      <About />
      <Whyus />
      <Pricing />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
