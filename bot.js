const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("553896928639975427")
setInterval(function() {
channel.send(`omgaaaa3`);
}, 30)
})

client.login(process.env.BOT_TOKEN);