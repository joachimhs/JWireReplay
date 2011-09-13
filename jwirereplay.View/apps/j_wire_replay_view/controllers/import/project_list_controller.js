JWireReplayView.projectListController = SC.ArrayController.create({
	
	newProjectName: null,
	allowsMultipleSelection: NO,
	
	newProjectIsValid: function() {
        var newNameIsValid = (this.get('newProjectName') && this.get('newProjectName').length >= 1);

        var unique = true;
        this.get('content').forEach(function(project) {
            if (project.get('projectName') == this.get('newProjectName')) {
                unique = false;
            }
        }, this);

        return unique && newNameIsValid;
    },
    
    observesSelection: function(){
        if (this.getPath('selection.firstObject.projectName')  != undefined) {
            JWireReplayView.showingSelectedProjectAction();
        	//SC.Logger.log('alertAdministrationController Setting selection: ' + this.getPath('selection.firstObject.alertInstrumentationNode'));
       } else {
            JWireReplayView.selectProjectConfiguration();
        }
    }.observes('selection')
	
});