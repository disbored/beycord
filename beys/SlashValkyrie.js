const Beyblade=require("./Beyblade.js");class SlashValkyrie extends Beyblade{constructor(e,s){super("Slash Valkyrie","Attack","https://vignette.wikia.nocookie.net/beyblade/images/1/18/BBGT_Slash_Valkyrie_Blitz_Power_Retsu_Beyblade.png/revision/latest?cb=20190401120837",e,s),this.specials=[{name:"Special",requires:function(e,s,t){return e.sp>3},execute:function(e,s,t){s.hp=s.hp-55;let a=(new Discord.MessageEmbed).setTitle(`[${e.username}] Slash Valkyrie used **Wing Slash**. 55 damage dealt.`).setColor("#551a8b");t.channel.send(a)}}],this.passives=[{name:"Passive",requires:function(e,s,t){return!1},execute:function(e,s,t){s.hp=s.hp-28;let a=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");t.channel.createMessage({embed:a})},cd:180}],this.modes=[],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=SlashValkyrie;