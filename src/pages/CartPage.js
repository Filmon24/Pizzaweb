import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/CartPage.css";

function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
              <button 
                className="delete-button"
                onClick={() => removeFromCart(index)}
              >
                Delete
              </button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage; 