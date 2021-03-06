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
	},
	
	selectProjectConfiguration: function() {
		SC.Logger.log('selectProjectConfiguration');
		JWireReplayView.statechart.sendEvent('showProjectConfigPanelAction');
	},
	
	selectReplayHttpTraffic: function() {
		SC.Logger.log('selectReplayHttpTraffic');
		JWireReplayView.statechart.sendEvent('showReplayHttpTrafficAction');
	},
	
	selectViewProject: function() {
		SC.Logger.log('selectViewProject');
		JWireReplayView.statechart.sendEvent('selectViewProjectAction');
	},
	
	showingSelectedProjectAction: function() {
		SC.Logger.log('showingSelectedProjectAction');
		JWireReplayView.statechart.sendEvent('showSelectedProjectAction');
	},
	
	showingSelectedViewProjectViewAction: function() {
		SC.Logger.log('showingSelectedViewProjectViewAction');
		JWireReplayView.statechart.sendEvent('showingSelectedViewProjectViewAction');
	},
	
	addSelectedCapFilesToProject: function() {
		SC.Logger.log('addSelectedCapFilesToProject'),
		JWireReplayView.statechart.sendEvent('addSelectedCapFilesToProjectAction');
	},
	
	removeSelectedCapFilesToProject: function() {
		SC.Logger.log('removeSelectedCapFilesToProject'),
		JWireReplayView.statechart.sendEvent('removeSelectedCapFilesToProjectAction');
	}
});