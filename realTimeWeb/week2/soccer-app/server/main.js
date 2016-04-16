import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  	// code to run on server at startup
});

Meteor.publish('join', function(){
	return Game.find({userId: this.userId});
});

Meteor.methods({
	join: function(userId, gameId) {
		// var currentGame = gameId;
		console.log(userId, gameId);
		console.log('mm')
		Posts.update({_id: gameId}, {$push: { attendees: userId }});
		// Posts.update({ _id: game }, { $push: { attendees: userId } });
	}
})

