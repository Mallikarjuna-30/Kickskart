import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import CartProvider from "./Context/CartContext"
import ToastProvider from "./Context/ToastContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </CartProvider>
  </BrowserRouter>
)