import React from "react";
import Fade from "react-reveal/Fade";
import dataTestimonials from "./dataTestimonials";
import "./Testimonials.css";
const Testimonials = (description, img, name, job) => {
  return (
    <div>
      <Fade top>
        <div className="section1">
          <h1>TESTIMONIALS</h1>
        </div>
      </Fade>
      <div className="testimonials">
        {dataTestimonials.map((item, index) => {
          return (
            <div className="container1 review">
              <div className="row review-head p-4  theme-shadow">
                <div className="text-warning">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <p>{item.description}</p>
              </div>
              <div className="row description">
                <div className="col testimonial-img">
                  <img src={item.img} alt={item.img} />
                </div>
                <div className="col">
                  <h5>{item.name}</h5>
                  <small>{item.job}</small>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
