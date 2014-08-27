(function () {
  'use strict';

  angular
    .module('app')
    .service('CampaignService', CampaignService);

  function CampaignService ($http) {
    this.getForAccount = function (account){
      if (account && account.id === 2){
        return $http({
          method: 'GET',
          url: 'json/campaigns.json'
        });
      } else {
        return $http({
          method: 'GET',
          url: 'json/emptyArray.json'
        });
      }
    };
  }

})();
