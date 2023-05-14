import React from "react";
import "./BoxContainer.scss";

export const BoxContainer = ({ title, identity, position, setPosition }) => {
  console.log("pos", position, identity);
  return (
    <>
      <div
        className={position == identity ? "tag-header-select" : "tag-header"}
        onClick={() => setPosition(identity)}
      >
        <img src="https://img.icons8.com/?size=22&id=48586&format=png" />
        <span className="tag-span">{title}</span>
      </div>
      <span className="tag-title">Offer expired</span>
    </>
  );
};
