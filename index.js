const Discord = require('discord.js');

const altitude = new Discord.Client();

const prefix = "h/"

altitude.once('ready', () => {
    console.log("If your reading this, the deploy was successful")
    altitude.user.setActivity("Made by Scoopy!", {
        type: "PLAYING",
    })
})

altitude.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
 
    const command = args.shift().toLowerCase();
 
    if(command === 'test'){
        message.channel.send("*Scoopy Developer Mode | Build master* `68efab25`")
    } else if (command === 'croissant'){
    }
})


//Music (WIP)

//Leveling
altitude.on('message', async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    let messageArray = messsage.content.split(" ")
    let args = messageArray.slice(1);
    if(message.content.toLowerCase() === "ban") {
        let toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Uh oh, looks like you need permissions to use this command!`)
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`Uh oh, looks like I'm missing permissions to do this command!`)

        const reason = args[1] || "No reason provided";

        toBan.ban({
            reason: reason
        })
        message.channel.send(`${toBan} has been banned from ${message.guild.name}!\nReason: ${reason}`)
    }
})

altitude.login(process.env.token)