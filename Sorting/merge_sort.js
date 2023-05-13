import { bars, barSizes, changeHeight } from "../index.js";

export const startMerge = () => {
  mergeSort(0, bars.length - 1);
};

const mergeSort = (start, end) => {
  if (start >= end) {
    return;
  }

  const mid = Math.floor((start + end) / 2);
  changeHeight(bars[mid], barSizes[mid], "#EA53FC");
  mergeSort(start, mid);
  mergeSort(mid + 1, end);
  merge(start, mid, end);
};

const merge = (start, mid, end) => {
  let leftStart = start;
  let rightStart = mid + 1;
  let size = 0;
  let result = [];
  for (let i = start; i <= end; i++) {
    if (leftStart > mid) {
      result[size++] = barSizes[rightStart++];
      changeHeight(bars[rightStart - 1], barSizes[leftStart - 1], "#F78D6B");
    } else if (rightStart > end) {
      result[size++] = barSizes[leftStart++];
      changeHeight(bars[leftStart - 1], barSizes[leftStart - 1], "#F78D6B");
    } else if (barSizes[leftStart] < barSizes[rightStart]) {
      result[size++] = barSizes[leftStart++];
      changeHeight(bars[leftStart - 1], barSizes[leftStart - 1], "#F78D6B");
    } else {
      result[size++] = barSizes[rightStart++];
      changeHeight(bars[rightStart - 1], barSizes[rightStart - 1], "#F78D6B");
    }
  }
  for (let i = 0; i < size; i++) {
    barSizes[start++] = result[i];
    changeHeight(bars[start - 1], barSizes[start - 1], "#6BF773");
  }
};
