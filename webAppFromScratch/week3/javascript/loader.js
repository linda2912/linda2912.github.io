var loader = (function() { 

	document.querySelector('.spinner');

	return {
		toggle: function() { // toggle the loader by adding and removing the class invisible
			spinner.classList.toggle('invisible'); 
		}
	}
	
}());