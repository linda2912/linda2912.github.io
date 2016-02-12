
(function() {  // use IIFE to avoid global vars
	
	"use strict" // with strict mode, you can not, for example, use undeclared variables

	var main = document.querySelector('main');

	var app = { // literal object
		init: function() { 
			routes.init(); // run the function app.routes.init.
		}
	};

	// This ideas comes from Dylan
	var routes = { //routes function
		init: function(){
			window.addEventListener('hashchange', sections.toggle); //when changing the url hash, starts the sections toggle function
			window.addEventListener('load', sections.toggle); //
		}
	};

	var sections = { // toggle between the sections
		toggle: function() {
			var hash = window.location.hash; //get the hash on the current url after click and save in a varibale

			if (hash) { 
				var getHash = document.querySelector(hash); //get the template from the html that matched
				if (getHash) { //if there is a hash, put the section in the html
					main.innerHTML = getHash.innerHTML; 
				} else {
					main.innerHTML = document.querySelector('#error').innerHTML; //give the error page
				}
			} else {
				window.location.hash = '#home'; // if there is no hash, give the home page
			}
		}
	};

	app.init(); //run the app

}());