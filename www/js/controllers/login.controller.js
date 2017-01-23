
angular.module('starter')
  .controller('loginCtrl', function ($scope, $state, $ionicSideMenuDelegate) {
    console.log('login controller');
    $ionicSideMenuDelegate.canDragContent(false)
    $scope.handleFbBtnClick = function () {
      $state.go('home');
    }
  });

