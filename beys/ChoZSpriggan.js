const Beyblade=require("./Beyblade.js");class ChoZSpriggan extends Beyblade{constructor(e,s){super("Cho-Z Spriggan","Balance","https://vignette.wikia.nocookie.net/beyblade/images/5/58/BBC_Cho-Z_Spriggan_0Wall_Zeta%27_Beyblade.png/revision/latest?cb=20181126123327",e,s),this.specials=[{name:"Super Spriggan Slash",requires:function(e,s,a){return e.sp>3},execute:function(e,s,a){s.hp=s.hp-43;let t=(new Discord.MessageEmbed).setTitle(`[${e.username}] Cho-Z Spriggan used **Super Spriggan Slash**. 43 damage dealt.`).setColor("#551a8b");a.channel.send(t)}}],this.passives=[{name:"Break",requires:function(e,s,a){return!1},execute:function(e,s,a){s.hp=s.hp-28;let t=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");a.channel.createMessage({embed:t})},cd:180}],this.modes=[],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=ChoZSpriggan;