const bars = [];
const barSizes = [];

const generateBar = (height, index) => {
  const element = document.createElement("div");
  element.style.height = `${height}vh`;
  element.style.width = "10px";
  element.style.margin = "1px";
  element.style.backgroundColor = "aqua";
  element.setAttribute("id", `id-${index}`);

  return element;
};

const generateBars = () => {
  const parent = document.getElementById("parent");
  let children = [];
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  const divs = document.getElementById("noOfDiv");
  
  let value = divs.value;

  for (let i = 0; i < value; i++) {
    const height = Math.ceil(Math.random() * 90);
    const bar = generateBar(height, i);
    children.push(bar);
    bars.push(bar);
    barSizes.push(height);
  }

  parent.append(...children);
};



const changeHeight = (bar, height, color) => {
  setTimeout(() => {
    if (bar) {
      document.getElementById(
        bar.getAttribute("id")
      ).style.height = `${height}vh`;
      if (color) {
        bar.style.backgroundColor = color;
      }
    }
  }, (timeout += 2));
};

let timeout = 50;

//Merge sort
const startMerge = () => {
  mergeSort(0, bars.length - 1);
};

const mergeSort = (start, end) => {
  if (start >= end) {
    return;
  }

  const mid = Math.floor((start + end) / 2);
  changeHeight(bars[mid], barSizes[mid], "yellow");
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
      changeHeight(bars[rightStart - 1], barSizes[leftStart - 1], "red");
    } else if (rightStart > end) {
      result[size++] = barSizes[leftStart++];
      changeHeight(bars[leftStart - 1], barSizes[leftStart - 1], "red");
    } else if (barSizes[leftStart] < barSizes[rightStart]) {
      result[size++] = barSizes[leftStart++];
      changeHeight(bars[leftStart - 1], barSizes[leftStart - 1], "red");
    } else {
      result[size++] = barSizes[rightStart++];
      changeHeight(bars[rightStart - 1], barSizes[rightStart - 1], "red");
    }
  }
  for (let i = 0; i < size; i++) {
    barSizes[start++] = result[i];
    changeHeight(bars[start - 1], barSizes[start - 1], "green");
  }
};

//Quick sort
function swap(a, b) {
  const temp = barSizes[a];
  barSizes[a] = barSizes[b];
  barSizes[b] = temp;
}

const quickMerge = () => {
  quickSort(0, bars.length - 1);
};

const quickSort = (start, end) => {
  if (start >= end) {
    return;
  }
  let index = partition(start, end);
  quickSort(start, index - 1);
  quickSort(index + 1, end);
};

const partition = (start, end) => {
  let pivot = barSizes[start];
  let i = start + 1;
  changeHeight(bars[start], barSizes[start], "yellow");

  for (let j = i; j <= end; j++) {
    if (pivot > barSizes[j]) {
      changeHeight(bars[j], barSizes[j], "yellow");

      changeHeight(bars[i], barSizes[i], "aqua");
      changeHeight(bars[j], barSizes[j], "aqua");
      swap(i, j);

      changeHeight(bars[i], barSizes[i], "aqua");
      changeHeight(bars[j], barSizes[j], "aqua");

      changeHeight(bars[i], barSizes[i], "red");
      changeHeight(bars[j], barSizes[j], "red");
      i += 1;
    }
  }

  let ind = i - 1;
  changeHeight(bars[start], barSizes[start], "aqua");
  changeHeight(bars[ind], barSizes[ind], "aqua");
  swap(start, ind);
  changeHeight(bars[start], barSizes[start], "aqua");
  changeHeight(bars[ind], barSizes[ind], "aqua");

  for (let k = start; k <= ind + 1; k++) {
    changeHeight(bars[k], barSizes[k], "green");
  }

  return ind;
};

//Heap sort
function swapHeap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

const heapMerge = () => {
  heapSort(barSizes);
};

function heapSort(arr) {
  var n = arr.length;
  for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  for (var i = n - 1; i >= 0; i--) {
    swapHeap(arr, i, 0);
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr, size, i) {
  let larger = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  changeHeight(bars[left], barSizes[left], "yellow");
  changeHeight(bars[right], barSizes[right], "yellow");

  if (left < size && arr[left] > arr[larger]) {
    larger = left;
    changeHeight(bars[left], barSizes[left], "red");
  }
  if (right < size && arr[right] > arr[larger]) {
    larger = right;
    changeHeight(bars[right], barSizes[right], "red");
  }
  if (larger != i) {
    swapHeap(arr, i, larger);
    heapify(arr, size, larger); //heapify again
  }

  for (let k = larger; k <= right; k++) {
    changeHeight(bars[k], barSizes[k], "green");
  }
}

//Bubble sort
function bubbleSwap(j, k) {
  const temp = barSizes[j];
  barSizes[j] = barSizes[k];
  barSizes[k] = temp;
}

const bubbleMerge = () => {
  bubbleSort(barSizes);
};

const bubbleSort = (arr) => {
  n = arr.length;

  let i, j;
  for (i = 0; i < n; i++) {
    for (j = 0; j < n - i - 1; j++) {
      changeHeight(bars[j], barSizes[j], "yellow");
      if (arr[j] > arr[j + 1]) {
        changeHeight(bars[j], barSizes[j], "red");
        changeHeight(bars[j + 1], barSizes[j + 1], "red");
        bubbleSwap(j, j + 1);
        changeHeight(bars[j], barSizes[j], "red");
        changeHeight(bars[j + 1], barSizes[j + 1], "red");
      }
      changeHeight(bars[j], barSizes[j], "yellow");
    }
    changeHeight(bars[j], barSizes[j], "green");
  }

  changeHeight(bars[0], barSizes[0], "green");
};

const listener = () => {
  const slider = document.getElementById("myRange");
  const value = slider.value;
  
  slider.addEventListener("change", generateBars);
};

const start = () => {
  const generatrBarBtn = document.getElementById("generate-bar");
  generatrBarBtn.addEventListener("click", generateBars);
  const mergeBtn = document.getElementById("merge");
  mergeBtn.addEventListener("click", startMerge);
  const quickBtn = document.getElementById("quick");
  quickBtn.addEventListener("click", quickMerge);
  const heapBtn = document.getElementById("heap");
  heapBtn.addEventListener("click", heapMerge);
  const bubbleBtn = document.getElementById("bubble");
  bubbleBtn.addEventListener("click", bubbleMerge);
};

start();
