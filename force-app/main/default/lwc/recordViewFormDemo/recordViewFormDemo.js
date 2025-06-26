import { api, LightningElement } from "lwc";
import NAME_FEILD from "@salesforce/schema/Account.Name";
import RATING_FEILD from "@salesforce/schema/Account.Rating";
import PHONE_FEILD from "@salesforce/schema/Account.Phone";
import INDUSTRY_FEILD from "@salesforce/schema/Account.Industry";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { NavigationMixin } from "lightning/navigation";
export default class RecordViewFormDemo extends NavigationMixin(
  LightningElement
) {
  @api recordId;
  @api objectApiName;
  fields = {
    Name: NAME_FEILD,
    Rating: RATING_FEILD,
    Phone: PHONE_FEILD,
    Industry: INDUSTRY_FEILD
  };
}
