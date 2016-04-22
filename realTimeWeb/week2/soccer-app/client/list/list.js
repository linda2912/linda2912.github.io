Template.posts.events({
	'click #change': function() {
		var players = document.querySelectorAll('#players');

		[].forEach.call(players, function (player) {
			player.classList.add('item2');
			player.classList.remove('item');
		});
		
	},
	'click #change2': function() {
		var players = document.querySelectorAll('#players');

		[].forEach.call(players, function (player) {
			player.classList.add('item');
			player.classList.remove('item2');
		});	
	}
});
