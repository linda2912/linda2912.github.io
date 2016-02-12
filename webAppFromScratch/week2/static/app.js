
(function() {  // use IIFE to avoid global vars
	
	"use strict" // with strict mode, you can not, for example, use undeclared variables

	var main = document.querySelector('main');

	var app = { // literal object
		init: function() { 

			getData.dataRequest(); // run the function getData
			
		},

		routes: function (collection) { 

			routie({
			   
			    'art': function() { // when the hash changes to #art do this

			    	var data = {
			    		item: [] //makes an empthy array
			    	};

			    	for (var i = 0; i < collection.artObjects.length; i++) { //loop through the data 

			    		data.item[i] = { // put the data in de array item
			    				id: collection.artObjects[i].id,
			    				imagesUrl: collection.artObjects[i].webImage.url,
			    				imageName: collection.artObjects[i].title};

			    	};

			    	var srcImage = function(params) {
			    		params.element.setAttribute('src', this.imagesUrl); //add the src arttibute at imagesUrl
			    	}

			    	var link = function(params) {
			    		params.element.setAttribute('href','#info/' + this.id); // add the href attribute and put the unique id behind it
			    	}

			    	var directives = {
			    		item: {
				    		imagesUrl: { 'class': srcImage }, //add the image url into the html
			    			link: {'class':link} //add the link into the html
			    		}

			    	};

			    	Transparency.render(document.getElementById('ul'), data, directives); //render the template

			    	sections.toggle(data); // run sections.toggle

			    },
			    'info/:id': function(id) {

			    	var data = _.filter(collection.artObjects, function(artObject){ //loop through the data
			    		if (artObject.id === id) { // if the id's are the same do this

			    			//this code do the same as below:
			    			// return {
			    			// 	longTitle: artObject.longTitle
			    			// }

			    			return {
			    				longTitle: _.pick(artObject, "longTitle") //add the longTitle into the template
			    			}
			    		}
			    	})

			    	sections.toggle(data); // run sections.toggle
			    },

			    '*': function() {

			    	var data = {
			    		//replace this text
			    		greeting: "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn",  
						translation: "In his house at R'lyeh, dead Cthulhu waits dreaming."
			    	};

			    	sections.toggle(data); // run sections.toggle
			    }
			});
		}
	};

	// This ideas comes from Dylan Vans

	var sections = { // toggle between the sections

		toggle: function(data) {
			
			var _data = data;
			//get the hash on the current url after click and save in a varibale
			var hash = window.location.hash.split('/')[0]; //get always the first slash

			hash = hash.replace("#", ""); // remove the #

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
		}
	};

	var getData = {

		dataRequest: function() {

		//this idea comes from Maaike Hek
			var collection = {};

			// Get the data from the api with pagasus library
			var collectionData = pegasus('https://www.rijksmuseum.nl/api/nl/collection?key=jB5D6SNV&format=json&type=schilderij&maker=Rembrandt+Harmensz.+van+Rijn');
			
			collectionData.then( //if the request have success, this happens
				//xhr == xml http request
				function(data, xhr) {  
					//load the list into data
					collection = data; 
					app.routes(collection); //run app.routes and take collection with it
				},

				function(data, xhr) {
					// error handler
					console.error(data, xhr.status);
				}
			);

		}
	}

	app.init(); //run the app
}());




