import React, { useState } from "react";
import './SinglePage.css'
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

export default function SinglePage(prob) {

    
    const [quantity, setQuantity] = useState(1);
  
    const handleIncrement = () => setQuantity(quantity + 1);
    const handleDecrement = () => {
      if (quantity > 1) setQuantity(quantity - 1);
    }
    const location = useLocation();
    const user = location.state || {};
  return (
   <>
   <div className="storemain">
    <h1>Shop</h1>
    <span><a href="http://">Home /</a><a href="http://">Store /</a> Product</span>
    </div>
    <div className="Singleproduct-container">
      <div className="Singleproduct-image">
        <img src={user.image} alt="Singleproduct" />
      </div>
      <div className="Singleproduct-details">
        <h1>{user.title}</h1>
        <div className="rating">
          ⭐⭐⭐⭐☆ <span>(5 customer reviews)</span>
        </div>
        <h2>${user.price}</h2>
        <p>
          {user.description}
        </p>
        <p>Product Code: <strong>{user.id}</strong></p>
        <p>Quantity: <strong>{user.rating.count}</strong></p>
        <p>Shipping tax: <strong>Free</strong></p>

        <div className="options">
          <div className="size">
            <h4>Size:</h4>
            <div>
              <button className="size-btn selected">L</button>
              <button className="size-btn">M</button>
              <button className="size-btn">S</button>
              <button className="size-btn">XL</button>
              <button className="size-btn">XXL</button>
            </div>
          </div>

          <div className="color">
            <h4>Color:</h4>
            <div className="color-options">
              <span className="color-box" style={{ background: "red" }}></span>
              <span className="color-box" style={{ background: "yellow" }}></span>
              <span className="color-box" style={{ background: "orange" }}></span>
              <span className="color-box" style={{ background: "purple" }}></span>
            </div>
          </div>
        </div>

        <div className="quantity">
          <button onClick={handleDecrement} className="quantity-btn">-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement} className="quantity-btn">+</button>
        </div>

        <button className="add-to-cart">Add To Cart</button>
        <div className="share">
          <h4>Share this product:</h4>
          <div>
            <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Pinterest</a>
          </div>
        </div>

        <div className="Singleproduct-categories">
          <h4>Categories:</h4>
          <p>Butter & Eggs, Fruits, Milk & Cream, Vegetables</p>
          <h4>Tags:</h4>
          <p>organic food, fruits, juice</p>
          <h4>Brand:</h4>
          <p>KFC</p>
        </div>
      </div>
    </div>
    <Footer/>
   </>
  )
}
