angular
  .module('app')
  .directive('blinqCampaignSelector', campaignListDirective);

function campaignListDirective () {
	return {
		restrict: 'E',
		replace: true,
    controller: campaignListDirectiveController,
    controllerAs: 'campaigns',
		scope: {
      'selectedAccount': "=",
      'selectedCampaign': "="
		},
		templateUrl: 'components/campaign/campaign-list-directive.html',
		link: link
	};
}

function campaignListDirectiveController ($scope, $element, $attrs, CampaignService) {
  var self = this;
  self.select = select;
  $scope.$watch('selectedAccount', selectedAccountChange);

  activate();

///////////////////////////////////////
  function activate(){
    return selectedAccountChange;
  }

  function selectedAccountChange () {
    return CampaignService.getForAccount($scope.selectedAccount)
            .then(function(response) {
              self.all = response.data.sort(nameSort);
              if (response.data.length === 0) {
                $scope.selectedCampaign = self.selected = null;
              }
            });
  }

  function select(campaign, $event) {
    $scope.selectedCampaign = self.selected = campaign;
  }

  function nameSort (a, b) {
    if (a.name > b.name){ return  1; }
    if (a.name < b.name){ return -1; }
    return 0;
  }
}

function link (scope, element, attrs, fn) {

}
