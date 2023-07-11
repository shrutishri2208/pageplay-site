import React from "react";
import VideoPlayer from "./VideoPlayer";

const Container = ({ page, word1, word2, word3, description }) => {
  return (
    <div className="text-center ">
      <div className="2xl:text-7xl/[1] xl:text-7xl/[1] lg:text-7xl/[1] md:text-6xl/[1] sm:text-5xl/[1] text-4xl font-bold flex justify-center items-center 2xl:gap-6 xl:gap-6 lg:gap-6 md:gap-5 sm:gap-4 gap-3 z-40">
        <p
          className={`word1 ${page === "page1" ? "text-black" : "text-yellow"}`}
        >
          {word1}
        </p>
        <p
          className={`word2 ${page === "page1" ? "text-black" : "text-yellow"}`}
        >
          {word2}{" "}
        </p>
        <p
          className={`word3 ${page === "page1" ? "text-black" : "text-yellow"}`}
        >
          {word3}
        </p>
      </div>
      <p
        className={`2xl:text-3xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-2xl text-lg 2xl:my-4 xl:my-4 lg:my-4 md:my-4 sm:my-4 description relative z-40 ${
          page === "page1" ? "text-black" : "text-yellow"
        } `}
      >
        {description}
      </p>
      <div className="">
        <button
          className={`z-40 w-fit chrome-btn mx-auto mt-2 text-3xl px-6 py-1.5 border-6 rounded-xl hover:transition-all hover:duration-500 ${
            page === "page1"
              ? "text-yellow bg-black  border-black  hover:text-black hover:bg-white"
              : "text-black bg-yellow  border-yellow  hover:text-white hover:bg-black"
          }  `}
        >
          {page === "page1" ? "add to chrome" : "register now"}
        </button>
        <VideoPlayer page={page} />
      </div>
    </div>
  );
};

export default Container;
