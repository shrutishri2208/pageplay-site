import React from "react";
import DetailsCard from "./DetailsCard";

const Details = ({ page }) => {
  return (
    <div
      className={`flex justify-between px-28 gap-32 mb-0 p-8 ${
        page === "page1" ? "bg-black" : "bg-yellow"
      }`}
    >
      <DetailsCard
        page={page}
        heading={"Personalized video recommendation"}
        description={"Analyses the contents of the page and suggests videos"}
      />
      <DetailsCard
        page={page}
        heading={"Easy to use"}
        description={
          "Light-weight chrome extension that can be installed in seconds"
        }
      />
      <DetailsCard
        page={page}
        heading={"Direct link to videos and channels"}
        description={
          "Simply click on the video or the channel to view the video"
        }
      />
    </div>
  );
};

export default Details;
