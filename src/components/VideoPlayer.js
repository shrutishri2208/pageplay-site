import React from "react";
import displayVideo from "../assets/final5.mp4";

const VideoPlayer = () => {
  return (
    <div className="">
      <video
        style={{ borderRadius: "20px" }}
        className="m-auto bg-yellow"
        src={displayVideo}
        width="850"
        height="300"
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default VideoPlayer;
