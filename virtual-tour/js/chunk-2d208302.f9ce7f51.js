(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d208302"],{a470:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"f-cover flex-c text-center bg-black-85",class:[t.phone?"pl-12":"pl-56"]},[a("div",{staticClass:"max-w-3xl px-12"},[a("h1",{staticClass:"text-white font-medium text-xl md:text-3xl mb-16"},[t._v(" "+t._s(t.copy)+" ")]),a("Button",{staticClass:"btn btn-secondary py-3 px-8 w-40 font-bold flex justify-between mx-auto",attrs:{path:t.path,text:"Let's go",icon:"ArrowIcon"}})],1)])},n=[],s=a("5530"),i=a("2f62"),c=a("63b6"),l={name:"InstructionOverlay",components:{Button:c["a"]},props:{isCampusIntro:{type:Boolean,default:!1},isGuidedIntro:{type:Boolean,default:!1}},computed:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(i["c"])(["touch","mobile","phone"])),Object(i["b"])(["guidedtour"])),{},{path(){var t;const e=(null===(t=this.guidedtour)||void 0===t?void 0:t.children[0].slug)||"";return this.isGuidedIntro?{name:"guided-panorama",params:{panorama_id:e}}:{name:"campus-category",params:{category_id:"explore-all"}}},copy(){return this.isGuidedIntro?"Let us show you the highlights":"Use the sidebar to filter content and explore facilities by clicking on the map pins"}})},r=l,u=a("2877"),p=Object(u["a"])(r,o,n,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d208302.f9ce7f51.js.map