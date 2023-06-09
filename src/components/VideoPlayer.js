import React from "react";
import displayVideo from "../assets/final8.mp4";

const VideoPlayer = () => {
  return (
    <div className="video-player">
      <video
        style={{
          width: "896x",
          height: "540px",
        }}
        className="m-auto bg-yellow"
        src={displayVideo}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default VideoPlayer;
