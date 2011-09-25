JWireReplayView.showingViewProjectView = SC.State.extend({
    initialSubstate: 'showViewProjectPanel',

    showViewProjectPanel: SC.State.design({
        initialSubstate: 'showProjectList',
        
        showingSelectedViewProjectViewAction: function() {
            this.gotoState('showingSelectedViewProjectView');
        },
        
        enterState: function() {
        	JWireReplayView.mainPage.get('viewProjectMainView').set('isVisible', YES);
        	
        	JWireReplayView.viewProjectListProjectController.set('content', JWireReplayView.JWireReplayStore.find(JWireReplayView.ProjectModel));
        	
        	SC.Logger.log('entered showViewProjectPanel');
        },
        
        exitState: function() {
        	JWireReplayView.mainPage.get('viewProjectMainView').set('isVisible', NO);
        	
        	SC.Logger.log('exited showProjectConfigPanel');
        },
        
        showProjectList: SC.State.design({
        	
        }), 
        
        showingSelectedViewProjectView: SC.State.design({
        	enterState: function() {
        		SC.Logger.log('enterState: showingSelectedViewProjectView')
        		JWireReplayView.mainPage.get('selectedSessionView').set('isVisible', YES);
        	},
        	
        	exitState: function() {
        		JWireReplayView.mainPage.get('selectedSessionView').set('isVisible', NO);
        	},
        })
        
    }),
    
    
});