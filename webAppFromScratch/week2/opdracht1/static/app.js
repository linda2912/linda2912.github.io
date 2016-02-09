
(function() {  // use IIFE to avoid global vars
	
	"use strict" // with strict mode, you can not, for example, use undeclared variables

	var main = document.querySelector('main');

	var app = { // literal object
		init: function() { 

			getData(); // run the function getData
			
		},

		routes: function (collection) { 

			routie({
			    'home': function() {

			    	var data = {
			    		greeting: "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn",
						translation: "In his house at R'lyeh, dead Cthulhu waits dreaming."
			    	};

			    	sections.toggle(data);
			    },
			    'Rijksmuseum': function() {

			    	var data = {
			    		title: collection.artObjects[0].title,
						principalOrFirstMaker: collection.artObjects[0].principalOrFirstMaker,
						webImage: collection.artObjects[0].webImage.url
			    	};

			    	var directives = {
			    		webImage: {
			    			src: function(params) {
				    			return this.webImage;
				    		}
			    		}	
			    	};

			    	Transparency.render(document.getElementById('art'), data, directives);

			    	sections.toggle(data);
			    	// main.innerHTML = xhttp.innerHTML;
			    	// loadDoc();
			    }
			});
		}
	};

	
	// var routes = { //routes function
	// 	init: function() {
	// 		window.addEventListener('hashchange', sections.toggle); //when changing the url hash, starts the sections toggle function
	// 		window.addEventListener('load', sections.toggle); //
	// 	}

	// };
	// This ideas comes from Dylan
	var sections = { // toggle between the sections
		toggle: function(data) {
			
			// console.log(data);
			var _data = data;

			var hash = window.location.hash; //get the hash on the current url after click and save in a varibale

			if (hash) { 
				
				var getHash = document.querySelector(hash); //get the template from the html that matched
				
				if (getHash) { //if there is a hash, put the section in the html

					Transparency.render(getHash, _data);
					main.innerHTML = getHash.innerHTML; 

				} else {
					
					main.innerHTML = document.querySelector('#error').innerHTML; //give the error page

				}

			} else {
				
				window.location.hash = '#home'; // if there is no hash, give the home page

			}
		}
	};


	// // Transparency.render(document.getElementById('template'), hello);

	// var setData = function(collection) {

	// 	// var documentData = {
	// 	// 	longTitle: collection.artObjects[1].longTitle,
	// 	// 	principalOrFirstMaker: collection.artObjects[1].principalOrFirstMaker

	// 	// };

	// 	// Transparency.render(document.getElementById('art'), documentData);

	// 	dataContent = collection;


	// };


	var getData = function() {

		// console.log('data init');
		//idea from Maaike
		var collection = {
			apiData : []
		};
		
		// var collectionData = pegasus('https://www.rijksmuseum.nl/api/nl/collection?key=jB5D6SNV&format=json&type=schilderij&f.normalized32Colors.hex=%20%23367614');

		var collectionData = pegasus('https://www.rijksmuseum.nl/api/nl/collection?key=jB5D6SNV&format=json&type=schilderij&maker=Rembrandt+Harmensz.+van+Rijn');

		collectionData.then(
			
			function(data, xhr) {
				collection = data;

				console.log(collection);
				// console.log(collection.artObjects[1].webImage.url);
				//setData(collection);
				app.routes(collection);
			},
			function(data, xhr) {
				console.error(data, xhr.status);
			}
		);

	}

	
	// function loadDoc () { //key jB5D6SNV

	// 	// var xhttp = this;
				    		
	// 	var xhttp = new XMLHttpRequest();
	// 	xhttp.open("GET", "https://www.rijksmuseum.nl/api/nl/collection?key=jB5D6SNV&format=json&type=schilderij&f.normalized32Colors.hex=%20%23367614", true);
	// 	// xhttp.send();

	// 	//http://www.html5rocks.com/en/tutorials/async/deferred/
	// 	xhttp.addEventListener('load', function(){
	// 		if(xhttp.status === 200) {
	// 			// alert("we got data: " + xhttp.response);
	// 			main.innerHTML = xhttp.response.artObjects;
	// 			console.log(xhttp.response);
	// 		}
	// 	},false)

	// 	xhttp.send();

				    		
	// 	//http://www.w3schools.com/ajax/ajax_xmlhttprequest_send.asp
	// 	// xhttp.onreadystatechange = function() { 
	// 	//   if (xhttp.readyState == 4 && xhttp.status == 200) {
	// 	//     console.log(xhttp.responseText);

	// 	//   }
	// 	// };
	// }
	// loadDoc();

	// function loadDoc() {
	//   var xhttp = new XMLHttpRequest();
	//   xhttp.onreadystatechange = function() {
	//     if (xhttp.readyState == 4 && xhttp.status == 200) {
	//      document.getElementById("rijksmuseum").innerHTML = xhttp.responseText;
	//     }
	//   };
	//   xhttp.open("GET", "https://www.rijksmuseum.nl/api/nl/collection?key=jB5D6SNV&format=json&type=schilderij&f.normalized32Colors.hex=%20%23367614", true);
	//   xhttp.send();
	// }


	app.init(); //run the app
}());




