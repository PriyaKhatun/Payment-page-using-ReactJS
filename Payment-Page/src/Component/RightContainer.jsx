import React from "react";
import { BoxContainer } from "./BoxContainer";
import { priceArray } from "./constant";
import "./RightContainer.scss";

export const RightContainer = () => {
  const [position, setPosition] = React.useState(0);
  return (
    <div className="right-header-container">
      <div className="button-header-container">
        <p className="paragraph-style">Sign up</p>
        <p className="paragraph-style">Subscribe</p>
      </div>
      <div className="subscription-tag">Select your subscription plan</div>
      <div className="box-container">
        {priceArray.map((el, i) => (
          <BoxContainer
            identity={i}
            position={position}
            setPosition={setPosition}
            title={el.title}
          />
        ))}
        <span> Total(incl. of 18% GST) ₹149</span>
        <button class="btn1">CANCEL</button>
        <button class="btn2">PROCEED TO PAY</button>
      </div>
    </div>
  );
};
