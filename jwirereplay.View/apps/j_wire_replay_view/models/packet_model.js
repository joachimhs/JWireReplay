JWireReplayView.PacketModel = SC.Record.extend({

	primaryKey : 'packetID',
	packetID : SC.Record.attr(String),
	microsecond : SC.Record.attr(Number),
	tcpType : SC.Record.attr(String),
	path : SC.Record.attr(String),
	refererURL : SC.Record.attr(String),
	data : SC.Record.attr(String)
});

JWireReplayView.PacketModel.FIXTURES = [
	 	{	"packetID": "Project 1_1_1316959176000",
 			"microsecond" : 1316959176000,
 			"tcpType" : "GET",
 			"path" : "http://site.com/home.html",
 			"refererURL" : "http://site.com/login.html",
 			"data": ""},
		{	"packetID": "Project 1_2_1316959176000",
 			"microsecond" : 1316959176000,
 			"tcpType" : "GET",
 			"path" : "http://site.com/home.html",
 			"refererURL" : "http://site.com/login.html",
 			"data": ""}

];