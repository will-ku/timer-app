export const DEFAULT_DATA = [
  {
    activity: 'test',
    duration: 5
  },
  {
    activity: 'Freestyle Padwork',
    duration: 180
  },
  {
    activity: 'Shadowbox',
    duration: 120
  },
  {
    activity:  'Jump Rope',
    duration: 300
  }
]

export const formatSeconds = (numSec) => {
  let minutes = String(Math.floor(numSec / 60)).padStart(2, "0");
  let seconds = String(numSec % 60).padStart(2, "0");
  return minutes + ":" + seconds;
};