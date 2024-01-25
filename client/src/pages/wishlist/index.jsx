import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import "./index.scss";
import { WishlistContext } from "../../context/wishlist";

function Wihslist() {
  const { wishlist, removeFromWish } = useContext(WishlistContext);

  return (
    <>
      <Helmet>
        <title>Home | Wihslist</title>
      </Helmet>
      <div className="wish">
        <div className="menu-head">
          <i className="fa-solid fa-heart"></i>
          {wishlist.length !== 0 ? (
            <h2>Your Favorites</h2>
          ) : (
            <h2>Your Favorites Is Empty</h2>
          )}
        </div>
        <div className="menu-wrapper">
          {wishlist &&
            wishlist.map((item) => (
              <div className="menu-card" key={item._id}>
                <div className="title">
                  <h3>{item.title}</h3>
                  <div className="icons">
                    <i className="fa-solid fa-eye"></i>
                    <i className="fa-solid fa-basket-shopping"></i>
                    <i
                      className="fa-solid fa-trash-can"
                      onClick={() => removeFromWish(item)}
                    ></i>
                  </div>
                </div>
                <div className="price">
                  <p>{item.description}</p>
                  <span></span>
                  <p>${item.price}.00</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Wihslist;
