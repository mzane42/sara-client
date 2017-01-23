angular.module('starter')
  .config(config)

function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl',
      data: {
        css: 'css/login.css'
      }
    })
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })
    .state('actions', {
      url: '/actions',
      templateUrl: 'templates/actions-item.html',
      controller: 'actionsCtrl',
      data: {
        css: 'css/actions-item.css'
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
}

