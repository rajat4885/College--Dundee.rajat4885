(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home~viewer"],{"5df7":function(t,e,n){(function(e,n){t.exports=n()})(0,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(t){for(var e=Array(t.length),n=0;n<t.length;++n)e[n]=t[n];return e},o=function(t,e){return t.filter((function(t){return t===e}))[0]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"FOCUS_GROUP",(function(){return r})),n.d(e,"FOCUS_DISABLED",(function(){return o})),n.d(e,"FOCUS_ALLOW",(function(){return i})),n.d(e,"FOCUS_AUTO",(function(){return u}));var r="data-focus-lock",o="data-focus-lock-disabled",i="data-no-focus-lock",u="data-autofocus-inside"},function(t,e,n){"use strict";var r=n(1),o=n(0),i=function t(e){var n=e.length,r=void 0,o=void 0;for(r=0;r<n;r+=1)for(o=0;o<n;o+=1)if(r!==o&&e[r].contains(e[o]))return t(e.filter((function(t){return t!==e[o]})));return e},u=function t(e){return e.parentNode?t(e.parentNode):e},a=function(t){var e=t.getAttribute(r["FOCUS_GROUP"]);return e?i(n.i(o["a"])(u(t).querySelectorAll("["+r["FOCUS_GROUP"]+'="'+e+'"]:not(['+r["FOCUS_DISABLED"]+'="disabled"])'))):[t]};e["a"]=a},function(t,e,n){"use strict";var r=n(12),o=n(13),i=n(2),u=function(t){return function(e){return!!e.autofocus||e.dataset&&!!e.dataset.autofocus||t.indexOf(e)>=0}},a=function(t,e,r,i,u){var a=t.length,c=t[0],d=t[a-1];if(!(t.indexOf(r)>=0)){var s=e.indexOf(r),f=e.indexOf(i||s),l=t.indexOf(i),p=s-f,v=e.indexOf(c),b=e.indexOf(d);return-1===s||-1===l?t.indexOf(u.length?n.i(o["a"])(u):n.i(o["a"])(t)):!p&&l>=0||p&&Math.abs(p)>1?l:s<=v?a-1:s>b?0:p?Math.abs(p)>1?l:(a+l+p)%a:void 0}},c=function(t,e,o){var i=e;return o.forEach((function(e){var o=n.i(r["a"])(t,e);o&&(i=o.contains(i)?o:n.i(r["a"])(o,i))})),i},d=function(t){return t.reduce((function(t,e){return t.concat(n.i(r["b"])(e))}),[])},s=function(t){return!(t.dataset&&t.dataset.focusGuard)},f=function(t,e){var o=document&&document.activeElement,f=n.i(i["a"])(t).filter(s),l=c(o||t,t,f),p=n.i(r["c"])(f).filter((function(t){var e=t.node;return s(e)}));if(p[0]||(p=n.i(r["d"])(f).filter((function(t){var e=t.node;return s(e)})),p[0])){var v=p.map((function(t){var e=t.node;return e})),b=n.i(r["c"])([l]).map((function(t){var e=t.node;return e})),m=a(v,b,o,e,v.filter(u(d(f))));return void 0===m?m:p[m]}};e["a"]=f},function(t,e,n){var r=n(17)(n(5),n(18),null,null);r.options.__file="/Users/akorzunov/dev/Z/mellis/github/focus/vue-focus-lock/src/Lock.vue",r.esModule&&Object.keys(r.esModule).some((function(t){return"default"!==t&&"__esModule"!==t}))&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] Lock.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9),o=i(r);function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t){var e=window.setImmediate;"undefined"!==typeof e?e(t):setTimeout(t,1)}var c=0,d=null,s=!1,f=function(){return document&&document.activeElement===document.body},l=function(){return f()||(0,r.focusIsHidden)()},p=function(){var t=!1;if(c){var e=c,n=e.observed,i=e.onActivation;!s&&l()&&d||(n&&!(0,r.focusInside)(n)&&(i(),t=(0,o.default)(n,d)),s=!1,d=document&&document.activeElement)}return t},v=function(t){return t.filter((function(t){var e=t.disabled;return!e})).slice(-1)[0]},b=function(t){c!==t&&(c=null),c=t,t&&(p(),a(p))},m=[],h=function(){b(v(m))},x=function(t){p()&&t&&(t.stopPropagation(),t.preventDefault())},y=function(){a(p)},g=function(){s=!0},_=function(){document.addEventListener("focusin",x,!0),document.addEventListener("focusout",y),window.addEventListener("blur",g)},O=function(){document.removeEventListener("focusin",x,!0),document.removeEventListener("focusout",y),window.removeEventListener("blur",g)};e.default={name:"Lock",props:{returnFocus:{type:Boolean},disabled:{type:Boolean},noFocusGuards:{type:[Boolean,String],default:!1},group:{type:String}},data:function(){return{data:{},hidden:""}},computed:{groupAttr:function(){return u({},r.constants.FOCUS_GROUP,this.group)},hasLeadingGuards:function(){return!0!==this.noFocusGuards},hasTailingGuards:function(){return this.hasLeadingGuards&&"tail"!==this.noFocusGuards}},watch:{disabled:function(){this.data.disabled=this.disabled,h()}},methods:{onBlur:function(){a(h)}},mounted:function(){var t=this;this.data.vue=this,this.data.observed=this.$el.querySelector("[data-lock]"),this.data.disabled=this.disabled,this.data.onActivation=function(){t.originalFocusedElement=t.originalFocusedElement||document&&document.activeElement},m.length||_(),m.push(this.data),h()},destroyed:function(){var t=this;m=m.filter((function(e){var n=e.vue;return n!==t})),m.length||O(),this.returnFocus&&this.originalFocusedElement&&this.originalFocusedElement.focus&&this.originalFocusedElement.focus(),h()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),o=i(r);function i(t){return t&&t.__esModule?t:{default:t}}e.default=o.default},function(t,e,n){"use strict";var r=n(2),o=n(0),i=function(t){return t===document.activeElement},u=function(t){return n.i(r["a"])(t).reduce((function(t,e){return t||!!n.i(o["b"])(n.i(o["a"])(e.querySelectorAll("iframe")),i)}),!1)},a=function(t){var e=document&&document.activeElement;return!(!e||e.dataset&&e.dataset.focusGuard)&&n.i(r["a"])(t).reduce((function(n,r){return n||r.contains(e)||u(t)}),!1)};e["a"]=a},function(t,e,n){"use strict";var r=n(0),o=n(1),i=function(){return document&&n.i(r["a"])(document.querySelectorAll("["+o["FOCUS_ALLOW"]+"]")).some((function(t){return t.contains(document.activeElement)}))};e["a"]=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(11),o=n(3),i=n(7),u=n(8),a=n(10),c=n(1),d=n(2);n.d(e,"tabHook",(function(){return r["a"]})),n.d(e,"focusInside",(function(){return i["a"]})),n.d(e,"focusIsHidden",(function(){return u["a"]})),n.d(e,"focusMerge",(function(){return o["a"]})),n.d(e,"constants",(function(){return c})),n.d(e,"getAllAffectedNodes",(function(){return d["a"]})),e["default"]=a["a"]},function(t,e,n){"use strict";var r=n(3),o=function(t){t.focus(),t.contentWindow&&t.contentWindow.focus()},i=0,u=!1;e["a"]=function(t,e){var a=n.i(r["a"])(t,e);if(!u&&a){if(i>2)return void 0;i++,o(a.node),i--}}},function(t,e,n){"use strict";e["a"]={attach:function(t,e){},detach:function(){}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return p})),n.d(e,"b",(function(){return v}));var r=n(14),o=n(15),i=n(0),u=function(t){return!(!t||!t.getPropertyValue)&&("none"===t.getPropertyValue("display")||"hidden"===t.getPropertyValue("visibility"))},a=function t(e){return!e||e===document||!u(window.getComputedStyle(e,null))&&t(e.parentNode)},c=function(t){return!(("INPUT"===t.tagName||"BUTTON"===t.tagName)&&("hidden"===t.type||t.disabled))},d=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.push(e),e.parentNode&&t(e.parentNode,n),n},s=function(t,e){for(var n=d(t),r=d(e),o=0;o<n.length;o+=1){var i=n[o];if(r.indexOf(i)>=0)return i}return!1},f=function(t){return n.i(i["a"])(t).filter((function(t){return a(t)})).filter((function(t){return c(t)}))},l=function(t){return n.i(r["a"])(f(n.i(o["a"])(t)),!0)},p=function(t){return n.i(r["a"])(f(n.i(o["a"])(t)),!1)},v=function(t){return f(n.i(o["b"])(t))}},function(t,e,n){"use strict";var r=function(t){return"INPUT"===t.tagName&&"radio"===t.type},o=function(t,e){return e.filter(r).filter((function(e){return e.name===t.name})).filter((function(t){return t.checked}))[0]||t},i=function(t){return t[0]&&t.length>1&&r(t[0])&&t[0].name?o(t[0],t):t[0]};e["a"]=i},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(0),o=function(t,e){var n=t.tabIndex-e.tabIndex,r=t.index-e.index;if(n){if(!t.tabIndex)return 1;if(!e.tabIndex)return-1}return n||r},i=function(t,e){return n.i(r["a"])(t).map((function(t,e){return{node:t,index:e,tabIndex:t.tabIndex}})).filter((function(t){return!e||t.tabIndex>=0})).sort(o)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return a}));var r=n(16),o=n(0),i=n(1),u=function(t){return t.reduce((function(t,e){return t.concat(n.i(o["a"])(e.querySelectorAll(r["a"].join(","))))}),[])},a=function(t){var e=t.querySelectorAll("["+i["FOCUS_AUTO"]+"]");return n.i(o["a"])(e).map((function(t){return u([t])})).reduce((function(t,e){return t.concat(e)}),[])}},function(t,e,n){"use strict";e["a"]=["button:enabled:not([readonly])","select:enabled:not([readonly])","textarea:enabled:not([readonly])","input:enabled:not([readonly])","a[href]","area[href]","iframe","object","embed","[tabindex]","[contenteditable]","[autofocus]"]},function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(o=t,i=t.default);var a="function"===typeof i?i.options:i;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),r){var c=Object.create(a.computed||null);Object.keys(r).forEach((function(t){var e=r[t];c[t]=function(){return e}})),a.computed=c}return{esModule:o,exports:i,options:a}}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.hasLeadingGuards?n("div",{style:t.hidden,attrs:{tabIndex:t.disabled?-1:0}}):t._e(),t._v(" "),t.hasLeadingGuards?n("div",{style:t.hidden,attrs:{tabIndex:t.disabled?-1:1}}):t._e(),t._v(" "),n("div",t._b({attrs:{"data-lock":""},on:{focusout:t.onBlur}},"div",t.groupAttr,!1),[t._t("default")],2),t._v(" "),t.hasTailingGuards?n("div",{style:t.hidden,attrs:{tabIndex:t.disabled?-1:0}}):t._e()])},staticRenderFns:[]},t.exports.render._withStripped=!0}])}))},"63b6":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"external"===t.type?n("a",{staticClass:"btn",class:["text-"+t.textcolor],attrs:{"aria-label":t.aria,href:t.path,tabindex:t.tabindex,target:"_blank"}},[t.text?n("span",{class:["text-"+t.textsize,{"order-2":t.iconleft}],domProps:{innerHTML:t._s(t.text)}}):t._e(),t.icon?n("IconBase",{class:{"order-1 mr-2":t.iconleft,"ml-2":t.iconright},attrs:{icon:t.icon,color:t.iconcolor,size:t.iconsize,rotate:t.iconrotation}}):t._e()],1):"button"===t.type?n("button",{staticClass:"btn",class:["text-"+t.textcolor],attrs:{"aria-label":t.aria,disabled:t.disabled,tabindex:t.tabindex},on:{click:function(e){return t.$emit("buttonClick")}}},[t.text?n("span",{class:["text-"+t.textsize,{"order-2":t.iconleft}],domProps:{innerHTML:t._s(t.text)}}):t._e(),t.icon?n("IconBase",{class:{"order-1 mr-2":t.iconleft,"ml-2":t.iconright},attrs:{icon:t.icon,color:t.iconcolor,size:t.iconsize,rotate:t.iconrotation}}):t._e()],1):n("RouterLink",{staticClass:"btn",class:["text-"+t.textcolor],attrs:{to:t.path,"aria-label":t.aria,append:t.append,tabindex:t.tabindex}},[t.text?n("span",{class:["text-"+t.textsize,{"order-2":t.iconleft}],domProps:{innerHTML:t._s(t.text)}}):t._e(),t.icon?n("IconBase",{class:{"order-1 mr-2":t.iconleft,"ml-2":t.iconright},attrs:{icon:t.icon,color:t.iconcolor,size:t.iconsize,rotate:t.iconrotation}}):t._e()],1)},o=[],i=n("5530"),u=n("2f62"),a=n("0de6"),c={name:"Button",components:{IconBase:a["a"]},props:{type:{type:String,default:""},path:{type:[Object,String],default:"/"},append:{type:Boolean,default:!1},icon:{type:String,default:""},iconsize:{type:String,default:"1.5rem"},iconcolor:{type:String,default:"inherit"},iconleft:{type:Boolean,default:!1},iconright:{type:Boolean,default:!1},iconrotation:{type:String,default:""},text:{type:String,default:""},textsize:{type:String,default:"base"},textcolor:{type:String,default:"inherit"},aria:{type:String,default:""},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:0}},computed:Object(i["a"])(Object(i["a"])({},Object(u["c"])(["touch","mobile"])),Object(u["b"])([]))},d=c,s=n("2877"),f=Object(s["a"])(d,r,o,!1,null,null,null);e["a"]=f.exports}}]);
//# sourceMappingURL=home~viewer.2ce4a30b.js.map