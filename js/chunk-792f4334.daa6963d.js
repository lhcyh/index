(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-792f4334"],{"1fba":function(t,e,n){"use strict";n.r(e);var l=function(){var t=this,e=t._self._c;return e("model",{attrs:{title:"MessageBox",tag:"消息弹窗"}},[e("h3",[t._v("示例用法")]),e("lh-button",{on:{click:t.openMessageBox}},[t._v("打开消息弹窗")]),e("div",[e("lh-collapse",[e("div",{attrs:{slot:"title"},slot:"title"},[t._v("示例代码")]),e("lh-code-editor",{attrs:{readonly:!0},model:{value:t.code1,callback:function(e){t.code1=e},expression:"code1"}})],1)],1),e("h3",[t._v("函数方法参考表")]),e("lh-table",[e("lh-tr",[e("lh-th",[t._v("方法名")]),e("lh-th",[t._v("说明")]),e("lh-th",[t._v("参数")]),e("lh-th",[t._v("返回值")])],1),e("lh-tr",[e("lh-td",[t._v("lhMessageBox")]),e("lh-td",[t._v("弹出消息框")]),e("lh-td",[t._v("第一个参数是弹框标题，第二个参数是弹框文本内容。")]),e("lh-td",[t._v("Promise回调")])],1)],1)],1)},o=[],s=n("87d6"),a={name:"MessageBoxView",components:{Model:s["a"]},data(){return{code1:'<template>\n  <lh-button @click="openMessageBox">打开消息弹窗</lh-button>\n</template>\n\n<script>\nexport default {\n\tmethods:{\n\t\topenMessageBox:function(){\n\t\t\tthis.$lhMessageBox("弹窗标题","消息内容").then(()=>{\n\t\t\t\tconsole.log("确定");\n\t\t\t}).catch(()=>{\n\t\t\t\tconsole.log("关闭");\n\t\t\t});\n\t\t}\n\t}\n}\n<\/script>'}},methods:{openMessageBox:function(){this.$lhMessageBox("弹窗标题","消息内容").then(()=>{console.log("确定")}).catch(()=>{console.log("关闭")})}}},i=a,d=n("2877"),c=Object(d["a"])(i,l,o,!1,null,null,null);e["default"]=c.exports},"41ca":function(t,e,n){},"6b6d":function(t,e,n){"use strict";n("41ca")},"87d6":function(t,e,n){"use strict";var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"model",style:{width:t.width,padding:t.padding}},[e("div",{staticClass:"head"},[e("div",[e("h1",[t._v(t._s(t.title))])]),e("div",[e("h3",[t._v(t._s(t.tag))])])]),e("div",{staticClass:"content"},[t._t("default")],2)])},o=[],s={name:"Model",props:{title:{type:String,default:"title"},tag:{type:String,default:""},width:{type:String,default:"820px"},padding:{type:String,default:"15px"}}},a=s,i=(n("6b6d"),n("2877")),d=Object(i["a"])(a,l,o,!1,null,"20806f05",null);e["a"]=d.exports}}]);
//# sourceMappingURL=chunk-792f4334.daa6963d.js.map