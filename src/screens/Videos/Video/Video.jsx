import React from "react";

const Video = ({ youtubeId, className }) => {
    return (
      <div 
        className={className}
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
          paddingTop: 25,
          height: 0
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          src={`https://www.youtube.com/embed/${youtubeId}`}
          frameBorder="0"
        />
      </div>
    );
  };

  export default Video;


  