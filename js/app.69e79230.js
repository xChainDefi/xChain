(function(e){function n(n){for(var r,o,u=n[0],i=n[1],s=n[2],f=0,l=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(l.length)l.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==a[u]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-637fce58":"a6c7c0e6","chunk-75cc57bf":"268f3b02","chunk-7e64d7c4":"4131eae9","chunk-cf56f374":"56c58244"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-637fce58":1,"chunk-75cc57bf":1,"chunk-7e64d7c4":1,"chunk-cf56f374":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-637fce58":"d74a4d07","chunk-75cc57bf":"4260dd91","chunk-7e64d7c4":"64180707","chunk-cf56f374":"1ef318e2"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===a))return n()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],f=s.getAttribute("data-href");if(f===r||f===a)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),t(c)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var l=new Error;s=function(n){f.onerror=f.onload=null,clearTimeout(d);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,t[1](l)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var d=f;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},1:function(e,n){},2:function(e,n){},3:function(e,n){},4:function(e,n){},5:function(e,n){},"56d7":function(e,n,t){"use strict";t.r(n);t("ccc1");var r=t("b139"),o=t.n(r),a=(t("ba06"),t("b195"),t("0e18"),t("af72"),t("e381"),t("a593")),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],i=(t("5e87"),t("75e5")),s={data:function(){return{web3:null}},mixins:[i["a"]],created:function(){this.connectWallet()},methods:{},components:{}},f=s,l=(t("5c0b"),t("5d22")),d=Object(l["a"])(f,c,u,!1,null,null,null),h=d.exports,p=(t("55ac"),t("0226"),t("8aaf"));a["default"].use(p["a"]);var m,g=[{path:"/",component:function(){return t.e("chunk-75cc57bf").then(t.bind(null,"1e4b"))},children:[{path:"",redirect:"/home"},{path:"/home",name:"Transaction",component:function(){return t.e("chunk-7e64d7c4").then(t.bind(null,"0d43"))}},{path:"/search",name:"Search",component:function(){return t.e("chunk-cf56f374").then(t.bind(null,"2d3b"))}},{path:"/chart",name:"Chart",component:function(){return t.e("chunk-637fce58").then(t.bind(null,"5178"))}}]}],b=new p["a"]({mode:"history",base:"/",routes:g}),w=b,k=t("7736"),v={skin:localStorage.getItem("Skin"),header:!0,account:null,isConnected:null},y=v,C={skin:function(e,n){return e.skin},header:function(e,n){return e.header},account:function(e,n){return e.account},isConnected:function(e,n){return e.isConnected}},S=C,j=t("353b"),O="CHANGE_SKIN",x="CHANGE_HEADER",E="SET_ACCOUNT",T="SET_ISCONNECTED",A=(m={},Object(j["a"])(m,O,(function(e,n){e.skin=n,localStorage.setItem("Skin",n)})),Object(j["a"])(m,x,(function(e,n){e.header=n})),Object(j["a"])(m,E,(function(e,n){e.account=n})),Object(j["a"])(m,T,(function(e,n){e.isConnected=n})),m),_=A,P={changeSkin:function(e,n){e.commit(O,n)},chageHeader:function(e,n){e.commit(x,n)},setAccount:function(e,n){e.commit(E,n)},setIsConnected:function(e,n){e.commit(T,n)}},M=P;a["default"].use(k["a"]);var L=new k["a"].Store({state:y,getters:S,mutations:_,actions:M}),N=t("f991"),B=t("65ce"),I=t.n(B),H=t("954c"),q=t.n(H);a["default"].use(N["a"]);var D={en:q.a,zh:I.a},$=new N["a"]({locale:localStorage.getItem("Lang")||"zh",messages:D}),z=$,R=t("73ef"),V=t.n(R),U=t("7c78"),G=t.n(U);t("8d04"),t("be35"),a["default"].use(o.a),a["default"].config.productionTip=!1,a["default"].prototype.$axios=V.a,V.a.defaults.baseURL="",V.a.interceptors.request.use((function(e){return"post"==e.method&&(e.data=G.a.stringify(e.data)),e}),(function(e){return Promise.reject(e)})),V.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),a["default"].prototype.toast=function(e,n){this.$message({showClose:!0,message:n,type:e})},new a["default"]({router:w,store:L,i18n:z,render:function(e){return e(h)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";t("ac27")},6:function(e,n){},"65ce":function(e,n){e.exports={navBar:{logoText:"BookSwap",duihuan:"兑换",jiaoyi:"交易",zijinchi:"矿池",wakuang:"流动性挖矿",dao:"DAO",jywakuang:"交易挖矿",kualianqiao:"跨链桥",Language:"语言",Currency:"汇率",Skin:"主题"}}},7:function(e,n){},"75e5":function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("f206"),o=(t("6a61"),t("5e87")),a=t.n(o),c={methods:{connectWallet:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t=e,window.ethereum||window.web3){n.next=5;break}t.toast("error","请安装MetaMask"),n.next=18;break;case 5:if(!window.ethereum){n.next=18;break}return n.prev=6,n.next=9,window.ethereum.enable();case 9:ethereum.on("chainChanged",(function(e){history.go(0)})),ethereum.on("accountsChanged",(function(e){history.go(0)})),"56"!=window.ethereum.networkVersion&&"128"!=window.ethereum.networkVersion&&"1"!=window.ethereum.networkVersion?t.toast("error","请将MetaMask连接到ETH、BSC或Heco网络，否则您无法正常使用本网站"):(window.ethereum.networkVersion,t.web3=new a.a(window.ethereum),console.log(t.web3),r="",t.web3.eth.getAccounts().then((function(e){r=e[0];var n=e[0].substr(0,6)+"..."+e[0].substr(e[0].length-3);t.$store.dispatch("setAccount",n),t.$store.dispatch("setIsConnected",!0),t.web3.eth.getBalance(r).then((function(e){console.log(e)}))}))),n.next=18;break;case 14:return n.prev=14,n.t0=n["catch"](6),t.toast("error","MetaMask授权失败，会导致您无法正常使用本网站"),n.abrupt("return");case 18:case"end":return n.stop()}}),n,null,[[6,14]])})))()}}}},8:function(e,n){},"8d04":function(e,n,t){},"954c":function(e,n){e.exports={navBar:{logoText:"BookSwap",duihuan:"Swap",jiaoyi:"Trade",zijinchi:"Pool",wakuang:"Liquidity Mining",dao:"DAO",jywakuang:"Trade Mining",kualianqiao:"Cross Chain Bridge",Language:"Language",Currency:"Currency",Skin:"Skin"}}},ac27:function(e,n,t){},be35:function(e,n,t){}});
//# sourceMappingURL=app.69e79230.js.map