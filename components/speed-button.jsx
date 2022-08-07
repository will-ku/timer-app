import React from "react";

export default function SpeedButton({ activity, duration, onClick }) {
  return (
    <button
      type="button"
      className="
      bg-blue-500
      hover:bg-blue-700
      text-white
      font-bold
      py-2
      px-4
      rounded
      mr-5
      "
      onClick={onClick}
    >
      {activity} for {duration} seconds
    </button>
  );
}
