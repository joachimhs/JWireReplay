JWireReplayView.mixin( {
	
	addNewProjectAction: function() {
		if (JWireReplayView.projectListController.newProjectIsValid()) {
			newProject = JWireReplayView.JWireReplayStore.createRecord(JWireReplayView.ProjectModel, {projectName: JWireReplayView.projectListController.get('newProjectName')});
			JWireReplayView.projectListController.set('newAlertName', '');
		} else {
			SC.AlertPane.warn({
	              message: "Unable to create new Project",
	              description: "The Project name must be unique, and contain at least one character.",
	              caption: "Try changing the name of the Project."
	            });
		}
	}
});