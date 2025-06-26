import { LightningElement, wire } from "lwc";
import getAccounts from "@salesforce/apex/AccountHelper.getAccounts";
import Rating from "@salesforce/schema/Account.Rating";
const columns = [
  { label: "Account Name", fieldName: "Name" },
  { label: "Phone", fieldName: "Phone", type: "phone" },
  { label: "Rating", fieldName: "Rating" },
  { label: "AnnualRevenue", fieldName: "AnnualRevenue", type: "currency" }
];
export default class WireAdeptorWithFunction extends LightningElement {
  accounts;
  errors;
  columns = columns;
  @wire(getAccounts) getAccFunction({ data, error }) {
    if (data) {
      let updateAccounts = data.map((curritem) => {
        let updatedObject = {};
        if (!curritem.hasOwnProperty("Rating")) {
          updatedObject = {
            ...curritem,
            Rating: "Warm"
          };
        } else {
          updatedObject = {
            ...curritem
          };
        }
        return updatedObject;
      });
      this.errors = undefined;
      this.accounts = updateAccounts;
    } else if (error) {
      console.log(error);
      this.errors = error;
      this.accounts = undefined;
    }
  }
}
