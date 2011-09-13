// ==========================================================================
// Project:   JWireReplayView - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals JWireReplayView */

// This page describes the main user interface for your application.  
JWireReplayView.mainPage = SC.Page.design({

	topView : SC.outlet('mainPane.topView'),
	projectConfigView: SC.outlet('mainPane.projectConfigurationMainView'),
	replayHttpTrafficView: SC.outlet('mainPane.replayHttpTrafficMainView'),
	
	mainPane : SC.MainPane.design({
		defaultResponder: JWireReplayView,
		childViews : 'topView projectConfigurationMainView replayHttpTrafficMainView'.w(),

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
				right : 0,
				bottom : 0
			}
		}).classNames('whiteBackground'),
		
		replayHttpTrafficMainView : JWireReplayView.replayHttpTrafficMainView.design({
			isVisible : NO,
			layout : {
				top : 45,
				left : 0,
				right : 0,
				bottom : 0
			}
		}).classNames('whiteBackground')
	})

});
