JWireReplayView.ViewTabView = SC.View.extend(
{
	childViews: 'projectSelectionViewScrollView selectedSessionView'.w(),
    
	projectSelectionViewScrollView: SC.ScrollView.design({
        layout: {top: 0, bottom: 0, left: 0, width: 200 },
        hasHorizontalScroller: YES,
        hasVerticalScroller: YES,

        contentView: SC.ListView.extend({
        	allowsMultipleSelection: NO,
        	
            backgroundColor: '#F0F8FF',
            contentBinding: 'JWireReplayView.viewProjectListProjectController.arrangedObjects',
            selectionBinding: 'JWireReplayView.viewProjectListProjectController.selection',
            contentValueKey: "projectName",
            //selectionDelegate: EurekaJView.alertSelectionDelegate,
        })
	}),
	
	selectedSessionView: JWireReplayView.ViewProjectSessionView.extend({
    	layout: {top: 0, bottom: 0, right: 15, left: 215},
    	isVisible: NO
    })
});