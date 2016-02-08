
(function() {  // use IIFE to avoid global vars
	
	"use strict" // with strict mode, you can not, for example, use undeclared variables

	var main = document.querySelector('main');

	var app = { // literal object
		init: function() { 
			this.routes();
			// routes.init(); // run the function app.routes.init.
		},

		routes: function () {
			routie({
			    'home': function() {
			    	sections.toggle();
			    },
			    'frontEndBestPractices': function() {
			    	sections.toggle();
			    	function loadDoc () { //key jB5D6SNV
			    		console.log("running loaddoc");
			    		var xhttp = new XMLHttpRequest();
			    		console.log(xhttp.open("GET", "http://www.rijksmuseum.nl/api/pages/nl/ontdek-de-collectie/overzicht/rembrandt-harmensz-van-rijn?key=jB5D6SNV&format=jsonp", true));
			    		console.log(xhttp.send());
			    	}
			    	loadDoc();
			    }
			});
		}
	};

	// This ideas comes from Dylan
	// var routes = { //routes function
	// 	init: function() {
	// 		window.addEventListener('hashchange', sections.toggle); //when changing the url hash, starts the sections toggle function
	// 		window.addEventListener('load', sections.toggle); //
	// 	}

	// };

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

	var hello = {
		greeting: "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn",
		translation: "In his house at R'lyeh, dead Cthulhu waits dreaming."
	};

	Transparency.render(document.getElementById('template'), hello);


	app.init(); //run the app

}());








