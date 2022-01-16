const { Client, Intents } = require('discord.js');

var config = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = "-"

client.once('ready', () => {
    console.log('The File Formats bot is online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    }
});

// TODO Need local config file to store token. Token below is not used anymore by discord.
client.login(config.token);