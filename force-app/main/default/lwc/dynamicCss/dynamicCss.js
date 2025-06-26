import { LightningElement } from "lwc";

export default class DynamicCss extends LightningElement {
  pElement = "choclateColor";
  addHandler() {
    const element = this.template.querySelector("p");
    element.classList.add("bordered");
  }
  removeHandler() {
    const element = this.template.querySelector("p");
    element.classList.remove("bordered");
  }
  toggleHandler() {
    const element = this.template.querySelector("p");
    element.classList.toggle("bordered");
  }
}
