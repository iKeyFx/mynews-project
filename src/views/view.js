import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";

export default class View {
  constructor() {}
  render(data) {
    this.data = data;
    const markup = this.generateMarkUp();

    const parentEL = document.querySelector(".pagination");
    parentEL.innerHTML = "";
    parentEL.insertAdjacentHTML("afterbegin", markup);
  }

  generateMarkUp() {}
}
