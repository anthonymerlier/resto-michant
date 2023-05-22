import { useState } from "react";
import "./App.css";
import Navbar from "./components/ui/NavBar";
import HeroSection from "./components/blocks/HeroSection";
import Navigation from "./components/ui/Navigation";
import AboutUs from "./components/blocks/AboutUs";
import QuoteBlock from "./components/blocks/QuoteBlock";
import MenuBlock from "./components/blocks/MenuBlock";

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
        </>
      ) : (
        <Navigation onClick={() => setOpen(!open)} />
      )}
    </>
  );
}

export default App;
