webpackJsonp([1],{"8Cm6":function(t,e){},"DL8/":function(t,e){},"G/2H":function(t,e,n){t.exports=n.p+"static/img/loading.80efc2a.gif"},GaSs:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("zL8q"),o=n.n(i),c=n("gwsl"),s=n.n(c),r=(n("tvR6"),n("mvHQ")),l=n.n(r),h=n("Xxa5"),u=n.n(h),d=n("lHA8"),p=n.n(d),f=n("Gu7T"),v=n.n(f),g=n("exGp"),m=n.n(g),x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"head"},[t._m(0),t._v(" "),n("div",{staticClass:"searchBar"},[n("el-input",{attrs:{placeholder:"請輸入景點名稱","prefix-icon":"el-icon-search",clearable:""},on:{change:t.inputChange},model:{value:t.serchBarText,callback:function(e){t.serchBarText=e},expression:"serchBarText"}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("div",[this._v("高雄景點查詢")])])}]};var _=n("VU/8")({name:"headBox",data:function(){return{serchBarText:""}},methods:{inputChange:function(){this.$emit("change",this.serchBarText)}}},x,!1,function(t){n("8Cm6")},null,null).exports,k=n("d7EF"),b=n.n(k),C=n("4Fr7"),w={props:["openData"],components:{imagvue:n.n(C).a},data:function(){return{arr:this.openData,google:{map:null,marker:null,infowindow:null}}},watch:{openData:function(t){this.arr=t}},methods:{genMap:function(t,e){var n=b()(t,4),a=n[0],i=n[1],o=n[2],c=n[3];this.google.map=new google.maps.Map(document.getElementById(a+"map"),{center:e,zoom:17}),this.google.marker=new google.maps.Marker({position:e,map:this.google.map,animation:google.maps.Animation.DROP}),new google.maps.InfoWindow({content:"\n          <div>"+i+" <a href='https://www.google.com/maps/place/"+c+"'  target='_blank'></div>\n          <img src='"+o+'\' style="max-height:120px;"/>\n        '}).open(this.google.map,this.google.marker)}}},D={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.arr,function(e){return a("el-card",{key:e.Id,attrs:{shadow:"hover"}},[a("div",{staticClass:"card_content"},[a("div",{staticClass:"pic"},[a("imagvue",{model:{value:e.Picture1,callback:function(n){t.$set(e,"Picture1",n)},expression:"d.Picture1"}},[a("transition-group",{attrs:{src:n("G/2H"),lazy:100}})],1)],1),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"top_box"},[a("div",{staticClass:"title",domProps:{innerHTML:t._s(e.Name)}}),t._v(" "),e.Ticketinfo?a("el-tag",{staticClass:"options_tag"},[t._v("\n            "+t._s(e.Ticketinfo)+"\n          ")]):t._e()],1),t._v(" "),a("div",{staticClass:"desc"},[t._v(t._s(e.Toldescribe))]),t._v(" "),a("div",{staticClass:"bottom_box"},[a("el-popover",{attrs:{placement:"top",width:"350",trigger:"click"}},[a("div",{staticClass:"mapbox"},[a("div",{staticClass:"mapStyle",staticStyle:{clear:"both","min-height":"450px","max-height":"800px"},attrs:{id:e._id+"map"}})]),t._v(" "),a("div",{staticClass:"address el-icon-news",attrs:{slot:"reference"},on:{click:function(n){t.genMap([e._id,e.Name,e.Picture1,e.Add],{lat:+e.Py,lng:+e.Px})}},slot:"reference"},[t._v("\n               "+t._s(e.Add)+"\n                "),a("el-tooltip",{attrs:{effect:"dark",content:"點擊顯示地圖位置",placement:"right-start"}},[a("img",{staticStyle:{width:"20px",transform:"translateY(4px)"},attrs:{src:"https://goo.gl/w8NN6B"}})])],1)]),t._v(" "),a("div",{staticClass:"openTime el-icon-time"},[t._v(" "+t._s(e.Opentime))]),t._v(" "),a("div",{staticClass:"tel el-icon-phone-outline"},[t._v(" "+t._s(e.Tel))])],1)])])])}))},staticRenderFns:[]};var y=n("VU/8")(w,D,!1,function(t){n("ry+o")},null,null).exports,T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pagination"},[e("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next",total:this.length,"prev-text":"<","next-text":">"},on:{"size-change":this.filterData,"current-change":this.filterData,"prev-click":this.filterData,"next-click":this.filterData}})],1)},staticRenderFns:[]};var B=n("VU/8")({props:{length:{default:0}},methods:{filterData:function(t){this.$emit("paginationClick",t)}}},T,!1,function(t){n("DL8/")},"data-v-8b114bba",null).exports,O={data:function(){return{pointer:null}},methods:{scrollToTop:function(t){var e=window.scrollY/2,n=0,a=performance.now();window.requestAnimationFrame(function i(o){(n+=Math.PI/(t/(o-a)))>=Math.PI&&window.scrollTo(0,0),0!==window.scrollY&&(window.scrollTo(0,Math.round(e+e*Math.cos(n))),a=o,window.requestAnimationFrame(i))})},checkPoint:function(){this.pointer=window.scrollY}},computed:{isTop:function(){return this.pointer<250}},created:function(){window.addEventListener("scroll",this.checkPoint)},destroyed:function(){window.removeEventListener("scroll",this.checkPoint)}},P={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isTop?t._e():n("button",{staticClass:"toTop",on:{click:function(e){t.scrollToTop(1e3)}}})])},staticRenderFns:[]};var A=n("VU/8")(O,P,!1,function(t){n("b1lB")},null,null).exports,N=n("pXIW"),V={props:{value:{type:Number,required:!0}},data:function(){return{tweeningValue:0}},watch:{value:function(t,e){this.tween(e,t)}},mounted:function(){this.tween(0,this.value)},methods:{tween:function(t,e){var n=this;new N.Tween({tweeningValue:t}).to({tweeningValue:e},900).onUpdate(function(t){n.tweeningValue=t.tweeningValue.toFixed(0)}).start(),function t(){N.update()&&requestAnimationFrame(t)}()}}},E={render:function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v(this._s(this.tweeningValue))])},staticRenderFns:[]},F=n("VU/8")(V,E,!1,null,null,null).exports,M=n("mtWM"),$=n.n(M),I="https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97&limit=300";var W=function(t){return $.a.post(I,{data:t}).then(function(t){return t.data}).catch(function(t){console.log(t)})},S={name:"App",components:{HeadBox:_,Pagination:B,Card:y,ScrollTopButton:A,AnimatedInteger:F},data:function(){return{loading:!1,initData:[],copyData:[],filterData:[],serchBar:{inputText:""},location:{selectValue:"",options:[]},checkbox:{checkAll:!1,options:[],checkedOptions:[],isIndeterminate:!0}}},watch:{location:{handler:function(){this.matchData()},deep:!0},checkbox:{handler:function(){this.matchData()},deep:!0},serchBar:{handler:function(){this.matchData()},deep:!0}},methods:{getOpenData:function(){var t=this;return m()(u.a.mark(function e(){var n,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W();case 2:n=e.sent,a=n.result.records,t.checkbox.options=[].concat(v()(new p.a(a.map(function(t){return t.Ticketinfo})))).filter(function(t){return!!t}),t.location.options=[].concat(v()(new p.a(a.map(function(t){return t.Zone})))).map(function(t,e){return{id:e,value:t}}),t.initData=[].concat(v()(a)),t.initCopyData(),t.resetTableDataWithPageNo(1);case 9:case"end":return e.stop()}},e,t)}))()},initCopyData:function(){this.loading=!0,this.copyData=JSON.parse(l()(this.initData)),this.filterData=JSON.parse(l()(this.copyData)),this.resetTableDataWithPageNo(1)},resetTableDataWithPageNo:function(t){var e=this;this.filterData=this.copyData.filter(function(e,n){return n>=10*(t-1)&&n<10*t}),setTimeout(function(){e.loading=!1},500)},filterDataByOptions:function(t,e){this.copyData=this.copyData.filter(function(n){return n[t].match(e)})},addColorForKeyWords:function(t){this.copyData.forEach(function(e){e.Name=e.Name.replace(t,"<span style='color:#fd6769;'>"+t+"</span>")})},matchData:function(){var t=this;if(this.initCopyData(),this.location.selectValue&&this.filterDataByOptions("Zone",this.location.selectValue),this.serchBar.inputText&&(this.filterDataByOptions("Name",this.serchBar.inputText),this.addColorForKeyWords(this.serchBar.inputText)),this.checkbox.checkedOptions.length){var e=[];this.checkbox.checkedOptions.forEach(function(n){t.copyData.forEach(function(t){t.Ticketinfo.match(n)&&e.push(t)})}),this.copyData=[].concat(e)}this.resetTableDataWithPageNo(1)},tagClose:function(t){this.checkbox.checkedOptions.splice(t,1),this.handleCheckedOptionsChange(this.checkbox.checkedOptions)},handleCheckAllChange:function(t){this.checkbox.checkedOptions=t?[].concat(v()(this.checkbox.options)):[],this.checkbox.isIndeterminate=!1},handleCheckedOptionsChange:function(t){var e=t.length;this.checkbox.checkAll=e===this.checkbox.options.length,this.isIndeterminate=e>0&&e<this.checkbox.options.length}},created:function(){this.getOpenData()}},H={render:function(){var t=this,e=this,n=e.$createElement,a=e._self._c||n;return a("div",{attrs:{id:"app"}},[a("section",{staticClass:"main_content"},[a("HeadBox",{on:{change:function(e){return t.serchBar.inputText=e}}}),e._v(" "),a("div",{staticClass:"bg"},[a("div",{staticClass:"aside"},[a("div",{staticClass:"aside_box"},[a("div",{staticClass:"box_content"},[a("div",{staticClass:"text"},[e._v("地區")]),e._v(" "),a("el-select",{staticClass:"localSelect",attrs:{clearable:"",placeholder:"請選擇地區","no-data-text":"無資訊"},model:{value:e.location.selectValue,callback:function(t){e.$set(e.location,"selectValue",t)},expression:"location.selectValue"}},e._l(e.location.options,function(t){return a("el-option",{key:t.id,attrs:{label:t.value,value:t.value}})}))],1)]),e._v(" "),a("div",{staticClass:"aside_box tags"},[a("div",{staticClass:"box_content"},[a("div",{staticClass:"text"},[e._v("票價資訊")]),e._v(" "),a("el-checkbox",{attrs:{indeterminate:e.checkbox.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkbox.checkAll,callback:function(t){e.$set(e.checkbox,"checkAll",t)},expression:"checkbox.checkAll"}},[e._v("全選")]),e._v(" "),a("el-checkbox-group",{on:{change:e.handleCheckedOptionsChange},model:{value:e.checkbox.checkedOptions,callback:function(t){e.$set(e.checkbox,"checkedOptions",t)},expression:"checkbox.checkedOptions"}},e._l(e.checkbox.options,function(t){return a("div",{key:t},[a("el-checkbox",{attrs:{label:t}},[e._v(e._s(t.length>10?t.substring(0,10)+"...":t))])],1)}))],1)])]),e._v(" "),a("div",{staticClass:"main"},[a("ScrollTopButton"),e._v(" "),a("div",{staticClass:"dataLength"},[e._v("\n          共有 "),a("AnimatedInteger",{attrs:{value:e.copyData.length}}),e._v(" 筆資料\n        ")],1),e._v(" "),a("div",{staticClass:"tags_box"},e._l(e.checkbox.checkedOptions,function(t,n){return a("el-tag",{key:t,staticClass:"options_tag",attrs:{closable:""},on:{close:function(t){e.tagClose(n)}}},[e._v("\n            "+e._s(t)+"\n          ")])})),e._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"cards"},[a("Card",{attrs:{openData:e.filterData},on:{"update:openData":function(t){e.filterData=t}}})],1),e._v(" "),a("Pagination",{staticClass:"pagination",attrs:{length:e.copyData.length},on:{paginationClick:e.resetTableDataWithPageNo}})],1)])],1)])},staticRenderFns:[]};var R=n("VU/8")(S,H,!1,function(t){n("GaSs")},null,null).exports;a.default.use(o.a,{locale:s.a}),a.default.config.productionTip=!1,new a.default({el:"#app",components:{App:R},template:"<App/>"})},b1lB:function(t,e){},jo0M:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="jo0M"},"ry+o":function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2e411470a0ba1a4bca48.js.map