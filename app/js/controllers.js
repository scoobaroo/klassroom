'use strict';

//controllers

angular.module('homeroom.controllers', [])
	.controller('CriteriaController', ['$scope', 'save', 'init', 'reset', function($scope, save, init, reset){
		init($scope);
		$scope.save = function() {
			save($scope);
		}
		$scope.reset = function() {
			reset($scope);
		}
	}])
	.controller('StudentsController', ['$scope', 'save', 'init', 'reset', function($scope, save, init, reset){
		init($scope);
		$scope.save = function() {
			save($scope);
		}
		$scope.reset = function() {
			reset($scope);
		}

		$scope.addStudent = function(){

			
		}
