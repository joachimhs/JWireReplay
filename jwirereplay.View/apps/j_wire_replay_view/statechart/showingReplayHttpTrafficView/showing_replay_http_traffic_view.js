JWireReplayView.showingReplayHttpTrafficView = SC.State.extend({
    initialSubstate: 'showReplayHttpTrafficPanel',

    showReplayHttpTrafficPanel: SC.State.design({
        initialSubstate: 'ready',
        
        enterState: function() {
        	JWireReplayView.mainPage.get('replayHttpTrafficView').set('isVisible', YES);
        	
        	JWireReplayView.projectListController.set('content', JWireReplayView.JWireReplayStore.find(JWireReplayView.ProjectModel));
        	SC.Logger.log('entered showReplayHttpTrafficPanel');
        },
        
        exitState: function() {
        	JWireReplayView.mainPage.get('replayHttpTrafficView').set('isVisible', NO);
        	
        	SC.Logger.log('exited showReplayHttpTrafficPanel');
        },
        
        ready: SC.State.design({
        	
        })
    }),
    
    
});