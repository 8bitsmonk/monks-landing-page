import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Products from "../components/Products";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Testimony from "../components/Testimony";
import Footer from "../components/Footer";

function Mainpage() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <Products />
      <AboutUs />
      <Contact />
      <Testimony />
      <Footer />
    </>
  );
}

export default Mainpage;
