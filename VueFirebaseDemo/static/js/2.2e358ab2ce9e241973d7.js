webpackJsonp([2],{gKQN:function(e,t){},heID:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Xxa5"),n=r.n(a),s=r("exGp"),o=r.n(s),i=r("Dd8w"),u=r.n(i),l=r("NYxO"),f={data:function(){return{lastSignInTime:"",creationTime:"",userInfoForm:{},userInfoRules:{displayName:[{validator:function(e,t,r){t.length>20?r(new Error("名稱過長！")):r()},trigger:"blur"}]}}},methods:u()({},Object(l.b)(["resetPassword","getUserInfo","updateUserInfo","resetPassword","userLogout"]),{fileSelected:function(e){var t=e.target.files.item(0),r=new FileReader;r.addEventListener("load",this.imageLoader),r.readAsDataURL(t)},imageLoader:function(e){this.userInfoForm.photoURL=e.target.result},resetPass:function(e){var t=this;this.$confirm("即將發送重置密碼信件，且將返回登入畫面，是否繼續?","提示",{confirmButtonText:"確認重置密碼",cancelButtonText:"取消",type:"warning"}).then(o()(n.a.mark(function r(){var a;return n.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.resetPassword(e);case 2:return a=r.sent,t.$message({type:"warning",message:a.message}),r.next=6,t.userLogout();case 6:t.$router.push("/");case 7:case"end":return r.stop()}},r,t)}))).catch(function(){})},submitForm:function(e){var t,r=this;this.$refs[e].validate((t=o()(n.a.mark(function e(t){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,r.updateUserInfo(r.userInfoForm);case 3:"success"===e.sent?r.$notify.success({title:"通知！",message:"個人資訊修改成功！"}):r.$notify.error({title:"通知！",message:"個人資訊修改失敗！"}),e.next=8;break;case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}},e,r)})),function(e){return t.apply(this,arguments)}))},formateDate:function(e){var t=new Date(e);return t.getFullYear()+"/"+this.formatNum(t.getMonth()+1)+"/"+this.formatNum(t.getDate())+" "+this.formatNum(t.getHours())+":"+this.formatNum(t.getMinutes())},formatNum:function(e){return e>=10?e:"0"+e}}),computed:u()({},Object(l.c)(["userInfo","isLoading"])),created:function(){var e=this;return o()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getUserInfo();case 2:e.lastSignInTime=e.formateDate(e.userInfo.metadata.lastSignInTime),e.creationTime=e.formateDate(e.userInfo.metadata.creationTime),e.userInfoForm={displayName:e.userInfo.displayName?e.userInfo.displayName:"匿名",photoURL:e.userInfo.photoURL?e.userInfo.photoURL:"https://goo.gl/bydiLS"};case 5:case"end":return t.stop()}},t,e)}))()}},c={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"userInfo_contain"},[r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],ref:"userInfoForm",staticClass:"userInfoForm",attrs:{model:e.userInfoForm,rules:e.userInfoRules,"status-icon":"","label-width":"100px"}},[r("el-form-item",[r("div",{staticClass:"paddingR"},[r("div",[e._v("帳號驗證狀態："),r("span",{staticStyle:{color:"red"}},[e._v(e._s(e.userInfo.emailVerified?"已驗證":"未驗證"))])]),e._v(" "),r("div",[e._v("\n\t\t\t\t\t帳號建立時間："+e._s(e.creationTime)+"\n\t\t\t\t")]),e._v(" "),r("div",{staticClass:"innerDiv"},[e._v("\n\t\t\t\t\t帳號最後登入時間："+e._s(e.lastSignInTime)+"\n\t\t\t\t")])]),e._v(" "),r("div",{},[r("label",{staticClass:"custom-file-upload",attrs:{for:"file-upload"}},[r("img",{staticClass:"showUserImg",attrs:{src:e.userInfoForm.photoURL}})])]),e._v(" "),r("input",{attrs:{id:"file-upload",type:"file"},on:{change:e.fileSelected}})]),e._v(" "),r("el-form-item",{attrs:{label:"帳號",prop:"email"}},[r("el-input",{attrs:{type:"email","auto-complete":"off",disabled:""},model:{value:e.userInfo.email,callback:function(t){e.$set(e.userInfo,"email",t)},expression:"userInfo.email"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"暱稱",prop:"displayName"}},[r("el-input",{attrs:{type:"text",placeholder:"如果沒輸入也會更新暱稱喔！","auto-complete":"off"},model:{value:e.userInfoForm.displayName,callback:function(t){e.$set(e.userInfoForm,"displayName",t)},expression:"userInfoForm.displayName"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("userInfoForm")}}},[e._v("更新資料")]),e._v(" "),r("el-button",{attrs:{type:"info"},on:{click:function(t){e.resetPass(e.userInfo.email)}}},[e._v("重設密碼")])],1)],1)],1)},staticRenderFns:[]};var m=r("VU/8")(f,c,!1,function(e){r("gKQN")},null,null);t.default=m.exports}});
//# sourceMappingURL=2.2e358ab2ce9e241973d7.js.map