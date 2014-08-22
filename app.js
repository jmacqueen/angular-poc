angular.module('app', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

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
    $routeProvider.when('/accounts',{
        templateUrl: 'components/account/accounts-list.html',
        controller: 'AccountsListCtrl',
        controllerAs: 'accounts'
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

function AppCtrl () {

}
