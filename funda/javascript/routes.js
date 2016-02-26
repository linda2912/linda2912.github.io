var route = (function() {

	return {
	
		routes: function () { 

			routie({

				'home': function() { // when the hash changes to #home, replace the greeting
			    	
			    	var data = { 
			    		greeting: "Zoek jouw droomhuis!" //replace greeting
			    	};
					
			    	sections.toggle(data); // run sections.toggle

			    	filter.search("main .roomButton", "main #roomFilter", "main .roomImg"); //run filter.search with this parameters
			    	filter.search("main .areaButton", "main #areaFilter", "main .areaImg");
			    	filter.search("main .oustsideButton", "main #outsideFilter", "main .outsideImg");
			    	filter.up(); //run filter.up
			    	
			    	searchForm.filterListener(); //run searchFrom.filterListener
			    	searchForm.urlListener(); //run searchForm.urlListener
			    	
			    	gestures.home(); // run gesture.home

			    },

			    '*': function() { // when there is no hash, go to #home

			    	window.location.hash = ('#home');

			    }
			});
		}
	}
}());