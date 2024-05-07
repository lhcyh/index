(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44e339fc"],{"41ca":function(t,l,i){},"6b6d":function(t,l,i){"use strict";i("41ca")},"87d6":function(t,l,i){"use strict";var e=function(){var t=this,l=t._self._c;return l("div",{staticClass:"model",style:{width:t.width,padding:t.padding}},[l("div",{staticClass:"head"},[l("div",[l("h1",[t._v(t._s(t.title))])]),l("div",[l("h3",[t._v(t._s(t.tag))])])]),l("div",{staticClass:"content"},[t._t("default")],2)])},n=[],o={name:"Model",props:{title:{type:String,default:"title"},tag:{type:String,default:""},width:{type:String,default:"820px"},padding:{type:String,default:"15px"}}},d=o,a=(i("6b6d"),i("2877")),s=Object(a["a"])(d,e,n,!1,null,"20806f05",null);l["a"]=s.exports},cf58:function(t,l,i){"use strict";i.r(l);var e=function(){var t=this,l=t._self._c;return l("model",{attrs:{title:"Dialog",tag:"对话框"}},[l("h3",[t._v("基础用法")]),l("lh-button",{on:{click:function(l){t.visible=!0}}},[t._v("点击打开对话框")]),l("lh-dialog",{attrs:{visible:t.visible},on:{"update:visible":function(l){t.visible=l}}},[l("div",{attrs:{slot:"title"},slot:"title"},[t._v("标题")]),t._v(" 这是对话框内容，默认插槽......"),l("br"),t._v(" 这是对话框内容，默认插槽......"),l("br"),t._v(" 这是对话框内容，默认插槽......"),l("br"),l("div",{attrs:{slot:"footer"},slot:"footer"},[l("lh-button",{attrs:{backgroundColor:"#409EFF20",color:"#409EFF",border:"1px"},on:{click:function(l){t.visible=!1}}},[t._v("取消")]),l("lh-button",[t._v("确认")])],1)]),l("div",[l("lh-collapse",[l("div",{attrs:{slot:"title"},slot:"title"},[t._v("示例代码")]),l("lh-code-editor",{attrs:{readonly:!0,maxWidth:"700px"},model:{value:t.code1,callback:function(l){t.code1=l},expression:"code1"}})],1)],1),l("h3",[t._v("属性参考表")]),l("lh-table",[l("lh-tr",[l("lh-th",[t._v("参数")]),l("lh-th",[t._v("说明")]),l("lh-th",[t._v("类型")]),l("lh-th",[t._v("可选值")]),l("lh-th",[t._v("默认值")])],1),l("lh-tr",[l("lh-td",[t._v("visible(.sync)")]),l("lh-td",[t._v("是否弹出对话框")]),l("lh-td",[t._v("String")]),l("lh-td",[t._v("-")]),l("lh-td",[t._v("false")])],1),l("lh-tr",[l("lh-td",[t._v("widht")]),l("lh-td",[t._v("对话框宽度")]),l("lh-td",[t._v("String")]),l("lh-td",[t._v("-")]),l("lh-td",[t._v("auto")])],1)],1)],1)},n=[],o=i("87d6"),d={components:{Model:o["a"]},name:"DialogView",data(){return{visible:!1,code1:'<template>\n<lh-dialog :visible.sync="visible">\n  <div slot="title">标题</div>\n  这是对话框内容，默认插槽......<br/>\n  这是对话框内容，默认插槽......<br/>\n  这是对话框内容，默认插槽......<br/>\n  <div slot="footer">\n    <lh-button @click="visible=false" backgroundColor="#409EFF20" color="#409EFF" border="1px">取消</lh-button>\n    <lh-button>确认</lh-button>\n  </div>\n</lh-dialog>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      visible:false\n    }\n  }\n}\n<\/script>'}}},a=d,s=i("2877"),r=Object(s["a"])(a,e,n,!1,null,null,null);l["default"]=r.exports}}]);
//# sourceMappingURL=chunk-44e339fc.bb76c6c7.js.map