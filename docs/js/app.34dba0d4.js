(function(t){function e(e){for(var s,n,c=e[0],o=e[1],l=e[2],u=0,p=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,c=1;c<a.length;c++){var o=a[c];0!==i[o]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/maia/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1:function(t,e){},2:function(t,e){},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(t){var e=r(t);return a(e)}function r(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=r,t.exports=i,i.id="4678"},"498a":function(t,e,a){"use strict";var s=a("d361"),i=a.n(s);i.a},"52b8":function(t,e,a){t.exports=a.p+"img/profile_4.1c418b9a.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s,i,r,n,c,o,l,d,u=a("2b0e"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"main-wrapper"},[a(t.headerComponent,{tag:"component"}),a("router-view"),a(t.footerComponent,{tag:"component"})],1)])},v=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("nav",{staticClass:"navbar is-fixed-top",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-item",attrs:{href:"https://synx.ai/maia"}},[a("div",{staticClass:"is-hidden-touch"},[a("img",{attrs:{src:t.publicPath+"static/img/maia-logo-color.svg",srcset:t.publicPath+"static/img/maia-logo-color.svg 2x",alt:"Maia Score"}})]),a("div",{staticClass:"media is-hidden-desktop"},[a("div",{staticClass:"media-left"},[a("img",{attrs:{src:t.publicPath+"static/img/maia-logo-color.svg",srcset:t.publicPath+"static/img/maia-logo-color.svg 2x",alt:"Maia Score"}})])])]),t._m(0)]),t._m(1)])])])},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navigation"}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-menu",attrs:{id:"navigation"}},[a("div",{staticClass:"navbar-end"},[a("a",{staticClass:"navbar-item",attrs:{href:"/how-it-works"}},[a("span",{staticClass:"navbar-item-name"},[t._v("How it works")])]),a("a",{staticClass:"navbar-item",attrs:{href:"/about"}},[a("span",{staticClass:"navbar-item-name"},[t._v("About")])]),a("a",{staticClass:"navbar-item",attrs:{href:"/get-in-touch"}},[a("span",{staticClass:"navbar-item-name"},[t._v("Get in touch")])])])])}],m={name:"HeaderIndex",data:function(){return{publicPath:"/maia/"}}},b=m,C=a("2877"),g=Object(C["a"])(b,f,h,!1,null,null,null),y=g.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("nav",{staticClass:"navbar is-fixed-top",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-item",attrs:{href:"https://synx.ai/maia"}},[a("div",{staticClass:"is-hidden-touch"},[a("img",{attrs:{src:t.publicPath+"static/img/maia-logo-color.svg",srcset:t.publicPath+"static/img/maia-logo-color.svg 2x",alt:"Maia Score"}})]),a("div",{staticClass:"media is-hidden-desktop"},[a("div",{staticClass:"media-left"},[a("img",{attrs:{src:t.publicPath+"static/img/maia-logo-color.svg",srcset:t.publicPath+"static/img/maia-logo-color.svg 2x",alt:"Maia Score"}})])])]),t._m(0)]),a("div",{staticClass:"navbar-menu",attrs:{id:"navigation"}},[a("div",{staticClass:"navbar-end"},[a("a",{staticClass:"navbar-item",attrs:{href:t.publicPath+"dashboard/business-metrics"}},[a("span",{staticClass:"navbar-item-name"},[t._v("Business Metrics")])]),a("a",{staticClass:"navbar-item",attrs:{href:t.publicPath+"dashboard/model-performance"}},[a("span",{staticClass:"navbar-item-name"},[t._v("Model Performance")])]),a("a",{staticClass:"navbar-item",attrs:{href:t.publicPath+"dashboard/status"}},[a("span",{staticClass:"navbar-item-name"},[t._v("System Status")])]),t._m(1)])])])])])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navigation"}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"image is-32x32 is-hidden-touch profile-image"},[s("img",{staticClass:"is-rounded",attrs:{src:a("52b8"),alt:"Profile"}})])}],x={name:"HeaderIndex",data:function(){return{publicPath:"/maia/"}}},w=x,k=Object(C["a"])(w,j,_,!1,null,null,null),A=k.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-border-wrap"},[a("footer",{staticClass:"footer synx-dark-background"},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("div",{staticClass:"content hs-text-white has-text-centered"},[a("p",[a("a",{attrs:{href:"https://synx.ai/maia",target:"_blank"}},[a("img",{staticClass:"footer-logo",attrs:{src:t.publicPath+"static/img/maia-logo-color.svg",srcset:t.publicPath+"static/img/maia-logo-color.svg 2x",alt:"Maia Score"}})])]),a("p",{staticClass:"is-size-7"},[t._v("Maia Score SAPI de CV. All Rights Reserved © 2020")])])])])])])])},z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-one-quarter"},[a("h5",[a("strong",[t._v("Company")])]),a("p",{staticClass:"is-size-7"},[t._v("About")]),a("p",{staticClass:"is-size-7"},[t._v("Carrers")]),a("p",{staticClass:"is-size-7"},[t._v("Press")]),a("p",{staticClass:"is-size-7"},[t._v("Events")])]),a("div",{staticClass:"column is-one-quarter"},[a("h5",[a("strong",[t._v("Support")])]),a("p",{staticClass:"is-size-7"},[t._v("Developers")]),a("p",{staticClass:"is-size-7"},[t._v("API")]),a("p",{staticClass:"is-size-7"},[t._v("Status")])]),a("div",{staticClass:"column is-one-quarter"},[a("h5",[a("strong",[t._v("Legal")])]),a("p",{staticClass:"is-size-7"},[t._v("Privacy")]),a("p",{staticClass:"is-size-7"},[t._v("Terms of Service")])])])}],P={name:"FootIndex",data:function(){return{publicPath:"/maia/"}}},G=P,$=Object(C["a"])(G,S,z,!1,null,null,null),E=$.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-border-wrap"},[a("footer",{staticClass:"footer-slim synx-dark-background"},[a("div",{staticClass:"container is-vcentered"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("div",{staticClass:"content"},[a("p",{staticClass:"is-vcentered"},[a("a",{attrs:{href:"https://synx.ai/maia",target:"_blank"}},[a("img",{staticClass:"footer-slim-logo",attrs:{src:t.publicPath+"static/img/maia-logo-color.svg",srcset:t.publicPath+"static/img/maia-logo-color.svg 2x"}})])])])]),t._m(0)])])])])},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column"},[a("div",{staticClass:"content has-text-right"},[a("p",{staticClass:"is-size-7 is-vcentered"},[t._v("Maia Score SAPI de CV. All Righsdsts Reserved © 2020")])])])}],L={name:"FooterDashboard",data:function(){return{publicPath:"/maia/"}}},D=L,M=Object(C["a"])(D,O,F,!1,null,null,null),H=M.exports,R={name:"App",components:{HeaderIndex:y,HeaderDashboard:A,FooterIndex:E,FooterDashboard:H},computed:{headerComponent:function(){return"/"!=this.$route.path?A:y},footerComponent:function(){return"/"!=this.$route.path?H:E}}},I=R,B=Object(C["a"])(I,p,v,!1,null,null,null),Z=B.exports,q=a("8c4f"),W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("section",{staticClass:"section"},[a("div",{staticClass:"container section-hero"},[a("div",{staticClass:"columns is-vcentered"},[t._m(0),a("div",{staticClass:"column is-vcentered"},[a("h1",{staticClass:"is-size-1 has-text-white has-text-weight-bold"},[t._v("Super Human Credit Scoring Made Easy.")]),a("h5",{staticClass:"is-size-5 has-text-white has-text-weight-light"},[t._v("Enhance your current lending process without hastle.")]),a("br"),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("div",{staticClass:"field is-grouped"},[a("p",{staticClass:"control"},[a("a",{staticClass:"button is-normal is-synx-primary",attrs:{href:t.publicPath+"dashboard"}},[t._v("Request a Demo")])]),t._m(1)])])])])]),a("div",{staticClass:"at-scale",style:"background-image: url('"+t.publicPath+"static/img/at-scale.svg');"})])]),t._m(2),t._m(3),t._m(4)])},T=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column is-vcentered is-one-third"},[s("img",{attrs:{src:a("93f6"),alt:"Maia Score"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"control"},[a("button",{staticClass:"button is-normal is-synx-link"},[t._v(" Learn more → ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"container"},[a("div",{staticClass:"columns is-vcentered v-space-3"},[a("div",{staticClass:"column is-vcentered is-8 is-offset-1"},[a("p",{staticClass:"is-size-4 has-text-white"},[t._v("Understand your customers and their financial need to take better decisions, without hiring a team PhD's.")])])]),a("div",{staticClass:"columns is-vcentered v-space-3"},[a("div",{staticClass:"column is-vcentered is-8 is-offset-2"},[a("p",{staticClass:"is-size-6 has-text-white"},[t._v("Maia helps you to improve your current lending process, and assist you in taking informed decisions out of your own data and past experiences.")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"v-space-9"},[a("div",{staticClass:"v-space-9"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"v-space-3"},[a("div",{staticClass:"v-space-3"})])}],N={name:"Index",data:function(){return{publicPath:"/maia/"}}},U=N,J=Object(C["a"])(U,W,T,!1,null,null,null),V=J.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("section",{staticClass:"section"},[a("div",{staticClass:"container synx-panel"},[t._m(0),a("div",{staticClass:"columns is-vcentered is-centered has-text-centered v-space-3"},[a("div",{staticClass:"column is-vcentered"},[a("h1",{staticClass:"is-size-1 has-text-white has-text-weight-bold synx-info"},[t._v("15")]),a("p",{staticClass:"is-size-6 has-text-white has-text-weight-light"},[t._v("Solicitudes Recibidas")]),a("div",{staticClass:"inline-chart"},[a("InlineChart",{style:"height: 48px; max-width: 180px; margin: auto",attrs:{colora:"#56C1FF99",colorb:"#6047B599",chartdata:[56,25,46,35,113,80,28,345,32]}})],1)]),a("div",{staticClass:"column is-vcentered"},[a("h1",{staticClass:"is-size-1 has-text-white has-text-weight-bold synx-success"},[t._v("9")]),a("p",{staticClass:"is-size-6 has-text-white has-text-weight-light"},[t._v("Solicitudes Aprobadas")]),a("div",{staticClass:"inline-chart"},[a("InlineChart",{style:"height: 48px; max-width: 180px; margin: auto",attrs:{colora:"#16E7CF99",colorb:"#73FDEA99",chartdata:[123,12,242,52,3,23,123,32,464]}})],1)]),a("div",{staticClass:"column is-vcentered"},[a("h1",{staticClass:"is-size-1 has-text-white has-text-weight-bold synx-danger"},[t._v("6")]),a("p",{staticClass:"is-size-6 has-text-white has-text-weight-light"},[t._v("Solicitudes Rechazadas")]),a("div",{staticClass:"inline-chart"},[a("InlineChart",{style:"height: 48px; max-width: 180px; margin: auto; padding: 0",attrs:{colora:"#EF5FA799",colorb:"#FF8DC699",chartdata:[78,56,242,95,34,44,55,234,53]}})],1)])])])])])},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns is-vcentered is-centered has-text-centered v-space-3"},[a("div",{staticClass:"column is-vcentered"},[a("h3",{staticClass:"is-size-3 has-text-white has-text-weight-bold"},[t._v("Solicitudes de hoy")]),a("p",{staticClass:"is-size-7 has-text-white has-text-weight-light"},[t._v("Consulta las métricas de negocio para revisar más detalles.")])])])}],Q=(a("caad"),a("2532"),a("1fca")),X=Q["c"].reactiveProp,tt=function(t){t.colorGradient=t.$refs.canvas.getContext("2d").createLinearGradient(0,0,20,500),t.colorGradient.addColorStop(0,t.colora),t.colorGradient.addColorStop(1,t.colorb),t.renderChart({labels:[123,12,242,52,3,23,123,123,0,23],datasets:[{label:"",fill:!1,pointBackgroundColor:t.colorGradient,pointHitRadius:8,borderWidth:2,data:t.chartdata,backgroundColor:t.colorGradient,borderColor:t.colorGradient}]},t.options)},et={name:"InlineChart",extends:Q["b"],mixins:[X],props:{labels:{type:Array,default:function(){return[]}},chartconfig:{type:Object,default:function(){}},colora:{type:String,default:function(){return"#56C1FF"}},colorb:{type:String,default:function(){return"#6047B5"}},chartdata:{type:Object,default:function(){return[]}}},data:function(){return{options:{layout:{padding:{left:0,right:0,top:0,bottom:0}},tooltips:{enabled:!1},elements:{point:{radius:0}},scales:{yAxes:[{ticks:{display:!1,beginAtZero:!0},gridLines:{display:!1,color:"#2d2d2d",zeroLineColor:"#2d2d2d"},scaleLabel:{display:!1,labelString:"Population %",fontFamily:"Avenir, Helvetica, Arial, sans-serif"}}],xAxes:[{ticks:{display:!1,beginAtZero:!0},gridLines:{display:!1},scaleLabel:{display:!1,labelString:"Days transcurred since outbreak",fontFamily:"Avenir, Helvetica, Arial, sans-serif",padding:10}}]},legend:{display:!1,position:"bottom",labels:{padding:20,fontColor:"#fff",filter:function(t){return!t.text.includes("IC")}}},responsive:!0,maintainAspectRatio:!1},gradient:null}},mounted:function(){tt(this)}},at=et,st=Object(C["a"])(at,s,i,!1,null,null,null),it=st.exports,rt={name:"Dashboard",components:{InlineChart:it}},nt=rt,ct=Object(C["a"])(nt,K,Y,!1,null,null,null),ot=ct.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("section",{staticClass:"section"},[a("div",{staticClass:"container synx-panel"},[t._m(0),a("div",{staticClass:"columns is-vcentered is-centered"},[a("div",{staticClass:"column is-vcentered"},[a("ApprovedChart",{style:"max-width: 100%; margin: auto",attrs:{colora:"#56C1FF99",colorb:"#6047B599",received:[56,25,46,35,113,80,28,345,32],approved:[123,12,242,52,3,23,123,32,464],rejected:[78,56,242,95,34,44,55,234,53]}})],1)]),t._m(1),t._m(2),t._m(3),a("div",{staticClass:"columns is-vcentered is-centered"},[a("div",{staticClass:"column is-vcentered",staticStyle:{height:"380px"}},[a("AmountsChart",{style:"height: 300px; max-width: 100%",attrs:{"color-a":"#56C1FF","color-b":"#6047B5","chart-data":[56,25,146,35,113,80,128,345,32]}})],1)]),t._m(4),a("div",{staticClass:"columns is-vcentered is-centered v-space-1"},[a("div",{staticClass:"column is-vcentered",staticStyle:{height:"380px"}},[a("AmountsChart",{style:"height: 300px; max-width: 100%",attrs:{"color-a":"#CED7A9","color-b":"#40DCC6","chart-data":[56,146,230,34,23,80,87,233,32]}}),a("p",{staticClass:"has-text-centered has-text-white is-size-7"},[t._v("Créditos al corriente")])],1),a("div",{staticClass:"column is-vcentered",staticStyle:{height:"380px"}},[a("AmountsChart",{style:"height: 300px; max-width: 100%",attrs:{"color-a":"#F3ECC6","color-b":"#E78197","chart-data":[25,25,344,35,345,80,128,56,32]}}),a("p",{staticClass:"has-text-centered has-text-white is-size-7"},[t._v("Créditos atrasados")])],1)]),t._m(5)])])])},dt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns is-vcentered is-centered"},[a("div",{staticClass:"column is-vcentered"},[a("h5",{staticClass:"is-size-5 has-text-white has-text-weight-bold"},[t._v("Solicitudes de crédito")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns is-vcentered is-centered v-space-3"},[a("div",{staticClass:"column is-vcentered"},[a("table",{staticClass:"table synx-dark"},[a("tbody",[a("tr",[a("th",{staticClass:"has-text-white"},[t._v("Periodo "),a("strong",{staticClass:"has-text-white"},[t._v("01/Oct - 07/Oct")])]),a("th")]),a("tr",[a("td",[t._v("Solicitudes recibidas")]),a("td",[t._v("38")])]),a("tr",[a("td",[t._v("Solicitudes aprobadas")]),a("td",[t._v("38")])]),a("tr",[a("td",[t._v("Solicitudes rechazadas")]),a("td",[t._v("38")])]),a("tr",[a("td",[t._v("Solicitudes rechazadas por KYC/PLD")]),a("td",[t._v("38")])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns is-vcentered is-centered v-space-1"},[a("div",{staticClass:"column is-vcentered"},[a("div",{staticClass:"dark-border-wrap"},[a("div",{staticClass:"synx-gray-background"})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns is-vcentered is-centered"},[a("div",{staticClass:"column is-vcentered"},[a("h5",{staticClass:"is-size-5 has-text-white has-text-weight-bold"},[t._v("Montos otorgados")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns is-vcentered is-centered"},[a("div",{staticClass:"column is-vcentered"},[a("table",{staticClass:"table synx-dark"},[a("tbody",[a("tr",[a("td",[t._v("<$10,000")]),a("td",[t._v("38")])]),a("tr",[a("td",[t._v("<$10,001 - $20,000")]),a("td",[t._v("38")])]),a("tr",[a("td",[t._v("<$20,001 - $30,000")]),a("td",[t._v("38")])]),a("tr",[a("td",[t._v(">$30,001")]),a("td",[t._v("38")])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns is-vcentered is-centered"},[a("div",{staticClass:"column is-vcentered"},[a("table",{staticClass:"table synx-dark"},[a("tbody",[a("tr",[a("td",[t._v("Créditos atrasados")]),a("td",[t._v("16")])]),a("tr",[a("td",[t._v("Créditos al corriente")]),a("td",[t._v("24")])]),a("tr",[a("td",[t._v("Posible daño patrimonial")]),a("td",[t._v("$97,000,000")])])])])])])}],ut=Q["c"].reactiveProp,pt=function(t){t.receivedGradient=t.$refs.canvas.getContext("2d").createLinearGradient(0,0,20,500),t.receivedGradient.addColorStop(0,"#56C1FF"),t.receivedGradient.addColorStop(1,"#6047B5"),t.approvedGradient=t.$refs.canvas.getContext("2d").createLinearGradient(0,0,20,500),t.approvedGradient.addColorStop(0,"#CED7A9"),t.approvedGradient.addColorStop(1,"#40DCC6"),t.rejectedGradient=t.$refs.canvas.getContext("2d").createLinearGradient(0,0,20,500),t.rejectedGradient.addColorStop(0,"#F3ECC6"),t.rejectedGradient.addColorStop(1,"#E78197"),t.renderChart({labels:t.approved,datasets:[{label:"Recibidas",fill:!1,pointBackgroundColor:t.receivedGradient,pointHitRadius:8,borderWidth:2,data:t.received,backgroundColor:t.receivedGradient,borderColor:t.receivedGradient},{label:"Aprobadas",fill:!1,pointBackgroundColor:t.approvedGradient,pointHitRadius:8,borderWidth:2,data:t.approved,backgroundColor:t.approvedGradient,borderColor:t.approvedGradient},{label:"Rechazadas",fill:!1,pointBackgroundColor:t.rejectedGradient,pointHitRadius:8,borderWidth:2,data:t.rejected,backgroundColor:t.rejectedGradient,borderColor:t.rejectedGradient}]},t.options)},vt={name:"ApprovedChart",extends:Q["b"],mixins:[ut],props:{labels:{type:Array,default:function(){return[]}},chartconfig:{type:Object,default:function(){}},received:{type:Array,default:function(){return[]}},approved:{type:Array,default:function(){return[]}},rejected:{type:Array,default:function(){return[]}}},data:function(){return{options:{layout:{padding:{left:0,right:0,top:0,bottom:0}},tooltips:{enabled:!0},elements:{point:{radius:0}},scales:{yAxes:[{ticks:{display:!0,beginAtZero:!0},gridLines:{display:!0,color:"#2d2d2d",zeroLineColor:"#2d2d2d"},scaleLabel:{display:!0,labelString:"Solicitudes",fontFamily:"Avenir, Helvetica, Arial, sans-serif"}}],xAxes:[{ticks:{display:!0,beginAtZero:!0},gridLines:{display:!1},scaleLabel:{display:!1,labelString:"Days transcurred since outbreak",fontFamily:"Avenir, Helvetica, Arial, sans-serif",padding:10}}]},legend:{display:!0,position:"bottom",labels:{padding:20,fontColor:"#fff",filter:function(t){return!t.text.includes("IC")}}},responsive:!0,maintainAspectRatio:!1},gradient:null}},mounted:function(){pt(this)}},ft=vt,ht=Object(C["a"])(ft,r,n,!1,null,null,null),mt=ht.exports,bt=(a("a9e3"),function(t){t.colorGradient=t.$refs.canvas.getContext("2d").createLinearGradient(0,0,20,500),t.colorGradient.addColorStop(0,t.colorA),t.colorGradient.addColorStop(1,t.colorB),t.renderChart({labels:t.chartData,datasets:[{label:"Data One",data:t.chartData,backgroundColor:t.colorGradient,borderColor:t.colorGradient}]},t.options)}),Ct={extends:Q["a"],props:{colorA:{type:String,default:function(){return"#56C1FF"}},colorB:{type:String,default:function(){return"#6047B5"}},height:{type:Number,default:function(){return null}},width:{type:Number,default:function(){return null}},chartData:{type:Array,default:function(){return[]}}},data:function(){return{options:{layout:{padding:{left:0,right:0,top:0,bottom:0}},tooltips:{enabled:!0},elements:{point:{radius:0}},scales:{yAxes:[{ticks:{display:!0,beginAtZero:!0},gridLines:{display:!0,color:"#2d2d2d",zeroLineColor:"#2d2d2d"},scaleLabel:{display:!0,labelString:"Montos",fontFamily:"Avenir, Helvetica, Arial, sans-serif"}}],xAxes:[{ticks:{display:!0,beginAtZero:!0},gridLines:{display:!1},scaleLabel:{display:!1,labelString:"Days transcurred since outbreak",fontFamily:"Avenir, Helvetica, Arial, sans-serif",padding:10}}]},legend:{display:!1,position:"bottom",labels:{padding:20,fontColor:"#fff",filter:function(t){return!t.text.includes("IC")}}},responsive:!0,maintainAspectRatio:!1}}},mounted:function(){bt(this)}},gt=Ct,yt=Object(C["a"])(gt,c,o,!1,null,null,null),jt=yt.exports,_t={name:"BusinessMetrics",components:{ApprovedChart:mt,AmountsChart:jt}},xt=_t,wt=Object(C["a"])(xt,lt,dt,!1,null,null,null),kt=wt.exports,At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("section",{staticClass:"section"},[a("div",{staticClass:"container synx-panel"},[t._m(0),a("div",{staticClass:"columns is-vcentered is-centered"},[a("div",{staticClass:"column is-vcentered"},[a("AccuracyChart",{style:"max-width: 100%; margin: auto",attrs:{accuracy:[56,25,46,35,113,80,28,345,32],precission:[123,12,242,52,3,23,123,32,464]}})],1)]),t._m(1)])])])},St=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns is-vcentered is-centered"},[a("div",{staticClass:"column is-vcentered"},[a("h5",{staticClass:"is-size-5 has-text-white has-text-weight-bold"},[t._v("Model Performance")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns is-vcentered is-centered v-space-3"},[a("div",{staticClass:"column is-vcentered"},[a("table",{staticClass:"table synx-dark"},[a("tbody",[a("tr",[a("td",[t._v("Accuracy")]),a("td",{staticClass:"has-text-center"},[t._v("87.5%")])]),a("tr",[a("td",[t._v("Precission")]),a("td",{staticClass:"has-text-center"},[t._v("90.0%")])]),a("tr",[a("td",[t._v("Mean Absolute Error")]),a("td",{staticClass:"has-text-center"},[t._v("12.5")])]),a("tr",[a("td",[t._v("Root Mean Squared Error")]),a("td",{staticClass:"has-text-center"},[t._v("2.6")])])])])])])}],zt=Q["c"].reactiveProp,Pt=function(t){t.accuracyGradient=t.$refs.canvas.getContext("2d").createLinearGradient(0,0,20,500),t.accuracyGradient.addColorStop(0,"#56C1FF"),t.accuracyGradient.addColorStop(1,"#6047B5"),t.precissionGradient=t.$refs.canvas.getContext("2d").createLinearGradient(0,0,20,500),t.precissionGradient.addColorStop(0,"#CED7A9"),t.precissionGradient.addColorStop(1,"#40DCC6"),t.renderChart({labels:t.accuracy,datasets:[{label:"Accuracy",fill:!1,pointBackgroundColor:t.accuracyGradient,pointHitRadius:8,borderWidth:2,data:t.accuracy,backgroundColor:t.accuracyGradient,borderColor:t.accuracyGradient},{label:"Precission",fill:!1,pointBackgroundColor:t.precissionGradient,pointHitRadius:8,borderWidth:2,data:t.precission,backgroundColor:t.precissionGradient,borderColor:t.precissionGradient}]},t.options)},Gt={name:"AccuracyChart",extends:Q["b"],mixins:[zt],props:{labels:{type:Array,default:function(){return[]}},chartconfig:{type:Object,default:function(){}},accuracy:{type:Array,default:function(){return[]}},precission:{type:Array,default:function(){return[]}}},data:function(){return{options:{layout:{padding:{left:0,right:0,top:0,bottom:0}},tooltips:{enabled:!0},elements:{point:{radius:0}},scales:{yAxes:[{ticks:{display:!0,beginAtZero:!0},gridLines:{display:!0,color:"#2d2d2d",zeroLineColor:"#2d2d2d"},scaleLabel:{display:!0,labelString:"Learning Rate",fontFamily:"Avenir, Helvetica, Arial, sans-serif"}}],xAxes:[{ticks:{display:!0,beginAtZero:!0},gridLines:{display:!1},scaleLabel:{display:!1,labelString:"Days transcurred since outbreak",fontFamily:"Avenir, Helvetica, Arial, sans-serif",padding:10}}]},legend:{display:!0,position:"bottom",labels:{padding:20,fontColor:"#fff",filter:function(t){return!t.text.includes("IC")}}},responsive:!0,maintainAspectRatio:!1},gradient:null}},mounted:function(){Pt(this)}},$t=Gt,Et=Object(C["a"])($t,l,d,!1,null,null,null),Ot=Et.exports,Ft={name:"ModelPerformance",components:{AccuracyChart:Ot}},Lt=Ft,Dt=Object(C["a"])(Lt,At,St,!1,null,null,null),Mt=Dt.exports,Ht=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Rt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-wrapper"},[a("section",{staticClass:"section"},[a("div",{staticClass:"container synx-panel"},[a("h3",{staticClass:"is-size-3 has-text-white has-text-weight-bold"},[t._v("Documentación")]),a("h5",{staticClass:"is-size-5 has-text-white has-text-weight-light"},[t._v("Previsualización de la respuesta de los modelos")]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("div",{staticClass:"dark-border-wrap"},[a("div",{staticClass:"synx-gray-background"})])])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("div",{attrs:{id:"swagger-ui"}})])])])])])}],It=a("9474"),Bt=a.n(It),Zt={name:"Index",mounted:function(){Bt()({url:"/specs/swagger.yaml",dom_id:"#swagger-ui"})}},qt=Zt,Wt=(a("498a"),Object(C["a"])(qt,Ht,Rt,!1,null,"4f8f5126",null)),Tt=Wt.exports;u["a"].use(q["a"]);var Nt=[{path:"/",name:"Home",component:V},{path:"/dashboard",name:"Dashboard",component:ot},{path:"/dashboard/business-metrics",name:"BusinessMetrics",component:kt},{path:"/dashboard/model-performance",name:"ModelPerformance",component:Mt},{path:"/apidocs",name:"ApiDocs",component:Tt}],Ut=new q["a"]({mode:"history",base:"/maia/",routes:Nt}),Jt=Ut;a("9299"),u["a"].config.productionTip=!1,new u["a"]({router:Jt,render:function(t){return t(Z)},created:function(){if(sessionStorage.redirect){var t=sessionStorage.redirect;delete sessionStorage.redirect,this.$router.push(t)}}}).$mount("#app")},9299:function(t,e,a){},"93f6":function(t,e,a){t.exports=a.p+"img/hero.cfe99034.png"},d361:function(t,e,a){}});
//# sourceMappingURL=app.34dba0d4.js.map