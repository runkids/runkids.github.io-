webpackJsonp([0],{JyX7:function(t,e){},US8T:function(t,e,s){"use strict";var i=s("Dd8w"),n=s.n(i),o=s("NYxO"),r={props:{pageName:String,list:Array},data:function(){return{loading:!1,chooseNum:null}},methods:n()({},Object(o.b)(["addItemNum","initData","endPage","updateAnswer"]),{nextPage:function(){null!==this.chooseNum?(this.chooseNum=null,this.addItemNum()):this.showErrorMsg()},homePage:function(){var t=this;this.loading=!0,setTimeout(function(){t.addItemNum(),t.$router.push("item")},1e3)},submit:function(){null!==this.chooseNum?(this.chooseNum=null,this.endPage(),this.$router.push("score")):this.showErrorMsg()},chooseAnswer:function(t){this.chooseNum=t,this.updateAnswer(t)},chooseText:function(t){switch(t){case 0:return"A";case 1:return"B";case 2:return"C";case 3:return"D"}},showErrorMsg:function(){this.$message({showClose:!0,duration:800,message:"還沒選擇答案哦！",type:"error"})}}),computed:n()({},Object(o.c)(["itemNum","timeNum","questions","userAnswer","time"]),{checkItemNum:function(){return this.itemNum===this.questions.length}}),watch:{timeNum:function(){0===this.timeNum&&(this.endPage(),this.$router.push("score"))}},mounted:function(){0===this.itemNum?(this.initData(),this.$router.push("home")):0===this.timeNum||null===this.time?(this.endPage(),this.$router.push("score")):this.$router.push("item")}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},["item"===t.pageName?s("div",[t.itemNum>0?s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[t._v("剩餘時間："),s("span",{class:{timeTransform:t.timeNum<=10}},[t._v(t._s(t.timeNum))]),t._v(" 秒")])]),t._v(" "),s("div",[t._v("\n                    作答進度："),s("el-progress",{attrs:{"stroke-width":10,percentage:t.itemNum/t.questions.length*100,"show-text":!1}})],1),t._v(" "),s("br"),t._v(" "),s("span",[t._v("題目"+t._s(t.itemNum)+"："),s("pre",[t._v(t._s(t.questions[t.itemNum-1].question))])]),t._v(" "),t._l(t.questions[t.itemNum-1].options,function(e){return s("div",{key:e.id,staticStyle:{padding:"5px"}},[s("a",{class:{option:t.chooseNum===e.id},on:{click:function(s){t.chooseAnswer(e.id)}}},[t._v(t._s(t.chooseText(e.id)))]),t._v(" "),s("span",[t._v(t._s(e.text))])])}),t._v(" "),s("div",{staticStyle:{"padding-top":"40px"}},[s("el-button-group",[t.checkItemNum?s("el-button",{attrs:{type:"success",icon:"el-icon-arrow-left"},on:{click:t.submit}},[t._v("提交")]):t._e(),t._v(" "),s("el-button",{attrs:{type:"info",disabled:t.checkItemNum},on:{click:t.nextPage}},[t._v("下一頁"),s("i",{staticClass:"el-icon-arrow-right el-icon--right"})])],1)],1)],2):t._e()],1):t._e(),t._v(" "),"home"===t.pageName?s("div",{staticClass:"startBtnDiv"},[s("el-button",{staticClass:"startBtn",attrs:{type:"primary",icon:"el-icon-edit",loading:t.loading},on:{click:t.homePage}},[t._v("開始作答")])],1):t._e()])},staticRenderFns:[]};var a=s("VU/8")(r,u,!1,function(t){s("dxfL")},null,null);e.a=a.exports},dxfL:function(t,e){},xldL:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"item",data:function(){return{userList:[]}},components:{MainPage:s("US8T").a}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("MainPage",{attrs:{"page-name":"item",list:this.userList}})],1)},staticRenderFns:[]};var o=s("VU/8")(i,n,!1,function(t){s("JyX7")},"data-v-f578a0e0",null);e.default=o.exports}});
//# sourceMappingURL=0.cae4249923fbf079930c.js.map