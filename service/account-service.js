(function () {
  'use strict';

  angular
    .module('app')
    .service('AccountService', AccountService);

  function AccountService ($http) {
    this.testObject = {
      test: "test"
    };

    this.getAll = $http({
      method: 'GET',
      url: 'json/accounts.json'
    });

  }

})();
