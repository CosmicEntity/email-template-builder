import React from "react";
import "../DownloadLoader.css";

const DownloadLoader = () => {
  return (
    <div className="loading flex flex-col items-center">
      <svg width="64px" height="32px" viewBox="0 0 50 50">
        <polyline
          points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
          id="back"
        ></polyline>
        <polyline
          points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
          id="front"
        ></polyline>
      </svg>
    </div>
  );
};

export default DownloadLoader;
