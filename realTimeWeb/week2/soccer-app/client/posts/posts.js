import moment from 'moment';

Template.posts.helpers({
	posts: function() {
		const posts = Posts.find({}, {sort: {datetime: 1}}).fetch();
		const formattedPost = posts.map((post) => {
			const time = moment(post.datetime).format('DD-MM-YY H:mm');
			post.datetime = time;
			
			return post
		});
		return formattedPost;
	}
});

Meteor.subscribe("users");
Meteor.subscribe('posts');

Template.list.helpers({
	username: function(id) {
		var user = Meteor.users.findOne({_id: id});
		return user.username;
	}
});

Template.posts.events({
	'click .join': function(e) {
		Meteor.call('join', Meteor.userId(), this._id);

		// var gameId = document.getElementById(this._id);
		// gameId.classList.add('btn-primary');

	},
	'click .joinNot': function() {
		Meteor.call('joinNot', Meteor.userId(), this._id);

		// var gameId = document.getElementById(this._id);
		// gameId.classList.remove('btn-primary');
		
	},
	'click .delete': function() {
		if(confirm('Weet je zeker dat je deze wedstrijd wilt verwijderen?')){
			Posts.remove(this._id);
		}
	},
	'click #addGame': function() {
		document.querySelector('#gameBlock').classList.toggle('blockUp');
		document.querySelector('#gameBlock').classList.toggle('blockDown');
	},
	'click #closeBlock': function() {
		document.querySelector('#gameBlock').classList.toggle('blockUp');
		document.querySelector('#gameBlock').classList.toggle('blockDown');
	}

});

