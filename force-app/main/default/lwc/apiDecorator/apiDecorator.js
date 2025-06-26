import { LightningElement } from "lwc";

export default class ApiDecorator extends LightningElement {
  parentorder = "This is the parent order";
  myDetails = {
    name: "John Doe",
    age: 30,
    gender: "Male",
    location: "New York"
  };
}
