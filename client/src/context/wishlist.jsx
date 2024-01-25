import { createContext, useEffect, useState } from "react";
import React from "react";
import { toast } from "react-hot-toast";

export const WishlistContext = createContext();


export default function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(
    localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : []
  );
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  function addToWish(item) {
    const found = wishlist.find((x) => x._id === item._id);
    if (found) {
      setWishlist(wishlist.filter((x) => x._id !== item._id));
      toast.success("removed from wishlist");
      return;
    }
    setWishlist([...wishlist, item]);
    toast.success("added to wishlist");
  }
  function removeFromWish(item) {
    setWishlist(wishlist.filter((x) => x._id !== item._id));
    toast.success("removed from wishlist");
  }

  const data = {
    wishlist,
    setWishlist,
    addToWish,
    removeFromWish,
  };
  return (
    <WishlistContext.Provider value={data}>{children}</WishlistContext.Provider>
  );
}
