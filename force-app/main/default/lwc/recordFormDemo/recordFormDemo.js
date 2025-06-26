import { api, LightningElement } from "lwc";
import NAME_FEILD from "@salesforce/schema/Account.Name";
import RATING_FEILD from "@salesforce/schema/Account.Rating";
import PHONE_FEILD from "@salesforce/schema/Account.Phone";
import INDUSTRY_FEILD from "@salesforce/schema/Account.Industry";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { NavigationMixin } from "lightning/navigation";
export default class RecordFormDemo extends NavigationMixin(LightningElement) {
  @api recordId;
  @api objectApiName;
  feilds = [NAME_FEILD, RATING_FEILD, PHONE_FEILD, INDUSTRY_FEILD];
  showToast() {
    const event = new ShowToastEvent({
      title: "Success",
      variant: "success",
      mode: "dismissable",
      //message:",
      message: "Ok Recrord Update"
      //message: ", Your record is updated Successfully!"
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
  }
}
