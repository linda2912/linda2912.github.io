var filter = (function() { 

	return {
	
		search: function(button, input, img) { 
			
			document.querySelector(button).onclick = function() { //Execute this function onclick
				document.querySelector(button).classList.toggle('background') //change the background
				document.querySelector(input).classList.toggle('invisible') //show input field
				document.querySelector(img).classList.toggle('turn') //toggle the plus and the cross
				document.querySelector(button).classList.toggle('bold') //toggle the font bold size
				event.preventDefault()
			}
		}
	}
	
}());

