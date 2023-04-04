"use strict";(self["webpackChunkvue_cms_admin"]=self["webpackChunkvue_cms_admin"]||[]).push([[617],{8630:function(e,t,l){l.r(t),l.d(t,{default:function(){return c}});var i=function(){var e=this,t=e._self._c;return t("div",[t("el-card",{staticClass:"table-card"},[t("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("角色管理")]),t("el-button",{attrs:{icon:"el-icon-circle-plus-outline",plain:"",type:"primary"},on:{click:function(t){e.insert_dialog_visible=!0}}},[e._v(" 添加角色 ")])],1),t("el-table",{attrs:{data:e.tableData}},[t("el-table-column",{attrs:{prop:"role_id",label:"#",width:"60"}}),t("el-table-column",{attrs:{prop:"role_name",label:"角色名称"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-tag",[e._v(e._s(l.row.role_name))])]}}])}),t("el-table-column",{attrs:{prop:"role_code",label:"角色代码"}}),t("el-table-column",{attrs:{prop:"role_description",label:"角色描述"}}),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-button",{attrs:{disabled:0===l.row.editable,icon:"el-icon-edit",plain:"",type:"primary"},on:{click:function(t){return e.openEditDialog(l.row)}}},[e._v(" 编辑 ")]),t("el-button",{attrs:{disabled:0===l.row.editable,icon:"el-icon-delete",plain:"",type:"danger"},on:{click:function(t){return e.handleRemoveRole(l.row.role_id,l.$index)}}},[e._v(" 删除 ")]),t("el-link",{staticClass:"am-margin-left-sm",attrs:{href:`#/system/role/${l.row.role_id}`,underline:!1}},[t("el-button",{attrs:{type:"warning",plain:"",icon:"el-icon-setting"}},[e._v(" 权限 ")])],1)]}}])})],1)],1),t("el-dialog",{attrs:{title:"添加角色",visible:e.insert_dialog_visible},on:{"update:visible":function(t){e.insert_dialog_visible=t},close:function(t){return e.handleDialogClose("insert_form")}}},[t("el-form",{ref:"insert_form",attrs:{rules:e.rules,model:e.insert_form,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"角色名称",prop:"role_name"}},[t("el-input",{model:{value:e.insert_form.role_name,callback:function(t){e.$set(e.insert_form,"role_name",t)},expression:"insert_form.role_name"}})],1),t("el-form-item",{attrs:{label:"角色代码",prop:"role_code"}},[t("el-input",{attrs:{placeholder:"请输入大写英文的角色代码"},model:{value:e.insert_form.role_code,callback:function(t){e.$set(e.insert_form,"role_code",t)},expression:"insert_form.role_code"}})],1),t("el-form-item",{attrs:{label:"角色描述",prop:"role_description"}},[t("el-input",{attrs:{placeholder:"请输入角色的说明文字"},model:{value:e.insert_form.role_description,callback:function(t){e.$set(e.insert_form,"role_description",t)},expression:"insert_form.role_description"}})],1)],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.insert_dialog_visible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.handleInsertRole}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"编辑角色",visible:e.edit_dialog_visible},on:{"update:visible":function(t){e.edit_dialog_visible=t},close:function(t){return e.handleDialogClose("edit_form")}}},[t("el-form",{ref:"edit_form",attrs:{rules:e.rules,model:e.edit_form,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"角色名称",prop:"role_name"}},[t("el-input",{model:{value:e.edit_form.role_name,callback:function(t){e.$set(e.edit_form,"role_name",t)},expression:"edit_form.role_name"}})],1),t("el-form-item",{attrs:{label:"角色代码",prop:"role_code"}},[t("el-input",{attrs:{placeholder:"请输入大写英文的角色代码"},model:{value:e.edit_form.role_code,callback:function(t){e.$set(e.edit_form,"role_code",t)},expression:"edit_form.role_code"}})],1),t("el-form-item",{attrs:{label:"角色描述",prop:"role_description"}},[t("el-input",{attrs:{placeholder:"请输入角色的说明文字"},model:{value:e.edit_form.role_description,callback:function(t){e.$set(e.edit_form,"role_description",t)},expression:"edit_form.role_description"}})],1)],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.edit_dialog_visible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.handleEditRole}},[e._v("保 存")])],1)],1)],1)},r=[],o=(l(7658),l(1803)),s={name:"Role",data(){return{tableData:[],insert_dialog_visible:!1,insert_form:{role_name:"",role_code:"",role_description:""},edit_dialog_visible:!1,edit_form:{role_id:"",role_name:"",role_code:"",role_description:""},setting_visible:!1,current_role:"",rules:{role_name:[{required:!0,message:"请输入角色名称",trigger:"blur"}],role_code:[{required:!0,message:"请输入大写英文的角色代码",trigger:"blur"}],role_description:[{required:!0,message:"请输入角色的说明文字",trigger:"blur"}]}}},created(){document.title="角色管理",this.loadRoleList()},methods:{async loadRoleList(){let{status:e,data:t}=await o.uU.list();e&&(this.tableData=t)},handleInsertRole(){this.$refs.insert_form.validate((async e=>{if(e){let{status:e,msg:t,data:l}=await o.uU.insert({...this.insert_form});e?(this.tableData.push({...l,...this.insert_form}),this.insert_dialog_visible=!1,this.$message.success(t)):this.$message.error(t)}}))},openEditDialog(e){this.current_role=e,this.edit_form={...e},this.edit_dialog_visible=!0},handleEditRole(){let{role_id:e}=this.edit_form;this.$refs.edit_form.validate((async t=>{if(t){let{status:t,msg:l}=await o.uU.edit(e,{...this.edit_form});t?(Object.assign(this.current_role,this.edit_form),this.edit_dialog_visible=!1,this.$message.success(l)):this.$message.error(l)}}))},async handleRemoveRole(e,t){this.$confirm("此操作将永久删除该角色, 是否继续?",{type:"warning"}).then((async()=>{let{status:l,msg:i}=await o.uU.remove(e);l?(this.tableData.splice(t,1),this.$message.success(i)):this.$message.error(i)})).catch((()=>{this.$message.info("取消成功！")}))},handleDialogClose(e){this.$refs[e].resetFields()}}},a=s,n=l(1001),d=(0,n.Z)(a,i,r,!1,null,null,null),c=d.exports}}]);
//# sourceMappingURL=auth-role.9672f2ec.js.map