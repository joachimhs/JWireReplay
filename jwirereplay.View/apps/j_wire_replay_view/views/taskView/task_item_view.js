JWireReplayView.taskItemView = SC.View.extend({
	contentDisplayProperties: 'content'.w(),
	childViews: 'taskLabelView taskProgressView'.w(),
	
	taskLabelView: SC.LabelView.design({
        layout: {centerX: 0, left: 5, top: 5, right: 5, height: 30 },
        controlSize: SC.NORMAL_CONTROL_SIZE,
        fontWeight: SC.BOLD_WEIGHT,
		textAlign: SC.ALIGN_CENTER,
        valueBinding: '.parentView.content.taskName'
    }),
    
    taskProgressView: SC.ProgressView.design({
    	layout: {left: 5, top: 35, right: 5, height: 30 },
    	valueBinding: '.parentView.content.taskProgress',
    	minimun: 0,
    	maximum: 100,
    	isIndeterminate: NO,
    	isEnabled: YES
    })

}).classNames('blueBackground');