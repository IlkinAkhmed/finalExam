import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.scss";

import { Pagination } from "swiper/modules";

function Testimonials() {
  return (
    <div className="test">
      <div className="test-head">
        <i class="fa-solid fa-mug-hot"></i>
        <h2>Testimonials</h2>
      </div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="testSwiper"
      >
        <SwiperSlide className="testSlide">
          <p>"</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit ut
            nisi incidunt inventore, omnis provident, accusamus sequi odit
            accusantium doloribus reiciendis, voluptatibus sed dolore eligendi?
          </p>
          <h4>
            Ted Chapman, <span style={{ color: "#ffc515" }}>Client</span>
          </h4>
        </SwiperSlide>
        <SwiperSlide className="testSlide">
          <p>"</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit ut
            nisi incidunt inventore, omnis provident, accusamus sequi odit
            accusantium doloribus reiciendis, voluptatibus sed dolore eligendi?
          </p>
          <h4>
            Ted Chapman, <span style={{ color: "#ffc515" }}>Client</span>
          </h4>
        </SwiperSlide>
        <SwiperSlide className="testSlide">
          <p>"</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit ut
            nisi incidunt inventore, omnis provident, accusamus sequi odit
            accusantium doloribus reiciendis, voluptatibus sed dolore eligendi?
          </p>
          <h4>
            Ted Chapman, <span style={{ color: "#ffc515" }}>Client</span>
          </h4>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Testimonials;
