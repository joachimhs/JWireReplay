JWireReplayView.MainTabView = SC.View.extend(
{
	childViews: 'tabView'.w(),
	tabView: SC.TabView.design({
        layout: {top: 0,
            bottom: 0,
            left: 0,
            right: 0},
        nowShowing: 'JWireReplayView.ImportTabView',
        itemTitleKey: 'title',
        itemValueKey: 'value',
        items: [
            {title: 'Import', value: 'JWireReplayView.ImportTabView'},
            {title: 'Replay', value: 'JWireReplayView.ReplayTabView'},
            {title: 'View', value: 'JWireReplayView.ViewTabView'},
            {title: 'Administration', value: 'JWireReplayView.AdministrationTabView'}
        ]
    })
	
});