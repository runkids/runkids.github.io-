webpackJsonp([2],{"4MIl":function(e,t){},X4qR:function(e,t){},uCMJ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Xxa5"),r=n.n(a),s=n("exGp"),o=n.n(s),i={props:{link:{type:String,required:!0}}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"github"},[t("a",{attrs:{href:this.link,target:"_blank"}},[t("i",{staticClass:"fab fa-github"})])])},staticRenderFns:[]};var c=n("VU/8")(i,l,!1,function(e){n("4MIl")},null,null).exports,u=n("WcwI"),d=n("JBSp"),p=n("m3sR"),f={components:{GitHubIcon:c},data:function(){return{isLoading:!1,form:{account:"",password:""},loginRules:{account:[{validator:d.a,trigger:"blur"}],password:[{validator:d.c,trigger:"blur"}]}}},methods:{submitForm:function(e){var t,n=this;this.$refs[e].validate((t=o()(r.a.mark(function t(a){var s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=10;break}return n.isLoading=!0,t.next=4,Object(p.f)(n.form);case 4:s=t.sent,n.isLoading=!1,"success"!==s.message?(n.$message({type:"error",message:s.message}),n.form.password="",n.$refs[e].clearValidate()):n.$router.replace({name:"home"}),window.scrollTo(0,0),t.next=11;break;case 10:return t.abrupt("return",!1);case 11:case"end":return t.stop()}},t,n)})),function(e){return t.apply(this,arguments)}))},forgetPassWord:function(){var e,t=this;this.$prompt("Enter your email address and we will send you a link to reset your password.","Reset your password",{confirmButtonText:"Send password reset email",cancelButtonText:"Cancel",inputPattern:u.a.email,inputErrorMessage:"Invalid Email！"}).then((e=o()(r.a.mark(function e(n){var a,s=n.value;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.d)(s);case 2:a=e.sent,t.$message({type:"warning",message:a.message});case 4:case"end":return e.stop()}},e,t)})),function(t){return e.apply(this,arguments)}))}}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login"}},[n("git-hub-icon",{attrs:{link:"https://github.com/runkids/F2E-Validation"}}),e._v(" "),n("h3",[e._v("Sign in with Firebase")]),e._v(" "),n("h4",[e._v("Glad to see you here!")]),e._v(" "),n("div",{staticClass:"login-form"},[n("el-form",{ref:"loginForm",attrs:{model:e.form,"status-icon":"",rules:e.loginRules,"label-position":"top"}},[n("el-form-item",{attrs:{label:"Email address",prop:"account"}},[n("el-input",{attrs:{type:"email","auto-complete":"off"},model:{value:e.form.account,callback:function(t){e.$set(e.form,"account",t)},expression:"form.account"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"Password",prop:"password"}},[n("el-button",{staticStyle:{float:"right"},attrs:{type:"text"},on:{click:e.forgetPassWord}},[e._v("\n            Forgot password?\n          ")]),e._v(" "),n("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),n("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.isLoading,expression:"isLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"signInBtn",attrs:{type:"success","element-loading-text":"Please Wait...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},on:{click:function(t){e.submitForm("loginForm")}}},[e._v("\n          Sign In\n        ")])],1)],1),e._v(" "),n("div",{staticClass:"create-account-box"},[n("span",[e._v("New to Here?")]),e._v(" "),n("el-button",{staticClass:"create-account-btn",attrs:{type:"text"},on:{click:function(t){e.$router.push({name:"signUp"})}}},[e._v("\n      Create an account.\n    ")])],1)],1)},staticRenderFns:[]};var g=n("VU/8")(f,m,!1,function(e){n("X4qR")},null,null);t.default=g.exports}});
//# sourceMappingURL=2.7aaf096b97cecdb53721.js.map