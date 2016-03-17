(function() {  // use IIFE to avoid global vars
	
	"use strict" // with strict mode, you can not, for example, use undeclared variables

	var app = { // literal object
		
		init: function() { 
			document.getElementById('roomFilter').classList.add('invisible');
			document.getElementById('areaFilter').classList.add('invisible');
			document.getElementById('outsideFilter').classList.add('invisible');

			filter.search(".roomButton", "#roomFilter", ".roomImg"); //run filter.search with this parameters
			filter.search(".areaButton", "#areaFilter", ".areaImg");
			filter.search(".oustsideButton", "#outsideFilter", ".outsideImg");
		}
	};

	app.init(); //run the app

}());
