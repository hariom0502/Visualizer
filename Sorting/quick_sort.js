import { bars, barSizes, changeHeight } from "../index.js";
function swap(a, b) {
    const temp = barSizes[a];
    barSizes[a] = barSizes[b];
    barSizes[b] = temp;
  }
  
  export const quickMerge = () => {
    quickSort(0, bars.length - 1);
  };
  
  const quickSort = (start, end) => {
    if (start < end) {
      let index = partition(start, end);
      quickSort(start, index - 1);
      quickSort(index + 1, end);
    }
  };
  
  const partition = (start, end) => {
    let pivot = barSizes[start];
    let i = start + 1;
    changeHeight(bars[start], barSizes[start], "#EA53FC");
  
    for (let j = i; j <= end; j++) {
      if (barSizes[j] < pivot) {
        changeHeight(bars[j], barSizes[j], "#EA53FC");
  
        changeHeight(bars[i], barSizes[i], "#F78D6B");
        changeHeight(bars[j], barSizes[j], "#F78D6B");
  
        swap(i, j);
  
        changeHeight(bars[i], barSizes[i], "#F78D6B");
        changeHeight(bars[j], barSizes[j], "#F78D6B");
  
        changeHeight(bars[i], barSizes[i], "#53AAFc");
        changeHeight(bars[j], barSizes[j], "#53AAFc");
        i += 1;
      }
    }
  
    let ind = i - 1;
    changeHeight(bars[start], barSizes[start], "#F78D6B");
    changeHeight(bars[ind], barSizes[ind], "#F78D6B");
    swap(start, ind);
    changeHeight(bars[start], barSizes[start], "#F78D6B");
    changeHeight(bars[ind], barSizes[ind], "#F78D6B");
  
    for (let k = start; k <= i; k++) {
      changeHeight(bars[k], barSizes[k], "#6BF773");
    }
  
    return ind;
  };
  