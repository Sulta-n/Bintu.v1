import React from "react";
import HomeSection from "../components/HomeSection";
import NavBar from "../components/NavBar";
import About from "../components/about";

const Home = () => {
  return (
    <>
      {/* Header */}
      <HomeSection />
      {/* NavBar */}
      <NavBar />
      {/* About */}
      <About />
    </>
  );
};

export default Home;
