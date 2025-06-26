import { LightningElement, track } from "lwc";

export default class TrackDecorator extends LightningElement {
  //1 There is no need to use @track decorator in LWC as all properties are reactive by default.
  // 2 In case of complex objects, you can use @track to make the entire object reactive.
  //3 In case of arrays, you can use @track to make the entire array reactive.
  //4 In case of refreshing the entire object or array, dont need use @track to make the entire object or array reactive.
  @track myDetails = {
    name: "John Doe",
    age: 30,
    gender: "Male",
    location: "New York"
  };
  handleChange() {
    this.myDetails.name = "Rohit";
    this.myDetails.age = 80;
    this.myDetails.gender = "Female";
    this.myDetails.location = "London";
  }
}
