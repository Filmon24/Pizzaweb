import React from "react";
import { useCart } from "../context/CartContext";
import { ToastContainer, toast } from 'react-toastify';

function MenuItem({ image, name, price, ingredients = [] }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    toast("Wow so easy!")
    addToCart({ name, price, image, ingredients });
  };

  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1>{name}</h1>
      <p className="priceTag">
        {isNaN(price) ? `${price}` : `$${parseFloat(price).toFixed(2)}`}
      </p>

      <div className="ingredients">
        <p>Ingredients:</p>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <button className="orderButton" onClick={handleAddToCart}>
        Add to Cart
      </button>
      <ToastContainer />
    </div>
  );
}

export default MenuItem;
