const Beyblade=require("./Beyblade.js");class DeadPhoenix extends Beyblade{constructor(e,s){super("Dead Phoenix","Defense","https://vignette.wikia.nocookie.net/beyblade/images/e/ec/BBC_Dead_Phoenix_0_Atomic_Beyblade.png/revision/latest?cb=20190131010643",e,s),this.specials=[{name:"Dead Armour Press",requires:function(e,s,t){return e.sp>3},execute:function(e,s,t){s.hp=s.hp-50,e.hp=e.hp-8;let a=(new Discord.MessageEmbed).setTitle(`[${e.username}] Dead Phoenix used **Dead Armour Press**. 50damage dealt. [${e.username}] Dead Phoenix also lost some HP due to it's armour accidentally hitting itself.`).setColor("#551a8b");t.channel.send(a)}}],this.passives=[{name:"Break",requires:function(e,s,t){return!1},execute:function(e,s,t){s.hp=s.hp-28;let a=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");t.channel.createMessage({embed:a})},cd:180}],this.modes=[],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=DeadPhoenix;