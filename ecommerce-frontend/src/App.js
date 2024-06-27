import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import "./styles/styles.css";
import ProductList from "./features/products/ProductList";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <h1>E-commerce Website</h1>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
