JWireReplayView.CapFileModel = SC.Record.extend({
	primaryKey : 'capfileName',
	capfileName : SC.Record.attr(String)
});

JWireReplayView.CapFileModel.FIXTURES = [
 	{	"capfileName" : "Cap_File_1.cap"},
 	{	"capfileName" : "Cap File 2.cap"},
 	{	"capfileName" : "Cap_File_3.cap"},
 	{	"capfileName" : "Cap File 4.cap"}
];