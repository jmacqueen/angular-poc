(function (){

angular
  .module('app')
  .directive('blinqAdList', adListDirective);

function adListDirective() {
	return {
		restrict: 'E',
		replace: true,
    controller: AdListDirectiveController,
    controllerAs: 'ads',
		scope: {
      'selectedCampaign': "=",
      'selectedAds': "="
		},
		templateUrl: 'components/ad/ad-list/ad-list-directive.html',
		link: link
	};
}

function AdListDirectiveController ($scope, $element, $attrs, AdService) {
  var self = this;

  $scope.$watch('selectedCampaign', selectedCampaignChange);

  activate();

//////////////////////////////////

  function activate(){
    self.all= null;
    self.gridOptions = {
      data: "ads.all",
      selectedItems: $scope.selectedAds
    };

    return selectedCampaignChange;
  }
  function selectedCampaignChange() {
    return AdService.getForCampaign($scope.selectedCampaign)
            .then(function(response) {
              self.all = response.data;
              self.gridOptions.selectAll(false);
              if (response.data.length === 0) {
              }
            });
  }

}
function link (scope, element, attrs, fn) {

}

})();
