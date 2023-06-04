export const termsCon = document.querySelector(".terms_con");
export const privacyCon = document.querySelector(".privacy_con");
export const advertCon = document.querySelector(".advert_con");
export const actOfCon = document.querySelector(".act_con");
export const transcriptCon = document.querySelector(".transcipt_con");
// Clear Section
export const clearSections = () => {
  const section1 = document.querySelector(".section_1");
  const section2 = document.querySelector(".section_2");

  const parentEl = document.querySelector(".single_page--con");
  parentEl.style.display = "grid";
  section1.style.display = "none";
  section2.style.display = "none";
};

export const clearForNav = () => {
  const section1 = document.querySelector(".section_1");
  const section2 = document.querySelector(".section_2");

  const parentEl = document.querySelector(".single_page--con");
  parentEl.style.display = "none";
  section1.style.display = "none";
  section2.style.display = "none";
};

export const clearAllFooterClick = () => {
  termsCon.style.display = "none";
  privacyCon.style.display = "none";
  advertCon.style.display = "none";
  actOfCon.style.display = "none";
  transcriptCon.style.display = "none";
};

export const clearForterms = () => {
  privacyCon.style.display = "none";
  advertCon.style.display = "none";
  actOfCon.style.display = "none";
  transcriptCon.style.display = "none";
};
export const clearForPrivacy = () => {
  termsCon.style.display = "none";
  advertCon.style.display = "none";
  actOfCon.style.display = "none";
  transcriptCon.style.display = "none";
};

export const clearForAdvert = () => {
  termsCon.style.display = "none";
  privacyCon.style.display = "none";
  actOfCon.style.display = "none";
  transcriptCon.style.display = "none";
};

export const clearForActOf = () => {
  termsCon.style.display = "none";
  privacyCon.style.display = "none";
  advertCon.style.display = "none";
  transcriptCon.style.display = "none";
};
export const clearForTranscript = () => {
  termsCon.style.display = "none";
  privacyCon.style.display = "none";
  advertCon.style.display = "none";
  actOfCon.style.display = "none";
};

export const clearForHome = () => {
  const parentEl = document.querySelector(".single_page--con");
  parentEl.style.display = "none";
};
