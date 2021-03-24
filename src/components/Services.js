import React from "react";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">my services</h1>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon
                    icon={faDesktop}
                    size="2x"
                    className="icon"
                  />
                </div>
                <h3>Web Design</h3>
                <p>
                  approach each project individually and always focus on the
                  result.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon
                    icon={faFileCode}
                    size="2x"
                    className="icon"
                  />
                </div>
                <h3>Web Development</h3>
                <p>
                  Your website will be build with an new proven technologies
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    size="2x"
                    className="icon"
                  />
                </div>
                <h3>Facebook Ads SMM</h3>
                <p>
                  Your potential clients well see your services or product on
                  Facebook.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon icon={faGoogle} size="2x" className="icon" />
                </div>
                <h3>Google Ads</h3>
                <p>
                  Your services or product will appear at the of the Google
                  search
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
