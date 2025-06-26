// File: force-app/main/default/classes/OppController.cls
// This Apex class retrieves a list of Opportunities from Salesforce.

public with sharing class OppController {
  @AuraEnabled(cacheable=true)
  public static List<Opportunity> getOpportunities() {
    return [SELECT Id, Name, StageName, CloseDate FROM Opportunity LIMIT 10];
  }
}
