const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('The File Formats bot is online!');
});

// TODO Need local config file to store token. Token below is not used anymore by discord.
client.login('ODA3MDY0MjYyNTA4OTM3MjU3.YByjKg.-Sww0W7thWlyXguaMK423I0amhI');