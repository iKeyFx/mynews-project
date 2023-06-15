import * as model from "./model";
import * as timeHandler from "./timeHandler";
import * as clearView from "./views/clearView";
import navView from "./views/navView";
import singleSource from "./views/singleSourceView";
import contentView from "./views/contentView";
import hompageView from "./views/hompageView";
import View from "./views/view";
import { async } from "regenerator-runtime";
import "core-js";
import "regenerator-runtime";
import View from "./views/view";
import paginationView from "./views/paginationView";

const errorOk = document.querySelector(".error-ok");
const errorDiv = document.querySelector(".errorlead");
errorOk.addEventListener("click", () => {
  errorDiv.style.display = "none";
  document.querySelector(".overlay").classList.add("hidden");
});
// Menu Open handler
navView.menuOpen.addEventListener("click", () => {
  navView.updateMenu("grid", "grid");
});

// Try
let screenW = screen.width;
if (screenW <= 800) {
  const parentEl = document.querySelector(".nav_links_ul");
  parentEl.addEventListener("click", function (e) {
    const btn = e.target.closest(".test_link");
    if (!btn) return;
    navView.updateMenu("none", "none");
  });
}

// Menu Close handler
navView.menuClose.addEventListener("click", () => {
  navView.updateMenu("none", "none");
});

// Vertical Line Hander
contentView.updateVerticalline();
window.addEventListener("resize", () => {
  contentView.updateVerticalline();
});

// Load Single Source
const loadSingleSourcePage = async function (data) {
  try {
    if (!data) throw new error();
    await model.typeNews(data);

    timeHandler.timerCnnBbc();
    singleSource.updatePageSource(data);
    singleSource.generateMarkUp(model.getNewsPerSourcePage());
    paginationView.render(model.store.search);
  } catch (error) {
    singleSource.errorHandler();
  }
};

// Get ID For BBC & CNN
const getIdForPages = function (data) {
  const id = window.location.hash.slice(1);
  const handle = loadSingleSourcePage(data);

  if (id === "") {
    const parentEl = document.querySelector(".single_source_con");
    const parenttr = document.querySelector(".single_page--con");
    parentEl.style.display = "none";
    parenttr.style.display = "none";
  }
  if (!id) return;
  if (id === data) {
    ["hashchange", "load"].forEach((e) => window.addEventListener(e, handle));
  }
};

// Load other categories
const loadCategory = async function (data) {
  try {
    if (!data) throw new error();

    await model.categoryNews(data);

    timeHandler.timerOtherCategory();

    // Change Entertainmnet data
    if (data === "Entertainment%20and%20Arts") {
      const data = "Entertainment";
      singleSource.updatePageSource(data);
      singleSource.generateMarkUp(model.getNewsPerSourcePage());
      paginationView.render(model.store.search);
      return;
    }

    singleSource.updatePageSource(data);
    singleSource.generateMarkUp(model.getNewsPerSourcePage());
    paginationView.render(model.store.search);
  } catch (error) {
    singleSource.errorHandler();
  }
};
// Get ID For Other Category
const getIdForotherCategory = function (data) {
  const id = window.location.hash.slice(1);
  const handle = loadCategory(data);

  if (id === "") {
    const parentEl = document.querySelector(".single_source_con");
    const parenttr = document.querySelector(".single_page--con");
    parentEl.style.display = "none";
    parenttr.style.display = "none";
  }
  if (!id) return;
  if (id === data) {
    ["hashchange", "load"].forEach((e) => window.addEventListener(e, handle));
  }
};

// Update Page Pagination
const updatePaginationResults = function (goToPage) {
  singleSource.generateMarkUp(model.getNewsPerSourcePage(goToPage));

  paginationView.generateMarkUp(model.store.search);
};

// Handle Nav register
const navRegister = function (data) {
  singleSource.clear();
  clearView.clearForNav();
  getIdForPages(data);
};
// Load Content Details
const loadContentPage = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (id !== "") {
      clearView.clearSections();
    }
    if (id === "") {
      timeHandler.timerHompage()
      clearView.clearForHome();
    }
    const singleSourcePage = document.querySelector(".single_source_con");
    singleSourcePage.style.display = "none";
    const PageCon = document.querySelector(".single_page--con");
    PageCon.style.display = "none";
    if (id === "bbc") {
      clearView.clearAllFooterClick();
      navRegister(id);
      return;
    }
    if (id === "cnn") {
      clearView.clearAllFooterClick();
      navRegister(id);
      return;
    }
    if (
      id === "Business" ||
      id === "Sports" ||
      id === "Fashion" ||
      id === "Health" ||
      id === "Entertainment%20and%20Arts"
    ) {
      clearView.clearAllFooterClick();
      singleSource.clear();
      clearView.clearForNav();
      getIdForotherCategory(id);
      return;
    }

    if (id === "terms") {
      clearView.termsCon.style.display = "grid";
      clearView.clearForNav();
      clearView.clearForterms();
      return;
    }
    if (id === "privacy") {
      clearView.privacyCon.style.display = "grid";
      clearView.clearForNav();
      clearView.clearForPrivacy();
      return;
    }
    if (id === "Advertise") {
      clearView.advertCon.style.display = "grid";
      clearView.clearForNav();
      clearView.clearForAdvert();
      return;
    }
    if (id === "ActOf") {
      clearView.actOfCon.style.display = "grid";
      clearView.clearForNav();
      clearView.clearForActOf();
      return;
    }
    if (id === "Transcript") {
      clearView.transcriptCon.style.display = "grid";
      clearView.clearForNav();
      clearView.clearForTranscript();
      return;
    }
    if (!id) {
      const section1 = document.querySelector(".section_1");
      const section2 = document.querySelector(".section_2");
      section1.style.display = "grid";
      section2.style.display = "grid";
      return;
    }
    await model.getContentDetails(id);
    contentView.generateContent(model.store.search.result);
    timeHandler.timerContentDetails();
  } catch (error) {
    singleSource.errorHandler();
  }
};

// Hompage BBc News Render
const loadLastetHompageBbc = async function () {
  try {
    await model.latestNews("bbc");
    hompageView.generateMarkUp(model.getNewsPerHompage());
  } catch (error) {
    console.log(error);
  }
};

// Hompage CCN News Render

const loadLastetHompageCnn = async function () {
  try {
    await model.latestNews("cnn");

    hompageView.generateMarkUpCnn(model.getNewsPerHompage());
  } catch (error) {
    console.log(error);
  }
};

// Hompage carousel
const loadCarousel = async function () {
  try {
    await model.generalNews();

    hompageView.generateMarkUpCarousel(model.getCarousel());
  } catch (error) {
    console.log(error);
    singleSource.errorHandler();
  }
};

// Init Function
const init = function () {
  paginationView.addhandlerCLick(updatePaginationResults);
  singleSource.addRenderClick(loadContentPage);
  loadLastetHompageBbc();
  loadLastetHompageCnn();
  loadCarousel();
};
init();
