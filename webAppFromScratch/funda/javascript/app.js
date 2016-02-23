(function() {  // use IIFE to avoid global vars
	
	"use strict" // with strict mode, you can not, for example, use undeclared variables

	var app = { // literal object
		
		init: function() { 

			// getData.dataRequest(); // run the function dataRequest in getData
			route.routes();
			//loader.toggle(); // activate the loader
		}
	};

	app.init(); //run the app

}());
