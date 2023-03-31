"use strict";(self["webpackChunkvue_cms_admin"]=self["webpackChunkvue_cms_admin"]||[]).push([[830],{7673:function(e,t,i){i.r(t),i.d(t,{default:function(){return d}});var r=function(){var e=this,t=e._self._c;return t("div",[t("el-card",{},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("菜单管理")])]),t("el-alert",{attrs:{title:"Tips",type:"warning",description:"设置后台管理系统的左侧菜单，目前至多支持两层菜单，三层以上菜单将不会显示。","show-icon":"",closable:!1}}),t("el-table",{staticClass:"am-margin-top",attrs:{data:e.allMenus,"row-key":"permission_id","expand-row-keys":["0"],border:"",stripe:"","max-height":"600"}},[t("el-table-column",{attrs:{label:"资源名称",width:"200",fixed:"left"},scopedSlots:e._u([{key:"default",fn:function(i){return[2===i.row.resource_type_id?[t("span",[e._v(e._s(i.row.menu_name))])]:e._e(),3===i.row.resource_type_id?[t("span",[e._v(e._s(i.row.permission_remark))])]:e._e()]}}])}),t("el-table-column",{attrs:{label:"图标"},scopedSlots:e._u([{key:"default",fn:function(e){return[t("i",{class:`el-icon-${e.row.icon_name}`})]}}])}),t("el-table-column",{attrs:{label:"资源类型"},scopedSlots:e._u([{key:"default",fn:function(i){return[2===i.row.resource_type_id?[t("el-tag",[e._v(e._s(i.row.resource_type_name))])]:e._e(),3===i.row.resource_type_id?[t("el-tag",{attrs:{type:"warning"}},[e._v(e._s(i.row.resource_type_name))])]:e._e()]}}])}),t("el-table-column",{attrs:{prop:"resource_type_code",label:"资源代码",width:"100"}}),t("el-table-column",{attrs:{prop:"permission_code",label:"权限代码",width:"130"}}),t("el-table-column",{attrs:{prop:"operation_name",label:"操作名称",width:"70"}}),t("el-table-column",{attrs:{prop:"route_name",label:"路由名称",width:"110"}}),t("el-table-column",{attrs:{prop:"route_full_path",label:"完整路由地址",width:"150"}}),t("el-table-column",{attrs:{prop:"menu_order",label:"菜单序号"}}),t("el-table-column",{attrs:{prop:"permission_remark",label:"备注",width:"180"}}),t("el-table-column",{attrs:{label:"操作",width:"230",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("el-button",{attrs:{disabled:0===i.row.permission_id,icon:"el-icon-edit",type:"primary",title:"编辑",plain:""},on:{click:function(t){return e.openEditDialog(i.row)}}}),3!==i.row.resource_type_id?t("el-button",{attrs:{icon:"el-icon-circle-plus-outline",type:"success",title:"添加",plain:""},on:{click:function(t){return e.openInsertDialog(i.row)}}}):e._e(),3!==i.row.resource_type_id?t("el-button",{attrs:{disabled:0===i.row.permission_id,icon:"el-icon-setting",type:"warning",title:"设置图标",plain:""}}):e._e(),t("el-button",{attrs:{disabled:0===i.row.permission_id,icon:"el-icon-delete",type:"danger",title:"删除",plain:""},on:{click:function(t){return e.handleRemoveRoute(i.row)}}})]}}])})],1),t("el-dialog",{attrs:{title:"添加菜单/操作按钮",visible:e.insert_dialog_visible},on:{"update:visible":function(t){e.insert_dialog_visible=t},closed:function(t){return e.handleClosedDialog("insert")}}},[t("el-tabs",{attrs:{type:"card"},model:{value:e.insert_tab_selected,callback:function(t){e.insert_tab_selected=t},expression:"insert_tab_selected"}},[t("el-tab-pane",{attrs:{label:"菜单",name:"insert_menu_form"}},[t("el-form",{ref:"insert_menu_form",attrs:{model:e.insert_menu_form,rules:e.rules,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"菜单名称",prop:"menu_name"}},[t("el-input",{model:{value:e.insert_menu_form.menu_name,callback:function(t){e.$set(e.insert_menu_form,"menu_name",t)},expression:"insert_menu_form.menu_name"}})],1),t("el-form-item",{attrs:{label:"是否链接跳转"}},[t("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.insert_menu_form.is_link,callback:function(t){e.$set(e.insert_menu_form,"is_link",t)},expression:"insert_menu_form.is_link"}})],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.insert_menu_form.is_link,expression:"insert_menu_form.is_link"}],attrs:{label:"关联路由",prop:"route_id"}},[t("el-cascader",{attrs:{options:e.treeRoutes,props:{value:"route_id",label:"route_name",emitPath:!1},placeholder:"指定此菜单对应的路由"},model:{value:e.insert_menu_form.route_id,callback:function(t){e.$set(e.insert_menu_form,"route_id",t)},expression:"insert_menu_form.route_id"}})],1),t("el-form-item",{attrs:{label:"显示顺序",prop:"menu_order"}},[t("el-input",{attrs:{placeholder:"显示顺序按照数字从小到大，如2001"},model:{value:e.insert_menu_form.menu_order,callback:function(t){e.$set(e.insert_menu_form,"menu_order",t)},expression:"insert_menu_form.menu_order"}})],1),t("el-form-item",{attrs:{label:"权限代码",prop:"permission_code"}},[t("el-input",{attrs:{placeholder:"权限代码由父级权限和菜单权限合成"},model:{value:e.insert_menu_form.permission_code,callback:function(t){e.$set(e.insert_menu_form,"permission_code",t)},expression:"insert_menu_form.permission_code"}})],1),t("el-form-item",{attrs:{label:"权限备注",prop:"permission_remark"}},[t("el-input",{attrs:{placeholder:"菜单备注信息"},model:{value:e.insert_menu_form.permission_remark,callback:function(t){e.$set(e.insert_menu_form,"permission_remark",t)},expression:"insert_menu_form.permission_remark"}})],1)],1)],1),t("el-tab-pane",{attrs:{label:"操作按钮",name:"insert_operation_form"}},[t("el-form",{ref:"insert_operation_form",attrs:{model:e.insert_operation_form,rules:e.rules,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"操作类型",prop:"operation_id"}},[t("el-select",{attrs:{placeholder:"请选择操作按钮类型"},model:{value:e.insert_operation_form.operation_id,callback:function(t){e.$set(e.insert_operation_form,"operation_id",t)},expression:"insert_operation_form.operation_id"}},e._l(e.operations,(function(e){return t("el-option",{key:e.operation_id,attrs:{label:e.operation_name,value:e.operation_id}})})),1)],1),t("el-form-item",{attrs:{label:"权限代码",prop:"permission_code"}},[t("el-input",{attrs:{placeholder:"权限代码由父级权限和按钮权限合成"},model:{value:e.insert_operation_form.permission_code,callback:function(t){e.$set(e.insert_operation_form,"permission_code",t)},expression:"insert_operation_form.permission_code"}})],1),t("el-form-item",{attrs:{label:"权限备注",prop:"permission_remark"}},[t("el-input",{attrs:{placeholder:"请输入权限备注信息"},model:{value:e.insert_operation_form.permission_remark,callback:function(t){e.$set(e.insert_operation_form,"permission_remark",t)},expression:"insert_operation_form.permission_remark"}})],1)],1)],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.insert_dialog_visible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.handleInsert}},[e._v("添 加")])],1)],1),t("el-dialog",{attrs:{title:"编辑节点",visible:e.edit_dialog_visible},on:{"update:visible":function(t){e.edit_dialog_visible=t},closed:function(t){return e.handleClosedDialog("edit")}}},[t("el-tabs",{attrs:{type:"card"},model:{value:e.edit_tab_selected,callback:function(t){e.edit_tab_selected=t},expression:"edit_tab_selected"}},[t("el-tab-pane",{attrs:{label:"菜单",name:"edit_menu_form"}},[t("el-form",{ref:"edit_menu_form",attrs:{model:e.edit_menu_form,rules:e.rules,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"菜单名称",prop:"menu_name"}},[t("el-input",{model:{value:e.edit_menu_form.menu_name,callback:function(t){e.$set(e.edit_menu_form,"menu_name",t)},expression:"edit_menu_form.menu_name"}})],1),t("el-form-item",{attrs:{label:"是否链接跳转"}},[t("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.edit_menu_form.is_link,callback:function(t){e.$set(e.edit_menu_form,"is_link",t)},expression:"edit_menu_form.is_link"}})],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.edit_menu_form.is_link,expression:"edit_menu_form.is_link"}],attrs:{label:"关联路由",prop:"route_id"}},[t("el-cascader",{attrs:{options:e.treeRoutes,props:{value:"route_id",label:"route_name",emitPath:!1},placeholder:"指定此菜单对应的路由"},model:{value:e.edit_menu_form.route_id,callback:function(t){e.$set(e.edit_menu_form,"route_id",t)},expression:"edit_menu_form.route_id"}})],1),t("el-form-item",{attrs:{label:"显示顺序",prop:"menu_order"}},[t("el-input",{attrs:{placeholder:"显示顺序按照数字从小到大，如2001"},model:{value:e.edit_menu_form.menu_order,callback:function(t){e.$set(e.edit_menu_form,"menu_order",t)},expression:"edit_menu_form.menu_order"}})],1),t("el-form-item",{attrs:{label:"权限代码",prop:"permission_code"}},[t("el-input",{attrs:{placeholder:"权限代码由父级权限和菜单权限合成"},model:{value:e.edit_menu_form.permission_code,callback:function(t){e.$set(e.edit_menu_form,"permission_code",t)},expression:"edit_menu_form.permission_code"}})],1),t("el-form-item",{attrs:{label:"权限备注",prop:"permission_remark"}},[t("el-input",{attrs:{placeholder:"菜单备注信息"},model:{value:e.edit_menu_form.permission_remark,callback:function(t){e.$set(e.edit_menu_form,"permission_remark",t)},expression:"edit_menu_form.permission_remark"}})],1)],1)],1),t("el-tab-pane",{attrs:{label:"操作按钮",name:"edit_operation_form"}},[t("el-form",{ref:"edit_operation_form",attrs:{model:e.edit_operation_form,rules:e.rules,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"操作类型",prop:"operation_id"}},[t("el-select",{attrs:{placeholder:"请选择操作按钮类型"},model:{value:e.edit_operation_form.operation_id,callback:function(t){e.$set(e.edit_operation_form,"operation_id",t)},expression:"edit_operation_form.operation_id"}},e._l(e.operations,(function(e){return t("el-option",{key:e.operation_id,attrs:{label:e.operation_name,value:e.operation_id}})})),1)],1),t("el-form-item",{attrs:{label:"权限代码",prop:"permission_code"}},[t("el-input",{attrs:{placeholder:"权限代码由父级权限和按钮权限合成"},model:{value:e.edit_operation_form.permission_code,callback:function(t){e.$set(e.edit_operation_form,"permission_code",t)},expression:"edit_operation_form.permission_code"}})],1),t("el-form-item",{attrs:{label:"权限备注",prop:"permission_remark"}},[t("el-input",{attrs:{placeholder:"请输入权限备注信息"},model:{value:e.edit_operation_form.permission_remark,callback:function(t){e.$set(e.edit_operation_form,"permission_remark",t)},expression:"edit_operation_form.permission_remark"}})],1)],1)],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.edit_dialog_visible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.handleEdit}},[e._v("保 存")])],1)],1),t("el-dialog",{attrs:{title:"选择图标",width:"72%",visible:e.icon_modal_visible},on:{"update:visible":function(t){e.icon_modal_visible=t}}},[t("ul",{staticClass:"icon-list"},e._l(e.icons,(function(i){return t("li",{key:i.id,class:{checked:i.checked},on:{click:function(t){return e.handleCheckIcon(i)}}},[t("span",[t("i",{class:`el-icon-${i.name}`}),t("span",{staticClass:"icon-name"},[e._v("el-icon-"+e._s(i.name))])])])})),0),t("el-pagination",{attrs:{background:"",layout:"->,prev, pager, next","page-size":e.pageSize,total:e.total_icon},on:{"current-change":e.handlePageChange}}),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.icon_modal_visible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.handleUpdateIcon}},[e._v("确 定")])],1)],1)],1)],1)},o=[],n=i(629),s=i(1803),a={name:"Menu",data(){let e=(e,t,i)=>{let{is_link:r}=this.insert_menu_form;if(!r)return i();""===t?i(new Error("请选择与菜单相关联的路由！")):i()};return{icon_modal_visible:!1,icons:[],pageSize:30,total_icon:0,checked_icon:{icon_id:"",icon:""},current_node:"",insert_tab_selected:"insert_menu_form",insert_dialog_visible:!1,insert_menu_form:{menu_name:"",is_link:!0,menu_order:"",route_id:null,parent_id:"",permission_code:"",permission_remark:"",resource_type_id:2,resource_type_code:"MENU",resource_type_name:"菜单"},insert_operation_form:{operation_id:"",parent_id:"",permission_code:"",permission_remark:"",resource_type_id:3,resource_type_code:"OPERATION",resource_type_name:"操作"},edit_tab_selected:"edit_menu_form",edit_dialog_visible:!1,edit_menu_form:{menu_name:"",menu_order:"",route_id:null,route_full_path:"",parent_id:"",permission_remark:"",resource_type_id:2,resource_type_code:"MENU",resource_type_name:"菜单"},edit_operation_form:{operation_id:"",parent_id:"",permission_code:"",permission_remark:"",resource_type_id:3,resource_type_code:"OPERATION",resource_type_name:"操作"},rules:{menu_name:[{required:!0,type:"string",message:"请输入菜单名称！",trigger:"blur"}],route_id:[{validator:e,trigger:"change"}],route_full_path:[{validator:e,trigger:"blur"}],menu_order:[{required:!0,type:"string",message:"请填写显示顺序！",trigger:"blur"},{pattern:/^\d+$/,message:"顺序必须是数字组成！",trigger:"blur"}],operation_id:[{required:!0,message:"请选择操作按钮类型！",trigger:"change"}],permission_code:[{required:!0,message:"请输入权限代码！",trigger:"blur"}],permission_remark:[{required:!0,message:"请输入权限备注！",trigger:"blur"}]}}},created(){document.title="菜单管理",this.loadIcons(1),this.load_menu_list({type:"flat"})},computed:{...(0,n.Se)("Route",["treeRoutes"]),...(0,n.Se)("Menu",["allMenus"]),...(0,n.rn)("Operation",["operations"])},watch:{"insert_operation_form.operation_id"(e){let{permission_code:t}=this.current_node,i=this.operations.find((t=>t.operation_id===e)),r=`${t}:${i?.operation_code}`;this.insert_operation_form.permission_code=r},"edit_operation_form.operation_id"(e){let{permission_code:t}=this.current_node,i=this.operations.find((t=>t.operation_id===e)),r=`${t}:${i?.operation_code}`;this.edit_operation_form.permission_code=r}},methods:{...(0,n.nv)("Menu",["load_menu_list","create_menu","edit_menu","remove_menu","create_menu_operation"]),openInsertDialog(e){this.insert_menu_form.parent_id=e.permission_id,this.insert_operation_form.parent_id=e.permission_id,this.insert_menu_form.permission_code=e.permission_code,this.insert_operation_form.permission_code=e.permission_code,this.current_node=e,this.insert_dialog_visible=!0},async handleInsert(){let e=this.insert_tab_selected;this.$refs[e].validate((async t=>{if(t){if("insert_menu_form"===e){let{status:e,msg:t}=await this.create_menu({...this.insert_menu_form});e?(this.$message.success(t),this.insert_dialog_visible=!1):this.$message.error(t)}if("insert_operation_form"===e){let{status:e,msg:t}=await this.create_menu_operation({...this.insert_operation_form});e?(this.$message.success(t),this.insert_dialog_visible=!1):this.$message.error(t)}}}))},openEditDialog(e){let t=2===e.resource_type_id?"edit_menu_form":"edit_operation_form";this.edit_tab_selected=t,this[t]={...e},this.current_node=e,this.edit_dialog_visible=!0},async handleEdit(){let{id:e}=this.edit_form;this.$refs.edit_form.validate((async t=>{if(t){let{status:t,msg:i}=await s.v2.update(e,{...this.edit_form});t?(this.current_node.data={...this.edit_form},this.$message.success(i),this.edit_dialog_visible=!1):this.$message.error(i)}}))},handleClosedDialog(e){this.$refs[`${e}_menu_form`].resetFields(),this.$refs[`${e}_operation_form`].resetFields()},handleRemoveRoute(){this.$confirm("此操作将永久删除该菜单, 是否继续?",{type:"warning"}).then((async()=>{let{status:e,msg:t}=await s.v2.remove(data.id);e?(node.remove(),this.$message.success(t)):this.$message.error(t)})).catch((()=>{this.$message.info("已取消删除")}))},async loadIcons(e){let{status:t,data:i,total:r}=await s.JO.list({pageSize:this.pageSize,pageIndex:e});t&&(i.forEach((e=>{e.checked=!1})),this.icons=i,this.total_icon=r)},handlePageChange(e){this.loadIcons(e)},openIconDialog(e,t){this.icon_modal_visible=!0,this.current_node=e},handleCheckIcon(e){this.icons.forEach((t=>{t.checked=t===e&&!e.checked})),this.checked_icon.icon_id=e.checked?e.id:"",this.checked_icon.icon_name=e.checked?e.name:""},async handleUpdateIcon(){let{id:e}=this.current_node.data,{status:t,msg:i}=await s.v2.setIcon(e,{...this.checked_icon});t&&(this.$message.success(i),this.icon_modal_visible=!1,this.current_node.data.icon_name=this.checked_icon.icon_name)}}},l=a,_=i(1001),m=(0,_.Z)(l,r,o,!1,null,"e5cede50",null),d=m.exports}}]);
//# sourceMappingURL=auth-menu.1b4e6af8.js.map