const Discord = require('discord.js');

var bot = new Discord.Client();

const PREFIX = "!";

function random(min, max){
    min = Math.ceil(0);
    max = Math.floor(4);
    randnum = Math.floor(Math.random() * (max - min +1)+ min);
}

bot.on('ready', () => {
    console.log(`Connecté sous le pseudonyme: ${bot.user.tag}!`);
});

bot.on('message', message => {
    const guildMember = message.member;
    let prefix = "!"
    
    if (message.content === prefix + "choipeaux") {
        if (message.member.roles.get('438965241590841346')) {
            message.reply("Tu as déjà été attribué(e) à une maison.");
            console.log("Quelqu'un a essayé de s'attribuer une deuxième maison.")
        }
        else
        {
            if (randnum ==1) {
                message.reply("Sage es-tu... Je ne vois qu'une option... SERDAIGLE !");
                guildMember.addRole(process.env.SERDAIGLE)
                console.log(`${message.author.username} est devenu Serdaigle.`);
            }
            if (randnum ==2) {
                message.reply("Ambitieux est-tu... Seul... SERPENTARD pourras t'aider à grandir sur le chemin de la Puissance Ultime !");
                guildMember.addRole(process.env.SERPENTARD)
                console.log(`${message.author.username} est devenu Serpentard.`);
            }

            if (randnum ==3) {
                message.reply("Courageux es-tu... Je vois la seule maison qui t'acceptera... GRYFFONDOR !");
                guildMember.addRole(process.env.GRYFFONDOR)
                console.log(`${message.author.username} est devenu Gryffondor.`);
            }

            if (randnum ==4) {
                message.reply("Modeste es-tu... Je crois, que seul POUFSOUFFLE aura le charme de te faire aimer Poudlard !");
                guildMember.addRole(process.env.POUFSOUFFLE)
                console.log(`${message.author.username} est devenu Poufsouffle.`);
            }
        }
    }
});

bot.login(process.env.TOKEN);
