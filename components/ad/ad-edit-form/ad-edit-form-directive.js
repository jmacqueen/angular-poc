angular
  .module('app')
  .directive('blinqAdEditForm', AdEditFormDirective);

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

function AdEditFormDirectiveController ($scope, $element, $attrs, AdService, $q) {
  var self = this;

  self.changes = {};
  self.schema = {};
  self.form = [];

  $scope.$watch('selectedAds', selectedAdsChange, true);

  activate();

  ///////////////////////////////////

  function activate() {
  }

  function selectedAdsChange(newVal, oldVal){
    var getSchema = AdService.getSchema(newVal);
    var getForm = AdService.getForm(newVal);

    $q.all([getSchema, getForm])
      .then(function(response){
        var schemaJSON = response[0].data;
        var formJSON = response[1].data;
        self.schema = schemaJSON;
        self.form = formJSON;
      });
  }
}

function link (scope, element, attrs, fn) {

}
