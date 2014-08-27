angular.module('app', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate','ngGrid',
                       'schemaForm']);

angular.module('app')
    .config( config )
    .run( run )
    .controller('AppCtrl', AppCtrl);

function config ($routeProvider) {
    $routeProvider.when('/home',{
        templateUrl: 'app.html',
        controller: 'AppCtrl',
        controllerAs: 'app'
    });

    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});
}

function run ($rootScope) {
    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };
}

function AppCtrl ($scope) {
    var self = this;
    self.selectedAccount  = null;
    self.selectedCampaign = null;
    self.selectedAds      = [];
    self.selectedAdIds    = [];

    // controllerAs requires $watch to use a function to return object to be watched
    $scope.$watch(function(){return self.selectedAds;},
                  getSelectedAdIds, true);

    function getSelectedAdIds(newVal, oldVal) {
        self.selectedAdIds = newVal.map( function(ad){ return ad.id; } );
    }
}
