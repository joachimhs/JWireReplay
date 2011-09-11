// ==========================================================================
// Project:   JWireReplayView - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals JWireReplayView */

// This page describes the main user interface for your application.  
JWireReplayView.mainPage = SC.Page.design({

	topView : SC.outlet('mainPane.topView'),
	mainTabView: SC.outlet('mainPane.mainTabView'),
	importTabView: SC.outlet('mainPane.mainTabView.tabView'),
	mainPane : SC.MainPane.design({
		defaultResponder: JWireReplayView,
		childViews : 'topView mainTabView'.w(),

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

		mainTabView : JWireReplayView.MainTabView.design({
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
