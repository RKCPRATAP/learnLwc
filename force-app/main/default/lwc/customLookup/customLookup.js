import { LightningElement, wire } from "lwc";
import searchRecords from "@salesforce/apex/CustomLookupController.searchRecords";
export default class CustomLookup extends LightningElement {
  apiName = "Account"; // Default object API name, can be changed as needed
  searchValue = "A";
  objectLabel = "Account";
  iconName = "standard:account"; // Default icon for the object, can be changed as needed
  @wire(searchRecords, {
    searchKey: "$searchValue",
    objectApiName: "$apiName"
  })
  outputs;
}
