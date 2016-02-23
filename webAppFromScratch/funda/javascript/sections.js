var sections = (function() { 

	return {
	
		toggle: function(data) { // toggle between the sections

			//get the hash on the current url after click and save in a varibale
			var hash = window.location.hash.split('/')[0]; //get always the first slash

			hash = hash.replace("#", ""); // remove the hash

			var main = document.querySelector('main');

			// if statement idea comes from Dylan Vans
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

		renderResults: function(collection) {

	    	// var srcImage = function(params) {
	    	// 	params.element.setAttribute('src', this.imagesUrl); //add the src arttibute at imagesUrl
	    	// }

	    	// var link = function(params) {
	    	// 	params.element.setAttribute('href','#info/' + this.id); // add the href attribute and put the unique id behind it
	    	// }

	    	// var directives = {
	    	// 	item: {
		    // 		imagesUrl: { 'class': srcImage }, //add the image url into the html
	    	// 		link: {'class':link} //add the link into the html
	    	// 	}
	    	// };

			directives = {
			  imageUrl: {
			    src: function(params) {
			      return this.FotoLarge;
			    }
			  }
			};

	    	Transparency.render(document.getElementById('ul'), collection.Objects, directives); //render the template
	    	sections.toggle(collection); //run sections.toggle and take collection with it
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
	    	sections.toggle(detail); //run section.toggle and take detail with it
		}
	}

	
}());

