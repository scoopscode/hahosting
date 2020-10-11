const Discord = require('discord.js');

const altitude = new Discord.Client();

const prefix = "h/"

altitude.once('ready', () => {
    console.log("If your reading this, the deploy was successful")
    altitude.user.setActivity("Made by Scoopy! | h/", {
        type: "PLAYING",
    })
})

altitude.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
 
    const command = args.shift().toLowerCase();
 
    if(command === '?'){
        message.channel.send("*Made possible by Scoopy, made with ❤️ | Build master* `68efab25`")
    } else if (command === ''){
    }
})


//Music (WIP)

//Leveling
altitude.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;


    //args system that is very required!!!!
    let messageArray = message.content.split(" ")
    let args = messageArray.slice(1);

    let command = messageArray[0];

    if(command === "h/ban") {
        let toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("__**Uh oh! You don't have permissions to use this command!**__") 
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("__**Uh oh! Looks like I don't have permissions to do this command!**__") 

        const reason = args[1] || "There was no reason!";

        toBan.ban({
            reason: reason
        })
        message.channel.send(`${toBan} has been banned from the server!\nReason: ${reason}`)
    }

    if(cmd === "h/unban") {
        let toBan = await bot.users.fetch(args[0])

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("__**Uh oh! You don't have permissions to use this command!**__") 
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("__**Uh oh! Looks like I don't have permissions to do this command!**__") 

        const reason = args[1] || "There was no reason!";

        message.guild.members.unban(toBan, reason)

        message.channel.send(`${toBan} has been unbanned from the server!`)
    }

})

altitude.login(process.env.token)