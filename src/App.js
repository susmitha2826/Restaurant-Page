import './App.css';
import Home from "./component/Home";
import About from "./component/About";
import Work from "./component/work";
import Testimonial from "./component/Testimonial";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="Work">
        <Work />
      </div>
      <div id="testimonials">
        <Testimonial />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;

