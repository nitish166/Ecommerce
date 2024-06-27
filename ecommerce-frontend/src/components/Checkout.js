import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { clearCart } from "../features/cart/cartSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  const handlePlaceOrder = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/checkout", {
        name,
        email,
        items: cartItems,
        totalAmount,
      });
      setMessage(response.data);
      setName("");
      setEmail("");
      dispatch(clearCart());
    } catch (error) {
      setMessage("Error placing order");
    }
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <h3>Order Summary</h3>
        {cartItems.map((item) => (
          <div key={item.id}>
            {item.name} - ${item.price}
          </div>
        ))}
        <h4>Total: ${totalAmount}</h4>
      </div>
      <button onClick={handlePlaceOrder}>Place Order</button>
      {message && <div>{message}</div>}
    </div>
  );
};

export default Checkout;
