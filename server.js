var TelegramBot = require('node-telegram-bot-api');
var ckan = require("node-ckan");
ckan.setServer("http://www.tesourotransparente.gov.br/ckan");

var token = '296878881:AAFYwRpPLPPg9_JmyeAhDBdtyaHGEUqiVuc';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});

// Matches /echo [whatever]
bot.onText(/\/Listar/, function (msg, match) {
  var fromId = msg.from.id;
  ckan.exec("package_list", function(err, resp) {
	  bot.sendMessage(fromId, resp);
  });
});



bot.onText(/\/help/, function(msg, match) {
  var fromId = msg.from.id;
  bot.sendMessage(fromId, "Lista de comandos disponíveis:<br>/Listar - lista todos os datasets do portal");
});
