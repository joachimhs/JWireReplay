// ==========================================================================
// Project:   JWireReplayView - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals JWireReplayView */

// This page describes the main user interface for your application.  
JWireReplayView.mainPage = SC.Page.design({

	topView : SC.outlet('mainPane.topView'),
	projectConfigView: SC.outlet('mainPane.projectConfigurationMainView'),
	projectConfigItemView: SC.outlet('mainPane.projectConfigurationMainView.projectContentView'),
	replayHttpTrafficView: SC.outlet('mainPane.replayHttpTrafficMainView'),
	taskView: SC.outlet('mainPane.taskMainView'),
	
	mainPane : SC.MainPane.design({
		defaultResponder: JWireReplayView,
		childViews : 'topView projectConfigurationMainView replayHttpTrafficMainView taskMainView'.w(),

		topView : JWireReplayView.TopView.design({
			isVisible : NO,
			layout : {
				top : 0,
				left : 0,
				right : 0,
				height : 45
			},
			anchorLocation : SC.ANCHOR_TOP
		}).classNames('whiteBackground'),

		projectConfigurationMainView : JWireReplayView.ProjectConfigMainView.design({
			isVisible : NO,
			layout : {
				top : 45,
				left : 0,
				right : 200,
				bottom : 0
			}
		}).classNames('whiteBackground'),
		
		replayHttpTrafficMainView : JWireReplayView.replayHttpTrafficMainView.design({
			isVisible : NO,
			layout : {
				top : 45,
				left : 0,
				right : 200,
				bottom : 0
			}
		}).classNames('whiteBackground'),
		
		taskMainView: JWireReplayView.TaskMainView.design({
			isVisible: NO,
			layout : {
				top : 45,
				right : 0,
				width: 200,
				bottom : 0
			}
		}).classNames('blueBackground')
	})

});
