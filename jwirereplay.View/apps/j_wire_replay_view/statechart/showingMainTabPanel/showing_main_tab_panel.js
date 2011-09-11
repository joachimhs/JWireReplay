JWireReplayView.showingMainTabPanel = SC.State.extend({
    initialSubstate: 'showImportPanel',

    enterState: function() {
        JWireReplayView.mainPage.get('mainTabView').set('isVisible', YES);
        SC.Logger.log('entered showTopMenu');
    },

    exitState: function() {
    	JWireReplayView.mainPage.get('mainTabView').set('isVisible', NO);
        SC.Logger.log('exited showTopMenu');
    },

    showImportPanel: SC.State.design({
        initialSubstate: 'showProjectList',
        
        enterState: function() {
        	JWireReplayView.projectListController.set('content', JWireReplayView.JWireReplayStore.find(JWireReplayView.ProjectModel));
        	SC.Logger.log('entered showImportPanel');
        },
        
        exitState: function() {
        	SC.Logger.log('exited showImportPanel');
        },
        
        showProjectList: SC.State.design({
        	
        })
    }),
    
    
});