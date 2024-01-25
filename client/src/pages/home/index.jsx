import React from "react";
import { Helmet } from "react-helmet-async";
import "./index.scss";
import Header from "../../components/header";
import Welcome from "../../components/welcome";
import Testimonials from "../../components/testimonials";
import Services from "../../components/services";
import Menu from "../../components/menu";
import Contact from "../../components/contactUs";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home </title>
      </Helmet>
      <Header />
      <Welcome />
      <Testimonials />
      <Services />
      <Menu />
      <Contact />
    </>
  );
}

export default Home;
