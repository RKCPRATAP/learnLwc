import { api, wire, LightningElement } from "lwc";
import { notifyRecordUpdateAvailable } from "lightning/uiRecordApi";
import ACCOUNT_NAME from "@salesforce/schema/Account.Name";
import ACCOUNT_TIKER_SYMBOL from "@salesforce/schema/Account.TickerSymbol";
import { getFieldValue, getRecord } from "lightning/uiRecordApi";
import updateTikerRecord from "@salesforce/apex/AccountHelper.updateTikerRecord";
export default class ImperativeApexDML extends LightningElement {
  accname = "";
  acctiker = "";
  @api recordId;
  @wire(getRecord, {
    recordId: "$recordId",
    fields: [ACCOUNT_NAME, ACCOUNT_TIKER_SYMBOL]
  })
  outputFunction({ error, data }) {
    if (error) {
      console.log(error);
    } else if (data) {
      this.accname = getFieldValue(data, ACCOUNT_NAME);
      this.acctiker = getFieldValue(data, ACCOUNT_TIKER_SYMBOL);
    }
  }
  handleChange(event) {
    this.acctiker = event.target.value;
  }
  updateTiker(event) {
    updateTikerRecord({
      recordId: this.recordId,
      newTicker: this.acctiker
    })
      .then((data) => {
        console.log("Update Record Succesfull", data);
        notifyRecordUpdateAvailable([{ recordId: this.recordId }]);
      })
      .catch((error) => {
        console.log("Record Update failed", error);
      });
  }
}
