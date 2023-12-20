import './app.scss'
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <section id='Home'>
        <Navbar />
      </section>
      <section>Parallax</section>
      <section id='Services'>Services</section>
      <section id='Portfolio'>Parallax</section>
      <section>Project1</section>
      <section>project2</section>
      <section id='Contact'>Contact</section>

    </div>
  );
};

export default App;
