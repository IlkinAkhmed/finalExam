import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home";
import AddPage from "./pages/addPage";
import Basket from "./pages/basket";
import Wihslist from "./pages/wishlist";
import Details from "./pages/details";
import News from "./pages/news";
import About from "./pages/about";
import WishlistProvider from "./context/wishlist";
import BasketProvider from "./context/basket";

function App() {
  return (
    <BasketProvider>
      <WishlistProvider>
        <Toaster position="top-left" reverseOrder={false} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/cart" element={<Basket />} />
              <Route path="/wishlist" element={<Wihslist />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/news" element={<News />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </WishlistProvider>
    </BasketProvider>
  );
}

export default App;
