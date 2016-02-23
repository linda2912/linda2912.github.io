var getData = (function() {

	return {

		dataRequest: function(searchQuery) {

			// if (localStorage.collection == null) {
				//I first looked at Maaike her code to see how she did this
				// var collection = {};

				var urlData = {
					baseUrl: 'http://funda.kyrandia.nl/feeds/Aanbod.svc/json/e2d60e885b8742d4b0648300e3703bd7/?type=koop&zo=/',
					searchQuery: searchQuery.split(' ').join('-'),
					urlOptions: '/&page=1&pagesize=25',
					request : function() {
						return pegasus(this.baseUrl + this.searchQuery + this.urlOptions);
					}
				};

				// Get the data from the api with pagasus library
				// var collectionData = pegasus('http://funda.kyrandia.nl/feeds/Aanbod.svc/json/e2d60e885b8742d4b0648300e3703bd7/?type=koop&zo=/amsterdam/tuin/&page=1&pagesize=25');
				

				var urlRequest = urlData.request();
				loader.toggle();

				urlRequest.then( //if the request have success, this happens

					//xhr == xml http request
					function(data, xhr) {  
						
						//load the list into data
						var resultsData = data; 

						var directives = {
						  imageUrl: {
						    src: function(params) {
						      return this.FotoLarge;
						    }
						  }
						};

						document.querySelector('main #resultsBlock').classList.remove ("invisible");
						console.log(resultsData.Objects);
						Transparency.render(document.querySelector('main #results'), resultsData.Objects, directives); 

						// localStorage.setItem("collection", JSON.stringify(collection)); //save the data in the local storage

						// route.routes(resultsData); //run app.routes and take collection with it
						loader.toggle(); // when the data is complete, disactivate the loader
					},

					function(data, xhr) {
						// error handler
						alert("Onze excuses! Er is iets mis gegaan bij het laden van de pagina. Controleer de internetverbinding en herlaad de pagina.");
						console.error(data, xhr.status);
					}		
				);
			// } else {
			// 	var collection = JSON.parse(localStorage.collection);
			// 	console.log("dit is local storage");
			// 	route.routes(collection);
			// 	loader.toggle();
			// }
			
			
		}
	}
}());