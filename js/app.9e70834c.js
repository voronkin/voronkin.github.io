(function(e){function n(n){for(var r,c,u=n[0],i=n[1],s=n[2],l=0,d=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(n);while(d.length)d.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var i=t[c];0!==o[i]&&(r=!1)}r&&(a.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},a=[];function c(e){return u.p+"js/"+({game:"game"}[e]||e)+"."+{game:"e01166b6"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(e);var s=new Error;a=function(n){i.onerror=i.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,t[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var f=s;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"myapp"},[t("Game")],1)},a=[],c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.downloaded?t("div",{attrs:{id:e.containerId}}):t("div",{staticClass:"placeholder"},[e._v(" Загружаем ... ")])},u=[],i=(t("d3b7"),t("96cf"),t("1da1")),s={name:"Game",data:function(){return{downloaded:!1,gameInstance:null,containerId:"game-container"}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.e("game").then(t.bind(null,"8fd0"));case 2:r=n.sent,e.downloaded=!0,e.$nextTick((function(){e.gameInstance=r.launch(e.containerId)}));case 5:case"end":return n.stop()}}),n)})))()},destroyed:function(){this.gameInstance.destroy(!1)}},l=s,f=(t("b0a5"),t("2877")),d=Object(f["a"])(l,c,u,!1,null,"d38bbf6c",null),p=d.exports,m={name:"App",components:{Game:p}},v=m,h=(t("5c0b"),Object(f["a"])(v,o,a,!1,null,null,null)),b=h.exports,g=t("2f62");r["a"].use(g["a"]);var y=new g["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({store:y,render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var r=t("9c0c"),o=t.n(r);o.a},"64c7":function(e,n,t){},"9c0c":function(e,n,t){},b0a5:function(e,n,t){"use strict";var r=t("64c7"),o=t.n(r);o.a}});
//# sourceMappingURL=app.9e70834c.js.map