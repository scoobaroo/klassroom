'use strict';

/* Controllers */

angular.module('klassroom.controllers', [])
	.controller('HomepageController', ['$scope', 'save', 'init', 'reset', function($scope, save, init, reset){
	}])


	.controller('CriteriaController', ['$scope', 'save', 'init', 'reset', '$cookieStore', function($scope, save, init, reset, $cookieStore){

		init($scope);

		$scope.save = function() {
			save($scope);
		};

		$scope.reset = function() {
			reset($scope);
		};

		$scope.addCriterium = function() {
			if ($scope.newCriteriumName) {
				$scope.criteria.push({
					name: $scope.newCriteriumName,
					value: ""
				});
				$scope.newCriteriumName = "";
			}
			$scope.save();
		};

		$scope.removeCriterium = function(criterium) {
		  var index = $scope.criteria.indexOf(criterium);
		  $scope.criteria.splice(index, 1);
		  $scope.save();
		};

	}])
	.controller('StudentsController', ['$scope', 'save', 'init', 'reset', function($scope, save, init, reset){
		init($scope);

		$scope.save = function() {
			save($scope);
		}

		$scope.reset = function() {
			reset($scope);
		}

		$scope.addStudent = function() {
			if($scope.newStudentName) {
				$scope.students.push({
					name: $scope.newStudentName,
					criteria: $scope.criteria
				});
				$scope.newStudentName = '';
			}
			$scope.save();
		}

		console.log($scope.students);



		$scope.saveValues = function() {
			if($scope.newStudentName) {
				$scope.students.push({
					name: $scope.newStudentName,
					criteria: $scope.criteria
				});
				$scope.newStudentName = '';
			}
			$scope.save();
		}


		$scope.removeStudent = function(index) {
			console.log($scope.students[index]);
			$scope.students.splice(index, 1);
			$scope.save();
		}
	}])

	.controller('GenerateController', ['$scope', 'save', 'init', 'reset', 'generateArrangement', function($scope, save, init, reset, generateArrangement){
		init($scope);
		generateArrangement($scope);
		$scope.save = function() {
			save($scope);
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

	.controller('ContactController', ['$scope', 'save', 'init', 'reset', function($scope, save, init, reset){
		init($scope);


	}])
	.controller('LoginCtrl', function($scope, $auth) {
		$scope.authenticate = function(provider) {
			$auth.authenticate(provider);
		};
		$scope.console.log($scope,$auth);
		$scope.console.log("inside loginctrl");
	});
