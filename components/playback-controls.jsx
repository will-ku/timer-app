import React from "react";
import {
  MdOutlinePlayCircle,
  MdOutlinePauseCircle,
  MdOutlineStopCircle,
  MdOutlineReplay,
} from "react-icons/md";

function PlaybackControls({
  time,
  setTime,
  active,
  setActive,
  ticking,
  setTicking,
  eventsList,
}) {
  const handleReplay = () => {
    setTime(0);
    setTicking(false);
  };

  const handlePlay = () => {
    if (time < 1) return;
    setTicking(true);
    setActive(true);
  };

  const handlePause = () => {
    setTicking(false);
  };

  const handleStop = () => {
    setTime(0);
    setTicking(false);
  };

  return (
    <div className="flex">
      {ticking ? (
        <MdOutlinePauseCircle onClick={handlePause} />
      ) : (
        <MdOutlinePlayCircle onClick={handlePlay} />
      )}
      <MdOutlineStopCircle onClick={handleStop} />
      <MdOutlineReplay onClick={handleReplay} />
    </div>
  );
}

export default PlaybackControls;
