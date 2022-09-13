import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../static/uploads/logo-aec.png";
import { FiPhone } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="logo" className="logo" />
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle dropdown-menu-right
                  "
                  to="#"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-hover="dropdown"
                >
                  Services
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <Link className="dropdown-item active" to="/">
                    Academic Writing & Editing
                  </Link>
                  <div className="dropdown-divider"></div>

                  <Link className="dropdown-item" to="/">
                    Business Professional Assistance
                  </Link>
                  <div className="dropdown-divider"></div>

                  <Link className="dropdown-item" to="/">
                    Job Search and Interview Skills
                  </Link>
                  <div className="dropdown-divider"></div>

                  <Link className="dropdown-item" to="/">
                    Immigration Interviews
                  </Link>
                  <div className="dropdown-divider"></div>

                  <Link className="dropdown-item" to="/">
                    Workspace – Daily and Monthly Passes
                  </Link>
                  <div className="dropdown-divider"></div>

                  <Link className="dropdown-item" to="/">
                    English Conversation Club
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link btn text-light font-weight-bold"
                  to="#"
                >
                  <FiPhone className="phone_icon" /> Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
