import React from "react";

const DetailsCard = ({ heading, description, page, image }) => {
  return (
    <div
      className={`detail-card p-6 2xl:h-56 xl:h-56 lg:h-64 md:h-40 sm:h-40 h-40 text-center rounded-xl grid grid-cols-1 items-center justify-center ${
        page === "page1"
          ? "bg-white border-6 border-black"
          : "bg-black border-6 border-yellow"
      }`}
    >
      {/* <img
        src={image}
        className="m-auto"
        style={{ height: "50px", width: "50px" }}
      /> */}

      <h4
        className={`sm:text-3xl text-xl ${
          page === "page1" ? " text-black" : "text-white "
        }  text-2xl flex justify-center items-center `}
      >
        {heading}
      </h4>
      <p
        className={`sm:text-xl text-sm ${
          page === "page1" ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default DetailsCard;
