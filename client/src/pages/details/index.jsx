import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import "./index.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { WishlistContext } from "../../context/wishlist";
import { BasketContext } from "../../context/basket";

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const { addToWish, wishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(BasketContext);

  async function fetchData() {
    const res = await axios.get(`http://localhost:5100/products/${id}`);
    setProduct(res.data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Helmet>
        <title>Home | Details</title>
      </Helmet>
      <div className="det">
        <div className="menu-card" key={product._id}>
          <div className="title">
            <h3>{product.title}</h3>
            <div className="icons">
              <i
                onClick={() => addToCart(product)}
                className="fa-solid fa-basket-shopping"
              ></i>
              <i
                onClick={() => addToWish(product)}
                className={`${
                  wishlist.find((x) => x._id === product._id)
                    ? "fa-solid"
                    : "fa-regular"
                } fa-heart`}
              ></i>
            </div>
          </div>
          <div className="price">
            <p>{product.description}</p>
            <span></span>
            <p>${product.price}.00</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
