import React from "react";
import { useCart } from "../context/CartContext";
import { ToastContainer, toast } from 'react-toastify';

function getIngredientIcon(ingredient) {
  const icons = {
    "Pepperoni": "🍕",
    "Mozzarella": "🧀",
    "Tomato Sauce": "🍅",
    "Basil": "🌿",
    "Fresh Mozzarella": "🧀",
    "Olive Oil": "🫒",
    "Sausage": "🌭",
    "Mushrooms": "🍄",
    "Green Peppers": "🫑",
    "Extra Cheese": "🧀",
    "Vegan Cheese": "🌱",
    "Bell Peppers": "🫑",
    "Onions": "🧅",
    "Olives": "🫒",
    "Ham": "🥓",
    "Pineapple": "🍍",
    "Truffle": "🍄",
    "Caviar": "🐟",
    "Gold Leaf": "🥇",
    "Premium Cheese": "🧀",
    "Exotic Mushrooms": "🍄"
  };
  return icons[ingredient] || "🍕";
}

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
            <li key={index}>
              <span className="ingredient-icon">{getIngredientIcon(ingredient)}</span> {ingredient}
            </li>
          ))}
        </ul>
      </div>

      <button className="orderButton" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default MenuItem;
