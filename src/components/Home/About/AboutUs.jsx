import React from "react";
import Button from "../../Button";

const AboutUs = () => {
  return (
    <div className="about_us">
      <div className="about_us_title">
        <h1>
          ABOUT <span> US</span>
        </h1>
        <p>
          The Advanced English Centre was established in response to the needs
          of professionals and advanced students, as well as those studying or
          teaching at colleges and universities to receive assistance with their
          work. The Centre is staffed by a team of university/college graduates
          whose background includes the arts, sciences, medicine, engineering,
          and linguistics.
        </p>
        <Button className="btn" text="Read More" />
      </div>
    </div>
  );
};

export default AboutUs;
