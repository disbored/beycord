const Beyblade=require("./Beyblade.js");class Amaterios extends Beyblade{constructor(e,s){super("Amaterios","Attack","https://vignette.wikia.nocookie.net/beyblade/images/2/29/A_A_A.png/revision/latest?cb=20180101025729",e,s),this.specials=[{name:"Aero Slash",requires:function(e,s,t){return e.sp>3},execute:function(e,s,t){let a=s.hp,i=0;for(var r=0;r<e.lvl;r++)i+=.1;let o=30+i;s.hp=s.hp-o;let n=a-s.hp;e.stamina=e.stamina+3;let c=(new Discord.MessageEmbed).setTitle(`[${e.username}] Amaterios used **Aero Slash**.`).setDescription(`Amaterios' friction increased due to the downforce from it's Aero disc, and the wide surface area of it's Assault tip, immensely boosting it's power as it struck the opponent for ${n} damage. The wind force boosted stamina by 3.`).setColor("#CFC044");t.channel.createMessage({embed:c})}}],this.passives=[{name:"Break",requires:function(e,s,t){return!1},execute:function(e,s,t){s.hp=s.hp-28;let a=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");t.channel.createMessage({embed:a})},cd:180}],this.modes=[],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=Amaterios;