import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import Checkout from "./Components/Checkout.jsx";
import ErrorPage from "./Components/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartState from "./context/cart/cartState";
import ProductState from "./context/product/productState";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="index">
    <CartState>
      <ProductState>
          <RouterProvider router={router} />
      </ProductState>
    </CartState>
  </div>
);
