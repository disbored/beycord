const Beyblade=require("./Beyblade.js");class DrigerSlash extends Beyblade{constructor(e,s){super("Driger Slash","Balance","https://i.ibb.co/ZS6p02G/drigger.png",e,s),this.specials=[{name:"Tiger Claw",requires:function(e,s,t){return e.sp>3},execute:function(e,s,t){let i=s.hp,a=0;for(var r=0;r<e.lvl;r++)a+=.3;let n=50+a;s.hp=s.hp-n;let l=i-s.hp;e.stamina=e.stamina+1;let o=(new Discord.MessageEmbed).setTitle(`[${e.username}] Driger Slash used **Tiger Claw**.`).setDescription(`Driger's Fusion driver caused it to speed up immensely, granting it a huge boost in spin velocity as it slashed away at the opponent fiercely for ${l} damage. The increased spin velocity improved stamina, increasing it by 1.`).setColor("#551a8b");t.channel.createMessage({embed:o})}}],this.passives=[{name:"Break",requires:function(e,s,t){return!1},execute:function(e,s,t){s.hp=s.hp-28;let i=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");t.channel.createMessage({embed:i})},cd:180}],this.modes=[],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=DrigerSlash;