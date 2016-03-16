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

		renderResults: function(urlRequest) {

			directives = {
			  imageUrl: {
			    src: function(params) { //add the src into the html img attribute
			      return this.FotoLarge; //add the img url into the html img attribute
			    }
			  }
			};

	    	Transparency.render(document.getElementById('ul'), urlRequest.Objects, directives); //render the template
	    	sections.toggle(collection); //run sections.toggle and take collection with it
		}
	}

	
}());

