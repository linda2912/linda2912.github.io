import moment from 'moment';

Template.posts.helpers({
	posts: function() {
		const posts = Posts.find().fetch();
		const formattedPost = posts.map((post) => {
			const time = moment(post.datetime).format('DD-MM-YY H:mm');
			post.datetime = time;
			return post
		});
		return formattedPost;
	}
});

Meteor.subscribe('posts');

Template.posts.events({
	'click #join': function() {
		console.log('i want to join', this);
		// Method call -> join Meteor.userId(), this._id
		Meteor.call('join', Meteor.userId(), this._id);
		console.log(this._id)
		console.log(this._username)
	}
	,
	'click .delete': function() {
		if(confirm('Weet je zeker dat je deze wedstrijd wilt verwijderen?')){
			Posts.remove(this._id);
		}
	}

});
