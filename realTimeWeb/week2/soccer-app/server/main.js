import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('join', function(){
	return Posts.find({userId: this.userId});
});

Meteor.methods({
	join: function() {
		console.log('yaay i exist.');
		return Posts.find({userId: this.userId});
	}
})