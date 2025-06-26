import { LightningElement } from "lwc";

export default class ParentHook extends LightningElement {
  displayChild = false;
  constructor() {
    super();
    console.log("Parent constructor called");
  }

  connectedCallback() {
    console.log("Parent connectedCallback called");
  }
  renderedCallback() {
    console.log("Parent renderedCallback called");
  }
  disconnectedCallback() {
    console.log("Parent disconnectedCallback called");
  }
  errorCallback(error, stack) {
    console.log("Parent errorCallback called");
    console.error("Error:", error);
    console.error("Stack:", stack);
  }
  handleToggleCounter(event) {
    this.displayChild = event.target.checked;
  }
}
