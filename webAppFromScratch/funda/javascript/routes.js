var route = (function() {

	return {
	
		routes: function (collection) { 

			routie({

				'home': function() { // when the hash changes to #home, replace the greeting
			    	
			    	var data = { 
			    		greeting: "Zoek je droomhuis!"
			    	};

			    	sections.toggle(data); // run sections.toggle
			    	gestures.home(); // run the gesture home
			    },
			   
			    'art': function() { // when the hash changes to #art do this

			    	sections.renderArt(collection); //run renderArt in sections
			    	gestures.art(); //run art in gestures

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