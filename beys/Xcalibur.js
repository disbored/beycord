const Beyblade=require("./Beyblade.js");class Xcalibur extends Beyblade{constructor(e,t){super("Xcalibur","Attack","https://i.ibb.co/q0PxGcY/xcalibur.png",e,t),this.specials=[{name:"Special",requires:function(e,t,s){return e.sp>3},execute:function(e,t,s){if(e.hp>60){let i=t.hp,r=55,n=0;for(var a=0;a<e.lvl;a++)n+=.1;let l=r+n;t.hp=t.hp-l;let o=i-t.hp;e.stamina=e.stamina-1;let c=(new Discord.MessageEmbed).setTitle(`[${e.username}] Xcalibur used **The One Impact**.`).setDescription(`Xcalibur used the Saber on it's layer to strike the opponent with a strong, concentrated attack for ${o} damage! The natural imbalance in the layer reduced stamina by 1.`).setColor("#551a8b");s.channel.createMessage({embed:c})}else if(e.hp<=60){let i=t.hp,r=70,n=0;for(a=0;a<e.lvl;a++)n+=.2;let l=r+n;t.hp=t.hp-l;let o=i-t.hp;e.stamina=e.stamina-2;let c=(new Discord.MessageEmbed).setTitle(`[${e.username}] Xcalibur used **Xtreme Impact**.`).setDescription(`Xcalibur's Force disc aligned with the sword on it's layer, boosting it's power at the cost of a heavy imbalance, reducing stamina by 2. Xcalibur used this boost in power to slice the opponent for ${o} damage!`).setColor("#551a8b");s.channel.createMessage({embed:c})}}}],this.passives=[{name:"Passive",requires:function(e,t,s){return!1},execute:function(e,t,s){t.hp=t.hp-28;let a=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");s.channel.createMessage({embed:a})},cd:180}],this.modes=[],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=Xcalibur;