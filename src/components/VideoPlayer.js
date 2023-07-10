import React from "react";
import displayVideo from "../assets/page1video-2.mp4";
import displayVideoBlack from "../assets/page2video-2.mp4";

const VideoPlayer = ({ page }) => {
  return (
    <div className="video-player relative 2xl:top-20 xl:top-16 lg:top-20 md:top-16 sm:top-12 -top-12">
      <video
        style={{
          width: "896x",
          height: "540px",
        }}
        className={`m-auto ${page === "page1" ? "bg-yellow" : "bg-black"}`}
        src={page === "page1" ? displayVideo : displayVideoBlack}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default VideoPlayer;
