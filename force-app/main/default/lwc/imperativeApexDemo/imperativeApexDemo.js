import { LightningElement, wire } from "lwc";
import getAccounts from "@salesforce/apex/AccountHelper.getAccounts";
import { getObjectInfo, getPicklistValues } from "lightning/uiObjectInfoApi";
import ACCOUNT_INDUSTRY from "@salesforce/schema/Account.Industry";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";

const columns = [
  { label: "Account Name", fieldName: "Name" },
  { label: "Industry", fieldName: "Industry" },
  { label: "Phone", fieldName: "Phone", type: "phone" }
];
export default class ImperativeApexDemo extends LightningElement {
  columns = columns;
  data = [];
  options = [];
  selectedIndusustry;
  @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
  accountInfo;

  @wire(getPicklistValues, {
    recordTypeId: "$accountInfo.data.defaultRecordTypeId",
    objectApiName: ACCOUNT_OBJECT.objectApiName,
    fieldApiName: ACCOUNT_INDUSTRY
  })
  industryPicklist;
  handleChange(event) {
    this.selectedIndusustry = event.target.value;
    console.log(this.selectedIndusustry);
  }

  handleClick() {
    getAccounts({ inputIndustry: this.selectedIndusustry })
      .then((data) => {
        console.log(data);
        this.data = data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
