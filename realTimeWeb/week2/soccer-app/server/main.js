import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  	// code to run on server at startup
});

Meteor.publish('join', function(){
	return Game.find({userId: this.userId});
});

Meteor.publish('posts', function(){
	return Posts.find();
})

Meteor.methods({
	join: function(userId, gameId) {
		Posts.update({_id: gameId}, {$push: { attendees: userId }});
	},
	findUserName: function(id) {
		console.log(Meteor.users.find({ "_id" : id }).fetch());
		// Meteor.users.find({ "_id" : id }, function(err, data) {
		// 	if(err) console.error(err);
		// 	return data;
		// });
		return Meteor.users.find({ "_id" : id }).fetch();
		
	}
})

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
})

