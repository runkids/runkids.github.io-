webpackJsonp([4],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),u=n("/ocq"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({},o,!1,function(t){n("Pdwp")},null,null).exports;i.default.use(u.a);var a=[{path:"/VueEasyDemo",redirect:"/VueEasyDemo/home",component:r,children:[{path:"home",component:function(t){return n.e(1).then(function(){return t(n("OC6q"))}.bind(null,n)).catch(n.oe)}},{path:"item",component:function(t){return n.e(0).then(function(){return t(n("xldL"))}.bind(null,n)).catch(n.oe)}},{path:"score",component:function(t){return n.e(2).then(function(){return t(n("aAfs"))}.bind(null,n)).catch(n.oe)}}]},{path:"*",redirect:"/VueEasyDemo"}],m=new u.a({mode:"history",routes:a}),s=n("NYxO"),c={initData:function(t){t.timeNum=60,t.itemNum=0,t.time=null,t.userAnswer=[]},addItemNumber:function(t,e){t.itemNum+=e},deleteItemNumber:function(t,e){t.itemNum-=e},startTime:function(t){t.time=setInterval(function(){t.timeNum--},1e3)},endTime:function(t){clearInterval(t.time),t.time=null},updateAnswer:function(t,e){var n=t.itemNum;t.userAnswer[n-1]=e}};i.default.use(s.a);var d={itemNum:0,timeNum:60,time:null,userAnswer:[],questions:[{id:0,question:"Javascript = Java 嗎？",options:[{id:0,text:"是"},{id:1,text:"否"},{id:2,text:"不一定"}]},{id:1,question:"最愛的前端JS框架是？(你懂得！)",options:[{id:0,text:"React"},{id:1,text:"Angular"},{id:2,text:"Vue"}]},{id:2,question:"Vue的核心是MVVM？",options:[{id:0,text:"是"},{id:1,text:"否"},{id:2,text:"不一定"}]},{id:3,question:"var str= '10' \nvar num= 10  \nstr+num= ?",options:[{id:0,text:" 20"},{id:1,text:'"1010"'},{id:2,text:'"20"'}]},{id:4,question:"var foo = [];\nfoo.push(1);\nfoo.push(2);\nfoo.length=?",options:[{id:0,text:"1"},{id:1,text:"2"},{id:2,text:"0"}]},{id:5,question:'下列statement會回傳什麼？\n var str = "i\'m a lasagna hog";\n str.split("").reverse().join("");',options:[{id:0,text:'"goh angasal a m\'i"'},{id:1,text:"i'm a lasagna hog"},{id:2,text:"undefined"}]}]},f={itemNum:function(t){return d.itemNum},timeNum:function(t){return d.timeNum},userAnswer:function(t){return d.userAnswer},questions:function(t){return d.questions},time:function(t){return d.time}},l=new s.a.Store({plugins:[function(t){t.subscribe(function(t,e){})}],state:d,getters:f,actions:{addItemNum:function(t){var e=t.commit;null===t.state.time&&e("startTime"),e("addItemNumber",1)},delItemNum:function(t){(0,t.commit)("deleteItemNumber",1)},initData:function(t){(0,t.commit)("initData")},endPage:function(t){(0,t.commit)("endTime")},updateAnswer:function(t,e){(0,t.commit)("updateAnswer",e)}},mutations:c}),p=n("zL8q"),h=n.n(p),v=(n("tvR6"),n("mtWM")),x=n.n(v),N=n("Rf8U"),w=n.n(N);i.default.config.productionTip=!1,i.default.use(w.a,x.a),i.default.use(h.a),new i.default({router:m,store:l,render:function(t){return t(r)}}).$mount("#app")},Pdwp:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1bb17804dc35c8593a47.js.map