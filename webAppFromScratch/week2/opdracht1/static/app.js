
(function() {  // use IIFE to avoid global vars
	
	"use strict" // with strict mode, you can not, for example, use undeclared variables

	var main = document.querySelector('main');

	var app = { // literal object
		init: function() { 

			getData.dataRequest(); // run the function getData
			
		},

		routes: function (collection) { 

			routie({
			   
			    'art': function() {

			    	var data = {
			    		item: []
			    	};

			    	for (var i = 0; i < collection.artObjects.length; i++) {

			    		data.item[i] = {
			    				id: collection.artObjects[i].id,
			    				imagesUrl: collection.artObjects[i].webImage.url,
			    				imageName: collection.artObjects[i].title};

			    	};

			    	// data = {
			    	// 	item : [
			    	// 		{
			    	// 			imagesUrl: ...,
			    	// 			imageName: ...
			    	// 		},
			    	// 		{
			    	// 			imagesUrl: ...,
			    	// 			imageName: ...
			    	// 		}
			    	// 	]
			    	// }
			    	console.log(collection.artObjects);

			    	var srcImage = function(params) {
			    		params.element.setAttribute('src', this.imagesUrl); //voegt src toe en de url
			    	}

			    	var link = function(params) {
			    		params.element.setAttribute('href','#info/' + this.id);
			    	}

			    	var directives = {
			    		item: {
				    		imagesUrl: { 'class': srcImage }, //loopt door de data
			    			link: {'class':link}
			    		}

			    	};

			    	Transparency.render(document.getElementById('ul'), data, directives);

			    	sections.toggle(data);

			    },
			    'info/:id': function(id) {
			    	var paintingId = id;


			    	var data = {
			    		longTitle: collection.artObjects[1].longTitle
			    	}

			    	sections.toggle(data);
			    },

			    '*': function() {

			    	var data = {

			    		greeting: "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn",
						translation: "In his house at R'lyeh, dead Cthulhu waits dreaming."
			    	};

			    	sections.toggle(data);
			    }
			});
		}
	};

	// This ideas comes from Dylan Vans

	var sections = { // toggle between the sections

		toggle: function(data) {
			
			// console.log(data);
			var _data = data;

			var hash = window.location.hash; //get the hash on the current url after click and save in a varibale

			hash = hash.replace("#", "");

			if (hash) { 
				
				var getHash = document.getElementById(hash); //get the template from the html that matched
				
				if (getHash) { //if there is a hash, put the section in the html

					Transparency.render(getHash, _data);
					main.innerHTML = getHash.innerHTML; 

				} else {
					
					main.innerHTML = document.querySelector('#error').innerHTML; //give the error page

				}

			} else {
				
				window.location.hash = '#home'; // if there is no hash, give the home page

			}

			// var buttons = document.querySelectorAll('.item a');

			// _.forEach(buttons, function(button) {
			// 	button.addEventListener('click', function(evt) {
			// 		evt.preventDefault();
			// 		console.log(evt.currentTarget.value);
			// 	});
			// });
		}
	};

	var getData = {

		dataRequest: function() {

		//this idea comes from Maaike Hek
			var collection = {
				apiData : []
			};

			
			var collectionData = pegasus('https://www.rijksmuseum.nl/api/nl/collection?key=jB5D6SNV&format=json&type=schilderij&maker=Rembrandt+Harmensz.+van+Rijn');
			
			collectionData.then(
				
				function(data, xhr) { 

					collection = data;
					app.routes(collection);
				},

				function(data, xhr) {

					console.error(data, xhr.status);
				}
			);

		}
	}

	app.init(); //run the app
}());




