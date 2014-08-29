(function (){

angular
  .module('app')
  .directive('blinqAdList', adListDirective);

function adListDirective() {
	return {
		restrict: 'E',
		replace: true,
    controller: AdListDirectiveController,
    controllerAs: 'adList',
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

  self.selectedAds = $scope.selectedAds;

  $scope.$watch('selectedCampaign', selectedCampaignChange);

  activate();

//////////////////////////////////

  function activate(){
    self.all = null;

    // gridOptions.columnDefs only updates on $scope variables passed in as a string. Boo, ngGrid v2. Boo.
    self.gridOptions = {
      data: "adList.all",
      selectedItems: self.selectedAds,
      columnDefs: "columnDefinitions",
      multiSelect: false
    };

    return selectedCampaignChange;
  }
  function selectedCampaignChange() {
    AdService.getColumnDefs($scope.selectedCampaign)
      .then(function(response){
        return $scope.columnDefinitions = response.data;
      });
    return AdService.getAdsForCampaign($scope.selectedCampaign)
            .then(function(response) {
              self.all = response.data;
              self.gridOptions.selectAll(false);
            });
  }

}
function link (scope, element, attrs, fn) {

}

})();
