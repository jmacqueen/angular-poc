(function (){
'use strict';

angular
  .module('app')
  .service('AdService', AdService);

function AdService($http) {
  this.getForCampaign = function(campaign) {
    if (campaign && campaign.id === 1){
      return $http({
        method: 'GET',
        url: '/json/ads01.json'
      });
    }
    if (campaign && campaign.id === 2){
      return $http({
        method: 'GET',
        url: '/json/ads02.json'
      });
    }
    return $http({
      method: 'GET',
      url: '/json/emptyArray.json'
    });
  };

  this.getSchema = function(ads){
    if (ads && ads.length > 0) {
      return $http({
        method: 'GET',
        url: '/json/schema.json'
      });
    } else {
      return $http({
        method: 'GET',
        url: '/json/emptyModel.json'
      });
    }
  };

  this.getForm = function(ads){
    if (ads && ads.length > 0) {
      return $http({
        method: 'GET',
        url: '/json/form.json'
      });
    } else {
      return $http({
        method: 'GET',
        url: '/json/emptyArray.json'
      });
    }
  };

}

})();
