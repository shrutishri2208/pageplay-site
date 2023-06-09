import React from "react";
import VideoPlayer from "./VideoPlayer";

const Container = ({ word1, word2, word3, description }) => {
  return (
    <div className="text-center ">
      <div className="text-7xl/[1] font-bold flex justify-center items-center gap-6">
        <p className="word1">{word1} </p>
        <p className="word2">{word2} </p>
        <p className="word3">{word3}</p>
      </div>
      <p className="text-2xl my-4 description">{description}</p>
      <div className="relative w-fit mx-auto">
        <button className="chrome-btn absolute z-40 left-0 right-0 w-fit mx-auto mt-2 text-2xl text-yellow bg-black px-8 py-2 border-6 border-black rounded-xl hover:text-black hover:bg-yellow hover:transition-all hover:duration-500">
          add to chrome
        </button>
        <VideoPlayer />
      </div>
    </div>
  );
};

export default Container;
