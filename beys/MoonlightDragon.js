const Beyblade=require("./Beyblade.js");class MoonlightDragon extends Beyblade{constructor(e,n){super("Moonlight Dragon","Balance","https://i.imgur.com/7LGTqWM.png",e,n),this.specials=[{name:"Moonlight Claw",requires:function(e,n,t){return e.sp>=3},execute:function(e,n,t){let a=Math.floor(40+.7*e.lvl),o=Math.floor(10+.18*e.lvl);n.hp-=a,n.stability-=o,t.add(`[${e.username}] Moonlight Dragon used **Moonlight Claw**!\n${a} Damage inflicted!\n${o} Stability damage inflicted!`),e.sp-=3}}],this.passives=[{name:"Full Moon Resonance",requires:function(e,n,t){return e.sp>=1&&e.stamina<=1&&!e.bey.Lock},execute:function(e,n,t){let a=Math.floor(3+.6*e.lvl);e.stamina+=a,e.bey.Lock=!0,e.sp-=1,t.add(`[${e.username}] bathes his fur in the moonlight...\n**Moonlight Resonance** active!\n${a} stamina gained!`)},cd:0}],this.Lock=!1,this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=MoonlightDragon;