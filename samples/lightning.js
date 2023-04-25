import React, { useState, useEffect } from "react";

/**
 * The LightningCounter function is a React component that counts lightning strikes and allows the user
 * to start and stop detection.
 * @returns The LightningCounter component is being returned, which renders a header, a strike count,
 * and a button to toggle lightning detection on and off. The component uses state and useEffect hooks
 * to update the strike count when lightning is detected.
 */
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
