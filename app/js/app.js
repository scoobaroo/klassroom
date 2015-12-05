'use strict';

//declare app level module which depends on filters and services
angular.module('homeroom', [
	'ngRoute', 
	'homeroom.filters', 
	'homeroom.services',
	'homeroom.directives', 
	'homeroom.controllers'1
]).

config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/criteria', {templateUrl: 'partials/criteria.html', controller: 'CriteriaController'});
	$routeProvider.when('/students', {templateUrl: 'partials/students.html', controller: 'StudentsController'});
	$routeProvider.when('/generate', {templateUrl: 'partials/generate.html', controller: 'GenerateController'});
	$routeProvider.when('/details', {templateUrl: 'partials/details.html', controller: 'DetailsController'});
	$routeProvider.otherwise({redirectTo: '/criteria'});
}]);
