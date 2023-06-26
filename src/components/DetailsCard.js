import React from "react";

const DetailsCard = ({ heading, description, page }) => {
  return (
    <div className="text-center ">
      <h4
        className={`${
          page === "page1" ? "text-yellow" : "text-black"
        }  text-2xl h-20 flex justify-center items-center`}
      >
        {heading}
      </h4>
      <p className={`${page === "page1" ? "text-white" : "text-black"}`}>
        {description}
      </p>
    </div>
  );
};

export default DetailsCard;
