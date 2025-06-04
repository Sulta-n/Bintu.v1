import React from "react";
import HomeSection from "../components/HomeSection";
import NavBar from "../components/NavBar";
import About from "../components/about";
import Experience from "../components/Experience";
import Services from "../components/Services";

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
    </>
  );
};

export default Home;
