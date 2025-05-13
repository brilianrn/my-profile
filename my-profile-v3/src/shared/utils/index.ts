import { ISectionHeader } from "@/components/navigation/navigation";

/**
 * @param {number} currentPosition Current Scroll position
 * @param {Array<ISectionHeader>} sectionPositionArray Array of positions of all sections
 * @param {number} startIndex Start index of array
 * @param {number} endIndex End index of array
 * @return {number} Current Active index
 */
export const nearestIndex = (
  currentPosition: number,
  sectionPositionArray: ISectionHeader[],
  startIndex: number,
  endIndex: number
): number => {
  if (startIndex === endIndex) return startIndex;
  else if (startIndex === endIndex - 1) {
    if (
      Math.abs(
        sectionPositionArray[startIndex].headerRef.current.offsetTop -
          currentPosition
      ) <
      Math.abs(
        sectionPositionArray[endIndex].headerRef.current.offsetTop -
          currentPosition
      )
    )
      return startIndex;
    else return endIndex;
  } else {
    const nextNearest = ~~((startIndex + endIndex) / 2);
    const a = Math.abs(
      sectionPositionArray[nextNearest].headerRef.current.offsetTop -
        currentPosition
    );
    const nextHeaderRef =
      sectionPositionArray[nextNearest + 1].headerRef.current;
    const b = nextHeaderRef
      ? Math.abs(nextHeaderRef.offsetTop - currentPosition)
      : Number.MAX_VALUE;
    if (a < b) {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        startIndex,
        nextNearest
      );
    } else {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        nextNearest,
        endIndex
      );
    }
  }
};
