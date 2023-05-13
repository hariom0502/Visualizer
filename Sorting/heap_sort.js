import { bars, barSizes, changeHeight } from "../index.js";

function swapHeap(arr, a, b) {
  changeHeight(bars[a], barSizes[a], "#F78D6B");
  changeHeight(bars[b], barSizes[b], "#F78D6B");
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  changeHeight(bars[a], barSizes[a], "#F78D6B");
  changeHeight(bars[b], barSizes[b], "#F78D6B");

  changeHeight(bars[a], barSizes[a], "#53AAFc");
  changeHeight(bars[b], barSizes[b], "#53AAFc");
}

export const heapMerge = () => {
  heapSort(barSizes);
};

function heapSort(arr) {
  var n = arr.length;
  for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  for (var i = n - 1; i > 0; i--) {
    swapHeap(arr, 0, i);
    changeHeight(bars[i], barSizes[i], "#6BF773");
    changeHeight(bars[i], barSizes[i], "#EA53FC");
    heapify(arr, i, 0);
    changeHeight(bars[i], barSizes[i], "#53AAFc");
    changeHeight(bars[i], barSizes[i], "#6BF773");
  }

  return arr;
}

function heapify(arr, size, i) {
  let larger = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < size && arr[left] > arr[larger]) {
    if (larger != i) {
      changeHeight(bars[larger], barSizes[larger], "#53AAFc");
    }
    larger = left;
    changeHeight(bars[larger], barSizes[larger], "#F78D6B");
  }
  if (right < size && arr[right] > arr[larger]) {
    if (larger != i) {
      changeHeight(bars[larger], barSizes[larger], "#53AAFc");
    }
    larger = right;
    changeHeight(bars[larger], barSizes[larger], "#F78D6B");
  }
  if (larger != i) {
    swapHeap(arr, i, larger);
    heapify(arr, size, larger); //heapify again
  }

  for (let k = larger; k <= right; k++) {
    changeHeight(bars[k], barSizes[k], "#6BF773");
  }
}
