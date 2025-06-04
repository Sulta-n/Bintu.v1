import React from "react";
import HomeSection from "../components/HomeSection";
import NavBar from "../components/NavBar";
import About from "../components/about";
import Experience from "../components/Experience";

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
    </>
  );
};

export default Home;
