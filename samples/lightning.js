import React, { useState, useEffect } from "react";

function LightningCounter() {
  const [strikeCount, setStrikeCount] = useState(0);
  const [isDetecting, setIsDetecting] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isDetecting) {
      intervalId = setInterval(() => {
        if (isLightningStrike()) {
          setStrikeCount((count) => count + 1);
        }
      }, 100);
    }
    return () => clearInterval(intervalId);
  }, [isDetecting]);

  function handleDetectingToggle() {
    setIsDetecting((isDetecting) => !isDetecting);
  }

  return (
    <div className="lightning-counter">
      <h1 className="lightning-header">Lightning Strikes Counter</h1>
      <p className="strike-count">{strikeCount}</p>
      <button className="detecting-toggle" onClick={handleDetectingToggle}>
        {isDetecting ? "Stop detecting" : "Start detecting"}
      </button>
    </div>
  );
}

function isLightningStrike() {
  const lightningStrikeThreshold = 0.9;
  return Math.random() > lightningStrikeThreshold;
}

export default LightningCounter;
