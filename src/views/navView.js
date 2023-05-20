import View from "./view";

class navView extends View {
    menuOpen = document.querySelector(".icon-menu");
    menuClose = document.querySelector(".menu-close");
    navWhole = document.querySelector(".nav_whole");
    SingleSourceCon = document.querySelector(".single_source_con");



    // Update Menu Function 
    updateMenu (input1, input2)  {
      //  console.log(input1, input2)
    this.navWhole.style.display = input1;
    this.menuClose.style.display = input2;
    this.menuOpen.classList.toggle("hidden");
  };
 
}

export default new navView();