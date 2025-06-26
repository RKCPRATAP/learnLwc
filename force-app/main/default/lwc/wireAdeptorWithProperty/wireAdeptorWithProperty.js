import { LightningElement, wire } from "lwc";
import getAccounts from "@salesforce/apex/AccountHelper.getAccounts";
const columns = [
  { label: "Accoun Name", fieldName: "Name" },
  { label: "Phone", fieldName: "Phone", type: "phone" },
  { label: "Rating", fieldName: "Rating" },
  { label: "AnnualRevenue", fieldName: "AnnualRevenue", type: "currency" }
];
export default class WireAdeptorWithProperty extends LightningElement {
  columns = columns;
  @wire(getAccounts)
  accounts;
}
