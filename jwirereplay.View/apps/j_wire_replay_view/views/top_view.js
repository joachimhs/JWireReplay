JWireReplayView.TopView = SC.View.extend(
{
	childViews: 'logoView projectConfigurationButtonView replayHttpTrafficButtonView viewProjectContentsButtonView administrationButtonView'.w(),
	logoView: SC.LabelView.design({
        layout: {left: 10, width: 250, height: 60, top: 5},
        value: 'JWireReplay',
        controlSize: SC.LARGE_CONTROL_SIZE,
    }), 
    
    projectConfigurationButtonView: SC.ButtonView.design({
    	layout: {left: 250, width: 150, top: 5, bottom: 5},
        title: "Project Configuration",
        action: "JWireReplayView.selectProjectConfiguration"
    }),
    
    replayHttpTrafficButtonView: SC.ButtonView.design({
    	layout: {left: 400, width: 150, top: 5, bottom: 5},
        title: "Replay HTTP Traffic",
        action: "JWireReplayView.selectReplayHttpTraffic"
    }),
    
    viewProjectContentsButtonView: SC.ButtonView.design({
    	layout: {left: 550, width: 150, top: 5, bottom: 5},
        title: "View Project",
        //action: "JWireReplayView.selectProjectConfiguration"
    }),
    
    administrationButtonView: SC.ButtonView.design({
    	layout: {left: 700, width: 150, top: 5, bottom: 5},
        title: "Administration",
        //action: "JWireReplayView.selectProjectConfiguration"
    })
	
});