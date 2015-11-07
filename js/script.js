angular.module("madLibs", [])
.controller("madLibsCtrl", function($scope){

	$scope.form = {
		playerName : '',
		jobTitle : '',
		dirtyTask : '',
		tediousTask : '',
		celebrity:'',
		uselessSkill : '',
		adjective : '',
		hugeNumber : '',
		obnoxiuousCelbertity : ''
	}

	$scope.gender = 'male';
	$scope.pronoun = "he";
	$scope.pronounPossessive = "his";

	$scope.filled = false;

	$scope.change = function(){

		for (var key in $scope.form) {
			var allFilled = false;

			if ($scope.form.hasOwnProperty(key)) {

				if($scope.form[key] !== ""){
				 	allFilled = true;
				}
			}
		}
		$scope.filled = allFilled;
		return $scope.filled;
	}

	$scope.genderChange = function(){
		if( $scope.gender == 'male'){
			$scope.pronoun = "he";
			$scope.pronounPossessive = "his";
		} else {
			$scope.pronoun = "she";
			$scope.pronounPossessive = "her";
		}
	}
	

});