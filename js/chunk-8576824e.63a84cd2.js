(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8576824e"],{"7ae9":function(e,t,i){},"8c95":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return s}));const n=function(e){let t={value:null,unit:null};return t.value=parseFloat(e),t.unit=e.replace(t.value,"").replace(/\\./,""),t},o=function(e){return e<10?"0"+e:e},s=function(e){let t=e.getFullYear(),i=o(e.getMonth()+1),n=o(e.getDate()),s=o(e.getHours()),l=o(e.getMinutes()),r=o(e.getSeconds());return`${t}-${i}-${n} ${s}:${l}:${r}`}},f089:function(e,t,i){"use strict";i("7ae9")},fc60:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"favorites"},[e.maxVersion?t("div",{staticClass:"content"},[t("h2",[e._v("版本管理")]),t("lh-button",{attrs:{icon:"lh-icon-delete",backgroundColor:"red"},on:{click:e.clearFile}},[e._v("清除服务器失效文件")]),t("lh-dialog",{attrs:{visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[t("div",{attrs:{slot:"title"},slot:"title"},[e._v("添加版本")]),t("table",[t("tr",[t("td",[e._v("上传安装包")]),t("td",[t("lh-button",{attrs:{accept:".apk"},on:{change:e.selectFile}},[e._v(" 选择apk文件 ")]),e.apkFile?t("div",{staticStyle:{"font-size":"10px",color:"red"}},[e._v(" "+e._s(e.apkFile.name)+" ")]):e._e()],1)]),t("tr",[t("td",[e._v(" 设置版本号 "),e.maxVersion?t("div",{staticStyle:{"font-size":"10px",color:"red"}},[e._v(" *当前最大版本："+e._s(e.maxVersion.versionString)+" ")]):e._e()]),t("td",[t("lh-select",{model:{value:e.version.versionString,callback:function(t){e.$set(e.version,"versionString",t)},expression:"version.versionString"}},e._l(e.vList,(function(i,n){return t("lh-option",{key:n,attrs:{value:i}},[e._v(" "+e._s(i)+" ")])})),1)],1)]),t("tr",[t("td",[e._v("是否强制更新")]),t("td",[t("lh-radio",{attrs:{radioValue:!0},model:{value:e.version.force,callback:function(t){e.$set(e.version,"force",t)},expression:"version.force"}},[e._v("是")]),t("lh-radio",{attrs:{radioValue:!1},model:{value:e.version.force,callback:function(t){e.$set(e.version,"force",t)},expression:"version.force"}},[e._v("否")])],1)])]),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("lh-button",{attrs:{loading:e.loading},on:{click:e.confirm}},[e._v("确认")])],1)]),t("lh-dialog",{attrs:{visible:e.eVisible},on:{"update:visible":function(t){e.eVisible=t}}},[t("div",[t("span",[e._v("是否强制更新：")]),t("lh-radio",{attrs:{radioValue:!0},model:{value:e.eVersion.force,callback:function(t){e.$set(e.eVersion,"force",t)},expression:"eVersion.force"}},[e._v("是")]),t("lh-radio",{attrs:{radioValue:!1},model:{value:e.eVersion.force,callback:function(t){e.$set(e.eVersion,"force",t)},expression:"eVersion.force"}},[e._v("否")])],1),t("lh-checkbox",{model:{value:e.eVersion.update,callback:function(t){e.$set(e.eVersion,"update",t)},expression:"eVersion.update"}},[e._v("设置为最新版本")]),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("lh-button",{attrs:{loading:e.loading},on:{click:e.save}},[e._v("保存")])],1)],1),e.maxVersion?t("lh-button",{on:{click:function(t){e.visible=!0}}},[e._v("添加新版本")]):e._e(),t("lh-table",[t("lh-tr",[t("lh-th",[e._v("序号")]),t("lh-th",[e._v("版本号")]),t("lh-th",[e._v("更新时间")]),t("lh-th",[e._v("是否强制更新")]),t("lh-th",[e._v("操作")])],1),e._l(e.versionList,(function(i,n){return t("lh-tr",{key:i.id},[t("lh-td",[e._v(e._s(n+1))]),t("lh-td",[e._v(e._s(i.versionString))]),t("lh-td",[e._v(" "+e._s(i.updateTime)+" "),0==n?t("div",{staticStyle:{color:"red","font-size":"10px"}},[e._v("*最新版本")]):e._e()]),t("lh-td",[e._v(" "+e._s(i.force?"是":"否")+" ")]),t("lh-td",[t("lh-button",{on:{click:function(t){return e.edit(n)}}},[e._v("编辑")]),t("lh-button",{attrs:{icon:"lh-icon-delete",backgroundColor:"red"},on:{click:function(t){return e.deleteVersion(n)}}},[e._v(" 删除 ")])],1)],1)}))],2)],1):e._e()])},o=[],s=(i("14d9"),i("b775"));const l={DEFAULT:"DEFAULT",APK:"APK"},r=function(e,t,i){let n=new Promise((n,o)=>{a(e,t,i).then(e=>{n(e)}).catch(e=>{o(e)})});return n},a=function(e,t,i){let n=e.name.splite(".").pop(),o=new Promise((o,l)=>{s["a"].get("/file/getFileUploadUrl",{params:{suffix:n,saveUrl:t}}).then(t=>{console.log("uploadData",t);let n=new FormData;n.append("key",t.key),n.append("Signature",t.authorization),n.append("x-cos-security-token",t.token),n.append("x-cos-meta-fileid",t.cos_file_id),n.append("file",e),s["a"].post(t.url,n).then(e=>{e.remarks=i,s["a"].post("/file/addFile",e).then(e=>{o(e)}).catch(e=>{l(e)})}).catch(e=>{l(e)})}).catch(e=>{l(e)})});return o};var c=i("8c95"),u={name:"Favorites",data(){return{visible:!1,maxVersion:null,versionList:null,vList:null,loading:!1,version:{versionString:"1.0.0",fileId:null,force:!1},eVisible:!1,eVersion:{id:null,force:!1,update:!1,updateTime:null},apkFile:null}},mounted(){this.getMaxVersion(),this.getVersionList()},methods:{getMaxVersion:function(){let e=this;s["a"].get("/version/getMaxVersion").then(t=>{e.maxVersion=t;let i=[];i.push(t.partMap.p1+1+"."+t.partMap.p2+"."+t.partMap.p3),i.push(t.partMap.p1+"."+(t.partMap.p2+1)+"."+t.partMap.p3),i.push(t.partMap.p1+"."+t.partMap.p2+"."+(t.partMap.p3+1)),e.vList=i,e.version.versionString=i[0]})},selectFile:function(e){console.log("e",e),this.apkFile=e.target.files[0]},confirm:function(){if(null==this.apkFile)return void this.$lhMessage("warn","请上传安装包");let e=this;this.loading=!0,r(this.apkFile,l.APK,"apk").then(t=>{e.version.fileId=t.id,s["a"].post("/version/addVersion",e.version).then(t=>{e.maxVersion=t,e.visible=!1,e.$lhMessage("success","上传成功"),e.getVersionList()}).finally(()=>{e.loading=!1})})},clearFile:function(){this.$lhLoading.open();let e=this;s["a"].post("/file/deleteLostFile").then(()=>{e.$lhMessage("success","清除成功")}).finally(()=>{e.$lhLoading.close()})},getVersionList:function(){this.$lhLoading.open();let e=this;s["a"].get("/version/getVersionList").then(t=>{e.versionList=t}).finally(()=>{e.$lhLoading.close()})},updateVersion:function(e){this.$lhLoading.open();let t=this;s["a"].post("/version/updateVersionById",{id:e}).then(()=>{t.getVersionList()}).finally(()=>{t.$lhLoading.close()})},deleteVersion:function(e){let t=this;this.$lhMessageBox("删除版本","确认删除版本"+this.versionList[e].versionString+"？").then(()=>{t.$lhLoading.open(),s["a"].post("/version/deleteVersionById",{id:t.versionList[e].id},{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(()=>{t.versionList.splice(e,1),t.$lhMessage("success","删除成功")}).finally(()=>{t.$lhLoading.close()})})},edit:function(e){this.eVersion.id=this.versionList[e].id,this.eVersion.force=this.versionList[e].force,this.eVisible=!0},save:function(){this.loading=!0;let e=this;this.eVersion.update?this.eVersion.updateTime=Object(c["a"])(new Date):this.eVersion.updateTime=null,s["a"].post("/version/updateVersion",this.eVersion).then(()=>{e.getVersionList(),e.eVisible=!1,e.$lhMessage("success","保存成功")}).finally(()=>{e.loading=!1})}}},d=u,h=(i("f089"),i("2877")),v=Object(h["a"])(d,n,o,!1,null,"2550e088",null);t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-8576824e.63a84cd2.js.map