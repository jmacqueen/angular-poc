angular
.module('app')
.directive('blinqAccountSelector', accountListDirective);

function accountListDirective () {
	return {
		restrict: 'E',
		replace: true,
    controller: accountListDirectiveController,
    controllerAs: 'accounts',
		scope: {
      'selectedAccount': "="
		},
		templateUrl: 'components/account/account-list-directive.html',
		link: link
	};
}

function accountListDirectiveController ($scope, $element, $attrs, AccountService) {
    var self = this;

    self.select = select;

    activate();

  /////////////////////////////////

    //// Resolve the data fetch before displaying
    function activate() {
        return AccountService.getAll.then(function(response) {
            self.all = response.data.sort(nameSort);
            $scope.selectedAccount = self.selected = self.all[0];
        });
    }

    function select(account, $event){
      $event.preventDefault();
      $scope.selectedAccount = self.selected = account;
    }

    function nameSort (a, b) {
      if (a.name > b.name){ return  1; }
      if (a.name < b.name){ return -1; }
      return 0;
    }
}

// Would hold DOM manipulation
function link (scope, element, attrs, fn) {

}
