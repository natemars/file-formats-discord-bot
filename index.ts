import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES
    ],
  })

// Listen for when the bot is ready
client.on('ready', () => {
    console.log('The bot is ready!')
    const fileFormatsGuildId = '322254386443190273'
    const guild = client.guilds.cache.get(fileFormatsGuildId)
    let commands
    if(guild){
      commands = guild.commands
    }
    else{
      commands = client.application?.commands
    }

    commands?.create({
      name: 'ping',
      description: 'Replies with pong',
    })
  })

client.on('interactionCreate', async (interation) => {
  if(!interation.isCommand()){
    return
  }

  const { commandName, options } = interation

  if(commandName == 'ping'){
    interation.reply({
      content: 'pong',
      ephemeral: true,
    })
  }
})

  // Listen for new messages
  // client.on('messageCreate', (msg) => {
  //   // Was the message "ping"?
  //   if (msg.content === 'ping') {
  //     // Reply with "pong"
  //     msg.reply({
  //       content: 'pong',
  //     })
  //   }
  // })

  client.login(process.env.TOKEN)