import { uniqueId } from "lodash";
import React, { useState, useEffect } from "react";
import Event from "./event";

function EventsList({ eventsListData, setEventsListData, ticking, active }) {
  const [currEventIdx, setCurrEventIdx] = useState(0);

  // useEffect(() => {
  //   if (ticking) {
  //     while (currEventIdx < eventsList.length) {
  //       interval = setInterval(() => setTime((time) => time - 1), 1000);

  //     }
  //     // interval = setInterval(() => setTime((time) => time - 1), 1000);
  //     if (currEventIdx === eventsList.length - 1 && time === 0) {
  //       clearInterval(interval);
  //       setTicking(false);
  //       alert("Timer Done");
  //     }
  //   }

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [ticking, currEventIdx]);

  const renderList = () => {
    return eventsListData.map((event, index) => {
      console.log("running this map fnc now");
      return (
        <Event
          key={index}
          isCurrEvent={index === currEventIdx}
          activity={event.activity}
          duration={event.duration}
          eventsListData={eventsListData}
          ticking={ticking}
          currEventIdx={currEventIdx}
          setCurrEventIdx={setCurrEventIdx}
        />
      );
    });
  };

  return <ul className="w-full max-w-md">{renderList()}</ul>;
}

export default EventsList;
