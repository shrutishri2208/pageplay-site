import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import trial from "../assets/trial.jpg";

const Container = ({ page, word1, word2, word3, description }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="text-center ">
      <div className="2xl:text-7xl/[1] xl:text-7xl/[1] lg:text-7xl/[1] md:text-6xl/[1] sm:text-5xl/[1] text-heading font-bold flex justify-center items-center 2xl:gap-6 xl:gap-6 lg:gap-6 md:gap-5 sm:gap-4 gap-3 z-40 ">
        <p
          className={` ${
            page === "page1" ? "text-black word11" : "text-yellow word21"
          }`}
        >
          {word1}
        </p>
        <p
          className={` ${
            page === "page1" ? "text-black word12" : "text-yellow word22"
          }`}
        >
          {word2}{" "}
        </p>
        <p
          className={` ${
            page === "page1" ? "text-black word13" : "text-yellow word23"
          }`}
        >
          {word3}
        </p>
      </div>
      <p
        className={`2xl:text-3xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-2xl text-sm 2xl:my-4 xl:my-4 lg:my-4 md:my-4 sm:my-4 mb-6 description relative z-40 ${
          page === "page1" ? "text-black" : "text-yellow"
        } `}
      >
        {description}
      </p>
      <div className="">
        <button
          onClick={() => {}}
          className={`z-40 w-fit chrome-btn mx-auto mt-2 text-3xl px-6 py-1.5 border-6 rounded-xl hover:transition-all hover:duration-500 ${
            page === "page1"
              ? "text-yellow bg-black  border-black  hover:text-black hover:bg-white"
              : "text-black bg-yellow  border-yellow  hover:text-white hover:bg-black"
          }  `}
        >
          <a
            href="https://chrome.google.com/webstore/detail/textplay/jjahbdjicejlbmbcaecooaphbbllmfdp"
            target="_black"
          >
            {page === "page1" ? "add to chrome" : "coming soon"}
          </a>
        </button>
        <VideoPlayer page={page} />
        {/* <div className="relative w-max m-auto">
          <img
            src={trial}
            className="m-auto image-trial"
            style={{ height: "300px", width: "400px" }}
          />
          <div
            className=" h-full absolute top-0 mx-auto div-trial"
            style={{
              width: "400px",
            }}
          ></div>
          <h3 className="text-xl z-10 relative bottom-12 text-white">
            HJBSHSBVHEYBCYIBCJKNCOUEBCOBECU
          </h3>
        </div> */}
      </div>
    </div>
  );
};

export default Container;
