'use strict';

//declare app level module which depends on filters and services
var homeroomApp = angular.module('homeroomApp', ['ngRoute', 'ngResource']);

//Routes

homeroomApp.config(function($routeProvider) {

	$routeProvider

		.when('/', {
			templateUrl: 'partials/splash.html', 
			controller: 'splashController'
		})
		.when('/launchpad', {
			templateUrl: 'partials/launchpad.html', 
			controller: 'launchpadController'
		})
		.when('/groups', {
			templateUrl: 'partials/groups.html', 
			controller: 'groupsController'
		})
});

//Services
homeroomApp.service('classInfoService', function() {

	this.subjectName = '';
	this.period = '';
	this.teacherName = '';
	this.studentName = '';	
})

//Controllers

homeroomApp.controller('splashController', ['$scope', function($scope) {


}]);

homeroomApp.controller('launchpadController', ['$scope', 'classInfoService', function($scope, classInfoService) {

	$scope.subjectName = classInfoService.subjectName
	$scope.period = classInfoService.period
	$scope.teacherName = classInfoService.teacherName
	$scope.studentName = classInfoService.studentName

	$scope.$watch('subjectName', function() {
		classInfoService.subjectName = $scope.subjectName;	
	});

	$scope.$watch('period', function() {
		classInfoService.period = $scope.period;	
	});

	$scope.$watch('teacherName', function() {
		classInfoService.teacherName = $scope.teacherName;	
	});

}]);

homeroomApp.controller('groupsController', ['$scope', 'classInfoService', function($scope, classInfoService) {

	$scope.subjectName = classInfoService.subjectName
	$scope.period = classInfoService.period
	$scope.teacherName = classInfoService.teacherName


}]);