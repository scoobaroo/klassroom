'use strict';

/* Controllers */

angular.module('klassroom.controllers', [])
	.controller('SplashController', ['$scope', 'saveCriteria', 'init', 'reset', function($scope, saveCriteria, init, reset){
	}])



	.controller('CriteriaController', ['$scope', 'saveCriteria', 'init', 'reset', '$cookieStore', function($scope, saveCriteria, init, reset, $cookieStore){
		

		init($scope);
		console.log("criteria after init is: " + $scope.criteria[0].criteriaName)

		$scope.saveCriteria = function() {
			saveCriteria($scope);
		};

		$scope.reset = function() {
			reset($scope);
		};

		$scope.showAddCriteriumButton = function(criterium) {
		  return criterium.id === $scope.criteria[$scope.criteria.length-1].id;
		};

		$scope.addNewCriteriumToCriteria = function() {
			// NEXT: look at the syntax for $scope.criteria BELOW.  Compare that syntax to the tutorial pages'
			// and make it correctly add a new object (new criterion name) to the criteria arr

			$cookieStore.put('criteria', $scope.criteria); 
			console.log() 		




		  // var newItemNo = $scope.criteria.length+1;
		  // $scope.criteria.push({'id':'criteria'+newItemNo});
		};

		console.log("criteria add init is: " + $scope.criteria[1])

		// $scope.deleteNewCriterium = function() {
		//   $scope.criteria.splice(index, 1);
		//   $scope.save();
		// };

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
