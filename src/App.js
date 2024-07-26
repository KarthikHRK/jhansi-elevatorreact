import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Homesection/index";
import About from "./components/aboutus sec/index";
import Product1 from "./components/products/product1/index";
import Product2 from "./components/products/product2/index";
import Product3 from "./components/products/product3/index";
import Product4 from "./components/products/product4/index";
import Product5 from "./components/products/product5/index";
import Product6 from "./components/products/product6/index";
import Product7 from "./components/products/product7/index";
import Safty from "./components/safty&services/index";
import Projects from "./components/projects";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />}/>
      <Route path="/ProductHomeySmart" element={<Product1 />} />
      <Route path="/ProductHomeyplus" element={<Product2 />} />
      <Route path="/ProductElectra" element={<Product3 />} />
      <Route path="/ProductElectraexpress" element={<Product4 />} />
      <Route path="/ProductAchyuta" element={<Product5 />} />
      <Route path="/ProductSuraksha" element={<Product6 />} />
      <Route path="/ProductViratextralarge" element={<Product7 />} />
      <Route path="/Safty&services" element={<Safty />} />
      <Route path="/Projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App