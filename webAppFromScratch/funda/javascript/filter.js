var filter = (function() { 

	return {
	
		search: function(button, input, img) { 
			
			document.querySelector(button).onclick = function() {
				document.querySelector(button).classList.toggle('background')
				document.querySelector(input).classList.toggle('invisible')
				document.querySelector(img).classList.toggle('turn')
				document.querySelector(button).classList.toggle('bold')
			}
		},

		up: function() {
			document.querySelector("main .up").onclick = function() {
				window.scrollTo(0, -500);
			}
		}
	}
	
}());

