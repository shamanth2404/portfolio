import './app.scss'
import Navbar from './components/Navbar/Navbar';
import Parallax from './components/Parallax/Parallax';
import Portfolio from './components/Portfolio/Portfolio';
import Hero from './components/hero/hero';

const App = () => {
  return (
    <div>
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>
      
      <section id='Services'><Parallax type="Service"/></section>
      <section>Services</section>
      <section id='Portfolio'><Parallax type="Portfolio" /></section>
      <Portfolio />
      <section id='Contact'>Contact</section>

    </div>
  );
};

export default App;
