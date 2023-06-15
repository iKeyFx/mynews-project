import contentView from "./views/contentView.js";
import * as model from "./model";
import { async } from "regenerator-runtime";

const spinnerClass = document.querySelector(".spinner-class");
export const timerCnnBbc = () => {
  const parentEL = document.querySelector(".single_source_con");
  parentEL.style.display = "none";
  spinnerClass.style.display = "grid";
  setTimeout(() => {
    parentEL.style.display = "grid";
    spinnerClass.style.display = "none";
  }, 2000);
};

export const timerOtherCategory = () => {
  const parentEL = document.querySelector(".single_source_con");
  parentEL.style.display = "none";
  spinnerClass.style.display = "grid";
  setTimeout(() => {
    parentEL.style.display = "grid";
    spinnerClass.style.display = "none";
  }, 2000);
};

export const timerContentDetails = function () {
  const PageCon = document.querySelector(".single_page--con");
  spinnerClass.style.display = "grid";
  // PageCon.style.display = "none";
  setTimeout(() => {
    PageCon.style.display = "grid";
    // contentView.generateContent(model.store.search.result);
    contentView.generateRelatedNews(model.store.search.relatedNews);
    spinnerClass.style.display = "none";
  }, 2000);
};

export const timerHompage = () => {
  const mainTag = document.getElementsByTagName('main')[0];
  mainTag.style.display = 'none';
  spinnerClass.style.display = "grid";
  setTimeout(() => {
    mainTag.style.display = 'grid';
    spinnerClass.style.display = "none";
  }, 2000);
};
