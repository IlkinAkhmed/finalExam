import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { BasketContext } from "../../context/basket";
import "./index.scss";

function Basket() {
  const { basket, removeFromCart, modifyCount } = useContext(BasketContext);
  const subtotal = basket.reduce((int, prod) => int + parseInt(prod.total), 0);
  return (
    <>
      <Helmet>
        <title>Home | Basket</title>
      </Helmet>
      <div className="cart">
        <div className="menu-head">
          {basket.length !== 0 ? (
            <h2>Your Cart</h2>
          ) : (
            <h2>Your Cart Is Empty</h2>
          )}
        </div>
        <div className="menu-wrapper">
          {basket &&
            basket.map((item) => (
              <div className="menu-card" key={item._id}>
                <div className="title">
                  <h3>{item.title}</h3>
                  <div className="icons">
                    <i className="fa-solid fa-eye"></i>
                    <i className="fa-solid fa-basket-shopping"></i>
                    <i
                      className="fa-solid fa-trash-can"
                      onClick={() => removeFromCart(item)}
                    ></i>
                  </div>
                </div>
                <div className="counter">
                  <button onClick={() => modifyCount(true, item)}>+</button>
                  <p>{item.count}</p>
                  <button onClick={() => modifyCount(false, item)}>-</button>
                </div>
                <div
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    padding: "10px 0",
                  }}
                >
                  Total Price ${item.total}.00
                </div>
                <div className="price">
                  <p>{item.description}</p>
                  <span></span>
                  <p>${item.price}.00</p>
                </div>
              </div>
            ))}
        </div>
        <div className="subTotal">
          {basket.length !== 0 && <p>SubTotal: ${subtotal}.00</p>}
        </div>
      </div>
    </>
  );
}

export default Basket;
