export default function shorten(
  value: string,
  startIndex?: number,
  endIndex?: number
) {
  return (
    `${value?.slice(0, startIndex || 4)}-${value?.slice(
      -`${endIndex}` || -4
    )} ` || "0x00000"
  );
}
