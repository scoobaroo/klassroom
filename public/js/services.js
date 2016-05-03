'use strict';

/* Services */
angular.module('klassroom.services', ['ngCookies']).
  value('version', '0.1').


  factory('addNewCriterium', ['$cookieStore', function($cookieStore){
  	return function($scope) {
	  //cookie get
	  var newItemNo = $scope.choices.length+1;
	  $scope.criterium.push({'id':'choice'+newItemNo});
	  //cookie save
	}

  }]).

  factory('saveCriteria', ['$cookieStore', '$http', function($cookieStore, $http){
  	return function($scope) {


		// put the array in cookie store
		$cookieStore.put('c1Name', $scope.c1Name);
		



		// $cookieStore.put('c1Name', $scope.c1Name);
		// $cookieStore.put('c2Name', $scope.c2Name);
		// $cookieStore.put('c3Name', $scope.c3Name);
		// $cookieStore.put('c4Name', $scope.c4Name);
  		  		
  		// why the hell is this api call here.  This was from drunk coding with nick.  
  		// $http.post('/api/criteria', data).then(successCallback, errorCallback);

  		// function successCallback() {
  		// 	console.log("succeeded!")
  		// }
  		// function errorCallback() {
  		// 	console.log("FaiL!")
  		// }
  	}	
  }]).

  factory('saveOtherStuff', ['$cookieStore', function($cookieStore){
  	return function($scope) {
		$cookieStore.put('nbTables', $scope.nbTables);
		$cookieStore.put('students', $scope.students);
  	}
  }]).

  factory('init', ['$cookieStore', function($cookieStore){
  	return function($scope) {

  		$scope.criterium = [{id: 'choice1'}, {id: 'choice2'}, {id: 'choice3'}],
  		


  		// changing the criteria to an array called criteria.
		// $scope.c1Name = $cookieStore.get('c1Name') || 'Academic ability',
		// $scope.c2Name = $cookieStore.get('c2Name') || 'English-speaking level',
		// $scope.c3Name = $cookieStore.get('c3Name') || 'Willingness to help others',
		// $scope.c4Name = $cookieStore.get('c4Name') || 'Another criterium?',


		$scope.nbTables = $cookieStore.get('nbTables') || '',
		$scope.students = $cookieStore.get('students') || [];
		$scope.tables = [];
  	}
  }]).

  factory('reset', ['saveCriteria', function(save){
  	return function($scope) {
		if(confirm("You'll have to start over; are you ok with that?")) {
			$scope.students = [];
			$scope.c1Name = '';
			$scope.c2Name = '';
			$scope.c3Name = '';
			$scope.c4Name = '';
			$scope.nbTables = '';
			saveCriteria($scope);
		}
  	}
  }]).

  factory('generateArrangement', [ function(save){
  	return function($scope) {
		$scope.tables = [];
		if (!isNaN(parseInt($scope.nbTables))) {
			// cloning the students array
			$scope.orderedStudents = $scope.students;

			// sorting students from best to worst as per the criteria
			$scope.orderedStudents.sort(function(s1, s2){
				if (s1.c1 < s2.c1) return 1;
				else if (s1.c1 > s2.c1) return -1;
				else if (s1.c2 < s2.c2) return 1;
				else if (s1.c2 > s2.c2) return -1;
				else if (s1.c3 < s2.c3) return 1;
				else if (s1.c3 > s2.c3) return -1;
				else if (s1.c4 < s2.c4) return 1;
				else if (s1.c4 > s2.c4) return -1;
				else return 0;
			});

			// pairing together best + worst, second best + second worst, etc.
			var cursorStart = 0; 
			var cursorEnd = $scope.orderedStudents.length-1;
			$scope.pairs = [];
			while(cursorStart <= cursorEnd) {
				if (cursorStart == cursorEnd) $scope.pairs.push([$scope.orderedStudents[cursorStart]]);
				else $scope.pairs.push([$scope.orderedStudents[cursorStart], $scope.orderedStudents[cursorEnd]]);
				cursorStart++;
				cursorEnd--;
			}

			// as long as not enough table, pairing most similar / most dissimilar groups
			var pairs = JSON.parse(JSON.stringify($scope.pairs)); // cloning the pairs array
			while (($scope.tables.length + pairs.length > $scope.nbTables) && (pairs.length > 1)) {
				var mostSimilar = pairs.pop();
				var mostDissimilar = pairs.shift();
				$scope.tables.push(jQuery.merge(mostSimilar, mostDissimilar));
			}
			jQuery.merge($scope.tables, pairs);

		}
  	}
  }]);