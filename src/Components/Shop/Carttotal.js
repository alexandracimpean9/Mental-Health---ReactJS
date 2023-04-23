import React from "react";
import HomeScreen from "./screens/HomeScreen";
import Cart from "./Cart";
import Store from "../Shop/Store";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const Carttotal = () => {
  return (
    <div>
      <Navbar />
      <Store />
      <Cart />
      <HomeScreen />
      <Footer />
    </div>
  );
};

export default Carttotal;
