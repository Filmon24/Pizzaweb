import React, { useState } from "react";
import Logo from "../assets/pizzaLogo.png";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/menu" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: `Cart (${cartItems.length})`, path: "/cart", className: "cart-link" },
  ];

  const handleNav = (path) => {
    navigate(path);
    setOpenLinks(false); // close menu on mobile after click
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navbar-right">
        {/* Desktop nav */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.path)}
              className={link.className || ""}
            >
              {link.label}
            </button>
          ))}
        </div>
        {/* Hamburger icon for mobile */}
        <button className="navbar-toggle" onClick={() => setOpenLinks(!openLinks)}>
          &#9776;
        </button>
        {/* Mobile dropdown menu */}
        {openLinks && (
          <div className="mobile-menu">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.path)}
                className={link.className || ""}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
