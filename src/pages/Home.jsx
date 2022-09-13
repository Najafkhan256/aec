import React from "react";
import AboutUs from "../components/Home/About/AboutUs";
import Banner from "../components/Home/Banner/Banner";
import OurServices from "../components/Home/OurServices/OurServices";
import Navbar from "../components/Layouts/Header/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutUs />
      <OurServices />
    </div>
  );
};

export default Home;
