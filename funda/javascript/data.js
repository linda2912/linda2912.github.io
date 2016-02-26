var getData = (function() {

	return {

		dataRequest: function(searchQuery) {

				var urlData = {
					baseUrl: 'http://funda.kyrandia.nl/feeds/Aanbod.svc/json/e2d60e885b8742d4b0648300e3703bd7/?type=koop&zo=/',
					searchQuery: searchQuery.split(' ').join('-'),
					urlOptions: '/&page=1&pagesize=25',
					request : function() {
						return pegasus(this.baseUrl + this.searchQuery + this.urlOptions); //return the url
					}
				};

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

						document.querySelector('main #resultsBlock').classList.remove ("invisible"); //show the results in the homepage

						Transparency.render(document.querySelector('main #results'), resultsData.Objects, directives); //add the data into the results on the homepage

						loader.toggle(); // when the data is complete, disactivate the loader
						
						window.scrollTo(0, 500); //scroll down to 500px
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