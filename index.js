const { Client, Intents } = require('discord.js');
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
  ],
});

const commands = [{
  name: 'ping',
  description: 'Replies with Pong!'
}];

client.on('ready', () => {
  client.application.commands.set(commands)
    .then(console.log)
    .catch(console.error);
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(process.env.DISCORD_TOKEN);
