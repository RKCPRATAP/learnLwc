import { LightningElement } from "lwc";

export default class RenderListDemo extends LightningElement {
  arrayList = ["Item 1", "Item 2", "Item 3"];

  items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" }
  ];
}
