import React from "react";
import "./videoBanner.css";

function VideoBanner(props) {
  return (
    <div className="video-banner-container">
      <iframe
        frameBorder="0"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/EK-DFEXHN90?controls=0&autoplay=1&rel=0&showinfo=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
      {/* <video src="../../resources/video.mp4" height="500px" autoPlay></video> */}
    </div>
  );
}

export default VideoBanner;
