export function toFormattedTime(counter: number, intervalInMs: number) {
  const totalSecs = (counter * intervalInMs) / 1000;

  const minutes = Math.floor(totalSecs / 60);
  const secsRemain = totalSecs - minutes * 60;

  return `${minutes}:${secsRemain.toFixed(3)}`;
}
