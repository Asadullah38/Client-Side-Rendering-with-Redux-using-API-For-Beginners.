import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const SingleProduct = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.allProducts.products[id - 1]);
  console.log(id);
  return (
    <div className="card">
      <img
        src={product.image}
        alt="Avatar"
        style={{ width: "250px", height: "250px" }}
      />
      <div className="container">
        <h4>
          <b>{product.title}</b>
          <br />
          <br />
          <b>{product.price}</b>
        </h4>
        <p>{product.description}</p>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default SingleProduct;
