var route = (function() {

	return {
	
		routes: function (collection) { 

			routie({

				'home': function() {
			    	
			    	var data = { 
			    		greeting: "Welkom!"
			    	};

			    	sections.toggle(data); // run sections.toggle
			    	gestures.home(); // run the gesture home
			    },
			   
			    'art': function() { // when the hash changes to #art do this

			    	sections.renderArt(collection);
			    	gestures.art(); //run the gesture art

			    },

			    'info/:id': function(id) {

			  		sections.renderInfo(id, collection);
			    },

			    '*': function() {

			    	window.location.hash = ('#home');

			    }
			});
		}
	}
}());