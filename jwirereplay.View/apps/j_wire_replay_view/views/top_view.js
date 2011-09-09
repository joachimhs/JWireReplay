JWireReplayView.TopView = SC.View.extend(
{
	childViews: 'logoView'.w(),
	logoView: SC.LabelView.design({
        layout: {left: 10, width: 430, height: 60, top: 5},
        value: 'JWireReplay',
        controlSize: SC.LARGE_CONTROL_SIZE,
    })
	
});