const Beyblade=require("./Beyblade.js");class Lost288548939156684811 extends Beyblade{constructor(e,s){super("Lost 288548939156684811","Balance","https://media.discordapp.net/attachments/653723586816638996/661377209180880897/orbeas.png",e,s),this.specials=[{name:"Almighty Orb",requires:function(e,s,t){return e.sp>3},execute:function(e,s,t){s.hp=s.hp-32;let a=(new Discord.MessageEmbed).setColor("#551a8b").setTitle(`[${e.username}] Lost 288548939156684811 used **Almighty Orb**. 32 damage dealt.`);t.channel.send(a)}}],this.passives=[{name:"Passive",requires:function(e,s,t){return!1},execute:function(e,s,t){s.hp=s.hp-28;let a=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");t.channel.createMessage({embed:a})},cd:180}],this.modes=[],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=Lost288548939156684811;