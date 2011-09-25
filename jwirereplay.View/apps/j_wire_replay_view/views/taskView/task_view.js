JWireReplayView.TaskMainView = SC.View.extend(
{
	childViews: 'taskViewLabelView taskListScrollView'.w(),
    layout: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    
    taskViewLabelView: SC.LabelView.extend({
    	layout: {top: 5, height: 25, left: 0, right: 0},
    	value: "TASK VIEW",
    	controlSize: SC.LARGE_CONTROL_SIZE,
    	textAlign: SC.ALIGN_CENTER    	
    }).classNames('underlined'),
    
    taskListScrollView: SC.ScrollView.design({
        layout: {top: 50, bottom: 0, left: 0, right: 0 },
        hasHorizontalScroller: YES,
        hasVerticalScroller: YES,

        contentView: SC.GridView.extend({
        	contentBinding: 'JWireReplayView.taskListController.arrangedObjects',
            selectOnMouseDown: NO,
            exampleView: JWireReplayView.taskItemView,
            recordType: JWireReplayView.TaskModel,
            itemsPerRow: 1,
            isSelectable: NO,
            rowHeight: 60
        	
        })
    })
})
