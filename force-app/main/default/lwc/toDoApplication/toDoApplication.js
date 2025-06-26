import { LightningElement } from "lwc";

export default class ToDoApplication extends LightningElement {
  taskname = "";
  taskdate = null;
  incompletetasks = [];
  completetaks = [];
  handleChange(event) {
    const { name, value } = event.target;
    if (name === "taskname") {
      this.taskname = value;
    }
    if (name === "taskdate") {
      this.taskdate = value;
    }
  }
  resetHandle() {
    this.taskname = "";
    this.taskdate = null;
  }
  addTaskHandle() {
    //if tastdate is missing the set today date as end date
    if (!this.taskdate) {
      this.taskdate = new Date().toISOString().slice(0, 10);
    }
    if (this.validateTask()) {
      this.incompletetasks = [
        ...this.incompletetasks,
        {
          taskname: this.taskname,
          taskdate: this.taskdate
        }
      ];
      //this.resetHandle();
      let sortedArray = this.sortTask(this.incompletetasks);
      this.incompletetasks = [...sortedArray];
      console.log(this.incompletetasks);
    }
  }
  validateTask() {
    let isValid = true;
    let element = this.template.querySelector(".taskname");
    //condition 1 is task is not empty
    //condition 2 is taskname is not duplicate

    if (!this.taskname) {
      //check if task is empty
      isValid = false;
    } else {
      let taskItem = this.incompletetasks.find(
        (currItem) =>
          currItem.taskname === this.taskname &&
          currItem.taskdate === this.taskdate
      );
      if (taskItem) {
        //check if task is duplicate
        isValid = false;
        element.setCustomValidity("Task is Already Avaiable");
      }
    }

    if (isValid) {
      element.setCustomValidity("");
    }
    element.reportValidity();
    return isValid;
  }
  sortTask(inputarr) {
    let sortedArr = inputarr.sort((a, b) => {
      const dateA = new Date(a.taskdate);
      const dateB = new Date(b.taskdate);
      return dateA - dateB;
    });
    return sortedArr;
  }
}
