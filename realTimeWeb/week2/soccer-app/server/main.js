import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  	// code to run on server at startup
});

Meteor.publish('join', function(){
	return Game.find({userId: this.userId});
});

Meteor.publish('posts', function(){
	return Posts.find();
});
//currentUser.username
Meteor.publish("users", function(){
  return Meteor.users.find({},{fields:{username:1}})
});



Meteor.methods({
	join: function(userId, gameId) {
		Posts.update({_id: gameId}, {$addToSet: { attendees: userId }});

	},
	joinNot: function(userId, gameId) {
		Posts.update({_id: gameId}, {$pull: { attendees: userId }});
	}
});

Posts.allow({
	insert: function(userId, doc) {
		return true;
	},
	remove: function(userId, doc) {
		return true;
	},
	update: function(userId, doc) {
		return true;
	}
});
