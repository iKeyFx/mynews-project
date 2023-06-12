import "core-js/stable";
import "regenerator-runtime/runtime";

export const menuOpen = document.querySelector(".icon-menu");
export const menuClose = document.querySelector(".menu-close");
export const navWhole = document.querySelector(".nav_whole");
export const verticalLine = document.querySelector(".vertiacal_line");
export const singlePageD = document.querySelector(".single_page_details");

export const menuFunction = (input1, input2) => {
  navWhole.style.display = input1;
  menuClose.style.display = input2;
  menuOpen.classList.toggle("hidden");
};

// Update Vertical Line
export const updateVerticalline = () => {
  const getH = singlePageD.getBoundingClientRect();
  verticalLine.style.height = getH.height + "px";
};
