const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
console.log('Bot Started.');

client.user.setActivity('reactions', {type: "WATCHING"});

});

client.on('messageReactionAdd', (reaction, user) => {

let msg = reaction.message;
const logChannel = msg.guild.channels.find(ch => ch.name === "logs");
if (!logChannel) return;

const reactionAdded = new Discord.RichEmbed()
.setAuthor(`${user.tag} (${user.id})`, user.avatarURL)
.setTitle(`Reaction Added in #${msg.channel.name}`)
.addField("Message", `[Jump to Message](https://discordapp.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id})`)
.addField('User', user)
.addField('Reaction', reaction.emoji.name)
.setTimestamp()
.setColor(0x03fc52);

logChannel.send(reactionAdded);

});

client.on('messageReactionRemove', (reaction, user) => {

let msg = reaction.message;
const logChannel = msg.guild.channels.find(ch => ch.name === "logs");
if (!logChannel) return;

const reactionDeleted = new Discord.RichEmbed()
.setAuthor(`${user.tag} (${user.id})`, user.avatarURL)
.setTitle(`Reaction Deleted in #${msg.channel.name}`)
.addField("Message", `[Jump to Message](https://discordapp.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id})`)
.addField('User', user)
.addField('Reaction', reaction.emoji.name)
.setTimestamp()
.setColor(0xfa1105);

logChannel.send(reactionDeleted);

});

client.login(config.token);