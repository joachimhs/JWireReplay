JWireReplayView.ProjectConfigItemView = SC.View.extend({
	childViews: ['projectNameLabelView', 
	             'capfileInfoLabelView', 
	             'capfileSelectionScrollView', 
	             'loginUrlLabelView', 
	             'logonUrlTextFieldView', 
	             'sessionIdLabelView', 
	             'sessionIdTextFieldView',  
	             'throwAwayCheckboxView', 
	             'saveAlertButtonView',
	             'selectedCapfileScrollView',
	             'addSelectedCapFilesButton',
	             'removeSeletedCapFilesButton'],
	             
	layout: {top: 0, bottom: 0, left: 5, right: 5},
        
    projectNameLabelView: SC.LabelView.extend({
    	layout: {top: 0, height: 25, left: 0, right: 0},
    	valueBinding: "JWireReplayView.selectedProjectController.projectName",
    	controlSize: SC.LARGE_CONTROL_SIZE,
    	textAlign: SC.ALIGN_CENTER,
    	fontWeight: SC.BOLD_WEIGHT,
    }),
    
    capfileInfoLabelView: SC.LabelView.extend({
    	layout: {top: 25, height: 25, left: 0, right: 0},
    	value: "Choose a .cap file to import to project:",
    	controlSize: SC.LARGE_CONTROL_SIZE,
    	textAlign: SC.ALIGN_LEFT    	
    }),
    
    capfileSelectionScrollView: SC.ScrollView.design({
        layout: {top: 50, height: 200, left: 0, width: 300 },
        hasHorizontalScroller: YES,
        hasVerticalScroller: YES,

        contentView: SC.ListView.extend({
        	allowsMultipleSelection: NO,
        	
            backgroundColor: '#F0F8FF',
            contentBinding: 'JWireReplayView.capfileListController.arrangedObjects',
            selectionBinding: 'JWireReplayView.capfileListController.selection',
            contentValueKey: "capfileName",
            //selectionDelegate: EurekaJView.alertSelectionDelegate,
        })
    }),
    
    selectedCapfileScrollView: SC.ScrollView.design({
        layout: {top: 50, height: 200, width: 300, right: 50 },
        hasHorizontalScroller: YES,
        hasVerticalScroller: YES,

        contentView: SC.ListView.extend({
        	allowsMultipleSelection: NO,
        	
            backgroundColor: '#F0F8FF',
            contentBinding: 'JWireReplayView.selectedCapfileController.arrangedObjects',
            selectionBinding: 'JWireReplayView.selectedCapfileController.selection',
            contentValueKey: "capfileName",
            //selectionDelegate: EurekaJView.alertSelectionDelegate,
        })
    }),
    
    addSelectedCapFilesButton: SC.ButtonView.design({
    	layout: {top: 115, height: 25, width: 100, left: 305 },
    	title: "Select >>",
    	action: 'JWireReplayView.addSelectedCapFilesToProject'
    }),
    
    removeSeletedCapFilesButton: SC.ButtonView.design({
    	layout: {top: 140, height: 25, width: 100, left: 305 },
    	title: "<< Remove",
    	action: 'JWireReplayView.removeSelectedCapFilesToProject'
    }),
    
    loginUrlLabelView: SC.LabelView.extend({
    	layout: {top: 250, height: 25, left: 0, right: 0},
    	value: "Choose the site Logon URL:",
    	controlSize: SC.LARGE_CONTROL_SIZE,
    	textAlign: SC.ALIGN_LEFT    	
    }),
    
    logonUrlTextFieldView: SC.TextFieldView.extend({
        layout: {top: 275, left: 0, height: 25, right: 50},
        contentBinding: 'JWireReplayView.selectedProjectController',
        contentValueKey: "logonUrl" 
    }),
    
    sessionIdLabelView: SC.LabelView.extend({
    	layout: {top: 300, height: 25, left: 0, right: 0},
    	value: "Session Identifier key (jsessionid, etc.):",
    	controlSize: SC.LARGE_CONTROL_SIZE,
    	textAlign: SC.ALIGN_LEFT    	
    }),
    
    sessionIdTextFieldView: SC.TextFieldView.extend({
        layout: {top: 325, left: 0, height: 25, right: 50},
        contentBinding: 'JWireReplayView.selectedProjectController',
        contentValueKey: "sessionIdentifierKey" 
    }),
    
    throwAwayCheckboxView: SC.CheckboxView.extend({
        layout: {top: 350, right: 50, left: 0, height: 25},
        contentBinding: 'JWireReplayView.selectedProjectController',
        contentValueKey: "throwArayPacketsWithoutSessionID",
        title: 'Throw away packets w/o a Session Identifier'
    }),

    saveAlertButtonView: SC.ButtonView.design({
        layout: {right: 50, left: 10, bottom: 0, height: 25},
        title: "Save changes to project",
        //action: "EurekaJView.saveAlertsAction"
    })
        
});