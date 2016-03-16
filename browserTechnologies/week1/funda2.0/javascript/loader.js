var loader = (function() { 
	return {
		toggle: function() { // toggle the loader by adding and removing the class invisible
			document.querySelector('main .spinner').classList.toggle('invisible'); 
		}
	}
	
}());