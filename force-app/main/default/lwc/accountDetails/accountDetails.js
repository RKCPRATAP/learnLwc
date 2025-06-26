import { LightningElement, wire } from "lwc";
import getParentAccounts from "@salesforce/apex/AccountHelper.getParentAccounts";
import { getObjectInfo, getPicklistValues } from "lightning/uiObjectInfoApi";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import ACCOUNT_SLA_TYPE_FIELD from "@salesforce/schema/Account.SLA__c";
import ACCOUNT_NO_OF_LOCATIONS_FIELD from "@salesforce/schema/Account.NumberOfLocations__c";
import ACCOUNT_DESCRIPTION_FIELD from "@salesforce/schema/Account.Description";
import ACCOUNT_EXPIRATION_DATE_FIELD from "@salesforce/schema/Account.ExpirationDate__c";
import ACCOUNT_NAME_FIELD from "@salesforce/schema/Account.Name";
import ACCOUNT_PARENT_FIELD from "@salesforce/schema/Account.ParentId";
import { createRecord } from "lightning/uiRecordApi";
export default class AccountDetails extends LightningElement {
  parentoptions = [];
  selParentAccount = "";
  selnoOfLocations = "1";
  selAccName = "";
  selExpDate = null;
  selSlaType = "";
  selDescription = "";
  @wire(getParentAccounts) wired_getParentAccounts({ error, data }) {
    this.parentoptions = [];
    if (data) {
      this.parentoptions = data.map((curritem) => ({
        label: curritem.Name,
        value: curritem.Id
      }));
    } else if (error) {
      console.log(error.message);
    }
  }
  @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
  accountobjectinfo;
  @wire(getPicklistValues, {
    recordTypeId: "$accountobjectinfo.data.defaultRecordTypeId",
    fieldApiName: ACCOUNT_SLA_TYPE_FIELD
  })
  slapicklist;

  handleChange(event) {
    let { name, value } = event.target;
    if (name === "parentacc") {
      this.selParentAccount = value;
    }
    if (name === "accname") {
      this.selAccName = value;
    }
    if (name === "slaexpdt") {
      this.selExpDate = value;
    }
    if (name === "slatype") {
      this.selSlaType = value;
    }
    if (name === "numberoflocations") {
      this.selnoOfLocations = value;
    }
    if (name === "description") {
      this.selDescription = value;
    }
  }

  saveRecord() {
    if (this.validateInput()) {
      let inputFields = {};
      inputFields[ACCOUNT_PARENT_FIELD.fieldApiName] = this.selParentAccount;
      inputFields[ACCOUNT_NO_OF_LOCATIONS_FIELD.fieldApiName] =
        this.selnoOfLocations;
      inputFields[ACCOUNT_SLA_TYPE_FIELD.fieldApiName] = this.selSlaType;
      inputFields[ACCOUNT_EXPIRATION_DATE_FIELD.fieldApiName] = this.selExpDate;
      inputFields[ACCOUNT_DESCRIPTION_FIELD.fieldApiName] = this.selDescription;
      inputFields[ACCOUNT_NAME_FIELD.fieldApiName] = this.selAccName;

      let recordInput = {
        apiName: ACCOUNT_OBJECT.objectApiName,
        fields: inputFields
      };

      createRecord(recordInput)
        .then((record) => {
          console.log(record);
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      console.log("Invalid Input");
    }
  }

  validateInput() {
    let fields = Array.from(this.template.querySelectorAll(".validateme"));
    let isValid = fields.every((eachfield) => eachfield.checkValidity());
    return isValid;
  }
}
