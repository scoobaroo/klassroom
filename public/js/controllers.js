'use strict';

/* Controllers */

angular.module('klassroom.controllers', [])
	.controller('SplashController', ['$scope', 'saveCriteria', 'init', 'reset', function($scope, saveCriteria, init, reset){
	
	}])
	.controller('CriteriaController', ['$scope', 'saveCriteria', 'init', 'reset', function($scope, saveCriteria, init, reset){
		init($scope);
		$scope.saveCriteria = function() {
			saveCriteria($scope);
		}
		$scope.reset = function() {
			reset($scope);
		}
	}])
	.controller('StudentsController', ['$scope', 'saveCriteria', 'init', 'reset', function($scope, saveCriteria, init, reset){
		init($scope);
		$scope.save = function() {
			saveCriteria($scope);
		}
		$scope.reset = function() {
			reset($scope);
		}

		$scope.addStudent = function() {
			if($scope.newStudentName) {
				$scope.students.push({
					name: $scope.newStudentName 
				});
				$scope.newStudentName = '';
			}
			$scope.saveCriteria();
		}

		$scope.removeStudent = function(index) {
			console.log($scope.students[index]);
			$scope.students.splice(index, 1);
			$scope.save();
		}
	}])
	.controller('GenerateController', ['$scope', 'saveCriteria', 'init', 'reset', 'generateArrangement', function($scope, saveCriteria, init, reset, generateArrangement){
		init($scope);
		generateArrangement($scope);
		$scope.save = function() {
			saveCriteria($scope);
		}
		$scope.reset = function() {
			reset($scope);
		}

		$scope.generateArrangement = function() {
			generateArrangement($scope);
		}

	}])
	.controller('DetailsController', ['$scope', 'init', 'generateArrangement', function($scope, init, generateArrangement){
		init($scope);
		generateArrangement($scope);
	}])

	.controller('ContactController', ['$scope', 'saveCriteria', 'init', 'reset', function($scope, saveCriteria, init, reset){
		init($scope);
		
	}])
