webpackJsonp([5],{vqjX:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("Xxa5"),o=r.n(n),a=r("exGp"),s=r.n(a),u=r("JBSp"),i={mixins:[r("y5yQ").a],data:function(){return{userInfoForm:{displayName:"",phoneNumber:"",photoURL:""},userInfoRules:{displayName:[{validator:u.b,trigger:"blur"}],phoneNumber:[{validator:u.d,trigger:"blur"}]}}},methods:{submitForm:function(e){var t,r=this;this.$refs[e].validate((t=s()(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}r.setUpdateFormData(r.userInfoForm),r.updateStepActive(),e.next=6;break;case 5:return e.abrupt("return",!1);case 6:case"end":return e.stop()}},e,r)})),function(e){return t.apply(this,arguments)}))}},mounted:function(){this.initUserInfo()}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"stepTwo"}},[e._m(0),e._v(" "),r("el-form",{ref:"userInfoForm",attrs:{model:e.userInfoForm,rules:e.userInfoRules,"label-position":"top"}},[r("el-form-item",{attrs:{prop:"displayName",label:"DisplayName"}},[r("el-input",{attrs:{type:"text",placeholder:"Display Name","auto-complete":"off"},model:{value:e.userInfoForm.displayName,callback:function(t){e.$set(e.userInfoForm,"displayName",t)},expression:"userInfoForm.displayName"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"phoneNumber",label:"Phone Number"}},[r("el-input",{attrs:{type:"text",placeholder:"Phone Number",pattern:"\\d*",maxlength:10,"auto-complete":"off"},model:{value:e.userInfoForm.phoneNumber,callback:function(t){e.$set(e.userInfoForm,"phoneNumber",t)},expression:"userInfoForm.phoneNumber"}})],1),e._v(" "),r("el-button",{staticClass:"stepBtn",attrs:{type:"primary"},on:{click:function(t){e.submitForm("userInfoForm")}}},[e._v("\n      SUBMIT & NEXT\n    ")])],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title",staticStyle:{padding:"10px"}},[t("h3",[this._v("General Infomation")]),this._v(" "),t("h4",[this._v("Tell us who you are!")])])}]},p=r("VU/8")(i,l,!1,null,null,null);t.default=p.exports}});
//# sourceMappingURL=5.2047b54543294864e8ed.js.map