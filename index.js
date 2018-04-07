var server = require("ws").Server;
var s = new server({port: 6001});

s.on('connection',function(ws){
	console.log("Server listening on port 6001");
	ws.on('message',function(message){
		console.log("Recieved " + message);
		if (message.includes("headache") || message.includes("Headache") ){
			message = "Have have taken mid-term exam?";
			
		}
		if (message.includes("exercising") || message.includes("Exercising")){
			message = "Do you want me to setup General Checkup?";
		}
		if (message.includes("feeling drossy")){
			message = "Do you feel flu symptoms - like Cold & Fever?";
		}
		if (message.includes("stressed")){
			message = "are you taking any summer interships?";
		}
		if (message.includes("lonely")){
			message = "Are you techie?";
		}
		ws.send("Bot: " + message);
		
		
	});
});