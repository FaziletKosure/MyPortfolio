import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="header" className="header-wraper">
      <div className="main-info">
        <h1>fazilet kosure</h1>
        <h1>software engineer</h1>
        <Typed
          className="typed-text"
          strings={["Web Development", "Web Design", "Search for brands"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <Link smooth={true} to="services" className="btn-main-offer" href="#">
          contact me
        </Link>
      </div>
    </div>
  );
};

export default Header;
