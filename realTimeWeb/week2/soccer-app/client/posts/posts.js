import moment from 'moment';

Template.posts.helpers({
	posts: function() {
		const posts = Posts.find().fetch();
		const formattedPost = posts.map((post) => {
			const time = moment(post.datetime).format('DD-MM-YY h:mm');
			post.datetime = time;
			return post
		});
		return formattedPost;
	}
});

Template.posts.events({
	'click #join': function(event) {
		console.log('i want to join', this);
		// Method call -> join Meteor.userId(), this._id
		Meteor.call('join', Meteor.userId(), this._id);

		return false;
	}
});
