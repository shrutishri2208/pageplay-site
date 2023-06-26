import React from "react";
import displayVideo from "../assets/page1Video.mp4";
import displayVideoBlack from "../assets/page2Video.mp4";

const VideoPlayer = ({ page }) => {
  return (
    <div className="video-player ">
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
