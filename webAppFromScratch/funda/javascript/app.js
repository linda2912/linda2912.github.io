(function() {  // use IIFE to avoid global vars
	
	"use strict" // with strict mode, you can not, for example, use undeclared variables

	var app = { // literal object
		
		init: function() { 

			route.routes(); //run route.routes
			//searchForm.urlListner();

		}
	};

	app.init(); //run the app

}());
