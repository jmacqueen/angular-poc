(function (){

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
  };


}

})();
