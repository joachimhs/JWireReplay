JWireReplayView.ProjectModel = SC.Record.extend({

	primaryKey : 'projectName',
	projectName : SC.Record.attr(String),
	importedCapFiles : SC.Record.toMany('JWireReplayView.CapFileModel', {isMaster: YES}),
	importNewCapFiles : SC.Record.toMany('JWireReplayView.CapFileModel', {isMaster: YES}),
	sessionIdentifierKey : SC.Record.attr(String),
	logonUrl : SC.Record.attr(String),
	throwArayPacketsWithoutSessionID: SC.Record.attr(Boolean)
});

JWireReplayView.ProjectModel.FIXTURES = [
	 	{	"projectName" : "Project 1",
 			"sessionIdentifierKey" : "jsessionid",
 			"logonUrl" : "http://my.site.com/login.html",
 			"importedCapFiles" : [],
 			"importNewCapFiles" : [],
 			"throwArayPacketsWithoutSessionID": YES},
		{	"projectName" : "Project 2",
 			"sessionIdentifierKey" : "jsessionid",
 			"logonUrl" : "http://my.site2.com/login.html",
 			"importedCapFiles" : [],
 			"importNewCapFiles" : [], 
 			"throwArayPacketsWithoutSessionID": NO},

];