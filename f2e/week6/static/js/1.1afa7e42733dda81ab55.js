webpackJsonp([1,4,5,6,7],{"9wLh":function(e,t){},EEzE:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("zZ3c"),a=s("vqjX"),i=s("rljS"),n=s("fF0C"),o=s("y5yQ"),l={components:{StepOne:r.default,StepTwo:a.default,StepThree:i.default,LastStep:n.default},mixins:[o.a],mounted:function(){this.initStepActive()}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"signUp"},[s("el-steps",{staticClass:"steps",attrs:{active:e.getStepActive,simple:"","finish-status":"success"}},[s("el-step",{attrs:{title:"Step1",icon:"el-icon-upload"}}),e._v(" "),s("el-step",{attrs:{title:"Step2",icon:"el-icon-edit"}}),e._v(" "),s("el-step",{attrs:{title:"Step3",icon:"el-icon-picture"}})],1),e._v(" "),s("div",{staticClass:"formArea"},[0===e.getStepActive?s("div",{staticClass:"step-one"},[s("step-one")],1):e._e(),e._v(" "),1===e.getStepActive?s("div",{staticClass:"step-two"},[s("step-two")],1):e._e(),e._v(" "),2===e.getStepActive?s("div",{staticClass:"step-three"},[s("step-three")],1):e._e(),e._v(" "),3===e.getStepActive?s("div",[s("last-step")],1):e._e()])],1)},staticRenderFns:[]};var u=s("VU/8")(l,c,!1,function(e){s("FfjS")},null,null);t.default=u.exports},FfjS:function(e,t){},fF0C:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"lastStepTitle",staticStyle:{padding:"10px"}},[s("h3",[e._v("Congratulations")]),e._v(" "),s("h4",[e._v("Now you’re one of us!")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),s("el-button",{staticClass:"stepBtn",attrs:{type:"primary"},on:{click:function(t){e.$router.push({name:"login"})}}},[e._v("\n    Redirected to signin page\n  ")])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("i",{staticClass:"far fa-laugh-beam"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"redirected"},[t("h4",[this._v("Verify your Account")]),this._v(" "),t("br"),this._v(" "),t("div",[this._v("Please check your email!")]),this._v(" "),t("span",[this._v("\n      We'll send a verification link to the email address you used to create the account.\n    ")])])}]},a=s("VU/8")(null,r,!1,null,null,null);t.default=a.exports},rljS:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("Xxa5"),a=s.n(r),i=s("exGp"),n=s.n(i),o=s("m3sR"),l={mixins:[s("y5yQ").a],data:function(){return{isLoading:!1}},methods:{submitForm:function(){var e=this;return n()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,Object(o.h)(e.getUpdateForm);case 3:e.isLoading=!1,e.updateStepActive();case 5:case"end":return t.stop()}},t,e)}))()},fileSelected:function(e){var t=e.target.files.item(0),s=new FileReader;s.addEventListener("load",this.imageLoader),s.readAsDataURL(t)},imageLoader:function(e){var t=this,s=new Image,r=0,a=0;s.src=e.target.result,s.addEventListener("load",function(s){r=s.path[0].width,a=s.path[0].height,r<=150&&a<=150?t.updateProfileImage(e.target.result):(t.updateProfileImage(""),t.$message({type:"error",message:"Max Size: 150*150px"}))})}}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],attrs:{"element-loading-text":"Please Wait..."}},[e._m(0),e._v(" "),s("label",{staticClass:"uploadBox",attrs:{for:"file-upload"}},[e._m(1),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.getUpdateForm.photoURL,expression:"getUpdateForm.photoURL"}],staticClass:"showUserImg"},[s("img",{attrs:{src:e.getUpdateForm.photoURL}})]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.getUpdateForm.photoURL,expression:"!getUpdateForm.photoURL"}],staticClass:"info"},[s("div",[e._v("UPLOAD UP 1 PHOTO")]),e._v(" "),s("div",[e._v("MAX SIZE: 150*150px")])])]),e._v(" "),s("input",{attrs:{id:"file-upload",type:"file"},on:{change:e.fileSelected}}),e._v(" "),s("el-button",{staticClass:"stepBtn",attrs:{type:"primary",disabled:!e.getUpdateForm.photoURL},on:{click:e.submitForm}},[e._v("\n    DONE\n  ")])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title",staticStyle:{padding:"10px"}},[t("h3",[this._v("Profile Picture")]),this._v(" "),t("h4",[this._v("You're Almost Done!")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"icon"},[t("i",{staticClass:"fas fa-image"})])}]};var u=s("VU/8")(l,c,!1,function(e){s("9wLh")},null,null);t.default=u.exports},vqjX:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("Xxa5"),a=s.n(r),i=s("exGp"),n=s.n(i),o=s("JBSp"),l={mixins:[s("y5yQ").a],data:function(){return{userInfoForm:{displayName:"",phoneNumber:"",photoURL:""},userInfoRules:{displayName:[{validator:o.b,trigger:"blur"}],phoneNumber:[{validator:o.d,trigger:"blur"}]}}},methods:{submitForm:function(e){var t,s=this;this.$refs[e].validate((t=n()(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}s.setUpdateFormData(s.userInfoForm),s.updateStepActive(),e.next=6;break;case 5:return e.abrupt("return",!1);case 6:case"end":return e.stop()}},e,s)})),function(e){return t.apply(this,arguments)}))}},mounted:function(){this.initUserInfo()}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"stepTwo"}},[e._m(0),e._v(" "),s("el-form",{ref:"userInfoForm",attrs:{model:e.userInfoForm,rules:e.userInfoRules,"label-position":"top"}},[s("el-form-item",{attrs:{prop:"displayName",label:"DisplayName"}},[s("el-input",{attrs:{type:"text",placeholder:"Display Name","auto-complete":"off"},model:{value:e.userInfoForm.displayName,callback:function(t){e.$set(e.userInfoForm,"displayName",t)},expression:"userInfoForm.displayName"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"phoneNumber",label:"Phone Number"}},[s("el-input",{attrs:{type:"text",placeholder:"Phone Number",pattern:"\\d*",maxlength:10,"auto-complete":"off"},model:{value:e.userInfoForm.phoneNumber,callback:function(t){e.$set(e.userInfoForm,"phoneNumber",t)},expression:"userInfoForm.phoneNumber"}})],1),e._v(" "),s("el-button",{staticClass:"stepBtn",attrs:{type:"primary"},on:{click:function(t){e.submitForm("userInfoForm")}}},[e._v("\n      SUBMIT & NEXT\n    ")])],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title",staticStyle:{padding:"10px"}},[t("h3",[this._v("General Infomation")]),this._v(" "),t("h4",[this._v("Tell us who you are!")])])}]},u=s("VU/8")(l,c,!1,null,null,null);t.default=u.exports},zZ3c:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("Xxa5"),a=s.n(r),i=s("exGp"),n=s.n(i),o=s("JBSp"),l=s("m3sR"),c={mixins:[s("y5yQ").a],data:function(){var e=this;return{isLoading:!1,registerForm:{account:"",password:"",checkpass:""},registerRules:{account:[{validator:o.a,trigger:"blur"}],password:[{validator:o.c,trigger:"blur"}],checkpass:[{validator:function(t,s,r){""===s?r(new Error("Please Enter Passwrod Again")):s!==e.registerForm.password?r(new Error("Passwrod Not Match")):r()},trigger:"blur"}]}}},methods:{submitForm:function(e){var t,s=this;this.$refs[e].validate((t=n()(a.a.mark(function t(r){var i,n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=17;break}return s.isLoading=!0,t.next=4,Object(l.g)(s.registerForm);case 4:if(i=t.sent,"success"!==(n=i.message)){t.next=12;break}return t.next=9,Object(l.f)(s.registerForm);case 9:s.updateStepActive(),t.next=14;break;case 12:s.$message({type:"error",message:n}),s.$refs[e].clearValidate();case 14:s.isLoading=!1,t.next=18;break;case 17:return t.abrupt("return",!1);case 18:case"end":return t.stop()}},t,s)})),function(e){return t.apply(this,arguments)}))}}},u={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],attrs:{id:"stepOne","element-loading-text":"Please Wait..."}},[e._m(0),e._v(" "),s("el-form",{ref:"registerForm",attrs:{model:e.registerForm,rules:e.registerRules,"label-position":"top"}},[s("el-form-item",{attrs:{prop:"account",label:"Account"}},[s("el-input",{attrs:{type:"text",placeholder:"E-MAIL","auto-complete":"off"},model:{value:e.registerForm.account,callback:function(t){e.$set(e.registerForm,"account",t)},expression:"registerForm.account"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"password",label:"Password"}},[s("el-input",{attrs:{type:"password",placeholder:"Password","auto-complete":"off"},model:{value:e.registerForm.password,callback:function(t){e.$set(e.registerForm,"password",t)},expression:"registerForm.password"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"checkpass",label:"Comfirm Password"}},[s("el-input",{attrs:{type:"password",placeholder:"Comfirm Password","auto-complete":"off"},model:{value:e.registerForm.checkpass,callback:function(t){e.$set(e.registerForm,"checkpass",t)},expression:"registerForm.checkpass"}})],1),e._v(" "),s("el-button",{staticClass:"stepBtn",attrs:{type:"primary"},on:{click:function(t){e.submitForm("registerForm")}}},[e._v("\n      SUBMIT & NEXT\n    ")])],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title",staticStyle:{padding:"10px"}},[t("h3",[this._v("Create Account")]),this._v(" "),t("h4",[this._v("Glad to see you here!")])])}]},p=s("VU/8")(c,u,!1,null,null,null);t.default=p.exports}});
//# sourceMappingURL=1.1afa7e42733dda81ab55.js.map