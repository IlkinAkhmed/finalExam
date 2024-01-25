import React from "react";
import "./index.scss";
import image from "../../../public/meat.png";
function Welcome() {
  return (
    <div className="welcome">
      <div className="wel-head">
        <img src={image} alt="" />
        <div className="line"></div>
        <h2>Welcome</h2>
      </div>
      <div className="wel-wrapper">
        <div className="wel-card">
          <h3>2003</h3>
          <p>
            In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
            rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
          </p>
        </div>
        <div className="wel-card">
          <h3>2023</h3>
          <p>
            In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
            rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
          </p>
        </div>
        <div className="wel-card">
          <h3>2024</h3>
          <p>
            In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
            rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
          </p>
        </div>
      </div>
      <img src="https://preview.colorlib.com/theme/pulse/img/sign.png" alt="" />
    </div>
  );
}

export default Welcome;
