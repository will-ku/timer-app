import React, { useState, useEffect } from "react";
import Timer from "./timer";
import { DEFAULT_DATA } from "../utils/utility";
import SpeedButton from "./speed-button";
import EventsList from "./events-list";
import PlaybackControls from "./playback-controls";

export default function Spash() {
  const [time, setTime] = useState(0);
  const [ticking, setTicking] = useState(false);
  const [active, setActive] = useState(false);
  const [eventsListData, setEventsListData] = useState([]);

  useEffect(() => {
    let interval;

    if (ticking) {
      /*
      while (currEventIdx < eventsList.length) {

        
      }
      */
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
          setEventsListData([
            ...eventsListData,
            { activity: data.activity, duration: data.duration },
          ]);
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
        eventsListData={eventsListData}
      />
      <EventsList
        eventsListData={eventsListData}
        setEventsListData={setEventsListData}
        ticking={ticking}
        setTicking={setTicking}
        active={active}
      />
    </main>
  );
}
