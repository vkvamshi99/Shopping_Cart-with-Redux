import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

function Product() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProduct(response.data);
    });
  }, []);

  const addToCart = (product) => {
    //dispatch add actions
    dispatch(add(product));
  };

  // console.log("Product state:", product);

  const cards = product.map((product) => (
    <div className="col-md-3" key={product.id} style={{ marginBottom: "10px" }}>
      <div className="card" style={{ width: "18rem" }}>
        <div className="text-center">
          <img
            src={product.image}
            className="card-img-top"
            alt="Product"
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">INR {product.price}</p>
          <button
            className="btn btn-primary"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="container">
        <div className="row row-cols-4">{cards}</div>
      </div>
    </div>
  );
}

export default Product;
