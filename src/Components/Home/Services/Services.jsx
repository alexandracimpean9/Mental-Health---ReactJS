import React from "react";
import dataServices from "./dataServices";
import "./Services.css";
import Fade from "react-reveal/Fade";
const Services = (name, img, description) => {
  return (
    <div>
      <Fade top>
        <div className="section1">
          <h1>SERVICES</h1>
        </div>
      </Fade>
      <div className="services">
        {dataServices.map((item, index) => {
          return (
            <div className="card-item flex flex-column flex-sb ">
              <h5 className="card-item-info-item title fw-7 fs-18">
                {item.name}
              </h5>
              <div className="card-item-img">
                <img src={item.img} alt={item.img} />
              </div>
              <div className="book-item-info text-center">
                {item.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
