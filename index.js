const Eris = require("eris");
require('dotenv').config();

botToken = process.env.TOKEN;
prefix = 'bro.';

const bot = new Eris.CommandClient(botToken, {}, {
  description: "Powered by Eris",
  owner: "`Owner: AM GAMOr (wombat)#1521`\nID: `546107653718540298`",
  prefix: "bro."
});

bot.on("ready", () => {
  fullUser = `${bot.user.username}#${bot.user.discriminator}`;

  console.log(`Ready! Logged in as ${fullUser}`);
});

function uptime() {
  let uptimeSecs = (bot.uptime / 1000);
  let days = Math.floor(uptimeSecs / 86400);
  let hours = Math.floor(uptimeSecs / 3600);
  uptimeSecs %= 3600;
  let minutes = Math.floor(uptimeSecs / 60);
  let seconds = Math.floor(uptimeSecs % 60);
  var totalUptime = `\`${days}\`d, \`${hours}\`h, \`${minutes}\`m and \`${seconds}\`s`;

  return totalUptime;
}

function ping(msg, channel) {
  bot.createMessage(msg.channel.id, "Pinging...").then(m => {
    m.edit(`Roundtrip latency: \`${m.createdTimestamp - message.createdTimestamp}ms`); // \nAPI Latency: \`${Math.round(client.ws.ping)}ms\``);
  });
}

bot.on("messageCreate", (msg) => {
  switch (msg.content) {
    case 'bro.uptime':
      bot.createMessage(msg.channel.id, `${uptime()}`);
      break;
    case 'ping':
      bot.createMessage(msg.channel.id, `${ping()}`)
    case `bro.invite`:
      bot.createMessage(msg.channel.id, 'invite me to ur server plis --> https://discord.com/oauth2/authorize?client_id=885593101375262762&permissions=8&scope=bot');
      break;
  }
});

bot.connect();
