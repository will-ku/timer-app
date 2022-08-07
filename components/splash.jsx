import React, { useState, useEffect } from "react";
import Timer from "./timer";
import { DEFAULT_DATA } from "../utils/utility";
import SpeedButton from "./speed-button";
import {
  MdOutlinePlayCircle,
  MdOutlinePauseCircle,
  MdOutlineStopCircle,
  MdOutlineReplay,
} from "react-icons/md";

export default function Spash() {
  const [time, setTime] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    console.log("time is ", time);
    let interval;

    if (active) {
      interval = setInterval(() => setTime((time) => time - 1), 1000);
      if (time === 0) {
        alert("timer done");
        clearInterval(interval);
        setActive(false);
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, [active, time]);

  const resetTime = () => {
    setTime(0);
    setActive(false);
  };

  const createSpeedButtons = (dataSet) => {
    return dataSet.map((data) => (
      <SpeedButton
        activity={data.activity}
        duration={data.duration}
        onClick={() => {
          setTime(time + data.duration);
        }}
      />
    ));
  };

  return (
    <main className="flex-col">
      {createSpeedButtons(DEFAULT_DATA)}
      <Timer time={time} setTime={setTime} />
      <MdOutlinePlayCircle onClick={() => setActive(true)} />
      <MdOutlinePauseCircle />
      <MdOutlineStopCircle
        onClick={() => {
          setTime(0);
          setActive(false);
        }}
      />
      <MdOutlineReplay onClick={resetTime} />
    </main>
  );
}
