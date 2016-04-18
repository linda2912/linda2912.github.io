import moment from 'moment';

Template.posts.helpers({
	posts: function() {
		const posts = Posts.find().fetch();
		const formattedPost = posts.map((post) => {
			const time = moment(post.datetime).format('DD-MM-YY H:mm');
			post.datetime = time;
			
			if(post.attendees) {
				post.attendees.forEach(function(id) {
					console.log(id);
					Meteor.call('findUserName', id, function(data) {
						console.log(data)
					});
				});
			}
			return post
		});
		return formattedPost;
	}
});

Meteor.subscribe('posts');

Template.posts.events({
	'click #join': function() {
		Meteor.call('join', Meteor.userId(), this._id);
	}
	,
	'click .delete': function() {
		if(confirm('Weet je zeker dat je deze wedstrijd wilt verwijderen?')){
			Posts.remove(this._id);
		}
	}

});


// template list

