import React from "react";
import { formatSeconds } from "../utils/utility";

export default function Timer({ time }) {
  return <span>{formatSeconds(time)}</span>;
}
