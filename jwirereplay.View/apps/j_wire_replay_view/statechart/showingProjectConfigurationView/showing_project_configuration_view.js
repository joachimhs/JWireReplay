JWireReplayView.showingProjectConfigurationView = SC.State.extend({
    initialSubstate: 'showProjectConfigPanel',

    showProjectConfigPanel: SC.State.design({
        initialSubstate: 'showProjectList',
        
        showSelectedProjectAction: function() {
            this.gotoState('showingSelectedProject');
        },
        
        enterState: function() {
        	JWireReplayView.mainPage.get('projectConfigView').set('isVisible', YES);
        	
        	JWireReplayView.projectListController.set('content', JWireReplayView.JWireReplayStore.find(JWireReplayView.ProjectModel));
        	SC.Logger.log('entered showProjectConfigPanel');
        },
        
        exitState: function() {
        	JWireReplayView.mainPage.get('projectConfigView').set('isVisible', NO);
        	
        	SC.Logger.log('exited showProjectConfigPanel');
        },
        
        showProjectList: SC.State.design({
        	
        }), 
        
        showingSelectedProject: SC.State.design({
        	enterState: function() {
        		SC.Logger.log('enterState: showingSelectedProject')
        		JWireReplayView.mainPage.get('projectConfigItemView').set('isVisible', YES);
        	},
        	
        	exitState: function() {
        		JWireReplayView.mainPage.get('projectConfigItemView').set('isVisible', NO);
        	}
        })
        
    }),
    
    
});