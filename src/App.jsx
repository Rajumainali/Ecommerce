import React, { useState } from "react";
import Header from "./components/header";
import Store from "./components/store";
import Home from "./components/home";
import About from "./components/about";
import Blog from "./components/blog";
import Page from "./components/page";
import Contact from "./components/contact";
import SinglePage from "./components/SinglePage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";
import { cartContext } from "./components/CartContext";



const App = () => {
  const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [countItem, setCountItem] = useState(storedCart.length);
  return (
    <>
    <cartContext.Provider value={{countItem,setCountItem}}>
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/page" element={<Page />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/single" element={<SinglePage  />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </cartContext.Provider>
    </>
  );
};

export default App;
