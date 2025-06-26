import { LightningElement } from "lwc";

export default class ConditionalRendering extends LightningElement {
  isVisible = false;
  // Method to toggle the visibility of the element
  // This method will be called when the button is clicked
  // It toggles the value of isVisible between true and false
  // When isVisible is true, the element will be displayed
  // When isVisible is false, the element will be hidden
  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
