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
Meteor.subscribe("users");
// Template.list.onCreated = function() {
// 	Meteor.subscribe("users");
// }

Template.list.helpers({
	username: function(id) {
		var user = Meteor.users.findOne({_id: id});
		console.log(user.username);
		return user.username;
	}
});

Meteor.subscribe('posts');



Template.posts.events({
	'click #join': function() {
		Meteor.call('join', Meteor.userId(), this._id);
		document.querySelector('#join').classList.add('invisible');
		document.querySelector('#joinNot').classList.remove('invisible');
	},
	'click #joinNot': function() {
		Meteor.call('joinNot', Meteor.userId(), this._id);
		document.querySelector('#joinNot').classList.add('invisible');
		document.querySelector('#join').classList.remove('invisible');
	},
	'click .delete': function() {
		if(confirm('Weet je zeker dat je deze wedstrijd wilt verwijderen?')){
			Posts.remove(this._id);
		}
	}

});