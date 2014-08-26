angular
  .module('app')
  .directive('adEditForm', AdEditFormDirective);

function AdEditFormDirective () {
	return {
		restrict: 'E',
		replace: true,
    controller: AdEditFormDirectiveController,
    controllerAs: 'adEditor',
		scope: {
      'selectedAds': "="
		},
		templateUrl: 'components/ad/ad-edit-form/ad-edit-form-directive.html',
		link: link
	};
}

function AdEditFormDirectiveController ($scope, $element, $attrs, AdService) {
  var self = this;

  $scope.$watch('selectedAds', selectedAdsChange);

  activate();

  ///////////////////////////////////

  function activate() {

  }

  function selectedAdsChange(){

  }
}

function link (scope, element, attrs, fn) {

}
