const Beyblade=require("./Beyblade.js");class WorldSpriggan extends Beyblade{constructor(e,t){super("World Spriggan","Balance","https://cdn.discordapp.com/attachments/999683623248736379/1032078418294095943/IMG_5117.png",e,t),this.specials=[{name:"World Slash",requires:function(e,t,a){return e.sp>=3},execute:function(e,t,a){e.sp-=3,t.hp-=Math.round(20+1.1*(e.lvl-1)),a.add(`[${e.username}] World Spriggan used **World Slash**!`),e.stability-=3}},{name:"Counter Break",requires:function(e,t,a){return e.sp>=4},execute:function(e,t,a){e.sp-=4,t.hp-=Math.round(25+1.1*(e.lvl-1)),t.stamina-=2}}],this.passives=[{name:"World Spin",requires:function(e,t,a){return 1==e.bey.WorldSpin.active},execute:function(e,t,a){t.atk=Math.round(t.atk/100*80),1==Math.floor(5*Math.random())&&(t.atk=Math.round(t.atk/100*75))},cd:0}],this.WorldSpin={active:void 0,requires:function(e,t,a){return e.hp<e.maxhp/100*50&&0==e.bey.WSUsed},boost:function(e,t,a){e.bey.WSUsed=!0,e.bey.type="Defense",e.bey.WorldSpin.active=!0,a.add(`[${e.username}] **World Spin** activated!`)}},this.modes=["WorldSpin"],this.WSUsed=!1,this.sd=0,this.sdchangable=!0,this.aliases=[]}}module.exports=WorldSpriggan;
