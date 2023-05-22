import { useState } from "react";
import "./App.css";
import Navbar from "./components/ui/NavBar";
import HeroSection from "./components/blocks/HeroSection";
import Navigation from "./components/ui/Navigation";
import AboutUs from "./components/blocks/AboutUs";
import QuoteBlock from "./components/blocks/QuoteBlock";
import MenuBlock from "./components/blocks/MenuBlock";
import MasterchefBlock from "./components/blocks/MasterchefBlock";
import GalleryBlock from "./components/blocks/GalleryBlock";
import ContactUs from "./components/blocks/ContactUs";
import ReservationBlock from "./components/blocks/ReservationBlock";
import HorairesBlock from "./components/blocks/HorairesBlock";
import Footer from "./components/blocks/Footer";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open ? (
        <>
          <Navbar onClick={() => setOpen(!open)} />
          <HeroSection />
          <AboutUs />
          <QuoteBlock />
          <MenuBlock />
          <MasterchefBlock />
          <GalleryBlock />
          <ReservationBlock />
          <ContactUs />
          <HorairesBlock />
          <Footer />
        </>
      ) : (
        <Navigation onClick={() => setOpen(!open)} />
      )}
    </>
  );
}

export default App;
