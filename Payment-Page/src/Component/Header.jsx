import React from "react";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="header-outer-container">
      <div className="header-outer-container-2">
        <div className="header-outer-container-3">
          <div>Edyoda</div>
          <div>Program</div>
          <div>Courses</div>
        </div>
        <div className="header-outer-container-3">
          <img src="https://img.icons8.com/?size=24&id=7695&format=png" />
          <div>Login</div>
          <button>Join Now</button>
        </div>
      </div>
    </div>
  );
};
