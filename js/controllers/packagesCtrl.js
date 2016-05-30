angular.module('devmtnTravel')
  .controller('packagesCtrl', function($scope, mainSrv) {

    $scope.cities = mainSrv.travelInfo;

  })
