(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19d2a6f0"],{"41ca":function(t,l,r){},"6b6d":function(t,l,r){"use strict";r("41ca")},"87d6":function(t,l,r){"use strict";var d=function(){var t=this,l=t._self._c;return l("div",{staticClass:"model",style:{width:t.width,padding:t.padding}},[l("div",{staticClass:"head"},[l("div",[l("h1",[t._v(t._s(t.title))])]),l("div",[l("h3",[t._v(t._s(t.tag))])])]),l("div",{staticClass:"content"},[t._t("default")],2)])},i=[],n={name:"Model",props:{title:{type:String,default:"title"},tag:{type:String,default:""},width:{type:String,default:"820px"},padding:{type:String,default:"15px"}}},e=n,o=(r("6b6d"),r("2877")),h=Object(o["a"])(e,d,i,!1,null,"20806f05",null);l["a"]=h.exports},b8df:function(t,l,r){"use strict";r.r(l);var d=function(){var t=this,l=t._self._c;return l("model",{attrs:{title:"RouterLink",tag:"路由跳转"}},[l("h3",[t._v("基础用法")]),l("div",[l("lh-router-link",{attrs:{padding:"10px",to:"/button"}},[t._v("跳转到 Button 界面")]),l("lh-router-link",{attrs:{padding:"10px",to:"/routerLink"}},[t._v("当前路由")])],1),l("div",[l("lh-router-link",{attrs:{margin:"10px",padding:"5px",activeBorder:"left",to:"/routerLink"}},[t._v("当前路由(左边框)")]),l("lh-router-link",{attrs:{margin:"10px",padding:"5px",activeBorder:"right",to:"/routerLink"}},[t._v("当前路由(右边框)")])],1),l("div",[l("lh-router-link",{attrs:{margin:"10px",padding:"10px",activeBorder:"top",to:"/routerLink"}},[t._v("当前路由(上边框)")]),l("lh-router-link",{attrs:{margin:"10px",padding:"10px",activeBorder:"bottom",to:"/routerLink"}},[t._v("当前路由(下边框)")])],1),l("lh-collapse",[l("div",{attrs:{slot:"title"},slot:"title"},[t._v("示例代码")]),l("lh-code-editor",{attrs:{maxWidth:"750px",readonly:!0},model:{value:t.code1,callback:function(l){t.code1=l},expression:"code1"}})],1),l("p",[t._v("此组件除可用于跳转路由以外，亦可用于跳转网页，且可自定义激活状态。")]),l("lh-router-link",{attrs:{to:"https://www.baidu.com",targer:"_blank",margin:"10px"}},[t._v("跳转到百度")]),l("lh-router-link",{attrs:{active:!0,margin:"10px"}},[t._v("自定义激活")]),l("div",[l("lh-collapse",[l("div",{attrs:{slot:"title"},slot:"title"},[t._v("示例代码")]),l("lh-code-editor",{attrs:{readonly:!0},model:{value:t.code2,callback:function(l){t.code2=l},expression:"code2"}})],1)],1),l("h3",[t._v("属性参考表")]),l("lh-table",[l("lh-tr",[l("lh-th",[t._v("参数")]),l("lh-th",[t._v("说明")]),l("lh-th",[t._v("类型")]),l("lh-th",[t._v("可选值")]),l("lh-th",[t._v("默认值")])],1),l("lh-tr",[l("lh-td",[t._v("to")]),l("lh-td",[t._v("路由或网址")]),l("lh-td",[t._v("String")]),l("lh-td",[t._v("-")]),l("lh-td")],1),l("lh-tr",[l("lh-td",[t._v("padding")]),l("lh-td",[t._v("组件内边距")]),l("lh-td",[t._v("String")]),l("lh-td",[t._v("-")]),l("lh-td",[t._v("0px")])],1),l("lh-tr",[l("lh-td",[t._v("margin")]),l("lh-td",[t._v("组件外边距")]),l("lh-td",[t._v("String")]),l("lh-td",[t._v("-")]),l("lh-td",[t._v("0px")])],1),l("lh-tr",[l("lh-td",[t._v("activeBorder")]),l("lh-td",[t._v("激活时的边框")]),l("lh-td",[t._v("String")]),l("lh-td",[t._v("none | left | right | top | bottom")]),l("lh-td",[t._v("none")])],1),l("lh-tr",[l("lh-td",[t._v("activeColor")]),l("lh-td",[t._v("激活颜色")]),l("lh-td",[t._v("String")]),l("lh-td",[t._v("-")]),l("lh-td",[t._v("#409EFF")])],1),l("lh-tr",[l("lh-td",[t._v("active")]),l("lh-td",[t._v("自定义激活状态")]),l("lh-td",[t._v("Boolean")]),l("lh-td",[t._v("true | false")]),l("lh-td",[t._v("false")])],1),l("lh-tr",[l("lh-td",[t._v("color")]),l("lh-td",[t._v("字体颜色")]),l("lh-td",[t._v("String")]),l("lh-td",[t._v("-")]),l("lh-td",[t._v("black")])],1),l("lh-tr",[l("lh-td",[t._v("fontSize")]),l("lh-td",[t._v("字体大小")]),l("lh-td",[t._v("String")]),l("lh-td",[t._v("-")]),l("lh-td",[t._v("15px")])],1),l("lh-tr",[l("lh-td",[t._v("fontWeight")]),l("lh-td",[t._v("字体粗细")]),l("lh-td",[t._v("String")]),l("lh-td",[t._v("-")]),l("lh-td",[t._v("480")])],1),l("lh-tr",[l("lh-td",[t._v("width")]),l("lh-td",[t._v("组件宽度")]),l("lh-td",[t._v("String")]),l("lh-td",[t._v("-")]),l("lh-td",[t._v("auto")])],1),l("lh-tr",[l("lh-td",[t._v("target")]),l("lh-td",[t._v("跳转目标")]),l("lh-td",[t._v("String")]),l("lh-td",[t._v("_blank | _self")]),l("lh-td",[t._v("_self")])],1)],1)],1)},i=[],n=r("87d6"),e={name:"RouterLinkView",components:{Model:n["a"]},data(){return{code1:'<template>\n<div>\n  <div>\n    <lh-router-link padding="10px" to="/button">跳转到 Button 界面</lh-router-link>\n    <lh-router-link padding="10px" to="/routerLink">当前路由</lh-router-link>\n  </div>\n  <div>\n    <lh-router-link margin="10px" padding="5px" activeBorder="left" to="/routerLink">当前路由(左边框)</lh-router-link>\n    <lh-router-link margin="10px" padding="5px" activeBorder="right" to="/routerLink">当前路由(右边框)</lh-router-link>\n  </div>\n  <div>\n    <lh-router-link margin="10px" padding="10px" activeBorder="top" to="/routerLink">当前路由(上边框)</lh-router-link>\n    <lh-router-link margin="10px" padding="10px" activeBorder="bottom" to="/routerLink">当前路由(下边框)</lh-router-link>\n  </div>\n</div>\n</template>',code2:'<template>\n<div>\n  <lh-router-link to="https://www.baidu.com" targer="_blank" margin="10px">跳转到百度</lh-router-link>\n  <lh-router-link :active="true" margin="10px">自定义激活</lh-router-link>\n</div>\n</template>'}}},o=e,h=r("2877"),a=Object(h["a"])(o,d,i,!1,null,null,null);l["default"]=a.exports}}]);
//# sourceMappingURL=chunk-19d2a6f0.82037480.js.map