import { createContext, useEffect, useState } from "react";
import React from "react";
import { toast } from "react-hot-toast";

export const BasketContext = createContext();

export default function BasketProvider({ children }) {
  const [basket, setBasket] = useState(
    localStorage.getItem("basket")
      ? JSON.parse(localStorage.getItem("basket"))
      : []
  );
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  function addToCart(item) {
    const found = basket.find((x) => x._id === item._id);
    if (found) {
      found.count++;
      found.total = found.count * found.price;
      setBasket([...basket]);
      toast.success("Already in basket count increased");
      return;
    }
    const total = item.price;
    setBasket([...basket, { ...item, count: 1, total: total }]);
    toast.success("added to basket");
  }

  function removeFromCart(item) {
    setBasket(basket.filter((x) => x._id !== item._id));
    toast.success("removed from basket");
  }

  function modifyCount(isIncreament, item) {
    const found = basket.find((x) => x._id === item._id);
    if (isIncreament) {
      found.count++;
      found.total = found.count * found.price;
      setBasket([...basket]);
      toast.success("count increased");
    } else if (found.count > 1) {
      found.count--;
      found.total = found.count * found.price;
      setBasket([...basket]);
      toast.success("count decreased");
    }
  }

  const data = {
    basket,
    setBasket,
    addToCart,
    removeFromCart,
    modifyCount,
  };
  return (
    <BasketContext.Provider value={data}>{children}</BasketContext.Provider>
  );
}
