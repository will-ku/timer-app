import React, { useState, useEffect } from "react";
import Timer from "./timer";
import { DEFAULT_DATA } from "../utils/utility";
import SpeedButton from "./speed-button";
import ActivitiesView from "./activities-list";
import PlaybackControls from "./playback-controls";

export default function Spash() {
  const [time, setTime] = useState(0);
  const [ticking, setTicking] = useState(false);
  const [active, setActive] = useState(false);
  const [activitiesList, setActivitiesList] = useState([]);

  useEffect(() => {
    let interval;

    if (ticking) {
      interval = setInterval(() => setTime((time) => time - 1), 1000);
      if (time === 0) {
        clearInterval(interval);
        setTicking(false);
        alert("Timer Done");
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, [ticking, time]);

  const createSpeedButtons = (dataSet) => {
    return dataSet.map((data, index) => (
      <SpeedButton
        key={data.activity + index}
        activity={data.activity}
        duration={data.duration}
        onClick={() => {
          setTime(time + data.duration);
          setActivitiesList([...activitiesList, data]);
        }}
      />
    ));
  };

  return (
    <main className="flex-col">
      {createSpeedButtons(DEFAULT_DATA)}
      <Timer time={time} setTime={setTime} />
      <PlaybackControls
        time={time}
        setTime={setTime}
        ticking={ticking}
        setTicking={setTicking}
        active={active}
        setActive={setActive}
      />
      <ActivitiesView
        activitiesList={activitiesList}
        setActivitiesList={setActivitiesList}
      />
    </main>
  );
}
