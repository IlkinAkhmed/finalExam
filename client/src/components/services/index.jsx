import React from "react";
import "./index.scss";

function Services() {
  return (
    <div className="services">
      <div className="ser-head">
        <i class="fa-solid fa-bell-concierge"></i>
        <div className="line"></div>
        <h2>Our Services</h2>
      </div>
      <div className="ser-wrapper">
        <div className="ser-card">
          <i class="fa-solid fa-mug-hot"></i>
          <h3>Breakfast</h3>
          <p>
            In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
            rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
          </p>
        </div>
        <div className="ser-card">
          <i class="fa-solid fa-cake-candles"></i>
          <h3>Dinner</h3>
          <p>
            In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
            rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
          </p>
        </div>
        <div className="ser-card">
          <i class="fa-solid fa-mug-hot"></i>
          <h3>Lunch</h3>
          <p>
            In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
            rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
          </p>
        </div>
        <div className="ser-card">
          <i class="fa-solid fa-burger"></i>
          <h3>Brunch</h3>
          <p>
            In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
            rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
