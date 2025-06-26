import { api, LightningElement } from "lwc";

export default class ApiDecoratorChild extends LightningElement {
  @api user;
}
