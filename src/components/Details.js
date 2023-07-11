import React from "react";
import DetailsCard from "./DetailsCard";
import firstB from "../assets/first-1.png";
import secondB from "../assets/second-1.png";
import thirdB from "../assets/third-1.png";
import firstY from "../assets/first-2.png";
import secondY from "../assets/second-2.png";
import thirdY from "../assets/third-2.png";

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
        image={firstB}
        // image={page === "page2" ? firstY : firstB}
      />
      {/* <hr
        className={`md:hidden visible border-2 rounded-lg ${
          page === "page1" ? "border-yellow" : "border-black"
        } `}
      /> */}
      <DetailsCard
        page={page}
        heading={"Easy to install and use"}
        description={
          "Light-weight chrome extension that can be installed in seconds"
        }
        image={secondB}
        // image={page === "page2" ? secondB : secondB}
      />
      {/* <hr
        className={`md:hidden visible border-2 rounded-lg ${
          page === "page1" ? "border-yellow" : "border-black"
        } `}
      /> */}
      <DetailsCard
        page={page}
        heading={"Direct link to videos and channels"}
        description={
          "Simply click on the video or the channel to view the video"
        }
        image={thirdB}
        // image={page === "page2" ? thirdY : thirdB}
      />
    </div>
  );
};

export default Details;
