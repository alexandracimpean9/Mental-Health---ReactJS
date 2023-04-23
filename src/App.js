import { Routes, Route } from "react-router-dom";
import React from "react";
import Carttotal from "./Components/Shop/Carttotal";
import CartState from "./context/cart/CartState";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import SignInWithGoogle from "./Components/Navbar/SignInWithGoogle";
function App() {
  return (
    <CartState>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signinwithgoogle" element={<SignInWithGoogle />} />
        <Route path="/carttotal" element={<Carttotal />} />
      </Routes>
    </CartState>
  );
}

export default App;
