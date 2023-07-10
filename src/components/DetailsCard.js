import React from "react";

const DetailsCard = ({ heading, description, page, image }) => {
  return (
    <div
      className={` text-center p-6 rounded-xl ${
        page === "page1" ? " bg-black" : "bg-yellow"
      }`}
    >
      <h4
        className={`detail-card ${
          page === "page1" ? " text-yellow" : "text-black"
        }  text-2xl h-20 flex justify-center items-center `}
      >
        {heading}
      </h4>
      <p className={` ${page === "page1" ? "text-white" : "text-black"}`}>
        {description}
      </p>
    </div>
  );
};

export default DetailsCard;
