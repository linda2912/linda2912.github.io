var filter = (function() { 

	return {
	
		search: function(button, input, img) { 
			
			// var room = document.getElementById('room').className = "invisible";
			document.querySelector(button).onclick = function() {
				document.querySelector(input).classList.toggle('invisible')
				document.querySelector(img).classList.toggle('turn')
			}
			
	}
}

	
}());

