import React from "react";
import { uniqueId } from "lodash";
import { formatSeconds } from "../utils/utility";

function EventsListView({ eventsList, setEventsList }) {
  const renderList = () => {
    return eventsList.map((listItem) => {
      return (
        <li
          key={uniqueId()}
          className="p-2 mb-2 flex justify-between items-center bg-slate-200 shadow rounded-lg cursor-move"
        >
          <p>{listItem.activity}</p>
          <p>{formatSeconds(listItem.duration)}</p>
        </li>
      );
    });
  };

  return <ul className="w-full max-w-md">{renderList()}</ul>;
}

export default EventsListView;
