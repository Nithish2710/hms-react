import React from "react";
import bgVideo from '../../../assets/bgvideo.mp4';

export default function VideoSection() {
  return (
    <video className="w-full" autoPlay loop muted>
      <source
        src={bgVideo}
        type="video/mp4"
        allowFullScreen
      />
    </video>
  );
}