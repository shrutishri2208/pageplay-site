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
      className={`mt-8 p-8 grid grid-cols-1 gap-8 lg:grid-cols-3 md:px-8  ${
        page === "page1" ? "" : ""
      }`}
    >
      <DetailsCard
        page={page}
        heading={
          page === "page1"
            ? "Personalized video recommendation"
            : "Personalized article recommendation"
        }
        description={
          page === "page1"
            ? "Analyses the contents of the page and suggests videos"
            : "Analyses the video and suggests articles"
        }
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
        description={"Light-weight chrome extension, installed in seconds"}
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
        heading={
          page === "page1"
            ? "Direct link to videos and channels"
            : "Direct link to articles and webpages"
        }
        description={
          page === "page1"
            ? "Simply click on the video or the channel to view the video"
            : "Simply click on the webpage link to view the article"
        }
        image={thirdB}
        // image={page === "page2" ? thirdY : thirdB}
      />
    </div>
  );
};

export default Details;
