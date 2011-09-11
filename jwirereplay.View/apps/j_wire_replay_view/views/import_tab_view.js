JWireReplayView.ImportTabView = SC.View.extend(
{
	childViews: 'newProjectView projectSelectionScrollView deleteProjectButtonView projectContentView'.w(),
    layout: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },

    newProjectView : SC.View.design({
        childViews: 'newProjectTextFieldView newProjectButtonView'.w(),
        layout: {top: 20, height: 30, left: 0, width: 200 },
        backgroundColor: "#ffffff",

        newProjectTextFieldView : SC.TextFieldView.design({
            layout: {top: 2, height: 24, centerY:0, width: 120, left: 2 },
            valueBinding: 'JWireReplayView.projectListController.newProjectName'
        }),

        newProjectButtonView: SC.ButtonView.extend({
            layout: {left: 125, right: 2, height: 24, centerY: 0, top: 2, centerY: 0},
            title: "Add",
            action: 'JWireReplayView.addNewProjectAction'
        })
    }).classNames('thinBlackBorder'),

    projectSelectionScrollView: SC.ScrollView.design({
        layout: {top: 50, bottom: 25, left: 0, width: 200 },
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
    
    deleteProjectButtonView: SC.ButtonView.extend({
        layout: {left: 0, width: 200, height: 24, centerX: 0, bottom: 0, centerY: 0},
        title: "Delete Selected Project",
        //action: 'EurekaJView.deleteSelectedAlertAction'
    }),

    projectContentView: SC.View.extend({
    	childViews: 'labelView saveAlertButtonView'.w(),
    	isVisibleBinding: 'JWireReplayView.projectListController.showProjectContents',
        //isVisibleBinding: 'EurekaJView.alertAdministrationController.showEditAlertView',
        layout: {top: 20, bottom: 0, right: 0, left: 215},
        
        labelView: SC.LabelView.extend({
        	layout: {top: 0, bottom: 0, left: 0, right: 0},
        	valueBinding: "JWireReplayView.selectedProjectController.projectName",
        }),

        saveAlertButtonView: SC.ButtonView.design({
            layout: {right: 10, width: 150, bottom: 10, height: 25},
            title: "Save Project",
            //action: "EurekaJView.saveAlertsAction"
        })

    })
});