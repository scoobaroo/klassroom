'use strict';


// Declares an app level module which depends on filters, and services
var klassroomApp = angular.module('klassroomApp', [
  'ngRoute',
  'klassroom.services',
  'klassroom.controllers', 
  'ui.router'
]);

klassroomApp.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/splash');
  
  $stateProvider
    // where do i specify which controller controls which partial? 
    .state('splash', {
      url: '/splash', 
      templateUrl: '/partials/splash.html'
    })
    .state('criteria', {
      url: '/criteria', 
      templateUrl: '/partials/criteria.html'
    })
    .state('/students', {
      url: '/students', 
      templateUrl: '/partials/students.html'
    })
    .state('generate', {
      url: '/generate', 
      templateUrl: '/partials/generate.html'
    })
    .state('details', {
      url: '/details', 
      templateUrl: '/partials/details.html'
    })
});

// $u('/splash', {templateUrl: '/partials/splash.html', controller: 'SplashController'});
  // $urlRouterProvider.when(, {templateUrl: , controller: 'CriteriaController'});
  // $urlRouterProvider.when(, {templateUrl: , controller: 'StudentsController'});
  // $urlRouterProvider.when('/generate', {templateUrl: '/partials/generate.html', controller: 'GenerateController'});
  // $urlRouterProvider.when('/details', {templateUrl: '/partials/details.html', controller: 'DetailsController'});
  // $urlRouterProvider.when('/contact', {templateUrl: '/partials/contact.html', controller: 'ContactController'});