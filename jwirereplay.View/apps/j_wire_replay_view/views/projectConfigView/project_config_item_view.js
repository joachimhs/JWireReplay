JWireReplayView.ProjectConfigItemView = SC.View.extend({
	childViews: ['projectNameLabelView', 
	             'capfileInfoLabelView', 
	             'capfileSelectionScrollView', 
	             'loginUrlLabelView', 
	             'logonUrlTextFieldView', 
	             'sessionIdLabelView', 
	             'sessionIdTextFieldView',  
	             'throwAwayCheckboxView', 
	             'saveAlertButtonView'],
	             
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
        layout: {top: 50, height: 200, left: 0, right: 50 },
        hasHorizontalScroller: YES,
        hasVerticalScroller: YES,

        contentView: SC.ListView.extend({
        	allowsMultipleSelection: NO,
        	
            backgroundColor: '#F0F8FF',
            contentBinding: 'JWireReplayView.projectListController.arrangedObjects',
            selectionBinding: 'JWireReplayView.projectListController.selection',
            contentValueKey: "projectName",
            //selectionDelegate: EurekaJView.alertSelectionDelegate,
        })
    }),
    
    loginUrlLabelView: SC.LabelView.extend({
    	layout: {top: 250, height: 25, left: 0, right: 0},
    	value: "Choose the site Logon URL:",
    	controlSize: SC.LARGE_CONTROL_SIZE,
    	textAlign: SC.ALIGN_LEFT    	
    }),
    
    logonUrlTextFieldView: SC.TextFieldView.extend({
        layout: {top: 275, left: 0, height: 25, right: 50},
        //contentBinding: 'EurekaJView.editAlertController',
        //contentValueKey: "alertErrorValue" 
    }),
    
    sessionIdLabelView: SC.LabelView.extend({
    	layout: {top: 300, height: 25, left: 0, right: 0},
    	value: "Session Identifier key (jsessionid, etc.):",
    	controlSize: SC.LARGE_CONTROL_SIZE,
    	textAlign: SC.ALIGN_LEFT    	
    }),
    
    sessionIdTextFieldView: SC.TextFieldView.extend({
        layout: {top: 325, left: 0, height: 25, right: 50},
        //contentBinding: 'EurekaJView.editAlertController',
        //contentValueKey: "alertErrorValue" 
    }),
    
    throwAwayCheckboxView: SC.CheckboxView.extend({
        layout: {top: 350, right: 50, left: 0, height: 25},
        //contentBinding: 'EurekaJView.editEmailGroupController',
        //contentValueKey: "smtpUseSSL"
        title: 'Throw away packets w/o a Session Identifier'
    }),

    saveAlertButtonView: SC.ButtonView.design({
        layout: {right: 50, left: 10, bottom: 10, height: 25},
        title: "Save changes to project",
        //action: "EurekaJView.saveAlertsAction"
    })
        
});