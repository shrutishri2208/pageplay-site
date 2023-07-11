import React from "react";

const DetailsCard = ({ heading, description, page, image }) => {
  return (
    <div
      className={` text-center p-6 rounded-xl ${
        page === "page1"
          ? " bg-white border-6 border-black"
          : "bg-white border-6 border-yellow"
      }`}
    >
      <img
        src={image}
        className="m-auto "
        style={{ height: "50px", width: "50px" }}
      />
      <h4
        className={`detail-card ${
          page === "page1" ? " text-black" : "text-black "
        }  text-2xl h-16 flex justify-center items-center `}
      >
        {heading}
      </h4>
      {/* <p className={` ${page === "page1" ? "text-white" : "text-black"}`}>
        {description}
      </p> */}
    </div>
  );
};

export default DetailsCard;
