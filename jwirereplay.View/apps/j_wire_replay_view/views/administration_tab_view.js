JWireReplayView.AdministrationTabView = SC.View.extend(
{
	childViews: 'labelView'.w(),
	labelView: SC.LabelView.design({
        layout: {left: 10, width: 430, height: 60, top: 5},
        value: 'Administration Tab Contents',
        controlSize: SC.LARGE_CONTROL_SIZE,
    })
});