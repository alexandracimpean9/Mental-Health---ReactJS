import React from "react";
import Main from "./Main1";
import Navbar from "../Navbar/Navbar";
import Services from "./Services/Services";
import Team from "./Team/Team";
import Footer from "../Footer/Footer";
import picture6 from "./images/picture6.jpg";
import Testimonials from "../Home/Testimonials/Testimonials";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="cover">
        <img src={picture6} alt="header" />
      </div>
      <Main />
      <Services />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
