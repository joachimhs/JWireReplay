JWireReplayView.replayHttpTrafficMainView = SC.View.extend(
{
	childViews: 'labelView'.w(),
	labelView: SC.LabelView.design({
        layout: {left: 10, width: 430, height: 60, top: 5},
        value: 'Replay HTTP Traffic Contents',
        controlSize: SC.LARGE_CONTROL_SIZE,
    })
});