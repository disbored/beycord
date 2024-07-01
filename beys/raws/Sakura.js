const bcworkshop = new require("bcworkshop");

const passive = new bcworkshop.Passive("Passive", function check(acted, victim, message){
    return false;
  }, function passed(acted, victim, message){
    victim.hp = victim.hp - 28;
    let embed = new Discord.MessageEmbed()
    .setTitle(`Uh oh, [${acted.username}] ${acted.bey.bbname || acted.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`)
    .setDescription("Please report this at the support server.")
    .setColor("#551a8b");
    message.channel.createMessage({embed: embed});
  }, 180);

const special = new bcworkshop.Special("Special", function req(acted, victim, logger){return acted.sp > 2}, function special(acted, victim, message){

    victim.hp = victim.hp - 10000;
    let embed = new Discord.MessageEmbed()
    .setTitle(`[${acted.username}] Sakura used **Leaf Storm**. 10000 damage dealt.`)
    .setColor("#551a8b");
    message.channel.send(embed);
  });

const Sakura = new bcworkshop.Beyblade({name: "Sakura", type: "Attack", imageLink: "https://cdn.discordapp.com/attachments/1029534328448884818/1032350446024671322/Untitled191_20221019125149.png"})
.attachPassive(passive)
.attachSpecial(special)
.setDefaultSD("RIGHT")
.setSDChangable(false);

module.exports = Sakura;
