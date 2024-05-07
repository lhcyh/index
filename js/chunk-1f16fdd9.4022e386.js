(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f16fdd9"],{"41ca":function(t,l,e){},"6b6d":function(t,l,e){"use strict";e("41ca")},"86d5":function(t,l,e){"use strict";e.r(l);var n=function(){var t=this,l=t._self._c;return l("model",{attrs:{title:"Tip",tag:"提示框"}},[l("h3",[t._v("基础用法")]),l("p",[t._v("通过 placement 属性设置提示框的显示位置。")]),l("table",{staticStyle:{"margin-left":"50px"}},[l("tr",[l("td"),l("td",[l("lh-tip",{attrs:{placement:"top-left",text:"上左"}},[l("lh-button",[t._v("上左")])],1)],1),l("td",[l("lh-tip",{attrs:{placement:"top-center",text:"上中"}},[l("lh-button",[t._v("上中")])],1)],1),l("td",[l("lh-tip",{attrs:{placement:"top-right",text:"上右"}},[l("lh-button",[t._v("上右")])],1)],1),l("td")]),l("tr",[l("td",[l("lh-tip",{attrs:{placement:"left-top",text:"左上"}},[l("lh-button",[t._v("左上")])],1)],1),l("td"),l("td"),l("td"),l("td",[l("lh-tip",{attrs:{placement:"right-top",text:"右上"}},[l("lh-button",[t._v("右上")])],1)],1)]),l("tr",[l("td",[l("lh-tip",{attrs:{placement:"left-center",text:"左中"}},[l("lh-button",[t._v("左中")])],1)],1),l("td"),l("td"),l("td"),l("td",[l("lh-tip",{attrs:{placement:"right-center",text:"右中"}},[l("lh-button",[t._v("右中")])],1)],1)]),l("tr",[l("td",[l("lh-tip",{attrs:{placement:"left-bottom",text:"左下"}},[l("lh-button",[t._v("左下")])],1)],1),l("td"),l("td"),l("td"),l("td",[l("lh-tip",{attrs:{placement:"right-bottom",text:"右下"}},[l("lh-button",[t._v("右下")])],1)],1)]),l("tr",[l("td"),l("td",[l("lh-tip",{attrs:{placement:"bottom-left",text:"下左"}},[l("lh-button",[t._v("下上")])],1)],1),l("td",[l("lh-tip",{attrs:{placement:"bottom-center",text:"下中"}},[l("lh-button",[t._v("下中")])],1)],1),l("td",[l("lh-tip",{attrs:{placement:"bottom-right",text:"下右"}},[l("lh-button",[t._v("下右")])],1)],1),l("td")])]),l("lh-collapse",[l("div",{attrs:{slot:"title"},slot:"title"},[t._v("示例代码")]),l("lh-code-editor",{attrs:{readonly:!0},model:{value:t.code1,callback:function(l){t.code1=l},expression:"code1"}})],1),l("p",[t._v("通过 trigger 属性和 visible 属性设置提示框的显示方式。")]),l("div",[l("lh-tip",{attrs:{text:"hover",trigger:"hover"}},[l("lh-button",[t._v("hover")])],1),l("lh-tip",{attrs:{text:"click",trigger:"click"}},[l("lh-button",[t._v("click")])],1),l("lh-tip",{attrs:{text:"自定义显示",visible:t.visible}},[l("lh-button",{on:{click:function(l){t.visible=!t.visible}}},[t._v("自定义显示")])],1)],1),l("lh-collapse",[l("div",{attrs:{slot:"title"},slot:"title"},[t._v("示例代码")]),l("lh-code-editor",{attrs:{readonly:!0},model:{value:t.code2,callback:function(l){t.code2=l},expression:"code2"}})],1),l("h3",[t._v("自定义模版")]),l("lh-tip",[l("lh-button",[t._v("自定义模版")]),l("div",{attrs:{slot:"tip"},slot:"tip"},[t._v(" 自定义模版内容..."),l("br"),t._v(" 自定义模版内容..."),l("br"),t._v(" 自定义模版内容..."),l("br"),t._v(" 自定义模版内容..."),l("br")])],1),l("div",[l("lh-collapse",[l("div",{attrs:{slot:"title"},slot:"title"},[t._v("示例代码")]),l("lh-code-editor",{attrs:{readonly:!0},model:{value:t.code3,callback:function(l){t.code3=l},expression:"code3"}})],1)],1),l("h3",[t._v("属性参考表")]),l("lh-table",[l("lh-tr",[l("lh-th",[t._v("参数")]),l("lh-th",[t._v("说明")]),l("lh-th",[t._v("类型")]),l("lh-th",[t._v("可选值")]),l("lh-th",[t._v("默认值")])],1),l("lh-tr",[l("lh-td",[t._v("visible")]),l("lh-td",[t._v("控制提示框的显示")]),l("lh-td",[t._v("Boolean")]),l("lh-td",[t._v("true | false | null")]),l("lh-td",[t._v("null")])],1),l("lh-tr",[l("lh-td",[t._v("maxWidth")]),l("lh-td",[t._v("提示框最大宽度")]),l("lh-td",[t._v("String")]),l("lh-td",[t._v("-")]),l("lh-td",[t._v("500px")])],1),l("lh-tr",[l("lh-td",[t._v("placement")]),l("lh-td",[t._v("显示位置")]),l("lh-td",[t._v("String")]),l("lh-td",[t._v(" top-left | top-center | to-right |"),l("br"),t._v(" bottom-left | bottom-center | bottom-right |"),l("br"),t._v(" left-top | left-center | left-bottom |"),l("br"),t._v(" right-top | right-center | right-bottom ")]),l("lh-td",[t._v("top-center")])],1),l("lh-tr",[l("lh-td",[t._v("color")]),l("lh-td",[t._v("字体颜色")]),l("lh-td",[t._v("String")]),l("lh-td",[t._v("-")]),l("lh-td",[t._v("black")])],1),l("lh-tr",[l("lh-td",[t._v("backgroundColor")]),l("lh-td",[t._v("提示框背景颜色")]),l("lh-td",[t._v("String")]),l("lh-td",[t._v("-")]),l("lh-td",[t._v("white")])],1),l("lh-tr",[l("lh-td",[t._v("text")]),l("lh-td",[t._v("提示框里的文字")]),l("lh-td",[t._v("String")]),l("lh-td",[t._v("-")]),l("lh-td")],1),l("lh-tr",[l("lh-td",[t._v("trigger")]),l("lh-td",[t._v("触发机制")]),l("lh-td",[t._v("String")]),l("lh-td",[t._v("hover | click")]),l("lh-td",[t._v("hover")])],1),l("lh-tr",[l("lh-td",[t._v("margin")]),l("lh-td",[t._v("外边距")]),l("lh-td",[t._v("String")]),l("lh-td",[t._v("-")]),l("lh-td",[t._v("0px")])],1),l("lh-tr",[l("lh-td",[t._v("borderRadius")]),l("lh-td",[t._v("提示框圆角")]),l("lh-td",[t._v("String")]),l("lh-td",[t._v("-")]),l("lh-td",[t._v("5px")])],1)],1)],1)},h=[],i=e("87d6"),o={name:"TipView",components:{Model:i["a"]},data(){return{visible:!1,code1:'<template>\n  ...\n  <lh-tip placement="top-left" text="上左">\n    <lh-button>上左</lh-button>\n  </lh-tip>\n  <lh-tip placement="top-center" text="上中">\n    <lh-button>上中</lh-button>\n  </lh-tip>\n  <lh-tip placement="top-right" text="上右">\n    <lh-button>上右</lh-button>\n  </lh-tip>\n  ...\n  <lh-tip placement="left-top" text="左上">\n    <lh-button>左上</lh-button>\n  </lh-tip>\n  <lh-tip placement="left-center" text="左中">\n    <lh-button>左中</lh-button>\n  </lh-tip>\n  <lh-tip placement="left-bottom" text="左下">\n    <lh-button>左下</lh-button>\n  </lh-tip>\n  ...\n  <lh-tip placement="right-top" text="右上">\n    <lh-button>右上</lh-button>\n  </lh-tip>\n  <lh-tip placement="right-center" text="右中">\n    <lh-button>右中</lh-button>\n  </lh-tip>\n  <lh-tip placement="right-bottom" text="右下">\n    <lh-button>右下</lh-button>\n  </lh-tip>\n  ...\n  <lh-tip placement="bottom-left" text="下左">\n    <lh-button>下上</lh-button>\n  </lh-tip>\n  <lh-tip placement="bottom-center" text="下中">\n    <lh-button>下中</lh-button>\n  </lh-tip>\n  <lh-tip placement="bottom-right" text="下右">\n    <lh-button>下右</lh-button>\n  </lh-tip>\n  ...\n</template>',code2:'<template>\n<div>\n  <lh-tip text="hover" trigger="hover">\n    <lh-button>hover</lh-button>\n  </lh-tip>\n  <lh-tip text="click" trigger="click">\n    <lh-button>click</lh-button>\n  </lh-tip>\n  <lh-tip text="自定义显示" :visible="visible">\n    <lh-button @click="visible=!visible">自定义显示</lh-button>\n  </lh-tip>\n</div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return{\n      visible:false\n    }\n  }\n}\n<\/script>',code3:'<template>\n<lh-tip>\n  <lh-button>自定义模版</lh-button>\n  <div slot="tip">\n    自定义模版内容...<br/>\n    自定义模版内容...<br/>\n    自定义模版内容...<br/>\n    自定义模版内容...<br/>\n  </div>\n</lh-tip>\n</template>'}}},r=o,d=e("2877"),p=Object(d["a"])(r,n,h,!1,null,null,null);l["default"]=p.exports},"87d6":function(t,l,e){"use strict";var n=function(){var t=this,l=t._self._c;return l("div",{staticClass:"model",style:{width:t.width,padding:t.padding}},[l("div",{staticClass:"head"},[l("div",[l("h1",[t._v(t._s(t.title))])]),l("div",[l("h3",[t._v(t._s(t.tag))])])]),l("div",{staticClass:"content"},[t._t("default")],2)])},h=[],i={name:"Model",props:{title:{type:String,default:"title"},tag:{type:String,default:""},width:{type:String,default:"820px"},padding:{type:String,default:"15px"}}},o=i,r=(e("6b6d"),e("2877")),d=Object(r["a"])(o,n,h,!1,null,"20806f05",null);l["a"]=d.exports}}]);
//# sourceMappingURL=chunk-1f16fdd9.4022e386.js.map