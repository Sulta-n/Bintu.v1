import React from "react";
import HomeSection from "../components/HomeSection";
import NavBar from "../components/NavBar";
import About from "../components/about";
import Experience from "../components/Experience";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      {/* Header */}
      <HomeSection />
      {/* NavBar */}
      <NavBar />
      {/* About */}
      <About />
      {/* Experience */}
      <Experience />
      {/* Services */}
      <Services />
      {/* Portfolio */}
      <Portfolio />
      {/* Testimonials */}
      <Testimonials />
      {/* Contact */}
      <Contact />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
