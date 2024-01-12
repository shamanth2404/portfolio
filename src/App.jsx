import "./app.scss";
import Contacts from "./components/Contact/Contacts";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/Portfolio/Portfolio";
import Hero from "./components/hero/hero";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Portfolio">
        <Parallax type="Portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Parallax type="Contact" />
      </section>
      <section id="Contacts">
        <Contacts />
      </section>
    </div>
  );
};

export default App;
