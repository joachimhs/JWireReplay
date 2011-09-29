JWireReplayView.ProjectModel = SC.Record.extend({

	primaryKey : 'projectName',
	projectName : SC.Record.attr(String),
	importedCapFiles : SC.Record.toMany('JWireReplayView.CapFileModel', {isMaster: YES}),
	importNewCapFiles : SC.Record.toMany('JWireReplayView.CapFileModel', {isMaster: YES}),
	sessionIdentifierKey : SC.Record.attr(String),
	logonUrl : SC.Record.attr(String),
	throwArayPacketsWithoutSessionID: SC.Record.attr(Boolean),
	sessionList : SC.Record.toMany('JWireReplayView.SessionModel', {isMaster: YES})
});

JWireReplayView.ProjectModel.FIXTURES = [
	 	{	"projectName" : "Project 1",
 			"sessionIdentifierKey" : "jsessionid",
 			"logonUrl" : "http://my.site.com/login.html",
 			"importedCapFiles" : [],
 			"importNewCapFiles" : [],
 			"throwArayPacketsWithoutSessionID": YES,
 			"sessionList" : ['Project 1_1', 'Project 1_2']},
		{	"projectName" : "Project 2",
 			"sessionIdentifierKey" : "jsessionid",
 			"logonUrl" : "http://my.site2.com/login.html",
 			"importedCapFiles" : [],
 			"importNewCapFiles" : [], 
 			"throwArayPacketsWithoutSessionID": NO,
 			"sessionList" : []}
];