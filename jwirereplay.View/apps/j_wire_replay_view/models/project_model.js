JWireReplayView.PacketModel = SC.Record.extend({

	primaryKey : 'projectSessionID',
	projectSessionID : SC.Record.attr(String),
	projectName : SC.Record.attr(String),
	sessionNumber : SC.Record.attr(Number),
	sessionID : SC.Record.attr(String),
	firstRequestTimestamp : SC.Record.attr(Date),
	lastRequestTimestamp : SC.Record.attr(Date),
	initialURL : SC.Record.attr(String)
	//packetList : SC.Record.toMany('JWireReplayView.PacketModel', {isMaster: YES})
});

JWireReplayView.PacketModel.FIXTURES = [
	 	{	"projectSessionID": "Project 1_1",
	 		"projectName" : "Project 1",
 			"sessionNumber" : 1,
 			"sessionID" : "afhilefaelijaeaera",
 			"firstRequestTimestamp" : 1316949176,
 			"lastRequestTimestamp" : 1316969176,
 			"initialURL": "http://site.com/login.html"},
		{	"projectSessionID": "Project 1_2",
	 		"projectName" : "Project 1",
 			"sessionNumber" : 2,
 			"sessionID" : "afaefeaifjefieajfe",
 			"firstRequestTimestamp" : 1316959176,
 			"lastRequestTimestamp" : 1316979176,
 			"initialURL": "http://site.com/login.html"}

];