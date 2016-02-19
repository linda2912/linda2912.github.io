var getData = (function() {

	return {
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
					loader.toggle(); // when the data is complete, disactivate the loader
				},

				function(data, xhr) {
					// error handler
					alert("Onze excuses! Er is iets mis gegaan bij het laden van de pagina. Controleer de internetverbinding en herlaad de pagina.");
					console.error(data, xhr.status);
				}
			);
		}
	}

		
}());