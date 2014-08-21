(function (){
  function AccountsListCtrl(AccountService){
    var self = this;
    self.testObject = AccountService.testObject;
    self.all = null;

    activate();

  /////////////////////////////////

    function activate() {
        return AccountService.getAll.then(function(response) {
            self.all = response.data;
            return self.all;
        });
    }
  }

  angular.module('app')
    .controller('AccountsListCtrl', AccountsListCtrl);
})();
