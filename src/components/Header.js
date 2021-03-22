import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>web developer fazilet kosure</h1>
        <Typed
          className="typed-text"
          strings={["Web Development", "Web Design", "Search for brands"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <a href="#" className="btn-main-offer">
          contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
