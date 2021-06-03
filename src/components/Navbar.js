import React from "react";
import logo from "../pngegg.png";
import { Link } from "react-scroll";
//  REACT FONTAWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  fixed-top">
      <div className="container">
        <Link
          smooth={true}
          offset={-110}
          to="header"
          className="navbar-brand"
          href="#"
        >
          <img className="logo" src={logo} alt="logo" srcset="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#fff", fontSize: "24px" }}
          />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link
                smooth={true}
                offset={-110}
                to="header"
                className="nav-link"
                href="#"
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                offset={-110}
                to="about"
                className="nav-link"
                href="#"
              >
                about me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                offset={-110}
                to="services"
                className="nav-link"
                href="#"
              >
                services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                offset={-110}
                to="experience"
                className="nav-link"
                href="#"
              >
                experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                offset={-110}
                to="portfolio"
                className="nav-link"
                href="#"
              >
                portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="contacts"
                offset={-110}
                className="nav-link"
                href="#"
              >
                contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
