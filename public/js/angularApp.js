'use strict';


// Declares an app level module which depends on filters, and services
angular.module('klassroomApp', [
  'ngRoute',
  'klassroom.services',
  'klassroom.controllers', 
  'ui.router'
  'stormpath', 
  'stormpath.templates'
]).
config(['$urlRouteProvider', function($urlRouteProvider) {
  $urlRouteProvider.when('/splash', {templateUrl: '/partials/splash.html', controller: 'SplashController'});
  $urlRouteProvider.when('/criteria', {templateUrl: '/partials/criteria.html', controller: 'CriteriaController'});
  $urlRouteProvider.when('/students', {templateUrl: '/partials/students.html', controller: 'StudentsController'});
  $urlRouteProvider.when('/generate', {templateUrl: '/partials/generate.html', controller: 'GenerateController'});
  $urlRouteProvider.when('/details', {templateUrl: '/partials/details.html', controller: 'DetailsController'});
  $urlRouteProvider.when('/contact', {templateUrl: '/partials/contact.html', controller: 'ContactController'});
  $urlRouteProvider.otherwise({redirectTo: '/splash'});
}]);
