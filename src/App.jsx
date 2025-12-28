import BarberHero from "./components/BarberHero.jsx";
import Navbar from "./components/Navbar.jsx";
import PricingSection from "./components/PricingSection.jsx";
import GallerySection from "./components/GallerySection.jsx";
import Footer from "./components/Footer.jsx";
import ContactSection from "./components/ContactSection.jsx";
export default function App(){
  return(<div>
    <Navbar />
  <BarberHero />
  <PricingSection />
  <GallerySection />
  <ContactSection />
  <Footer />
  </div>);
}