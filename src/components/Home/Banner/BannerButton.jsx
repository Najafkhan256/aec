import React from "react";
import { Link } from "react-router-dom";

const BannerButton = (props) => {
  return (
    <div className="banner_btn_wrapper">
      <Link to="/" className="link">
        <ul className="list-inline">
          <li className="list-inline-item">
            <img src={props.img} alt="" />
          </li>
          <li className="list-inline-item">{props.link}</li>
        </ul>
      </Link>
    </div>
  );
};

export default BannerButton;
