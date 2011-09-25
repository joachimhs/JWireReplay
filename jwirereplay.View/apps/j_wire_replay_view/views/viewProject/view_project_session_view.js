JWireReplayView.ViewProjectSessionView = SC.View.extend({
	
	childViews: 'projectNameLabelView packetHeadlineLabelView projectSessionViewScrollView packetScrollView'.w(),
	
	projectNameLabelView: SC.LabelView.extend({
    	layout: {top: 0, height: 15, left: 0, right: 0},
    	value: "Session List for selected project",
    	controlSize: SC.NORMAL_CONTROL_SIZE,
    	textAlign: SC.ALIGN_LEFT,
    	fontWeight: SC.BOLD_WEIGHT,
    }),
    
    projectSessionViewScrollView: SC.ScrollView.design({
        layout: {top: 15, height: 200, left: 0, right: 0 },
        hasHorizontalScroller: YES,
        hasVerticalScroller: YES,

        contentView: SC.TableView.extend({
        	selectOnMouseDown: YES,
        	exampleView: SC.TableRowView,
            recordType: JWireReplayView.SessionModel,
            
            contentBinding: 'JWireReplayView.projectSessionListController.arrangedObjects',
            selectionBinding: 'JWireReplayView.projectSessionListController.selection',
            columns: [
                      SC.TableColumn.create({
                          key: 'sessionNumber',
                          label: 'Session Number',
                          width: 60
                      }),
                      SC.TableColumn.create({
                          key: 'firstRequestTimestamp',
                          label: 'Session Start Date',
                          width: 200
                      }),
                      SC.TableColumn.create({
                          key: 'lastRequestTimestamp',
                          label: 'Session End Date',
                          width: 200
                      })
                  ]
        })
    }),
    
    packetHeadlineLabelView: SC.LabelView.extend({
    	layout: {top: 220, height: 15, left: 0, right: 0},
    	value: "Packet List for selected session",
    	controlSize: SC.NORMAL_CONTROL_SIZE,
    	textAlign: SC.ALIGN_LEFT,
    	fontWeight: SC.BOLD_WEIGHT,
    }),
    
    packetScrollView: SC.ScrollView.design({
        layout: {top: 240, bottom: 0, left: 0, right: 0 },
        hasHorizontalScroller: YES,
        hasVerticalScroller: YES,

        contentView: SC.TableView.extend({
        	exampleView: SC.TableRowView,
            recordType: JWireReplayView.PacketModel,
            contentBinding: 'JWireReplayView.viewPacketListController.arrangedObjects',
            selectOnMouseDown: YES,
            
            columns: [
                      SC.TableColumn.create({
                          key: 'tcpType',
                          label: 'TCP Method',
                          width: 60
                      }),
                      SC.TableColumn.create({
                          key: 'path',
                          label: 'URL',
                          width: 200
                      }),
                      SC.TableColumn.create({
                          key: 'microsecond',
                          label: 'Date',
                          width: 150
                      }),
                      SC.TableColumn.create({
                          key: 'data',
                          label: 'Payload',
                          width: 250
                      })
                  ]
        })
    })
});