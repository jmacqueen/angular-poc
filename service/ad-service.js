(function (){
'use strict';

angular
  .module('app')
  .service('AdService', AdService);

function AdService($http) {
  this.getAdsForCampaign = function(campaign) {
    if (campaign && campaign.id === 1){
      return $http({
        method: 'GET',
        url: '/json/ads01.json'
      });
    }
    if (campaign && campaign.id === 2){
      return $http({
        method: 'GET',
        url: '/json/ads-huge.json'
      });
    }
    return $http({
      method: 'GET',
      url: '/json/emptyArray.json'
    });
  };

  this.getSchemas = function(){
    return $http({
      method: 'GET',
      url: '/json/schemas.json'
    });
  };

  this.getForms = function(){
    return $http({
      method: 'GET',
      url: '/json/forms.json'
    });
  };

  this.getColumnDefs = function(campaign) {
    if (campaign && campaign.id === 1) {
      return $http({
        method: 'GET',
        url: '/json/column-defs1.json'
      });
    } else {
      return $http({
        method: 'GET',
        url: '/json/column-defs2.json'
      });
    }
  };
}

})();
