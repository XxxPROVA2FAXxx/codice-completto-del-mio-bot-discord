const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login("TOKEN CENSURATO");


bot.on("message", (message) => {
    if (message.content == "on") {
        message.channel.send(message.channel.send(message.author.toString() + " " + "SONO ONLINE!"))
    }
});


bot.on("message", (message) => {
    if (message.content == "buongiorno") {
        message.channel.send("BUONGIORNO AMICOOO!")
    }
});


bot.on("message", (message) => {
    if (message.content == "mincerte discord server") {
        message.channel.send("CHE C'èèèèèèèèèèèèèèèèèèè!!!???")
    }
});


bot.on("message", message => {
    if (message.content.startsWith("!ban")) {
        var utenteKick = message.mentions.members.first();

        if (!message.member.hasPermission('BAN_MEMBERS')) {
            message.channel.send('Non hai il permesso');
            return;
        }

        if (!utenteKick) {
            message.channel.send('Non hai menzionato nessun utente');
            return;
        }

        (!message.mentions.members.first().kickable); {
            message.channel.send('Io non ho il permesso');
            return;
        }

        utenteKick.ban()
            .then(() => message.channel.send("<@" + utenteKick + ">" + " bannato"))
    }
})

    bot.on("message", message => {
    if (message.content.startsWith("!kick")) {
        var utenteKick = message.mentions.members.first();

        if (!message.member.hasPermission('KICK_MEMBERS')) {
            message.channel.send('Non hai il permesso');
            return;
        }

        if (!utenteKick) {
            message.channel.send('Non hai menzionato nessun utente');
            return;
        }

        if (!message.mentions.members.first().kickable) {
            message.channel.send('Io non ho il permesso');
            return
        }

        utenteKick.kick()
            .then(() => message.channel.send("<@" + utenteKick + ">" + " kiccato"))

    }
})


bot.on("message", (message) => {
    if (message.content == "!play autoblu") {
        message.channel.send("Autoblu successfully riproduced")
        const canaleVocale = message.member.voice.channel;
        if (canaleVocale) {
            canaleVocale.join()
                .then(connection => {
                    connection.play('autoblu.mp3');
                });
        }
        else {
            message.channel.send("No voice channel.");
        }
    }
})


bot.on("message", (message) => {
    if (message.content == "!play bimbi per strada") {
        message.channel.send("Bimbi per strada successfully riproduced")
        const canaleVocale = message.member.voice.channel;
        if (canaleVocale) {
            canaleVocale.join()
                .then(connection => {
                    connection.play('bimbi per strada.mp3');
                });
        }
        else {
            message.channel.send("No voice channel.");
        }
    }
})


bot.on("message", (message) => {
    if (message.content == "!play non mi basta più") {
        message.channel.send("Non mi basta succesfully riproduced")
        const canaleVocale = message.member.voice.channel;
        if (canaleVocale) {
            canaleVocale.join()
                .then(connection => {
                    connection.play('Non mi basta più.mp3');
                });
        }
        else {
            message.channel.send("No voice channel.");
        }
    }
})


bot.once('ready', () => {
    console.log('sta controllando tutti gli utenti del server di mincerte');
    bot.user.setActivity('sta controllando tutti gli utenti del server di mincerte', { type: 'PLAYING'});

});


bot.on('message', (message) =>{
    if (message.content == "!time"){
        var data = new Date();
        var ora = data.getHours();
        var minuto = data.getMinutes();
        var secondo = data.getSeconds();
        var millisecondo = data.getMilliseconds();

        message.channel.send('Ora Attuale :alarm_clock:' + ' ' + ora + ':' + minuto + ':' + secondo + ':' + millisecondo);
    }
});


bot.on("message", (message) => {
    if (message.content == "!play Kontinuum") {
        message.channel.send("Kontiuum successfully riproduced")
        const canaleVocale = message.member.voice.channel;
        if (canaleVocale) {
            canaleVocale.join()
                .then(connection => {
                    connection.play('Kontiuum.mp3');
                });
        }
        else {
            message.channel.send("No voice channel.");
        }
    }
})


bot.on("message", (message) => {
    if (message.content == "!play Different Heaven") {
        message.channel.send("Different Heaven successfully riproduced")
        const canaleVocale = message.member.voice.channel;
        if (canaleVocale) {
            canaleVocale.join()
                .then(connection => {
                    connection.play('Different Heaven.mp3');
                });
        }
        else {
            message.channel.send("No voice channel.");
        }
    }
})

bot.on("message", (message) => {
    if (message.content == "!play different heaven+kontinuum") {
        message.channel.send("different heaven+kontinuum successfully riproduced")
        const canaleVocale = message.member.voice.channel;
        if (canaleVocale) {
            canaleVocale.join()
                .then(connection => {
                    connection.play('DIFFERENT-HEAVEN-KONTIUUM.mp3');
                });
        }
        else {
            message.channel.send("No voice channel.");
        }
    }
})

var tabs = ["ciao scrivi l'opzione che vuoi fare", 
"!help: dice tutta la lista di commandi disponibile nel bot",
"che giorno è?: dice il giorno (in numero) del calendario attuale",
"!time:dice l'ora attuale in europa",
"giochiamo a trivia:un semplice gioco dove devi rispondere giusto alle domande sottoposte",
"botcode:ti manda tutto il codice del bot"]

bot.on("message", (message) =>{
    if (message.content == "opzioni bot") {
    message.channel.send(tabs)
    }
})

bot.on("message", (message) => {
    if (message.content == "!help") {
        message.channel.send("!play different heaven        !play different heaven+kontinuum                          !time                 !play autoblu                 !play non mi basta più            !play bimbi per strada")
    }
})

    bot.on("message", (message) => {
        if (message.content == "che giorno è oggi") {
        message.channel.send(new Date())
        }
    });

    bot.on("message", (message) => {
        if (message.content == "giochiamo a trivia") {
            message.channel.send ("DOMANDA 1")
            message.channel.send ("QUANTO è SCEMO PAGNOTTA TRA 1 E 10?")
        }
    })
    
    bot.on("message", (message) => {
        if (message.content == "1"){
            message.channel.send ("SBAGLIATO")
        }
    })
    
    bot.on("message", (message) => {
        if (message.content == "10") {
            message.channel.send ("GIUSTO")
            message.channel.send ("DOMANDA 2")
            message.channel.send ("QUANDO è STATO APERTO UFFICIALMENTE IL MIO SERVER?")
        }
    })
    
    bot.on("message", (message) => {
        if (message.content == "IL 14 GIUGNO 2021") {
            message.channel.send ("GIUSTO")
            message.channel.send ("DOMANDA 3 (L'ULTIMA)")
            message.channel.send ("QUANDO MI SONO FIDANZATO?")
        }
    })
    
    bot.on("message", (message) => {
        if (message.content == "IL 3 MARZO 2021") {
        message.channel.send ("GIUSTO HAI VINTO SIIIIIIIIIIIII")
        }
    })

    var embed = new Discord.MessageEmbed()

    bot.on("message", (message) => {
        if (message.content == "botcode"){
            message.channel.send ("embed")
        }
    })