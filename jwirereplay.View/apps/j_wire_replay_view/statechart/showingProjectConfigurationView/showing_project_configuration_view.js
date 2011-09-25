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
        	
        	JWireReplayView.capfileListController.set('content', JWireReplayView.JWireReplayStore.find(JWireReplayView.CapFileModel));
        	
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
        	},
        	
        	addSelectedCapFilesToProjectAction: function() {
        		SC.Logger.log('addSelectedCapFilesToProjectAction');
        		var selectedCapFiles = JWireReplayView.capfileListController.selection();
        		
        		selectedCapFiles.forEach(function(capfile) {
        			JWireReplayView.selectedProjectController.get('importNewCapFiles').pushObject(capfile);
        		}, this);
        		
        		JWireReplayView.capfileListController.set('selection', null);
        	},
        	
        	removeSelectedCapFilesToProjectAction: function() {
        		var selectedCapFiles = JWireReplayView.selectedCapfileController.selection();
        		
        		selectedCapFiles.forEach(function(capfile) {
        			JWireReplayView.selectedProjectController.get('importNewCapFiles').removeObject(capfile);        			
        		}, this);
        	}
        })
        
    }),
    
    
});