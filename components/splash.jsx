import React, { useState } from "react";
import Timer from "./timer";
import { DEFAULT_DATA } from "../utils/utility";
import SpeedButton from "./speed-button";
import PlaybackControls from "./playback-controls";

export default function Spash() {
  const [time, setTime] = useState(0);

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
      <Timer time={time} />
      <PlaybackControls time={time} setTime={setTime} />
    </main>
  );
}
