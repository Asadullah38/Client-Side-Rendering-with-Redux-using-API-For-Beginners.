import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import SingleProduct from "./components/SingleProduct";
const App = () => {
  
  return (
    <div>
      <BrowserRouter>
      <center>
        <h1 style={{marginBottom:"50px"}}>Fake Store</h1>
      </center>
        <Routes>
          <Route path="/" element={<ProductList/>}></Route>
          <Route path="Products/:id" element={<SingleProduct/>}></Route>
          <Route path="*" element={<ProductList/>}></Route>
        </Routes>
      </BrowserRouter>    </div>
  );
};

export default App;
