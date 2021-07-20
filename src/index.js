import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import AccountProvider from "./context/AccountContext";
import ProductLoveProvider from "./context/ProductLoveContext";
import CartProvider from "./context/CartContext";

ReactDOM.render(
  <React.StrictMode>
    <AccountProvider>
      <ProductLoveProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductLoveProvider>
    </AccountProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
