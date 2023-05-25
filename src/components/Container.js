import React from "react";
import VideoPlayer from "./VideoPlayer";

const Container = () => {
  return (
    <div className="text-center">
      <p className="text-7xl/[1] font-bold ">WATCH YOUR VIDEOS</p>
      <p className="text-2xl my-4">
        Get articles related YouTube videos with just a click!
      </p>
      <button className="mb-4 text-2xl text-yellow bg-black px-8 py-2 border-6 border-black rounded-xl hover:text-black hover:bg-yellow">
        add to chrome
      </button>
      <VideoPlayer />
    </div>
  );
};

export default Container;
