const Beyblade=require("./Beyblade.js");class BlackSprigganRequiem extends Beyblade{constructor(e,a){super("Black Spriggan Requiem","Balance","https://cdn.discordapp.com/attachments/490783690323001345/721681887361368064/image-removebg-preview.png",e,a),this.specials=[{name:"Counter Break",requires:function(e,a,s){return e.sp>3},execute:function(e,a,s){a.hp=a.hp-50;let t=(new Discord.MessageEmbed).setTitle(`[${e.username}] Black Spriggan Requiem used **Counter Break**. 50 damage dealt.`).setColor("#551a8b");s.channel.createMessage({embed:t})}}],this.passives=[{name:"Tip Switch",requires:function(e,a,s){let t;return t=e.hp<=e.maxhp/2},execute:function(e,a,s){e.bey.type;let t=["Attack","Stamina","Defense"],i=Math.floor(Math.random()*t.length);e.bey.type=t[i],a.hp=a.hp-32;let n=(new Discord.MessageEmbed).setAuthor("Passive Ability").setTitle(`[${e.username}] Black Spriggan Requiem used **Tip Switch**. The tip of it's driver switched changing it's type to ${e.bey.type} while also dealing 35 damage.`).setColor("#551a8b");s.channel.createMessage({embed:n})},cd:180}],this.modes=[],this.sd=0,this.sdchangable=!0,this.aliases=[]}}module.exports=BlackSprigganRequiem;