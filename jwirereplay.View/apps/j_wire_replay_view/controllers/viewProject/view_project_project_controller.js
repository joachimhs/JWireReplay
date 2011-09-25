JWireReplayView.viewProjectListProjectController = SC.ArrayController.create({
	
	observesSelection: function(){
        if (this.getPath('selection.firstObject.projectName')  != undefined) {
            JWireReplayView.showingSelectedViewProjectViewAction();
       } else {
            JWireReplayView.selectViewProject();
        }
    }.observes('selection')
});