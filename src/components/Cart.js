import React from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  useEffect(() => {
    let totalPrice = 0;
    let totalQuantity = 0;

    products.forEach((product) => {
      totalPrice += product.price;
      totalQuantity += 1; // You can customize this based on your cart logic.
    });

    setTotalPrice(totalPrice);
    setTotalQuantity(totalQuantity);
  }, [products]);

  const cartItems = products.map((product) => (
    <tr key={product.id}>
      <td>
        <img
          src={product.image}
          alt="Product"
          style={{ width: "100px", height: "130px" }}
        />
      </td>
      <td>{product.title}</td>
      <td>INR {product.price}</td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => handleRemove(product.id)}
        >
          Remove
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="container">
      <h1 className="text-center">Cart</h1>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{cartItems}</tbody>
      </table>
      <div className="text-center">
        {totalQuantity > 0 && <p>Total Quantity: {totalQuantity}</p>}
        {totalPrice > 0 && <p>Total Price: INR {totalPrice}</p>}
      </div>
    </div>
  );
};

export default Cart;
