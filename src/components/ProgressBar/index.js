import React, { useEffect, useState } from "react";
import "./progressbar.css";
function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [start, setStart] = useState(false);
  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      if (progress < 100 && start) setProgress(progress + 10);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [start, progress]);
  return (
    <div className="">
      <div className="progressbar-container">
        <div className="progressbar">
            <div className="progress" style={{width:`${progress}%`}}></div>
        </div>
        <div>{progress}</div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "10px" }}
      >
        <button onClick={() => setStart(true)}>Start</button>
        <button onClick={() => setStart(false)}> Stop</button>
      </div>
    </div>
  );
}

export default ProgressBar;
