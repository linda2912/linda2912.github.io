var searchForm = (function () {
	var searchObj = {

		listner: function () {
			var _searchForm = document.querySelector('main form'), // gething some DOM elements
				_searchField = document.querySelector('main #place'),
				_searchQuery = "";
						
			// console.log(_searchField);

			_searchForm.onsubmit = function (event) { // listens to the onsubmit function of the form
				event.preventDefault(); // dont let it do its usual thing bit instead: 
				_searchQuery = _searchField.value; // get the value from the searchfied
				getData.dataRequest(_searchQuery); // invoke the datarequest function
			};
		}
	};

	return {
		listner: searchObj.listner
	};

}());