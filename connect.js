
//mysql://b71bd689e11b93:bda47384@us-cdbr-east-05.cleardb.net/heroku_90c87f6652aaa5d?reconnect=true

var config = {
	host : 'us-cdbr-east-05.cleardb.net',
	user : 'b71bd689e11b93',
	password : 'bda47384',
	database ; 'heroku_90c87f6652aaa5d'
};

var connection;

function connect(){
	connection = mysql.createConnection(config);
	connection.connect(function(err){
		if(err) {
			console.log('DB disconnect: ', err);
			setTimeout(connect, 2000);
		}
	});

	connection.on('error', function(err){
		console.log('DB error: ', err);
		if(err.code === "PROTOCOL_CONNECTION_LOST") {
			connect();
		}
	});
}

connect();