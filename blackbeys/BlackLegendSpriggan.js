const Beyblade=require("./Beyblade.js");class BlackLegendSpriggan extends Beyblade{constructor(e,t){super("Black Legend Spriggan","Balance","https://i.ibb.co/CvpGFLt/BlackLS.png",e,t),this.specials=[{name:"Upper Launch",requires:function(e,t,s){return e.sp>3},execute:function(e,t,s){if("Right"==e.sd){let i=t.hp,n=50,r=0;for(var a=0;a<e.lvl;a++)r+=.2;let o=n+r;t.hp=t.hp-o;let l=i-t.hp;t.stamina=t.stamina-2;let p=(new Discord.MessageEmbed).setTitle(`[${e.username}] Black Legend Spriggan used **Upper Launch**.`).setDescription(`Legend Spriggan climbed the slope of the stadium, speeding back down and using the sloped blade on it's layer to strike from under the opponent for ${l} damage! Destabilization dropped the opponent's stamina by 2!`).setColor("#551a8b");s.channel.createMessage({embed:p})}else if("Left"==e.sd){let i=t.hp,n=60,r=0;for(a=0;a<e.lvl;a++)r+=.2;let o=n+r;t.hp=t.hp-o;let l=i-t.hp;e.stamina=e.stamina-1;let p=(new Discord.MessageEmbed).setTitle(`[${e.username}] Black Legend Spriggan used **Axe Launch**.`).setDescription(`Spriggan used the spiky rubber on it's Merge driver to increase friction against the stadium, the larger surface area drastically boosting it's speed and power at the cost of 1 stamina. Spriggan swiftly changed it's trajectory as it used the flat contact point on it's layer to smash into the opponent for ${l} damage.`).setColor("#551a8b");s.channel.createMessage({embed:p})}}}],this.passives=[{name:"Passive",requires:function(e,t,s){return!1},execute:function(e,t,s){t.hp=t.hp-28;let a=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");s.channel.createMessage({embed:a})},cd:180}],this.modes=[],this.sd=0,this.sdchangable=!0,this.aliases=[]}}module.exports=BlackLegendSpriggan;