webpackJsonp([3],{"1A7Z":function(e,s){},esL9:function(e,s,A){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=A("Xxa5"),i=A.n(t),g=A("exGp"),n=A.n(g),I=A("Dd8w"),E=A.n(I),B=A("NYxO"),o=A("m3sR"),Q={data:function(){return{userInfo:{}}},methods:E()({},Object(B.b)(["initUserInfo"]),{formateDate:function(e){var s=new Date(e);return s.getFullYear()+"/"+this.formatNum(s.getMonth()+1)+"/"+this.formatNum(s.getDate())+" "+this.formatNum(s.getHours())+":"+this.formatNum(s.getMinutes())},formatNum:function(e){return e>=10?e:"0"+e},deleteAccount:function(){Object(o.b)(),this.$message({type:"success",message:"Account has been deleted"}),this.$router.push({name:"login"})},logout:function(){Object(o.e)(),window.location.reload()}}),computed:E()({},Object(B.c)(["getUserInfo"])),mounted:function(){var e=this;this.$nextTick(n()(i.a.mark(function s(){var A,t,g,n,I,E,B,o;return i.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.initUserInfo();case 2:A=e.getUserInfo,t=A.displayName,g=A.photoURL,n=A.uid,I=A.emailVerified,E=A.metadata,B=E.creationTime,o=E.lastSignInTime,e.userInfo={displayName:t,photoURL:g,emailVerified:I?"Verified":"Not Verifiy",uid:n,creationTime:e.formateDate(B),lastSignInTime:e.formateDate(o)};case 4:case"end":return s.stop()}},s,e)})))}},a={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"home"},[t("div",{staticClass:"user-form"},[t("div",{staticClass:"photo"},[e.userInfo.photoURL?t("img",{attrs:{src:e.userInfo.photoURL}}):t("img",{attrs:{src:A("fiWu")}}),e._v(" "),t("el-popover",{attrs:{placement:"bottom-end",width:"200"}},[t("p",[e._v("Are yor sure to delete？")]),t("br"),e._v(" "),t("div",{staticStyle:{"text-align":"right",margin:"0"}},[t("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:e.deleteAccount}},[e._v("Delete")])],1),e._v(" "),t("el-button",{staticStyle:{float:"right",color:"#fd6769"},attrs:{slot:"reference",type:"text"},slot:"reference"},[e._v("\n          Delete Account\n        ")])],1)],1),e._v(" "),t("div",[t("h4",[e._v("Display Name:")]),e._v(" "),t("el-input",{attrs:{"suffix-icon":"el-icon-service",readonly:""},model:{value:e.userInfo.displayName,callback:function(s){e.$set(e.userInfo,"displayName",s)},expression:"userInfo.displayName"}}),e._v(" "),t("h4",[e._v("Email Verified:")]),e._v(" "),t("el-input",{attrs:{"suffix-icon":"el-icon-sort",readonly:""},model:{value:e.userInfo.emailVerified,callback:function(s){e.$set(e.userInfo,"emailVerified",s)},expression:"userInfo.emailVerified"}}),e._v(" "),t("h4",[e._v("Created Time:")]),e._v(" "),t("el-input",{attrs:{"suffix-icon":"el-icon-date",readonly:""},model:{value:e.userInfo.creationTime,callback:function(s){e.$set(e.userInfo,"creationTime",s)},expression:"userInfo.creationTime"}}),e._v(" "),t("h4",[e._v("Last SignIn Time:")]),e._v(" "),t("el-input",{attrs:{"suffix-icon":"el-icon-date",readonly:""},model:{value:e.userInfo.lastSignInTime,callback:function(s){e.$set(e.userInfo,"lastSignInTime",s)},expression:"userInfo.lastSignInTime"}})],1),e._v(" "),t("el-button",{staticClass:"sign-out",attrs:{type:"primary",plain:""},on:{click:e.logout}},[e._v("Sign Out")])],1)])},staticRenderFns:[]};var r=A("VU/8")(Q,a,!1,function(e){A("1A7Z")},null,null);s.default=r.exports},fiWu:function(e,s){e.exports="data:image/png;base64,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"}});
//# sourceMappingURL=3.b93f479860121b730a74.js.map