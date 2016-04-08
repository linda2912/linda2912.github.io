Tasks = new Mongo.Collection('tasks');


Meteor.methods({
	addTask: function(name){
		if(!Meteor.userId()){
			throw new Meteor.Error('No Access');
		}
		
		Tasks.insert({
			name: name,
			createAt: new Date(),
			userId: Meteor.userId()
		});
	},
	deleteTask: function(taskId){
		Tasks.remove(taskId);
	}
});