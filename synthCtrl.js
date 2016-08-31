
  synthApp.controller('synthCtrl',function($scope, compositionCalculator, controlSum){ 
  
	// the array that represents selected metals. [0] is for manganese, [1] iron, [2] cobalt and [3] nickel
		$scope.selectedMetals = [0,0,0,0];

		
		$scope.$watch('selectedMetals', function(newval, oldval){
			
			//when a change in selectedMetals is detected, then:
			//clear previous controlSum
				$scope.controlSum = 0;
				
			//and calculate controlSum which will be necessary to calculate the amounts of reagents
				$scope.controlSum = controlSum.calculateControlSum(newval);	
				
			// fire compositionCalculator
				$scope.compositions = compositionCalculator.calculateCompositions(newval);
				
			
		}, true); 
	});