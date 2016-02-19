var sections = (function() { 

	return {
	
		toggle: function(data) { // toggle between the sections

			//get the hash on the current url after click and save in a varibale
			var hash = window.location.hash.split('/')[0]; //get always the first slash

			hash = hash.replace("#", ""); // remove the hash
			// This ideas comes from Dylan Vans

			var main = document.querySelector('main');

			if (hash) { 

				var getHash = document.getElementById(hash); //get the template from the html that matched
				
				if (getHash) { //if there is a hash, put the section in the html
					Transparency.render(getHash, data);
					main.innerHTML = getHash.innerHTML; 

				} else {
					
					main.innerHTML = document.querySelector('#error').innerHTML; //give the error page
				}

			} else {
				
				window.location.hash = '#home'; // if there is no hash, give the home page
			}
		},
		renderArt: function(collection) {
			var data = {
	    		item: [] //makes an empthy array
	    	};

	    	for (var i = 0; i < collection.artObjects.length; i++) { //loop through the data 

	    		data.item[i] = { // put the data in de array item
					id: collection.artObjects[i].id,
					imagesUrl: collection.artObjects[i].webImage.url,
					imageName: collection.artObjects[i].title };
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
	    	sections.toggle(collection);
		},

		renderInfo: function(id, collection) {

			var detail = {};
	    	var data = _.filter(collection.artObjects, function(artObject) { //loop through the data
	    		if (artObject.id === id) { // if the id's are the same do this

	    			detail = {
	    				longTitle: artObject.longTitle, //get the longTitle of the matching ID 
	    				img: artObject.webImage.url //get the img url of the matching ID
	    			}
	    		}
	    	})

	    	var directives = {
				img: {
			    	src: function(params) { //add the src into the html img attribute
			      		return this.img; //add the img url into the html img attribute
			    	}
			  	}
			};

	    	Transparency.render(document.getElementById('moreInfo'), detail, directives); //render the template
	    	sections.toggle(detail);
		}
	}

	
}());

