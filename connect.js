
var config = {
	host : '',
	user : '',
	password : '',
	database ; ''
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