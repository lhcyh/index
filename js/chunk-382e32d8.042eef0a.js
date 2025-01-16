(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-382e32d8"],{"2fee":function(t,e,l){},4070:function(t,e,l){"use strict";l("83f3")},7148:function(t,e,l){"use strict";l.r(e);var n=function(){var t=this,e=t._self._c;return e("model",{attrs:{width:"auto",title:"Pagination",tag:"分页"}},[e("h3",[t._v("基础用法")]),e("p",[t._v("通过 fontSize 属性控制分页组件大小。通过 activeColor 属性可以设置组件激活颜色。")]),e("div",[e("div",[e("lh-pagination",{attrs:{fontSize:"20px",activeColor:"blue"}})],1),e("div",[e("lh-pagination",{attrs:{fontSize:"25px",activeColor:"red"}})],1),e("div",[e("lh-pagination",{attrs:{fontSize:"30px",activeColor:"green"}})],1)]),e("div",{staticClass:"code"},[e("lh-collapse",[e("div",{attrs:{slot:"title"},slot:"title"},[t._v("示例代码")]),e("lh-code-editor",{model:{value:t.code1,callback:function(e){t.code1=e},expression:"code1"}})],1)],1),e("p",[t._v("value(v-model) 属性为当前页码，pageSize 属性为页的大小，total 属性为数据总数，change 事件在页码改变时触发。")]),e("div",[e("lh-pagination",{attrs:{pageSize:5,total:50},on:{change:t.change},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),e("lh-collapse",[e("div",{attrs:{slot:"title"},slot:"title"},[t._v("示例代码")]),e("lh-code-editor",{model:{value:t.code2,callback:function(e){t.code2=e},expression:"code2"}})],1),e("h3",[t._v("属性事件参考表")]),e("h4",[t._v("属性参考表：")]),e("lh-table",[e("lh-tr",[e("lh-th",[t._v("参数")]),e("lh-th",[t._v("说明")]),e("lh-th",[t._v("类型")]),e("lh-th",[t._v("可选值")]),e("lh-th",[t._v("默认值")])],1),e("lh-tr",[e("lh-td",[t._v("value(v-model)")]),e("lh-td",[t._v("当前页码")]),e("lh-td",[t._v("Number")]),e("lh-td",[t._v("-")]),e("lh-td",[t._v("1")])],1),e("lh-tr",[e("lh-td",[t._v("pageSize")]),e("lh-td",[t._v("页的大小")]),e("lh-td",[t._v("Number")]),e("lh-td",[t._v("-")]),e("lh-td",[t._v("5")])],1),e("lh-tr",[e("lh-td",[t._v("total")]),e("lh-td",[t._v("总数")]),e("lh-td",[t._v("Number")]),e("lh-td",[t._v("-")]),e("lh-td",[t._v("50")])],1),e("lh-tr",[e("lh-td",[t._v("pagerCount")]),e("lh-td",[t._v("页码按钮数")]),e("lh-td",[t._v("Number")]),e("lh-td",[t._v("-")]),e("lh-td",[t._v("5")])],1),e("lh-tr",[e("lh-td",[t._v("fontSize")]),e("lh-td",[t._v("组件字体大小")]),e("lh-td",[t._v("String")]),e("lh-td",[t._v("-")]),e("lh-td",[t._v("20px")])],1),e("lh-tr",[e("lh-td",[t._v("activeColor")]),e("lh-td",[t._v("组件激活颜色")]),e("lh-td",[t._v("String")]),e("lh-td",[t._v("-")]),e("lh-td",[t._v("#409EFF")])],1),e("lh-tr",[e("lh-td",[t._v("color")]),e("lh-td",[t._v("组件字体颜色")]),e("lh-td",[t._v("String")]),e("lh-td",[t._v("-")]),e("lh-td",[t._v("black")])],1)],1),e("h4",[t._v("事件参考表：")]),e("lh-table",[e("lh-tr",[e("lh-th",[t._v("事件名称")]),e("lh-th",[t._v("说明")]),e("lh-th",[t._v("回调参数")])],1),e("lh-tr",[e("lh-td",[t._v("change")]),e("lh-td",[t._v("页码发生变化触发事件")]),e("lh-td",[t._v("更新后的值")])],1)],1)],1)},a=[],d=l("87d6"),i={components:{Model:d["a"]},name:"PaginationView",data(){return{code1:'<div><lh-pagination fontSize="20px" activeColor="blue"/></div>\n<div><lh-pagination fontSize="25px" activeColor="red"/></div>\n<div><lh-pagination fontSize="30px" activeColor="green"/></div>',code2:'<template>\n<div>\n  <lh-pagination v-model="currentPage" @change="change" :pageSize="5" :total="50"/>\n</div>\n</template>\n\nexport default {\n  data(){\n    return {\n      currentPage:1\n    }\n  },\n  methods:{\n    change:function(pageNum){\n      console.log("change:",pageNum);\n    }\n  }\n}',currentPage:1}},methods:{change:function(t){console.log("change:",t)}}},o=i,h=(l("bd49"),l("2877")),v=Object(h["a"])(o,n,a,!1,null,"aa12399c",null);e["default"]=v.exports},"83f3":function(t,e,l){},"87d6":function(t,e,l){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"model",style:{width:t.width,padding:t.padding}},[e("div",{staticClass:"head"},[e("div",[e("h1",[t._v(t._s(t.title))])]),e("div",[e("h3",[t._v(t._s(t.tag))])])]),e("div",{staticClass:"modelContent"},[t._t("default")],2)])},a=[],d={name:"Model",props:{title:{type:String,default:"title"},tag:{type:String,default:""},width:{type:String,default:"820px"},padding:{type:String,default:"15px"}}},i=d,o=(l("4070"),l("2877")),h=Object(o["a"])(i,n,a,!1,null,"ab8a1042",null);e["a"]=h.exports},bd49:function(t,e,l){"use strict";l("2fee")}}]);
//# sourceMappingURL=chunk-382e32d8.042eef0a.js.map