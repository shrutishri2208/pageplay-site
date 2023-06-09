import React from "react";
import DetailsCard from "./DetailsCard";

const Details = () => {
  return (
    <div className="flex bg-black justify-between px-28 gap-32 mb-0 p-8">
      <DetailsCard
        heading={"Personalized video recommendation"}
        description={"Analyses the contents of the page and suggests videos"}
      />
      <DetailsCard
        heading={"Easy to use"}
        description={
          "Light-weight chrome extension that can be installed in seconds"
        }
      />
      <DetailsCard
        heading={"Direct link to videos and channels"}
        description={
          "Simply click on the video or the channel to view the video"
        }
      />
    </div>
  );
};

export default Details;
