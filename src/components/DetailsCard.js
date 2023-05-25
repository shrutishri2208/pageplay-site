import React from "react";

const DetailsCard = ({ heading, description }) => {
  return (
    <div className="text-center ">
      <h4 className="text-yellow text-2xl h-20 flex justify-center items-center">
        {heading}
      </h4>
      <p className="text-white">{description}</p>
    </div>
  );
};

export default DetailsCard;
