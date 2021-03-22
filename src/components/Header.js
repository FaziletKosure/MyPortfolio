import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>web development and websites promotions</h1>
        <Typed
          className="typed-text"
          strings={["Web Development", "Web Design", "Search for brands"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </div>
    </div>
  );
};

export default Header;
