import React from "react";
import Fade from "react-reveal/Fade";
import "./Team.css";
import dataTeam from "./dataTeam";
const Team = ({ img, name, job, description }) => {
  return (
    <div>
      <Fade top>
        <div className="section1">
          <h1>OUR TEAM </h1>
        </div>
      </Fade>
      <div className="employees">
        {dataTeam.map((item, index) => {
          return (
            <div className="employee-item ">
              <div className="employee-item-img">
                <img src={item.img} alt={item.img} />
              </div>
              <h3 className="employee-item-info-item title ">{item.name}</h3>
              <h6 className="employee-item-info-item text-center">
                {item.job}
              </h6>

              <div className="employee-item-info text-center">
                {item.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
