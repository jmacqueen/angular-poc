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
  self.schemas = {};
  self.forms = {};
  self.currentSchema = {};
  self.currentForm = [];
  self.onSubmit = onSubmit;

  $scope.$watch(function(){
                  return self.selectedAds;
                }, selectedAdsChange, true);

  activate();

  ///////////////////////////////////

  function activate() {
    var getSchemas = AdService.getSchemas();
    var getForms = AdService.getForms();

    return $q.all([getSchemas, getForms]) // Batched AJAX calls
      .then(function(response){
        var schemaJSON = response[0].data;
        var formJSON = response[1].data;
        self.schemas = schemaJSON;
        self.forms = formJSON;
      });
  }

  function onSubmit(myForm){
    $scope.$broadcast('schemaFormValidate');
    if (myForm.$valid) {
      window.alert("Do things!");
      console.group("AdEditForm Submit");
      console.log("Form object: ", myForm);
      console.log("adEditor.changes: ", self.changes);
      console.log("Ads to change: ", self.selectedAds);
      console.groupEnd();
    }
  }

  function selectedAdsChange(newVal, oldVal){
    if (newVal && newVal.length > 0){
      var adType = newVal[0].type; // Just working on singles for now
      var ad = newVal[0];          // Ditto
      self.currentSchema = setFormDefaults(self.schemas[adType]);
      self.currentForm = self.forms[adType];
    } else {
      self.currentForm = [{type: "help", helpvalue: "<p></p>"}];
    }
  }
  function setFormDefaults(schema){
    var ad = self.selectedAds[0];

    _.each(_.keys(schema.properties), function(propertyName){ // Mmmmmm. Hot schema injection
      var adKeys = _.keys(ad);
      if (_.contains(adKeys, propertyName)) {
        _.extend(schema.properties[propertyName], {"default": ad[propertyName]});
      }
    });

    return schema;
  }
}

function link (scope, element, attrs, fn) {

}

})();
