import React from "react";
import displayVideo from "../assets/final.mp4";

const VideoPlayer = () => {
  return (
    <div className="">
      <video
        style={{ borderRadius: "20px" }}
        className="m-auto"
        src={displayVideo}
        width="600"
        height="300"
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default VideoPlayer;
