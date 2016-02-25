var searchForm = (function () {
	
	var searchObj = { //code from leander

		answers: {

			place: "heel-nederland",
			distance: "",
			priceMin: "",
			priceMax: "",
			rooms: "",
			sleepingrooms: "",
			livingArea: "",
			percelArea: "",
			outside: "",
			url: "",
			oldUrl: "",
			urlData: ""

		},

		// listner: function () {
		// 	var _searchForm = document.querySelector('main form'), // gething some DOM elements
		// 		_searchField = document.querySelector('main #place'),
		// 		_searchQuery = "";

		// 	_searchForm.onsubmit = function (event) { // listens to the onsubmit function of the form
		// 		event.preventDefault(); // dont let it do its usual thing bit instead: 
		// 		searchObj.filterListner();
		// 		_searchQuery = _searchField.value; // get the value from the searchfied
		// 		getData.dataRequest(_searchQuery); // invoke the datarequest function
		// 	};
		// },
		filterListner: function () {

			var fieldsets = document.querySelectorAll('main fieldset');

			if (searchForm.answers.place === "") {
				searchForm.answers.place = "heel-nederland" + "/";
			}

			for (var i = 0; i < fieldsets.length; i++) {
				fieldsets[i].onchange = function (event) {
					event.preventDefault();

					switch (event.target.name) {
						case "place":
							searchForm.answers.place = event.target.value + "/";
							if (searchForm.answers.place === "") {
								searchForm.answers.place = "heel-nederland" + "/";
							}
							break;
						case "distance":
							searchForm.answers.distance = event.target.value + "/";
							break;
						case "priceMin":
							searchForm.answers.priceMin = event.target.value + "/";
							break;
						case "priceMax":
							searchForm.answers.priceMax = event.target.value + "/";
							break;
						case "rooms":
							searchForm.answers.rooms = event.target.value + "kamers/";
							break;
						case "sleepingRooms":
							searchForm.answers.sleepingRooms = event.target.value + "slaapkamers/";
							if(searchForm.answers.sleepingRooms === undefined) {
								searchForm.answers.sleepingRooms = "1+slaapkamers";
							}
							console.log(event.target.value);
							break;
						case "livingArea":
							searchForm.answers.livingArea = event.target.value + "woonopp/";
							break;
						case "percelArea":
							searchForm.answers.percelArea = event.target.value + "/";
							break;
						case "outside":
							searchForm.answers.outside = event.target.value + "/";
							break;
					}

				}
			};

			

		},
		urlListner: function() {
			if(searchForm.answers.sleepingRooms === undefined) {
				searchForm.answers.sleepingRooms = "1+slaapkamers";
			}
			var form = document.querySelector('main form');

			form.onsubmit = function(event) {
				console.log(event);
				event.preventDefault();
				searchForm.answers.url = searchForm.answers.place + "/" + searchForm.answers.distance + searchForm.answers.priceMin + searchForm.answers.priceMax + searchForm.answers.rooms + searchForm.answers.sleepingRooms + searchForm.answers.livingArea + searchForm.answers.percelArea + searchForm.answers.outside;
				console.log(searchForm.answers.distance)

				console.log(searchForm.answers);
				if (searchForm.answers.oldUrl !== searchForm.answers.url) {

					getData.dataRequest(searchForm.answers.url);
					console.log(searchForm.answers.url);
				}
				searchForm.answers.oldUrl = searchForm.answers.url;
			}
			
		}
	};

	return {
		listner: searchObj.listner,
		filterListner: searchObj.filterListner,
		answers: searchObj.answers,
		urlListner: searchObj.urlListner
	};

}());





