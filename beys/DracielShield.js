const Beyblade=require("./Beyblade.js");class DracielShield extends Beyblade{constructor(e,t){super("Draciel Shield","Defense","https://i.ibb.co/v49kxWw/Draciel.png",e,t),this.specials=[{name:"Central Defense",requires:function(e,t,s){return e.sp>3},execute:function(e,t,s){t.atk=Math.round(t.atk/100*60),e.stamina=e.stamina+1,t.stamina=t.stamina-2;let a=(new Discord.MessageEmbed).setTitle(`[${e.username}] Draciel Shield used **Central Defense**.`).setDescription("Draciel's centralized weight distribution created a stamina retaining spin, allowing it to defend against 40% of incoming damage and increase stamina by 2. The opponent's weakened attacks were exploited to stall the battle out, dropping their stamina by 1.").setColor("#551a8b");s.channel.createMessage({embed:a})}}],this.passives=[{name:"Passive",requires:function(e,t,s){return!1},execute:function(e,t,s){t.hp=t.hp-28;let a=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");s.channel.createMessage({embed:a})},cd:180}],this.modes=[],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=DracielShield;