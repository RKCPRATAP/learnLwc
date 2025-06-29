public with sharing class CustomLookupController {
  @AuraEnabled(cacheable=true)
  public static List<sObject> searchRecords(
    String searchKey,
    String objectApiName
  ) {
    List<SObject> sObjectList = new List<SObject>();
    if (String.isNotBlank(searchKey)) {
      String key = '%' + searchKey + '%';
      String queryString =
        'SELECT Id, Name FROM ' +
        objectApiName +
        ' WHERE Name LIKE :key';
      sObjectList = Database.query(queryString, AccessLevel.USER_MODE);
    }
    return sObjectList;
  }
}
