import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <LanguageProvider>
      <div className="app-shell">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <MyWork />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
