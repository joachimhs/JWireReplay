JWireReplayView.showingTopPanel = SC.State.extend({
    initialSubstate: 'ready',

    enterState: function() {
        JWireReplayView.mainPage.get('topView').set('isVisible', YES);
        SC.Logger.log('entered showTopMenu');
    },

    exitState: function() {
    	JWireReplayView.mainPage.get('topView').set('isVisible', NO);
        SC.Logger.log('exited showTopMenu');
    },

    ready: SC.State.design({
        
    })
});