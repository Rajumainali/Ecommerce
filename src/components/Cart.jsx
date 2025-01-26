import React, { useState, useEffect, useContext } from "react";
import "./Cart.css";
import Footer from "./Footer";
import { cartContext } from "./CartContext";
export default function Cart() {
  const value = useContext(cartContext)
  const [cartItems, setCartItems] = useState([]);
  
  // Load cart items from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    value.setCountItem(storedCart.length)
    const initializedCart = storedCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
      total: (item.price || 0) * (item.quantity || 1),
    }));
    setCartItems(initializedCart);
  }, []);

  // Function to update the quantity of an item in the cart
  const updateQuantity = (index, newQuantity) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    updatedCart[index].total = updatedCart[index].price * newQuantity;
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  // Function to remove an item from the cart
  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    value.setCountItem(storedCart.length)
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.total || 0),
    0
  );

  return (
    <>
      <div className="storemain">
        <h1>Shop</h1>
        <span>
          <a href="/">Home /</a> Store
        </span>
      </div>
      <div className="cart-container">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <tr key={item.id}>
                  <td>
                    <div className="product-info">
                      <img src={item.image} alt={item.name || "Product"} />
                      <span>{item.title || "Unnamed Product"}</span>
                    </div>
                  </td>
                  <td>${(item.price || 0)}</td>
                  <td>
                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          updateQuantity(index, Math.max(item.quantity - 1, 1))
                        }
                      >
                        -
                      </button>
                      <input type="number" value={item.quantity || 1} readOnly />
                      <button
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>${(item.total || 0)}</td>
                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => removeItem(index)}
                    >
                      ×
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No products in your cart</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="cart-total">
        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      </div>

      <Footer />
    </>
  );
}
