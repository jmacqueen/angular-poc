(function () {
  'use strict';

  function AccountService () {
    this.testObject = {
      test: "test"
    };
  }

  angular
    .module('app')
    .service('AccountService', AccountService);

})();
