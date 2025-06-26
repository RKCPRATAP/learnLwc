import { LightningElement } from "lwc";

export default class ChildHook extends LightningElement {
  constructor() {
    super();
    console.log("Child constructor called");
  }
  connectedCallback() {
    console.log("Child connectedCallback called");
  }
  renderedCallback() {
    console.log("Child renderedCallback called");
  }
  disconnectedCallback() {
    console.log("Child disconnectedCallback called");
  }
  errorCallback(error, stack) {
    console.log("Child errorCallback called");
    console.error("Error:", error);
    console.error("Stack:", stack);
  }
}
