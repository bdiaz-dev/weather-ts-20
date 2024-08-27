// BackgroundVideo.js
import React from 'react';

const BackgroundVideo = () => {
  return (
    <div className="video-container">
      {/* <iframe
        src="https://www.skylinewebcams.com/es/webcam/united-states/new-york/new-york/world-trade-center.html"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        title="Webcam en vivo"
      ></iframe> */}
      <a href="https://www.skylinewebcams.com/es/webcam/united-states/new-york/new-york/world-trade-center.html" target="_blank"><img src="https://embed.skylinewebcams.com/img/4910.jpg" alt="【LIVE】 Centro de Comercio Mundial - Nueva York | SkylineWebcams"/></a>
    </div>
  );
};

export default BackgroundVideo;
