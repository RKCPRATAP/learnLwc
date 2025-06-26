import { LightningElement, wire } from "lwc";
import getOpportunities from "@salesforce/apex/OppController.getOpportunities";
const columns = [
  { label: "Opp Name", fieldName: "Name" },
  { label: "Stage Name", fieldName: "StageName" },
  { label: "Close Date", fieldName: "CloseDate" }
];
export default class Fourth extends LightningElement {
  opportunities = [];
  error;
  columns = columns;
  @wire(getOpportunities)
  handleOpportunities({ error, data }) {
    if (data) {
      this.opportunities = data;
    } else if (error) {
      this.error = error;
    }
  }
}
