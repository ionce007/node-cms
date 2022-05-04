(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin-edit"],{"00b4":function(e,t,r){"use strict";r("ac1f");var a=r("23e7"),n=r("da84"),o=r("c65b"),s=r("e330"),i=r("1626"),l=r("861d"),u=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),c=n.Error,m=s(/./.test);a({target:"RegExp",proto:!0,forced:!u},{test:function(e){var t=this.exec;if(!i(t))return m(this,e);var r=o(t,this,e);if(null!==r&&!l(r))throw new c("RegExp exec method returned something other than an Object or null");return!!r}})},"1fab":function(e,t,r){"use strict";r("fb8f")},2705:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",{staticClass:"box-card"},[r("div",{attrs:{slot:"header"},slot:"header"},[r("span",[e._v("编辑管理员")])]),r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username","string"===typeof t?t.trim():t)},expression:"form.username"}})],1),r("el-form-item",{attrs:{label:"姓名",prop:"fullname"}},[r("el-input",{model:{value:e.form.fullname,callback:function(t){e.$set(e.form,"fullname","string"===typeof t?t.trim():t)},expression:"form.fullname"}})],1),r("el-form-item",{attrs:{label:"角色"}},[r("el-select",{attrs:{disabled:1==e.id,placeholder:"请选择"},model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}},e._l(e.roleOptions,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),r("el-form-item",{attrs:{label:"性别",prop:"sex"}},[r("el-radio-group",{model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[r("el-radio",{attrs:{label:"男"}}),r("el-radio",{attrs:{label:"女"}})],1)],1),r("el-form-item",{attrs:{label:"手机",prop:"tel"}},[r("el-input",{model:{value:e.form.tel,callback:function(t){e.$set(e.form,"tel","string"===typeof t?t.trim():t)},expression:"form.tel"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email","string"===typeof t?t.trim():t)},expression:"form.email"}})],1),r("el-form-item",{attrs:{label:"头像",prop:"avatar"}},[r("single-upload",{attrs:{"default-image":"http://localhost:3001/images/avatar/default.jpg","upload-action":"/upload/common/","remove-action":"/upload/remove/",data:{type:"avatar"}},model:{value:e.form.avatar,callback:function(t){e.$set(e.form,"avatar",t)},expression:"form.avatar"}})],1),r("el-form-item",[r("el-button",{attrs:{size:"medium",type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("保存修改")])],1)],1)],1)},n=[],o=r("5530"),s=r("1da1"),i=(r("ac1f"),r("5319"),r("96cf"),r("365c")),l=r("e359"),u={props:["id"],components:{SingleUpload:l["a"]},data:function(){return{form:{username:"",fullname:"",role:"",sex:"男",tel:"",email:"",avatar:""},roleOptions:[],rules:{username:[{type:"string",required:!0,message:"请输入账号！",trigger:"blur"},{min:3,max:20,message:"账户名长度在 3 到 20 个字符",trigger:"blur"}],fullname:[{type:"string",required:!0,message:"请输入姓名！",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"change"}],tel:[{type:"string",required:!0,message:"请输入手机号码",trigger:"blur"},{type:"string",pattern:/^[1][3|4|5|6|7|8|9][0-9]{9}$/,message:"请输入正确的手机号码",trigger:"blur"}],email:[{type:"email",required:!0,message:"请输入邮箱地址",trigger:"blur"}],avatar:[{type:"string",required:!0,message:"请上传头像图片",trigger:"change"}]}}},created:function(){document.title="编辑管理员",this.loadInfo()},watch:{$route:"loadInfo"},methods:{loadInfo:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].info({id:e.id});case 2:if(r=t.sent,a=r.status,n=r.data,!a){t.next=10;break}return t.next=8,e.loadRole();case 8:e.roleOptions=t.sent,e.form=n;case 10:case"end":return t.stop()}}),t)})))()},loadRole:function(){return Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["i"].list();case 2:if(t=e.sent,r=t.status,a=t.data,!r){e.next=7;break}return e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))()},submitForm:function(e){var t=this;this.$refs[e].validate(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(r){var a,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=7;break}return e.next=3,i["a"].edit(Object(o["a"])({id:t.id},t.form));case 3:a=e.sent,n=a.status,s=a.msg,n&&(t.$router.replace("/admin/list/"),t.$message.success(s));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},c=u,m=r("2877"),f=Object(m["a"])(c,a,n,!1,null,null,null);t["default"]=f.exports},"99af":function(e,t,r){"use strict";var a=r("23e7"),n=r("da84"),o=r("d039"),s=r("e8b5"),i=r("861d"),l=r("7b0b"),u=r("07fa"),c=r("8418"),m=r("65f0"),f=r("1dde"),d=r("b622"),p=r("2d00"),g=d("isConcatSpreadable"),b=9007199254740991,v="Maximum allowed index exceeded",h=n.TypeError,x=p>=51||!o((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),y=f("concat"),w=function(e){if(!i(e))return!1;var t=e[g];return void 0!==t?!!t:s(e)},k=!x||!y;a({target:"Array",proto:!0,arity:1,forced:k},{concat:function(e){var t,r,a,n,o,s=l(this),i=m(s,0),f=0;for(t=-1,a=arguments.length;t<a;t++)if(o=-1===t?s:arguments[t],w(o)){if(n=u(o),f+n>b)throw h(v);for(r=0;r<n;r++,f++)r in o&&c(i,f,o[r])}else{if(f>=b)throw h(v);c(i,f++,o)}return i.length=f,i}})},e359:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadAction,"before-upload":e.handleBeforeUpload,data:e.data,headers:e.headers,"on-error":e.handleUploadError,"on-success":e.handleUploadSuccess,"show-file-list":!1}},[e.value?[r("div",{staticClass:"cover",on:{click:function(t){return t.stopPropagation(),e.handleRemove.apply(null,arguments)}}},[r("i",{staticClass:"el-icon-delete avatar-uploader-icon"})]),r("img",{staticClass:"avatar",attrs:{src:e.value}})]:r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})],2)},n=[],o=r("1da1"),s=(r("96cf"),r("ac1f"),r("00b4"),r("99af"),r("caad"),r("2532"),r("bc3a")),i=r.n(s),l={name:"single-upload",props:{value:{type:String,default:""},defaultImage:{type:String},uploadAction:{type:String,required:!0},removeAction:{type:String,required:!0},data:{type:Object,default:function(){return{type:"common"}}},headers:{type:Object,default:function(){return{Authorization:"Bearer ".concat(sessionStorage.token)}}}},methods:{handleBeforeUpload:function(e){var t=/^image\/(jpe?g|png)$/,r=t.test(e.type),a=e.size/1024/1024<2;return r||this.$message.error("上传头像图片只能是 JPG/PNG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),r&&a},handleUploadSuccess:function(e,t){this.$emit("success",e),this.$emit("input",e.src)},handleUploadError:function(e,t,r){var a=e.status,n=e.message;switch(a){case 401:this.$message.error("错误:401,Token失效,请重新登录!");break;case 400:n=JSON.parse(n),this.$message.error("错误:400,".concat(n));break;default:this.$message.error("错误:".concat(a,",").concat(n,"!"));break}},handleRemove:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.value.includes(e.defaultImage),r){t.next=7;break}return t.next=4,i.a.post(e.removeAction,{src:e.value});case 4:a=t.sent,n=a.status,n&&e.$message.success("删除成功!");case 7:e.$emit("input","");case 8:case"end":return t.stop()}}),t)})))()}}},u=l,c=(r("1fab"),r("2877")),m=Object(c["a"])(u,a,n,!1,null,null,null);t["a"]=m.exports},fb8f:function(e,t,r){}}]);
//# sourceMappingURL=admin-edit.ca600163.js.map