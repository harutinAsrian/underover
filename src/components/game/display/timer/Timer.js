import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./Timer.css";

export default function Timer({}) {
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">one second...</div>;
    }

    return (
      <div className="timer">
        <div className="text">Please</div>
        <div className="value">{remainingTime}</div>
        <div className="text">Make a Bet</div>
      </div>
    );
  };

  return (
    <CountdownCircleTimer
      isPlaying
      duration={8}
      colors={[["#E5E74F", 0.73], ["#F44336"]]}
    >
      {renderTime}
    </CountdownCircleTimer>
  );
}
