var searchForm = (function () {
	
	var searchObj = { //looked at leander his code

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

		filterListener: function () {

			var fieldsets = document.querySelectorAll('main fieldset'); //select all fieldsets

			if (searchForm.answers.place === "") { //if there is no place
				searchForm.answers.place = "heel-nederland" + "/"; //make the place name "heel-nederland"
			}
			if (searchForm.answers.priceMin === "") { //if there is no min price
				searchForm.answers.priceMin = "0"; //make it "0"
			}

			for (var i = 0; i < fieldsets.length; i++) { //loop through the fieldsets
				fieldsets[i].onchange = function (event) { //if anything changed execute this functie
					event.preventDefault(); //cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

					switch (event.target.name) { 
						//save the value if anything changed
						case "place": 
							searchForm.answers.place = event.target.value + "/";
							break;

						case "distance":
							searchForm.answers.distance = event.target.value + "km/";
							break;

						case "priceMin":
							searchForm.answers.priceMin = event.target.value;
							break;

						case "priceMax":
							if (event.target.value === "+") {
								searchForm.answers.priceMax = event.target.value + "/";
							}
							else {
								searchForm.answers.priceMax = "-" + event.target.value + "/";
							}
							break;

						case "rooms":
							searchForm.answers.rooms = event.target.value + "kamers/";
							break;

						case "sleepingRooms":
							searchForm.answers.sleepingRooms = event.target.value + "slaapkamers/";
							if(searchForm.answers.sleepingRooms === undefined) {
								searchForm.answers.sleepingRooms = "1+slaapkamers";
							}
							break;

						case "livingArea":
							searchForm.answers.livingArea = event.target.value + "woonopp/";
							break;

						case "percelArea":
							searchForm.answers.percelArea = event.target.value + "perceelopp/";
							break;

						case "outside":
							searchForm.answers.outside = event.target.value + "/";
							break;
					}
				}
			};
		},

		urlListener: function() {
			if(searchForm.answers.sleepingRooms === undefined) {
				searchForm.answers.sleepingRooms = "1+slaapkamers";
			}

			var form = document.querySelector('main form');

			form.onsubmit = function(event) { //execute this function on submit
				event.preventDefault();
				//making the url with the saved values 
				searchForm.answers.url = searchForm.answers.place + "/" + searchForm.answers.distance + searchForm.answers.priceMin + searchForm.answers.priceMax + searchForm.answers.rooms + searchForm.answers.sleepingRooms + searchForm.answers.livingArea + searchForm.answers.percelArea + searchForm.answers.outside;

				if (searchForm.answers.oldUrl !== searchForm.answers.url) { //check if the old url isn't the same as the new one

					getData.dataRequest(searchForm.answers.url); //push the data into getData.dataRequest
				}
				searchForm.answers.oldUrl = searchForm.answers.url;
			}
			
		}
	};

	return { //makes it global
		filterListener: searchObj.filterListener,
		answers: searchObj.answers,
		urlListener: searchObj.urlListener
	};

}());





