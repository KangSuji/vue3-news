(function(t){function e(e){for(var c,i,s=e[0],u=e[1],a=e[2],f=0,j=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&j.push(r[i][0]),r[i]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(t[c]=u[c]);b&&b(e);while(j.length)j.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],c=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(c=!1)}c&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var c={},r={app:0},o=[];function i(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=c,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)i.d(n,c,function(e){return t[e]}.bind(null,c));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue3-test/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var a=0;a<s.length;a++)e(s[a]);var b=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"097d":function(t,e,n){"use strict";n("8083")},"0f5c":function(t,e,n){"use strict";n("f755")},3401:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(t,e,n,r,o,i){var s=Object(c["z"])("header-view"),u=Object(c["z"])("navigationview"),a=Object(c["z"])("router-view"),b=Object(c["z"])("footer-view");return Object(c["r"])(),Object(c["f"])(c["a"],null,[Object(c["i"])(s),Object(c["i"])(u),Object(c["i"])(a),Object(c["i"])(b)],64)}var o={class:"container"},i=Object(c["h"])("News"),s=Object(c["h"])("| "),u=Object(c["h"])("Ask"),a=Object(c["h"])("| "),b=Object(c["h"])("Jobs");function f(t,e,n,r,f,j){var l=Object(c["z"])("router-link");return Object(c["r"])(),Object(c["f"])("div",o,[Object(c["i"])(l,{to:"/news"},{default:Object(c["E"])((function(){return[i]})),_:1}),s,Object(c["i"])(l,{to:"/ask"},{default:Object(c["E"])((function(){return[u]})),_:1}),a,Object(c["i"])(l,{to:"/jobs"},{default:Object(c["E"])((function(){return[b]})),_:1})])}var j={},l=(n("746b"),n("6b0d")),O=n.n(l);const d=O()(j,[["render",f],["__scopeId","data-v-60b6b790"]]);var p=d,v=Object(c["h"])("HK NEWS");function m(t,e,n,r,o,i){var s=Object(c["z"])("router-link");return Object(c["r"])(),Object(c["f"])("header",null,[Object(c["i"])(s,{to:"/"},{default:Object(c["E"])((function(){return[v]})),_:1})])}var h={};n("78d1");const g=O()(h,[["render",m],["__scopeId","data-v-74a84d00"]]);var _=g,w=function(t){return Object(c["u"])("data-v-4544a70f"),t=t(),Object(c["s"])(),t},E=w((function(){return Object(c["g"])("div",null,"Contact webmaster for more information. 000-1234-5678",-1)}));function S(t,e,n,r,o,i){return Object(c["r"])(),Object(c["f"])("div",null,[Object(c["g"])("footer",null,[Object(c["g"])("div",null,"Copyright © "+Object(c["B"])(i.date)+" SUJI. All rights reserved.",1),E])])}var T={computed:{date:function(){var t=(new Date).getFullYear();return t}}};n("8400");const k=O()(T,[["render",S],["__scopeId","data-v-4544a70f"]]);var y=k,I={name:"App",components:{Navigationview:p,HeaderView:_,FooterView:y}};n("e65a");const B=O()(I,[["render",r]]);var $=B,H=n("6c02"),C=function(t){return Object(c["u"])("data-v-5d0c83ec"),t=t(),Object(c["s"])(),t},F=C((function(){return Object(c["g"])("div",{class:"section-title"},"News",-1)}));function M(t,e,n,r,o,i){var s=Object(c["z"])("ListItem");return Object(c["r"])(),Object(c["d"])(s,null,{title:Object(c["E"])((function(){return[F]})),_:1})}var z={class:"news"},L={class:"news-section"},A={class:"news-list"},J=["href"],x=["href"],N={key:0,class:"news-info"},P={class:"news-info"};function K(t,e,n,r,o,i){var s=Object(c["z"])("router-link");return Object(c["r"])(),Object(c["f"])("div",z,[Object(c["y"])(t.$slots,"title",{},void 0,!0),Object(c["g"])("div",L,[Object(c["g"])("ul",A,[(Object(c["r"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(i.items,(function(t){return Object(c["r"])(),Object(c["f"])("li",{key:t.id},[t.domain&&t.user?(Object(c["r"])(),Object(c["f"])("a",{key:0,href:t.url},Object(c["B"])(t.title),9,J)):t.domain&&null===t.user?(Object(c["r"])(),Object(c["f"])("a",{key:1,href:t.url},Object(c["B"])(t.title),9,x)):!t.domain&&t.user?(Object(c["r"])(),Object(c["d"])(s,{key:2,to:"/item/".concat(t.id)},{default:Object(c["E"])((function(){return[Object(c["h"])(Object(c["B"])(t.title),1)]})),_:2},1032,["to"])):Object(c["e"])("",!0),Object(c["g"])("div",null,[Object(c["i"])(s,{to:"/user/".concat(t.user),class:"news-info"},{default:Object(c["E"])((function(){return[Object(c["h"])(Object(c["B"])(t.user),1)]})),_:2},1032,["to"]),t.domain&&null===t.user?(Object(c["r"])(),Object(c["f"])("span",N,Object(c["B"])(t.domain),1)):Object(c["e"])("",!0),Object(c["g"])("span",P," | "+Object(c["B"])(t.time_ago),1)])])})),128))])])])}var U={computed:{items:function(){return"/news"===this.$route.path?this.$store.state.news:"/ask"===this.$route.path?this.$store.state.ask:"/jobs"===this.$route.path?this.$store.state.jobs:""}},created:function(){"/news"===this.$route.path?this.$store.dispatch("FETCH_NEWS"):"/ask"===this.$route.path?this.$store.dispatch("FETCH_ASK"):"/jobs"===this.$route.path&&this.$store.dispatch("FETCH_JOBS")}};n("6ac8");const W=O()(U,[["render",K],["__scopeId","data-v-42dbe221"]]);var R=W,V={components:{ListItem:R}};n("097d");const D=O()(V,[["render",M],["__scopeId","data-v-5d0c83ec"]]);var Y=D,q=function(t){return Object(c["u"])("data-v-273bb75c"),t=t(),Object(c["s"])(),t},G=q((function(){return Object(c["g"])("div",{class:"section-title"},"Ask",-1)}));function Q(t,e,n,r,o,i){var s=Object(c["z"])("ListItem");return Object(c["r"])(),Object(c["d"])(s,null,{title:Object(c["E"])((function(){return[G]})),_:1})}var X={components:{ListItem:R}};n("0f5c");const Z=O()(X,[["render",Q],["__scopeId","data-v-273bb75c"]]);var tt=Z,et=function(t){return Object(c["u"])("data-v-93ad482c"),t=t(),Object(c["s"])(),t},nt=et((function(){return Object(c["g"])("div",{class:"section-title"},"Jobs",-1)}));function ct(t,e,n,r,o,i){var s=Object(c["z"])("ListItem");return Object(c["r"])(),Object(c["d"])(s,null,{title:Object(c["E"])((function(){return[nt]})),_:1})}var rt={components:{ListItem:R}};n("f0aa");const ot=O()(rt,[["render",ct],["__scopeId","data-v-93ad482c"]]);var it=ot,st=function(t){return Object(c["u"])("data-v-e318ac22"),t=t(),Object(c["s"])(),t},ut={class:"ask-item"},at=st((function(){return Object(c["g"])("div",{class:"section-title"},"ASK",-1)})),bt={class:"user-info"},ft=st((function(){return Object(c["g"])("span",{class:"material-icons"},"person",-1)})),jt=st((function(){return Object(c["g"])("div",null,null,-1)})),lt={class:"ask-title"},Ot=["innerHTML"],dt=st((function(){return Object(c["g"])("div",{class:"comments-title-section"},[Object(c["g"])("div",{class:"section-title"},"comments"),Object(c["g"])("span",{class:"material-icons"},"arrow_drop_down")],-1)})),pt={class:"comments-section"},vt=["innerHTML"];function mt(t,e,n,r,o,i){var s=Object(c["z"])("router-link");return Object(c["r"])(),Object(c["f"])("div",ut,[at,Object(c["g"])("div",bt,[ft,Object(c["g"])("div",null,[Object(c["i"])(s,{to:"/user/".concat(i.items.user)},{default:Object(c["E"])((function(){return[Object(c["h"])("user : "+Object(c["B"])(i.items.user),1)]})),_:1},8,["to"]),jt,Object(c["g"])("div",null,"points : "+Object(c["B"])(i.items.points),1)])]),Object(c["g"])("div",null,[Object(c["g"])("span",lt,Object(c["B"])(i.items.title),1),Object(c["g"])("p",{innerHTML:i.items.content},null,8,Ot)]),Object(c["g"])("div",null,[dt,Object(c["g"])("div",pt,[(Object(c["r"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(i.items.comments,(function(t,e){return Object(c["r"])(),Object(c["f"])("div",{key:e,class:"comments"},[Object(c["i"])(s,{to:"/user/".concat(i.items.comments[e].user)},{default:Object(c["E"])((function(){return[Object(c["h"])("user : "+Object(c["B"])(i.items.comments[e].user),1)]})),_:2},1032,["to"]),Object(c["g"])("div",null,"time_ago: "+Object(c["B"])(i.items.comments[e].time_ago),1),Object(c["g"])("div",{innerHTML:i.items.comments[e].content},null,8,vt)])})),128))])])])}var ht={computed:{items:function(){return this.$store.state.item}},created:function(){var t=this.$route.params.id;this.$store.dispatch("FETCH_ITEM",t)}};n("f8dc");const gt=O()(ht,[["render",mt],["__scopeId","data-v-e318ac22"]]);var _t=gt,wt=function(t){return Object(c["u"])("data-v-7bf65eee"),t=t(),Object(c["s"])(),t},Et={class:"user"},St=wt((function(){return Object(c["g"])("div",{class:"section-title"},"USER",-1)})),Tt={class:"user-info"},kt=wt((function(){return Object(c["g"])("span",{class:"material-icons"},"person",-1)}));function yt(t,e,n,r,o,i){return Object(c["r"])(),Object(c["f"])("div",Et,[St,Object(c["g"])("div",Tt,[kt,Object(c["g"])("div",null,[Object(c["g"])("div",null,"user name : "+Object(c["B"])(i.user.id),1),Object(c["g"])("div",null,"karma : "+Object(c["B"])(i.user.karma),1),Object(c["g"])("div",null,"created : "+Object(c["B"])(i.user.created),1)])])])}var It={computed:{user:function(){return this.$store.state.user}},created:function(){var t=this.$route.params.id;this.$store.dispatch("FETCH_USER",t)}};n("5764");const Bt=O()(It,[["render",yt],["__scopeId","data-v-7bf65eee"]]);var $t=Bt,Ht=Object(H["a"])({history:Object(H["b"])(),routes:[{path:"/",redirect:"/news"},{path:"/news",component:Y},{path:"/jobs",component:tt},{path:"/ask",component:it},{path:"/item/:id",component:_t},{path:"/user/:id",component:$t}]}),Ct=n("5502"),Ft=n("bc3a"),Mt=n.n(Ft);function zt(){return Mt.a.get("https://api.hnpwa.com/v0/news/1.json")}function Lt(){return Mt.a.get("https://api.hnpwa.com/v0/ask/1.json")}function At(){return Mt.a.get("https://api.hnpwa.com/v0/jobs/1.json")}function Jt(t){return Mt.a.get("https://api.hnpwa.com/v0/item/".concat(t,".json"))}function xt(t){return Mt.a.get("https://api.hnpwa.com/v0/user/".concat(t,".json"))}var Nt=Object(Ct["a"])({state:{news:[],ask:[],jobs:[],item:{},user:{}},actions:{FETCH_NEWS:function(t){zt().then((function(e){return t.commit("SET_NEWS",e.data)})).catch((function(t){return console.log(t)}))},FETCH_ASK:function(t){Lt().then((function(e){return t.commit("SET_ASK",e.data)})).catch((function(t){return console.log(t)}))},FETCH_JOBS:function(t){At().then((function(e){return t.commit("SET_JOBS",e.data)})).catch((function(t){return console.log(t)}))},FETCH_ITEM:function(t,e){Jt(e).then((function(e){return t.commit("SET_ITEM",e.data)})).catch((function(t){return console.log(t)}))},FETCH_USER:function(t,e){xt(e).then((function(e){return t.commit("SET_User",e.data)})).catch((function(t){return console.log(t)}))}},mutations:{SET_NEWS:function(t,e){t.news=e},SET_ASK:function(t,e){t.ask=e},SET_JOBS:function(t,e){t.jobs=e},SET_ITEM:function(t,e){t.item=e},SET_User:function(t,e){t.user=e}}});Object(c["c"])($).use(Ht).use(Nt).mount("#app")},5764:function(t,e,n){"use strict";n("a585")},"6ac8":function(t,e,n){"use strict";n("bf41")},"746b":function(t,e,n){"use strict";n("a2f1")},"78d1":function(t,e,n){"use strict";n("7de4")},"7de4":function(t,e,n){},8083:function(t,e,n){},8400:function(t,e,n){"use strict";n("a117")},8408:function(t,e,n){},a117:function(t,e,n){},a2f1:function(t,e,n){},a585:function(t,e,n){},ba69:function(t,e,n){},bf41:function(t,e,n){},e65a:function(t,e,n){"use strict";n("ba69")},f0aa:function(t,e,n){"use strict";n("8408")},f755:function(t,e,n){},f8dc:function(t,e,n){"use strict";n("3401")}});
//# sourceMappingURL=app.c7e2019a.js.map