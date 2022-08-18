import React, { useState, useEffect } from "react";
import { formatSeconds } from "../utils/utility";

export default function Event({ activity, duration }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  return (
    <li className="p-2 mb-2 flex justify-between items-center bg-slate-200 shadow rounded-lg cursor-move">
      <span>Activity: {activity}</span>
      <span>Time Left: {formatSeconds(timeLeft)}</span>
    </li>
  );
}
