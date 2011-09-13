JWireReplayView.ProjectModel = SC.Record.extend({
	
	primaryKey: 'projectName',
	projectName: SC.Record.attr(String),
	importedCapFiles: SC.Record.attr(Array),
	importNewCapFiles: SC.Record.attr(Array),
	sessionIdentifierKey: SC.Record.attr(String),
	logonUrl: SC.Record.attr(String)
});