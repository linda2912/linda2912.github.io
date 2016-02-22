var gestures = (function(){
	return { //make it global
		art: function() { 

			var art = document.querySelector('main .art'); // select the class art in the main
			var mc = new Hammer(art); 

			mc.on("swiperight", function(ev) { //if there is a swipe right gesture 
				window.location.hash = "#home"; //change the hash
			});
		},
		home: function() {

			var home = document.querySelector('main .startScreen');
			var mc = new Hammer(home);

			mc.on("swipeleft", function(ev) {
				window.location.hash = "#art";
			});
		}
	}
		
}());