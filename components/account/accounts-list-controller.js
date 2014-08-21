
function AccountsListCtrl(AccountService){
  var self = this;
  self.testObject = AccountService.testObject;

}

angular.module('app')
  .controller('AccountsListCtrl', AccountsListCtrl);
