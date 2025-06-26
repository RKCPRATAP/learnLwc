import { LightningElement } from "lwc";

export default class Second extends LightningElement {
  firstString = "";
  secondString = "";
  joinedString;
  handleNumberChange(event) {
    const { name, value } = event.target;
    if (name === "firstString") {
      this.firstString = value;
    } else if (name === "secondString") {
      this.secondString = value;
    }
  }
  handleJoinStrings() {
    const joinedString = `${this.firstString.toLocaleUpperCase()} ${this.secondString.toLocaleUpperCase()}`;
    this.joinedString = joinedString;
  }
}
