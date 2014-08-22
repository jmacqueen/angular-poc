(function (){
  'use strict';

  angular.module('app')
    .controller('AccountsListCtrl', AccountsListCtrl);

  function AccountsListCtrl(AccountService){
    var self = this;
    self.select = select;

    self.selected = null;
    self.all = null;

    activate();

  /////////////////////////////////

    function activate() {
        return AccountService.getAll.then(function(response) {
            self.all = response.data.sort(nameSort);
            self.selected = self.all[0];
            return self.all;
        });
    }

    function select(index, $event){
      $event.preventDefault();
      self.selected = self.all[index];
    }

    function nameSort (a, b) {
      if (a.name > b.name){return  1; }
      if (a.name < b.name){return -1; }
      return 0;
    }

  }
})();
