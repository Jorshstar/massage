import Test from "./Test";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Testimonial from "./components/testimonial/testimonial";
import Footer from "./components/footers/Footer";


const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <Parallax type="about" />
        
      </section>
      <About />
      
        <Testimonial />
      
      <section id="Services">
        <Parallax type="services" />
      </section>
      <Services />
      
      <Contact />
      
        <Footer />
      

      
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
