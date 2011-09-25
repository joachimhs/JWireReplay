JWireReplayView.statechart = SC.Statechart.create({

    rootState: SC.State.design({
        substatesAreConcurrent: NO,
        initialSubstate: 'ready',        
        
        ready: SC.State.design({
        	
        }),
        
        enterState: function() {
            JWireReplayView.mainPage.get('topView').set('isVisible', YES);
            JWireReplayView.mainPage.get('taskView').set('isVisible', YES);
            SC.Logger.log('showing top and task views');
        },

        exitState: function() {
        	JWireReplayView.mainPage.get('topView').set('isVisible', NO);
        	JWireReplayView.mainPage.get('taskView').set('isVisible', NO);
            SC.Logger.log('hiding top and task views');
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