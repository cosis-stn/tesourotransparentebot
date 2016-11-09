var TelegramBot = require('node-telegram-bot-api');
var ckan = require("node-ckan");
ckan.setServer("http://www.tesourotransparente.gov.br/ckan");

var token = '296878881:AAFYwRpPLPPg9_JmyeAhDBdtyaHGEUqiVuc';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});

// Matches /echo [whatever]
bot.onText(/\/listar/, function (msg, match) {
  var fromId = msg.from.id;
  console.log('acionado o método listar');
  ckan.exec("package_list", function(err, resp) {
	var resposta = '';
	for(var x=0;x<resp.result.length;x++){
		resposta = resposta + resp.result[x] + '<br>';
	}
	 
	bot.sendMessage(fromId, resposta);
  });
});
 


bot.onText(/\/help/, function(msg, match) {
  var fromId = msg.from.id;
  bot.sendMessage(fromId, "Lista de comandos disponíveis:<br>/listar - lista todos os datasets do portal.");
});
