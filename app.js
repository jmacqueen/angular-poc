angular.module('app', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('app').config(function($routeProvider) {

    $routeProvider.when('/accounts',{
        templateUrl: 'components/account/accounts-list.html',
        controller: 'AccountsListCtrl',
        controllerAs: 'accounts'
//        resolve: AccountsListCtrl.resolve
    });
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});

angular.module('app').run(function($rootScope) {

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

});
