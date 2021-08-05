var Discord = require('discord.js');
var auth = require('./auth.json');
const client = new Discord.Client();
const translate = require("translate"); // Old school

client.on('ready',function(message){
    console.log('bot is up');

//     var checkminutes = 1440, checkthe_interval = checkminutes * 60 * 1000; //This checks every 10 minutes, change 10 to whatever minute you'd like
//     setInterval(function() {
//         var date=new Date();
//         checkDate=date.toLocaleDateString();
//         bday=functions.checkbday(checkDate);
//         if(bday[1]==1)
//         {
//             client.channels.cache.get('691695334815957045').send(bday[0]);
//                 }
// }, checkthe_interval);
})

client.on("message",function(message)
{
    if(message.author.bot)
    return;
    var prefix="$"
    if(!message.content.startsWith(prefix))
    return;
   const commandBody = message.content.slice(prefix.length);
   const args = commandBody.split(' ');
   const command = args.shift().toLowerCase();
   if(command==='t')
   {
      
    translater();
   }

});
client.login(auth.token)
//AD9FB4
async function translater()
{
    translate.engine='libre'
    translate.key="https://translate.argosopentech.com/"
 const text = await translate("Hello world", "es");
 console.log(text)
}