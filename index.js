const Eris = require("eris");
require('dotenv').config();

botToken = process.env.TOKEN;

const bot = new Eris.CommandClient(botToken, {}, {
  description: "Powered by Eris",
  owner: "AM GAMOr (wombat)#1521\nid: 546107653718540298",
  prefix: "!"
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
  var totalUptime = `${days}d, ${hours}h, ${minutes}m and ${seconds}s`;

  return totalUptime;
}

bot.on("messageCreate", (msg) => {
  switch (msg.content) {
    case '!uptime':
      bot.createMessage(msg.channel.id, `${uptime()}`);
      break;

  }

  /*
  if(msg.content === `!uptime`) {
    bot.createMessage(msg.channel.id, `${uptime()}`);
  }
  */
});

bot.connect();
