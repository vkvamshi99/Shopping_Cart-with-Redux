import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Product from "./components/Product";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/product" element={<Product />}></Route>
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
