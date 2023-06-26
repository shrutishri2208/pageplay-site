import React from "react";

const Header = ({ page }) => {
  return (
    <div>
      <h1
        className={`text-3xl leading-6 m-8 ${
          page === "page1" ? "text-black" : "text-yellow"
        } `}
      >
        page <br /> play
      </h1>
    </div>
  );
};

export default Header;
