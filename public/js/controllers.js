'use strict';

/* Controllers */

angular.module('klassroom.controllers', [])
	.controller('SplashController', ['$scope', 'saveCriteria', 'init', 'reset', function($scope, saveCriteria, init, reset){
	}])



	.controller('CriteriaController', ['$scope', 'saveCriteria', 'init', 'reset', '$cookieStore', function($scope, saveCriteria, init, reset, $cookieStore){
		

		init($scope);
		console.log("criteria after init is: " + $scope.criteria)

		$scope.saveCriteria = function() {
			saveCriteria($scope);
		};

		$scope.reset = function() {
			reset($scope);
		};

		// $scope.showAddCriteriumButton = function(criterium) {
		//   return criterium.id === $scope.criteria[$scope.criteria.length-1].id;
		// };

		$scope.addNewCriteriumToCriteria = function() {
			// console.log($scope.criteria); 
			var array = $cookieStore.get('criteriaArray');
			array.push($scope.criteria);
			$cookieStore.put('criteriaArray', array); 
			
			var critArr = $cookieStore.get('criteriaArray')
			console.log("crit arr is:" + critArr);

					




		  // var newItemNo = $scope.criteria.length+1;
		  // $scope.criteria.push({'id':'criteria'+newItemNo});
		};

		

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
