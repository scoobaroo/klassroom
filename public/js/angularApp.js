'use strict';


// Declares an app level module which depends on filters, and services
var klassroomApp = angular.module('klassroomApp', [
  'ngRoute',
  'klassroom.services',
  'klassroom.controllers', 
  'ui.router', 
  'stormpath', 
  'stormpath.templates'
]);

klassroomApp.config(function ($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/splash');
  
  $stateProvider
    // where do i specify which controller controls which partial? 
    .state('splash', {
      url: '/splash', 
      templateUrl: '/partials/splash.html', 
      sp: {
        authenticate: false
      }
    })
    .state('criteria', {
      url: '/criteria', 
      templateUrl: '/partials/criteria.html', 
      sp: {
        authenticate: true
      }
    })
    .state('/students', {
      url: '/students', 
      templateUrl: '/partials/students.html', 
      sp: {
        authenticate: true
      }
    })
    .state('generate', {
      url: '/generate', 
      templateUrl: '/partials/generate.html', 
      sp: {
        authenticate: true
      }
    })
    .state('details', {
      url: '/details', 
      templateUrl: '/partials/details.html', 
      sp: {
        authenticate: false
      }
    })
});

klassroomApp.run(function ($stormpath) {
  $stormpath.uiRouter({
    loginState: 'login',
    defaultPostLoginState: 'splash'
  });
});


// $u('/splash', {templateUrl: '/partials/splash.html', controller: 'SplashController'});
  // $urlRouterProvider.when(, {templateUrl: , controller: 'CriteriaController'});
  // $urlRouterProvider.when(, {templateUrl: , controller: 'StudentsController'});
  // $urlRouterProvider.when('/generate', {templateUrl: '/partials/generate.html', controller: 'GenerateController'});
  // $urlRouterProvider.when('/details', {templateUrl: '/partials/details.html', controller: 'DetailsController'});
  // $urlRouterProvider.when('/contact', {templateUrl: '/partials/contact.html', controller: 'ContactController'});