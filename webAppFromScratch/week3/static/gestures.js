var gestures = (function(){

		return {
			art: function() {
				var art = document.querySelector('main .art');

				var mc = new Hammer(art);

				mc.on("swiperight", function(ev) {

					window.location.hash = "#home";
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



