import { api, LightningElement } from "lwc";

export default class DynamicRecordAndObject extends LightningElement {
  @api recordId; // Record ID to be used in the component
  @api objectApiName; // Object API Name to be used in the component
}
