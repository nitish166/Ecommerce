import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="checkout-item">
      <span>{item.name}</span>
      <span>{item.price}</span>
      <button onClick={handleRemoveFromCart}>Remove</button>
    </div>
  );
};

export default CartItem;
