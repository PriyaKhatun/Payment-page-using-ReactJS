import React from "react";
import "./LeftContainer.scss";

export const LeftContainer = () => {
  return (
    <div className="left-container">
      <div>
        <h2>Access curated course & price ₹ 18,500 at just ₹ 99 per year!</h2>
      </div>
      <div className="pointer-header">
        <div className="pointer-header-tag">
          <img src="https://img.icons8.com/?size=28&id=l6iocFkbmCrh&format=png" />
          <span> 100+ job relevant courses</span>
        </div>
        <div className="pointer-header-tag">
          <img src="https://img.icons8.com/?size=29&id=63250&format=png" />
          <span> 20,000+ Hours of content</span>
        </div>
        <div className="pointer-header-tag">
          <img src="https://img.icons8.com/?size=28&id=LQrgJaLGQmMH&format=png" />
          <span> Exclusive webinar access</span>
        </div>
        <div className="pointer-header-tag">
          <img src="https://img.icons8.com/?size=28&id=pmHpxjmoaIY2&format=png" />
          <span>Scholarship worth ₹94,500 </span>
        </div>
        <div className="pointer-header-tag">
          <img src="https://img.icons8.com/?size=28&id=4XCV6mm0hqu3&format=png" />
          <span>Ad Free learning experience</span>
        </div>
      </div>
    </div>
  );
};
