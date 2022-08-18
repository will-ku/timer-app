import React, { useState, useEffect } from "react";
import { formatSeconds } from "../utils/utility";

export default function Event({
  index,
  activity,
  duration,
  ticking,
  currEventIdx,
  setCurrEventIdx,
  eventsListData,
}) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    let interval;
    console.log("what is index", index);
    console.log("what is currEventIdx", currEventIdx);
    if (index === currEventIdx && ticking) {
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
