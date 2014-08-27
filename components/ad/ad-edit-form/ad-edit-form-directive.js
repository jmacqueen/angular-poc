(function(){

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

  self.selectedAds = $scope.selectedAds;

  self.changes = {};
  self.schema = {};
  self.form = [];
  self.onSubmit = onSubmit;

  $scope.$watch(function(){
                  return self.selectedAds;
                }, selectedAdsChange, true);

  activate();

  ///////////////////////////////////

  function activate() {
  }

  function onSubmit(myForm){
    window.alert("Do things!");
    console.group("AdEditForm Submit");
    console.log("Form object: ", myForm);
    console.log("adEditor.changes: ", self.changes);
    console.log("Ads to change: ", self.selectedAds);
    console.groupEnd();
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

})();
