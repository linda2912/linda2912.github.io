var route = (function() {

	return {
	
		routes: function () { 

			routie({

				'home': function() { // when the hash changes to #home, replace the greeting
			    	
			    	var data = { 
			    		greeting: "Zoek jouw droomhuis!" //replace greeting
			    	};
					
			    	sections.toggle(data); // run sections.toggle
			    	filter.search("main .roomButton", "main #roomFilter", "main .roomImg"); //run filter.search 
			    	filter.search("main .areaButton", "main #areaFilter", "main .areaImg");
			    	filter.search("main .oustsideButton", "main #outsideFilter", "main .outsideImg");
			    	filter.up(); //run filter.up
			    	//searchForm.listner(); //run searchForm.listner
			    	searchForm.filterListner();
			    	searchForm.urlListner();
			    	gestures.home(); // run gesture.home

			    },
			   
			    'results': function() { // when the hash changes to #art do this
			    	
			    	sections.renderResults(urlRequest); //run renderArt in sections
			    	gestures.resultPage(); //run art in gestures

			    },

			    'info/:id': function(id) { // when the hash changes to #id/some-id, run renderInfo in sections

			  		sections.renderInfo(id, collection);
			    },

			    '*': function() { // when there is no hash, go to #home

			    	window.location.hash = ('#home');

			    }
			});
		}
	}
}());