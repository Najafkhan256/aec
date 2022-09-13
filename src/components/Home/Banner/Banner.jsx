import React from "react";
import BannerButton from "./BannerButton";
import BtnOne from "../../static/uploads/a1.png";
import BtnTwo from "../../static/uploads/a2.png";
import BtnThree from "../../static/uploads/a3.png";
import BtnFour from "../../static/uploads/a4.png"

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner_wrapper">
          <div className="banner_contents">
            <h1>
              ADVANCED <span> ENGLISH</span> CENTER
            </h1>
            <div>
              <p>ENGLISH CENTER FOR PROFESSIONALS</p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <BannerButton
                  img={<BtnOne />}
                  link="Academic Writing & Editing"
                />
              </div>
              <div className="col-md-3">
                <BannerButton
                  img={<BtnTwo />}
                  link="Business Assistance Services"
                />
              </div>
              <div className="col-md-3">
                <BannerButton
                  img={<BtnThree />}
                  link="Job Search & Interview Skills"
                />
              </div>
              <div className="col-md-3">
                <BannerButton img={<BtnFour />} link="Immigration Interviews" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
