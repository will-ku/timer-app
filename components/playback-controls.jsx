import React, { useEffect } from "react";
import {
  MdOutlinePlayCircle,
  MdOutlinePauseCircle,
  MdOutlineStopCircle,
  MdOutlineReplay,
} from "react-icons/md";

function PlaybackControls({ time, setTime }) {
  const resetTime = () => {
    setTime(0);
  };

  const playTimer = () => {};

  return (
    <div className="flex">
      <MdOutlinePlayCircle />
      <MdOutlinePauseCircle />
      <MdOutlineStopCircle />
      <MdOutlineReplay onClick={resetTime} />
    </div>
  );
}

export default PlaybackControls;
