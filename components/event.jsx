import React, { useState, useEffect } from "react";
import { formatSeconds } from "../utils/utility";

export default function Event({
  activity,
  duration,
  isCurrEvent,
  ticking,
  currEventIdx,
  setCurrEventIdx,
  eventsListData,
}) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    let interval;
    if (isCurrEvent && ticking) {
      // currEventIdx is changimng but isCurrEvent remains true
      // why? the parent eventList should be re-rendering since its state is changing...
      interval = setInterval(
        () => setTimeLeft((timeLeft) => timeLeft - 1),
        1000
      );
    }
    if (timeLeft <= 0) {
      clearInterval(interval);
      if (currEventIdx < eventsListData.length - 1) {
        setCurrEventIdx((idx) => idx + 1);
      }
    }
  }, [timeLeft, ticking]);

  return (
    <li className="p-2 mb-2 flex justify-between items-center bg-slate-200 shadow rounded-lg cursor-move">
      <span>Activity: {activity}</span>
      <span>Time Left: {timeLeft}</span>
    </li>
  );
}
