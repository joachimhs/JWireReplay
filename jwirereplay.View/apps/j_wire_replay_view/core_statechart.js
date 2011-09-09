JWireReplayView.statechart = SC.Statechart.create({

    rootState: SC.State.design({
        substatesAreConcurrent: YES,

        enterState: function() {
            //EurekaJView.EurekaJStore.find(EurekaJView.LOGGED_IN_USER_QUERY);
        },
        
        showingTopPanel: SC.State.plugin('JWireReplayView.showingTopPanel'),

        showingMainTabPanel: SC.State.plugin('JWireReplayView.showingMainTabPanel')
    })
});