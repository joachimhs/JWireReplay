JWireReplayView.statechart = SC.Statechart.create({

    rootState: SC.State.design({
        substatesAreConcurrent: NO,
        initialSubstate: 'ready',        
        
        ready: SC.State.design({
        	
        }),
        
        enterState: function() {
            JWireReplayView.mainPage.get('topView').set('isVisible', YES);
            SC.Logger.log('entered showTopMenu');
        },

        exitState: function() {
        	JWireReplayView.mainPage.get('topView').set('isVisible', NO);
            SC.Logger.log('exited showTopMenu');
        },
        
        showProjectConfigPanelAction: function() {
            this.gotoState('showingProjectConfigurationView');
        },
        
        showReplayHttpTrafficAction: function() {
            this.gotoState('selectReplayHttpTrafficView');
        },

        showingProjectConfigurationView: SC.State.plugin('JWireReplayView.showingProjectConfigurationView'),
        
        selectReplayHttpTrafficView: SC.State.plugin('JWireReplayView.showingReplayHttpTrafficView')
    })
});