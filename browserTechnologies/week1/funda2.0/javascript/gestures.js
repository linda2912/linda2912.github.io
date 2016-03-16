var gestures = (function(){
	return { //make it global
		
		home: function() {

			var home = document.querySelector('main #resultsBlock');
			var mc = new Hammer(home);

			mc.on("swiperight", function(ev) { //on swipe right execute this function
				window.location.hash = "#";
		
			});
		}
	}
		
}());