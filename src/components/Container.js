import React from "react";
import VideoPlayer from "./VideoPlayer";

const Container = ({ title, description }) => {
  return (
    <div className="text-center">
      <p className="text-7xl/[1] font-bold ">{title}</p>
      <p className="text-2xl my-4">{description}</p>
      <button className=" text-2xl text-yellow bg-black px-8 py-2 border-6 border-black rounded-xl hover:text-black hover:bg-yellow hover:transition-all hover:duration-500">
        add to chrome
      </button>
      <VideoPlayer />
    </div>
  );
};

export default Container;
