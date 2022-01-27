
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Feature from './components/Feature';
import Product from './components/Product';
import Offers from './components/Offers';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>

      <About/>
      <Feature/>
      <Product/>
      <Offers/>
      <Testimonials/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
