import {startMerge} from "./Sorting/merge_sort.js";
import {bubbleMerge} from "./Sorting/bubble_sort.js";
import {quickMerge} from "./Sorting/quick_sort.js";
import {heapMerge} from "./Sorting/heap_sort.js";


export const bars = [];
export const barSizes = [];

const generateBar = (height, index) => {
  const element = document.createElement("div");
  element.style.height = `${height}vh`;
  element.style.width = "10px";
  element.style.margin = "1px";
  element.style.backgroundColor = "aqua";
  element.setAttribute("id", `id-${index}`);

  return element;
};

const generateBars = (value) => {
  const parent = document.getElementById("parent");
  let children = [];
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }

  for (let i = 0; i < value; i++) {
    const height = Math.ceil(Math.random() * 70);
    const bar = generateBar(height, i);
    children.push(bar);
    bars.push(bar);
    barSizes.push(height);
  }

  parent.append(...children);
};


export const changeHeight = (bar, height, color) => {
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


const listener = () => {
  const slider = document.getElementById("myRange");
  const value = slider.value;
  
  slider.addEventListener("change", generateBars);
};

const start = () => {
  const listen = document.getElementById("myRange");
    const val = listen.value;
    generateBars(val);
    listen.addEventListener("change", () => {
      const value = listen.value;
      generateBars(value);
    });
  
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
