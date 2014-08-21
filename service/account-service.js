(function () {
  'use strict';

  function AccountService ($http) {
    this.testObject = {
      test: "test"
    };

    this.getAll = $http({
      method: 'GET',
      url: 'json/accounts.json'
    });

  }

  angular
    .module('app')
    .service('AccountService', AccountService);

})();
