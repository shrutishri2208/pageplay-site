import React from "react";
import VideoPlayer from "./VideoPlayer";

const Container = ({ page, word1, word2, word3, description }) => {
  return (
    <div className="text-center ">
      <div className="text-7xl/[1] font-bold flex justify-center items-center gap-6">
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
        className={`text-2xl my-4 description ${
          page === "page1" ? "text-black" : "text-yellow"
        } `}
      >
        {description}
      </p>
      <div className="relative">
        <button
          className={`absolute z-40 w-fit left-0 right-0 chrome-btn mx-auto mt-2 text-3xl px-6 py-1.5 border-6 rounded-xl hover:transition-all hover:duration-500 ${
            page === "page1"
              ? "text-yellow bg-black  border-black  hover:text-black hover:bg-yellow"
              : "text-black bg-yellow  border-yellow  hover:text-yellow hover:bg-black"
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
