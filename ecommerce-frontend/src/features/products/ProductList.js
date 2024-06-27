import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../cart/cartSlice";
import { useNavigate } from "react-router-dom";
import "./ProductList.css";

const products = [
  { id: 1, name: "Lounge Chair", price: 2000, category: "Chairs" },
  { id: 2, name: "Dining Chair", price: 1800, category: "Chairs" },
  { id: 3, name: "Table1", price: 3000, category: "Table" },
  { id: 4, name: "Table2", price: 3200, category: "Table" },
  { id: 5, name: "Table3", price: 3100, category: "Table" },
  { id: 6, name: "Dining Top", price: 900, category: "Top" },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.id]: true,
    }));
  };

  const handleViewCart = () => {
    navigate("/checkout");
  };

  const cartCount = cartItems.length;

  return (
    <div className="product-list">
      <div className="view-cart-button">
        <button onClick={handleViewCart}>View Cart ({cartCount})</button>
      </div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <span>{product.name}</span>
          <span>{product.price}</span>
          {addedToCart[product.id] ? (
            <button onClick={handleViewCart}>View Cart</button>
          ) : (
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
