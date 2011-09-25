JWireReplayView.TaskModel = SC.Record.extend({
	primaryKey : 'taskID',
	taskID: SC.Record.attr(Number),
	taskName: SC.Record.attr(String),
	taskProgress: SC.Record.attr(Number)
});

JWireReplayView.TaskModel.FIXTURES = [
 	{	"taskID": 1, "taskName": "Importing capfile", "taskProgress": 45},
 	{	"taskID": 2, "taskName": "Replaying HTTP Traffic", "taskProgress": 24}
];