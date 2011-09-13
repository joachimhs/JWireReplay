JWireReplayView.ProjectConfigItemView = SC.View.extend({
	childViews: 'labelView saveAlertButtonView'.w(),
	layout: {top: 0, bottom: 0, left: 0, right: 0},
        
    labelView: SC.LabelView.extend({
    	layout: {top: 0, bottom: 0, left: 0, right: 0},
    	valueBinding: "JWireReplayView.selectedProjectController.projectName",
    }),

    saveAlertButtonView: SC.ButtonView.design({
        layout: {right: 10, width: 150, bottom: 10, height: 25},
        title: "Save Project",
        //action: "EurekaJView.saveAlertsAction"
    })
        
});