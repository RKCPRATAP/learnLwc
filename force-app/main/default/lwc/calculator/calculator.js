import { LightningElement } from "lwc";

export default class Calculator extends LightningElement {
  firstNumber = 0;
  secondNumber = 0;
  result = 0;
  displayResult = false;
  handleNumberChange(event) {
    const { name, value } = event.target;
    if (name === "firstNumber") {
      this.firstNumber = parseFloat(value);
    }
    if (name === "secondNumber") {
      this.secondNumber = parseFloat(value);
    }
  }

  handleCalculate(event) {
    this.displayResult = true;
    const labelElement = event.target.label;
    if (labelElement === "Add") {
      this.result = this.firstNumber + this.secondNumber;
    }
    if (labelElement === "Subtract") {
      this.result = this.firstNumber - this.secondNumber;
    }
    if (labelElement === "Multiply") {
      this.result = this.firstNumber * this.secondNumber;
    }
    if (labelElement === "Divide") {
      if (this.secondNumber !== 0) {
        this.result = this.firstNumber / this.secondNumber;
      } else {
        this.result = "Cannot divide by zero";
      }
    }
    if (labelElement === "Clear") {
      this.firstNumber = 0;
      this.secondNumber = 0;
      this.result = 0;
    }
  }
}
