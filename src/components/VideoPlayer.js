import React from "react";
import displayVideo from "../assets/page1video-2.mp4";
import displayVideoBlack from "../assets/page2video-2.mp4";

const VideoPlayer = ({ page }) => {
  return (
    <div className="video-player mt-4 mb-4">
      <video
        // style={{
        //   width: "896x",
        //   height: "504px",
        // }}
        className={`m-auto video ${
          page === "page1" ? "bg-yellow" : "bg-black"
        }`}
        src={page === "page1" ? displayVideo : displayVideoBlack}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default VideoPlayer;
