import React from "react";
import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Header() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="slide one">
          <div className="main-texts">
            <h1>
              Food And More{" "}
              <span style={{ color: "#FFC515", fontSize: "1em" }}>.</span>
            </h1>
            <p>By Chef Francis Smith</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide two">
          <div className="main-texts">
            <h1>
              Hygienic Food{" "}
              <span style={{ color: "#FFC515", fontSize: "1em" }}>.</span>
            </h1>
            <p>By Chef Francis Smith</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide three">
          <div className="main-texts">
            <h1>
              Special Dish{" "}
              <span style={{ color: "#FFC515", fontSize: "1em" }}>.</span>
            </h1>
            <p>By Chef Francis Smith</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Header;
