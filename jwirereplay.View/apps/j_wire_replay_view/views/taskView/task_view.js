JWireReplayView.TaskMainView = SC.View.extend(
{
	childViews: 'taskViewLabelView'.w(),
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
    }).classNames('underlined')
});
