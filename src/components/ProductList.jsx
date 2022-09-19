import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FetchProducts from "../Functions/FetchProducts";
import { setProducts } from "../state/action-creators";

const Product = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts.products);
  const fetchList = async () => {
    dispatch(setProducts(await FetchProducts()));
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div id="products-list">
      {allProducts.map((item) => {
        return (
          <div key={item.id}>
            <div className="card">
              <img
                src={item.image}
                alt="Avatar"
                style={{ width: "250px", height: "250px" }}
              />
              <div className="container">
                <h4>
                  <b>{item.title}</b>
                  <br />
                  <br />
                  <b>{item.price} $</b>
                </h4>
                <p>{item.description}</p>
                <Link to={`/products/${item.id}`}>
                  <button>Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
