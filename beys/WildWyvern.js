const Beyblade=require("./Beyblade.js");class WildWyvern extends Beyblade{constructor(e,t){super("Wild Wyvern","Defense","https://media.discordapp.net/attachments/736042245442109441/826656759148969994/image0.png?width=645&height=586",e,t),this.specials=[{name:"Special",requires:function(e,t,s){return e.sp>3},execute:function(e,t,s){let a=t.hp,i=0;for(var n=0;n<e.lvl;n++)i+=.2;let r=45+i;t.hp=t.hp-r;let o=a-t.hp;t.atk=Math.round(t.atk/100*30),e.atk=t.atk;let d=(new Discord.MessageEmbed).setTitle(`[${e.username}] Wild Wyvern used **Shield Crash**.`).setDescription(`Wyvern used it's free spinning Orbit tip to negate 70% incoming damage, instead riding up the slope of the stadium before coming back down with more force, slamming into the enemy for ${o} damage + the enemy's attack damage!`).setColor("#551a8b");s.channel.createMessage({embed:d})}}],this.passives=[{name:"Passive",requires:function(e,t,s){return!1},execute:function(e,t,s){t.hp=t.hp-28;let a=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");s.channel.createMessage({embed:a})},cd:180}],this.modes=[],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=WildWyvern;