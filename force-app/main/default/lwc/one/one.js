import { LightningElement } from "lwc";

export default class One extends LightningElement {
  myTask = ["Task 0", "Task 1", "Task 2", "Task 3"];
  handleClick() {
    this.myTask.push("Task 4");
    this.myTask = [...this.myTask]; // Trigger reactivity by creating a new array
  }
}
