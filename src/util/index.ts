export function toFormattedTime(t: number, intervalInMs: number) {
  let secs = 0;
  switch (intervalInMs) {
    case 10000:
      secs = t * 10;
      break;
    case 1000:
      secs = t;
      break;
    case 100:
      secs = t * 0.1;
      break;
    default:
      throw Error("Invalid interval");
  }
  const minutes = Math.floor(secs / 60);
  secs = t - minutes * 60;

  return `${minutes}:${secs.toFixed(3)}`;
}
