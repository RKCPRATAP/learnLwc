import { LightningElement, api } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { NavigationMixin } from "lightning/navigation";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import PHONE_FIELD from "@salesforce/schema/Account.Phone";
import RATING_FIELD from "@salesforce/schema/Account.Rating";
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
export default class RecordEditFormDemo extends NavigationMixin(
  LightningElement
) {
  @api recordId;
  @api objectApiName;
  fields = {
    Name: NAME_FIELD,
    Phone: PHONE_FIELD,
    Rating: RATING_FIELD,
    Industry: INDUSTRY_FIELD
  };

  handleSuccess() {
    const event = new ShowToastEvent({
      title: "Success",
      variant: "success",
      mode: "dismissable",
      //message:",
      message: "Ok Recrord Added Successfully!"
      //message: ", Your record is added Successfully!""
    });
    this.dispatchEvent(event);
  }
  navigateToRecordPage(event) {
    let pageRef = {
      type: "standard__recordPage",
      attributes: {
        recordId: event.detail.id,
        objectApiName: this.objectApiName,
        actionName: "view"
      }
    };
    this[NavigationMixin.Navigate](pageRef);
    this.handleSuccess();
  }
  submitHandle(event) {
    event.preventDefault();
    const field = event.detail.fields;
    if (!field.Industry) {
      field.Industry = "Agriculture";
    }
    this.template.querySelector("lightning-record-edit-form").submit(field);
  }
}
