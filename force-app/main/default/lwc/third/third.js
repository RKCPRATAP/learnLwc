import { LightningElement } from "lwc";

export default class Third extends LightningElement {
  isVisible = false;
  handleChange() {
    this.isVisible = !this.isVisible;
  }
}
