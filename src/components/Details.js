import React from "react";
import DetailsCard from "./DetailsCard";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";

const Details = ({ page }) => {
  return (
    <div
      className={`px-28 p-8 grid grid-cols-1 gap-8 md:grid-cols-3 md:px-8  ${
        page === "page1" ? "" : ""
      }`}
    >
      <DetailsCard
        page={page}
        heading={"Personalized video recommendation"}
        description={"Analyses the contents of the page and suggests videos"}
        image={first}
      />
      <hr
        className={`md:hidden visible border-2 rounded-lg ${
          page === "page1" ? "border-white" : "border-black"
        } `}
      />
      <DetailsCard
        page={page}
        heading={"Easy to install and use"}
        description={
          "Light-weight chrome extension that can be installed in seconds"
        }
        image={second}
      />
      <hr
        className={`md:hidden visible border-2 rounded-lg ${
          page === "page1" ? "border-white" : "border-black"
        } `}
      />
      <DetailsCard
        page={page}
        heading={"Direct link to videos and channels"}
        description={
          "Simply click on the video or the channel to view the video"
        }
        image={third}
      />
    </div>
  );
};

export default Details;
