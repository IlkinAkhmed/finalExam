import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { WishlistContext } from "../../context/wishlist";
import { useNavigate } from "react-router-dom";
import { BasketContext } from "../../context/basket";

function Menu() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { addToWish, wishlist } = useContext(WishlistContext);
  const { addToCart, basket } = useContext(BasketContext);

  async function fetchData() {
    const res = await axios.get("http://localhost:5100/products/");
    setIsLoading(false);
    setProducts(res.data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="menu">
      <div className="menu-head">
        <i className="fa-solid fa-utensils"></i>
        <h2>Our Menu</h2>
      </div>
      <div className="menu-categ">
        <p>Breakfast</p>
        <p>Brunch</p>
        <p>Lunch</p>
        <p>Dinner</p>
      </div>
      <div className="menu-wrapper">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          products &&
          products.map((item) => (
            <div className="menu-card" key={item._id}>
              <div className="title">
                <h3>{item.title}</h3>
                <div className="icons">
                  <i
                    onClick={() => navigate(`/details/${item._id}`)}
                    className="fa-solid fa-eye"
                  ></i>
                  <i
                    onClick={() => addToCart(item)}
                    className="fa-solid fa-basket-shopping"
                  ></i>
                  <i
                    onClick={() => addToWish(item)}
                    className={`${
                      wishlist.find((x) => x._id === item._id)
                        ? "fa-solid"
                        : "fa-regular"
                    } fa-heart`}
                  ></i>
                </div>
              </div>
              <div className="price">
                <p>{item.description}</p>
                <span></span>
                <p>${item.price}.00</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Menu;
