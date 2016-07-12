'use strict';


// Declares an app level module which depends on filters, and services
angular.module('klassroomApp', [
  'ngRoute',
  'klassroom.services',
  'klassroom.controllers',
  'klassroom.omniauth'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/homepage', {templateUrl: '/partials/homepage.html', controller: 'HomepageController'});
  $routeProvider.when('/criteria', {templateUrl: '/partials/criteria.html', controller: 'CriteriaController'});
  $routeProvider.when('/students', {templateUrl: '/partials/students.html', controller: 'StudentsController'});
  $routeProvider.when('/generate', {templateUrl: '/partials/generate.html', controller: 'GenerateController'});
  $routeProvider.when('/details', {templateUrl: '/partials/details.html', controller: 'DetailsController'});
  $routeProvider.when('/contact', {templateUrl: '/partials/contact.html', controller: 'ContactController'});
  $routeProvider.otherwise({redirectTo: '/homepage'});
}]);
