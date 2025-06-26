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
  myDetails;
  anotherProperty = "Another Property";
  accounts = [];
  errors;
  columns = columns;
  //Wire Adeptor with Function
  //This is a wire adapter with function that will be called when the data is available
  //It will update the accounts data by adding a default value for Rating if it is not present
  //This is useful when you want to modify the data before it is used in the component
  //In this case, we are adding a default value of "Warm" for Rating
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
