import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Games from "../pages/Games";
import About from "../pages/About";
import Privacy from "../pages/Privacy";
import Contact from "../pages/Contact";
import Tac from "../pages/Tac";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/games" element={<Games />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/privacy" element={<Privacy />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/tac" element={<Tac />}></Route>
    </Routes>
  );
};

export default Routing;
