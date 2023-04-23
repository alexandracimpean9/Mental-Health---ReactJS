import React from "react";
import "./Main1.css";
import picture3 from "./images/picture3.jpg";

import { BsHouseDoor, BsTelephoneInbound } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import Fade from "react-reveal/Fade";
const Main = (name, img, description) => {
  return (
    <div>
      <Fade top>
        <div className="section1">
          <h1>ABOUT US</h1>
        </div>
      </Fade>
      <div className="container">
        <div className="col1">
          <p>
            Mental Health Center is the first psychology center in Cluj-Napoca
            and brings together a complex team of passionate people:
            psychologists, doctors, psychotherapists, counselors, sexologists,
            trainers and coaches. We are dedicated to our clients, individuals
            and companies, to offer them increasingly specialized and
            qualitative services in which we put the care of the person first.
            Our psychology center is focused on offering psychotherapy,
            psychological counseling, coaching and training services at the
            highest standards. People need their problems handled with patience,
            acceptance, warmth, empathy and professionalism in order to be able
            to trust and reach balance. These can only be obtained by improving
            the methods specific to each specialization.
          </p>
        </div>

        <div className="col2">
          <div>
            <img src={picture3} alt="header" />
          </div>
          <div className="contact-total">
            <div className="contact">
              <h5>
                {" "}
                <BsHouseDoor />
                Address
              </h5>
              <p>Cluj Napoca, str. Avram Iancu, nr. 454A</p>
            </div>
            <div className="contact">
              <h5>
                <BsTelephoneInbound /> Phone number
              </h5>
              <p>0741270280</p>
            </div>
            <div className="contact">
              <h5>
                <HiOutlineMail /> Email
              </h5>
              <p>cimpeanalexandra28@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
