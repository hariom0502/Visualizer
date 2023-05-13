import { bars, barSizes, changeHeight } from "../index.js";

function bubbleSwap(j, k) {
  const temp = barSizes[j];
  barSizes[j] = barSizes[k];
  barSizes[k] = temp;
}

export const bubbleMerge = () => {
  bubbleSort();
};

const bubbleSort = () => {
  let n = barSizes.length;

  for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      changeHeight(bars[j], barSizes[j], "#EA53FC");
      if (barSizes[j] > barSizes[j + 1]) {
        changeHeight(bars[j], barSizes[j], "#F78D6B");
        changeHeight(bars[j + 1], barSizes[j + 1], "#F78D6B");
        bubbleSwap(j, j + 1);
        changeHeight(bars[j], barSizes[j], "#F78D6B");
        changeHeight(bars[j + 1], barSizes[j + 1], "#F78D6B");
      }
      changeHeight(bars[j], barSizes[j], "#EA53FC");
    }
    changeHeight(bars[j], barSizes[j], "#6BF773");
  }

  changeHeight(bars[0], barSizes[0], "#6BF773");
};
