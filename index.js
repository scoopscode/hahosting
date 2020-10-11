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


//Fun
altitude.on('message', message => {

    let args = message.content.slice(prefix.length).split(/ +/);

    switch (args[0]) {
        case 'react':
            message.channel.send('Press the thumbs up if you agree').then(message.react('👍'));
            break;
        case 'kill':
            let user = message.mentions.users.first();
            if (!user) {
                return message.channel.send('*Please @ at the end who you are wishing to kill*')
            }
            return message.channel.send(message.author.username + ' killed ' + user.username)
            break;
        case 'hug':
            let user = message.mentions.users.first();
            if (!user) {
                return message.channel.send('*Please @ at the end who you are wishing to hug*')
            }
            return message.channel.send(`${message.author.username} + ' *hugged* ' + ${user4.username}❤️❤️❤️`)
            break;
        case 'slap':
            let user2 = message.mentions.users.first();
            if (!user2) {
                return message.channel.send('*Please @ at the end who you are wishing to slap*')
            }
            return message.channel.send(message.author.username + ' **slapped the shit out of** ' + user2.username)
            break;
        case 'lmao':
            let user3 = message.mentions.users.first();
            if (!user3) {
                return message.channel.send('*Please @ at the end who you are wishing for everyone to laugh at*')
            }
            return message.channel.send('LMAOOOO EVERYONE IS LAUGHING AT, ' + user3.username)
            break;
        case 'rps':
            if (!args[1]) {
                return message.channel.send('Please type your choice as well')
            }

            let choices = ['rock', 'paper', 'scissors'];
            if (choices.includes((args[1].toLowerCase()))) {
                let number = Math.floor(Math.random() * 3);
                if (number == 0) {
                    return message.channel.send('__**It was a tie, smh...**__,')
                }
                if (number == 2) {
                    return message.channel.send('__**Lmao I won**__, you just lost to a bot😂')
                }
                if (number == 1) {
                    return message.channel.send('__**You won**__, big oof for me')
                }
            } else {
                return message.channel.send("Please use the following choices: Rock, Paper, Scissors")
            }
            case '8ball':
                if (args[0]) {
                    let number = Math.floor(Math.random() * 6);
                    if (number == 0) {
                        return message.reply('Yes, I believe so')
                    }
                    if (number == 4) {
                        return message.reply('Hell no')
                    }
                    if (number == 2) {
                        return message.reply('Ask later...')
                    }
                    if (number == 1) {
                        return message.reply('It is uncertain at this time')
                    }
                    if (number == 2) {
                        return message.reply('The odds are not in your favor')
                    }
                    if (number == 5) {
                        return message.reply('The odds are in your favor')
                    }
                }
                case 'ppsize':
                    if (args[0]) {
                        let number = Math.floor(Math.random() * 10);
                        if (number == 8) {
                            return message.reply('__**8D, mans will never get a girl with that lollll**__')
                        }
                        if (number == 5) {
                            return message.reply('__**8=D, still short lol**__')
                        }
                        if (number == 2) {
                            return message.reply('__**8==D, ok still short but at least you have something lmao**__')
                        }
                        if (number == 1) {
                            return message.reply("__**8===D, hey at least you aren't that small lol**__")
                        }
                        if (number == 0) {
                            return message.reply('__**8====D, looks like your packing a bit but not too much**__')
                        }
                        if (number == 4) {
                            return message.reply('__**8=====D, I SEE YOU, WELCOME TO THE BIG LEAGUES BROTHER!**__')
                        }
                        if (number == 6) {
                            return message.reply('__**8======D, HOLY SHIT YOU ARE GURTHY AF**__')
                        }
                        if (number == 9) {
                            return message.reply('__**8=======D, GOD DAMN, YOUR GETTING ALL THEM GIRLS**__')
                        }
                        if (number == 3) {
                            return message.reply('__**8========D, GOD DAMN, YOUR GETTING ALL THEM GIRLS**__')
                        }
                        if (number == 10) {
                            return message.reply('_**8=========D, **MANS IS AT THE MAX!**__')
                        }
                    }
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