import React from "react";
import Banner from "./Banner";
import About from "./About";

const Homepage = () => {
  return (
    <div className="min-h-screen container mx-auto ">
      <Banner />
      <About />
    </div>
  );
};

export default Homepage;
