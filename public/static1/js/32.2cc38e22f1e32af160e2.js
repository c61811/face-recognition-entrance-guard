webpackJsonp([32],{Juet:function(e,t,i){var a=i("swAt");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("rjj0")("719502f4",a,!0)},rNZP:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("BO1k"),l=i.n(a),s=i("woOf"),n=i.n(s),o=i("viA7"),r=i("Nv8u"),d=i("cAgV"),c=i("0xDb"),p=i("IYyn"),u=[{key:"1",display_name:"一幢"},{key:"2",display_name:"二幢"},{key:"3",display_name:"三幢"},{key:"4",display_name:"四幢"},{key:"5",display_name:"五幢"},{key:"6",display_name:"六幢"},{key:"7",display_name:"七幢"},{key:"8",display_name:"八幢"},{key:"9",display_name:"九幢"}],m=[{key:"1",display_name:"一单元"},{key:"2",display_name:"二单元"},{key:"3",display_name:"三单元"},{key:"4",display_name:"四单元"},{key:"5",display_name:"五单元"}],v={name:"complexTable",directives:{waves:d.a},data:function(){return{uploadUrl:p.a+"/face/upload",imageUrl:"",active:1,tableKey:0,list:null,total:null,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,type2:void 0,sort:"+id"},importanceOptions:[1,2,3],buildings:u,units:m,sortOptions:[{label:"正序",key:"+id"},{label:"逆序",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:{name:"",phone:"",email:"",password:""},temp2:{building_id:"",unit_id:"",room_id:""},temp3:{pic_path:""},temp4:{user:"",face_id:"",address:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!1,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!1,message:"timestamp is required",trigger:"change"}],title:[{required:!1,message:"title is required",trigger:"blur"}]},downloadLoading:!1}},filters:{statusFilter:function(e){return{published:"success",draft:"info",deleted:"danger"}[e]},typeFilter:function(e){return calendarTypeKeyValue[e]}},created:function(){this.getList()},methods:{submit:function(){var e=this,t=void 0,i=void 0,a=void 0;Object(r.i)({pic_path:this.temp3.pic_path}).then(function(l){a=l.data.face_id,Object(r.b)({name:e.temp.name,email:e.temp.email,phone:e.temp.phone,password:e.temp.password,face_id:a}).then(function(a){console.log(a.data),t=a.data.data,Object(r.a)({building_id:e.temp2.building_id,unit_id:e.temp2.unit_id,room_id:e.temp2.room_id}).then(function(a){console.log(a.data),i=a.data.data,Object(r.c)(i.id,{user_id:t.id,role_id:5}).then(function(t){console.log(t),console.log(e.list),e.getList(),e.dialogFormVisible=!1,e.$notify({title:"成功",message:"业主添加成功",type:"success",duration:2e3})})})})})},handleAvatarSuccess:function(e,t){console.log(e),this.imageUrl=URL.createObjectURL(t.raw),this.temp3.pic_path=e.pic_path},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,i=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),i||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&i},next:function(){this.active++>2&&(this.active=0)},getList:function(){var e=this;this.listLoading=!0,Object(r.e)(this.listQuery).then(function(t){e.list=t.data.data,e.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleModifyStatus:function(e,t){this.$message({message:"操作成功",type:"success"}),e.status=t},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},createData:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&(e.temp.id=parseInt(100*Math.random())+1024,e.temp.author="vue-element-admin",Object(o.a)(e.temp).then(function(){e.list.unshift(e.temp),e.dialogFormVisible=!1,e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})}))})},handleUpdate:function(e){var t=this;this.temp=n()({},e),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},updateData:function(){var e=this;this.$refs.dataForm.validate(function(t){if(t){var i=n()({},e.temp);i.timestamp=+new Date(i.timestamp),Object(o.e)(i).then(function(){var t=!0,i=!1,a=void 0;try{for(var s,n=l()(e.list);!(t=(s=n.next()).done);t=!0){var o=s.value;if(o.id===e.temp.id){var r=e.list.indexOf(o);e.list.splice(r,1,e.temp);break}}}catch(e){i=!0,a=e}finally{try{!t&&n.return&&n.return()}finally{if(i)throw a}}e.dialogFormVisible=!1,e.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})}})},handleDelete:function(e){this.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var t=this.list.indexOf(e);this.list.splice(t,1)},handleFetchPv:function(e){var t=this;Object(o.d)(e).then(function(e){t.pvData=e.data.pvData,t.dialogPvVisible=!0})},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([i.e(2),i.e(68)]).then(i.bind(null,"zWO4")).then(function(t){var i=e.formatJson(["timestamp","title","type","importance","status"],e.list);t.export_json_to_excel(["timestamp","title","type","importance","status"],i,"table-list"),e.downloadLoading=!1})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return"timestamp"===e?Object(c.b)(t[e]):t[e]})})}}},f={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container calendar-list-container"},[i("div",{staticClass:"filter-container"},[i("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"住址"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),e._v(" "),i("el-select",{staticClass:"filter-item",staticStyle:{width:"90px"},attrs:{clearable:"",placeholder:"楼幢"},model:{value:e.listQuery.importance,callback:function(t){e.$set(e.listQuery,"importance",t)},expression:"listQuery.importance"}},e._l(e.importanceOptions,function(e){return i("el-option",{key:e,attrs:{label:e,value:e}})})),e._v(" "),i("el-select",{staticClass:"filter-item",staticStyle:{width:"140px"},on:{change:e.handleFilter},model:{value:e.listQuery.sort,callback:function(t){e.$set(e.listQuery,"sort",t)},expression:"listQuery.sort"}},e._l(e.sortOptions,function(e){return i("el-option",{key:e.key,attrs:{label:e.label,value:e.key}})})),e._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(e._s(e.$t("table.search")))]),e._v(" "),i("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v(e._s(e.$t("table.add")))]),e._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",loading:e.downloadLoading,icon:"el-icon-download"},on:{click:e.handleDownload}},[e._v(e._s(e.$t("table.export")))]),e._v(" "),i("el-checkbox",{staticClass:"filter-item",staticStyle:{"margin-left":"15px"},on:{change:function(t){e.tableKey=e.tableKey+1}},model:{value:e.showReviewer,callback:function(t){e.showReviewer=t},expression:"showReviewer"}},[e._v(e._s(e.$t("table.reviewer")))])],1),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:e.$t("table.id"),width:"65"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.id))])]}}])}),e._v(" "),i("el-table-column",{attrs:{width:"170px",align:"center",label:e.$t("table.date")},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.created_at))])]}}])}),e._v(" "),i("el-table-column",{attrs:{"min-width":"150px",align:"center",label:"住址"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"link-type",on:{click:function(i){e.handleUpdate(t.row)}}},[e._v(e._s(t.row.address.building_id)+"幢"+e._s(t.row.address.unit_id)+"单元"+e._s(t.row.address.room_id))]),e._v(" "),i("el-tag",[e._v("金桥文苑")])]}}])}),e._v(" "),i("el-table-column",{attrs:{width:"150px",align:"center",label:"手机号"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.phone))])]}}])}),e._v(" "),i("el-table-column",{attrs:{width:"110px",align:"center",label:"业主"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),e.showReviewer?i("el-table-column",{attrs:{width:"110px",align:"center",label:e.$t("table.reviewer")},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticStyle:{color:"red"}},[e._v(e._s(t.row.reviewer))])]}}])}):e._e(),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"绑定访客数",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"link-type"},[e._v(e._s(t.row.visiter_num))])]}}])}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:e.$t("table.actions"),width:"230","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){e.handleUpdate(t.row)}}},[e._v(e._s(e.$t("table.edit")))]),e._v(" "),"published"!=t.row.status?i("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(i){e.handleModifyStatus(t.row,"published")}}},[e._v("访客记录\n        ")]):e._e(),e._v(" "),"deleted"!=t.row.status?i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){e.handleModifyStatus(t.row,"deleted")}}},[e._v(e._s(e.$t("table.delete"))+"\n        ")]):e._e()]}}])})],1),e._v(" "),i("div",{staticClass:"pagination-container"},[i("el-pagination",{attrs:{background:"","current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),i("el-dialog",{attrs:{title:"添加业主",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-steps",{attrs:{active:e.active,"align-center":""}},[i("el-step",{attrs:{title:"步骤 1",description:"填写基本信息",icon:"el-icon-edit"}}),e._v(" "),i("el-step",{attrs:{title:"步骤 2",description:"填写地址信息",icon:"el-icon-picture"}}),e._v(" "),i("el-step",{attrs:{title:"步骤 3",description:"上传人脸",icon:"el-icon-upload"}})],1),e._v(" "),i("el-form",{directives:[{name:"show",rawName:"v-show",value:1==e.active,expression:"active==1"}],ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"80px"}},[i("el-form-item",{attrs:{label:"姓名",prop:"title"}},[i("el-input",{model:{value:e.temp.name,callback:function(t){e.$set(e.temp,"name",t)},expression:"temp.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"手机号",prop:"title"}},[i("el-input",{model:{value:e.temp.phone,callback:function(t){e.$set(e.temp,"phone",t)},expression:"temp.phone"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"邮箱",prop:"title"}},[i("el-input",{model:{value:e.temp.email,callback:function(t){e.$set(e.temp,"email",t)},expression:"temp.email"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"预设密码",prop:"title"}},[i("el-input",{attrs:{type:"password"},model:{value:e.temp.password,callback:function(t){e.$set(e.temp,"password",t)},expression:"temp.password"}})],1)],1),e._v(" "),i("el-form",{directives:[{name:"show",rawName:"v-show",value:2==e.active,expression:"active==2"}],ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"80px"}},[i("el-form-item",{attrs:{label:"楼幢",prop:"type"}},[i("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:e.temp2.building_id,callback:function(t){e.$set(e.temp2,"building_id",t)},expression:"temp2.building_id"}},e._l(e.buildings,function(e){return i("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})}))],1),e._v(" "),i("el-form-item",{attrs:{label:"单元",prop:"type"}},[i("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:e.temp2.unit_id,callback:function(t){e.$set(e.temp2,"unit_id",t)},expression:"temp2.unit_id"}},e._l(e.units,function(e){return i("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})}))],1),e._v(" "),i("el-form-item",{attrs:{label:"房号",prop:"type"}},[i("el-input",{model:{value:e.temp2.room_id,callback:function(t){e.$set(e.temp2,"room_id",t)},expression:"temp2.room_id"}})],1)],1),e._v(" "),i("el-form",{directives:[{name:"show",rawName:"v-show",value:3==e.active,expression:"active==3"}],ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"80px"}},[i("el-form-item",{attrs:{prop:"type"}},[i("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,"show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?i("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):i("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),3==e.active?i("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")]):i("el-button",{attrs:{type:"primary"},on:{click:e.next}},[e._v("下一步")])],1)],1),e._v(" "),i("el-dialog",{attrs:{title:"Reading statistics",visible:e.dialogPvVisible},on:{"update:visible":function(t){e.dialogPvVisible=t}}},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pvData,border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{prop:"key",label:"Channel"}}),e._v(" "),i("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogPvVisible=!1}}},[e._v(e._s(e.$t("table.confirm")))])],1)],1)],1)},staticRenderFns:[]};var h=i("VU/8")(v,f,!1,function(e){i("Juet")},"data-v-9cbf4306",null);t.default=h.exports},swAt:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"\n.avatar-uploader .el-upload[data-v-9cbf4306] {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload[data-v-9cbf4306]:hover {\n  border-color: #409EFF;\n}\n.avatar-uploader-icon[data-v-9cbf4306] {\n  font-size: 28px;\n  color: #8c939d;\n  width: 178px;\n  height: 178px;\n  line-height: 178px;\n  text-align: center;\n}\n.avatar[data-v-9cbf4306] {\n  width: 178px;\n  height: 178px;\n  display: block;\n}\n",""])}});