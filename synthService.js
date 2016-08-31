


 


/*
    I am interested in creating web apps that support chemical operations. This one is important for apps like these
	as it performs a basic function in the design of synthetic procedures. For this particular app, it lists all possible combinations of four substrates and
	filters out those containing 6 units
*/
/////////////////////////////////////////////////////////////////////	 
/////////////////////////////////////////////////////////////////////	 
// 

	synthApp.service('compositionCalculator', function(){
		  

		
	// define function that performs the calculation
		this.calculateCompositions = function(selectedMetals){ 
		
			// create an array that will store the compositions which are to be calculated in a moment
			compositionsSet = [];


			var mnIndex,feIndex,coIndex,niIndex;
			
			// now iteration
			for(mnIndex=0; mnIndex <= selectedMetals[0]; mnIndex++){
				for(feIndex=0; feIndex <= selectedMetals[1]; feIndex++){
					for(coIndex=0; coIndex <= selectedMetals[2]; coIndex++){
						for(niIndex=0; niIndex <= selectedMetals[3]; niIndex++){
							
							// we are interested in compositions containing 6 metals
							if (mnIndex+feIndex+coIndex+niIndex==6){
							// create composition object
							var composition = {
								amountMn : mnIndex,
								amountFe : feIndex,
								amountCo : coIndex, 
								amountNi : niIndex
								}
							//and put it into compositions array 
								compositionsSet.push(composition);
							}
						}
					}
				}
			}
	 // and return the array of compositions with desired elements
	  return compositionsSet;
	  };
		  
		  
	});
	 
/////////////////////////////////////////////////////////////////////	 	 
/////////////////////////////////////////////////////////////////////	 
// now define the service that provides the control sum (how many metals are selected)

synthApp.service('controlSum', function(){
	
	
	this.calculateControlSum = function(selectedMetals){
		
		//calculate, how many metals are selected
		var controlSum = 0;// how many? start with 0
		for (i=0; i <= selectedMetals.length; i++){
			if(selectedMetals[i]){controlSum++;}//if the i-th metal is selected, add one
		}
		
		//and return controlSum
		return controlSum;
		
	}

	
});

