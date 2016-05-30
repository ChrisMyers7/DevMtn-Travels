angular.module('devmtnTravel')
  .controller('bookedCtrl', function($scope, mainSrv, $stateParams) {

    var idOfState = $stateParams.id;

      for (var i = 0; i < mainSrv.travelInfo.length; i++) {
        if (mainSrv.travelInfo[i].id == idOfState) {
          $scope.image = mainSrv.travelInfo[i].image;
          $scope.cityName = mainSrv.travelInfo[i].city;
        }
      }


  })
