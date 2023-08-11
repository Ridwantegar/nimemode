const { MessageEmbed } = require("discord.js");
const config = require(`${process.cwd()}/botconfig/config.json`);
var ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require("../../botconfig/emojis.json");
module.exports = {
    name: "toggleplaymessage",
    aliases: ["toggleplaymsg", "playmessage", "playmsg"],
    category: "⚙️ Settings",
    description: "Toggles playmessage (same as pruning...). If its true a message of playing a new track will be sent, even if your afk. If false it wont send any message if a new Track plays! | Default: true aka send new Track information",
    usage: "toggleplaymessage",
    memberpermissions: ["ADMINISTRATOR"],
    type: "music",
    run: async (client, message, args, cmduser, text, prefix) => {
    
      let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
      
      //run the code of togglepruning
      let { run } = require("./togglepruning");
      run(client, message, args);
  }
};

/**
  * @INFO
  * Bot Coded by Truchorko#5566 | https://discord.gg/utmuExHwyT
  * @INFO
  * Work for Team Arcades | https://team.arcades.ga
  * @INFO
  * Please mention him / Team Arcades, when using this Code!
  * @INFO
*/
