import React from "react";
import ServicesCarousel from "./ServicesCarousel";

const OurServices = () => {
  return (
    <div className="our_services">
      <div className="our_services_title">
        <h1>
          OUR <span>SERVICES</span>
        </h1>
        <p>AEC Provides The Following Services</p>
      </div>
      <ServicesCarousel />
    </div>
  );
};

export default OurServices;
