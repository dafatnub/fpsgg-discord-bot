const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      ArgumentProcessor.SplitArguments( '*resolve arg0, arg1, arg2, arg3', 1 );
      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!rUser) return message.channel.send("ERR: Couldn't find user.");
      let reportedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
      let reason = args[2];
      let action = args[3];
      let target = message.mentions.users.first() || message.author;

      let aicon = target.displayAvatarURL;
      let reportEmbed = new Discord.RichEmbed()
      .setAuthor("Report", `${message.author.displayAvatarURL}`)
      .setTitle(`${reason}`)
      .setColor("#15f153")
      .setThumbnail(aicon)
      .setTimestamp(message.createdAt)
      .setFooter("Resolved", bot.user.displayAvatarURL)
      .addField("Reported User", `${reportedUser.tag} ${reportedUser.id}`)
      .addField("Assignee", `[MOD]${message.author.username}`)
      .addField("Action", action);

      let reportschannel= message.guild.channels.find(`name`, "user-reports");
      if(!reportschannel) return message.channel.send("ERR: Couldn't find reports channel.");

      message.delete().catch(O_o=>{});
      reportschannel.send(`${rUser} your report has been resolved`, reportEmbed);
      //reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "resolve"
}
