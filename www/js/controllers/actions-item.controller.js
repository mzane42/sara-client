angular.module('starter')
  .controller('actionsCtrl', function ($scope, $state) {
    console.log('actionsCtrl');
    $scope.handleHomeClick = function () {
      console.log('test');
    }
  });
