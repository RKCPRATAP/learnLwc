public with sharing class AccountHelper {
  @AuraEnabled(cacheable=true)
  public static List<Account> getParentAccounts() {
    return [
      SELECT Id, Name, Type, Industry, Rating, Phone, Website, AnnualRevenue
      FROM Account
      WHERE AnnualRevenue != NULL
      LIMIT 10
    ];
  }
  @AuraEnabled(cacheable=true)
  public static List<Account> getAccounts() {
    return [
      SELECT Id, Name, Industry, Type, Rating, Phone, Website, AnnualRevenue
      FROM Account
      LIMIT 10
    ];
  }
  @AuraEnabled
  public static string updateTikerRecord(String recordId, String newTicker) {
    Account acc = new Account(Id = recordId, TickerSymbol = newTicker);
    try {
      update acc;
      return 'Success';
    } catch (Exception ex) {
      return ex.getMessage();
    }
  }
}
