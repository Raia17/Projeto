(function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);b&&b(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==c[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function i(e){return u.p+"js/"+({browse:"browse"}[e]||e)+"."+{browse:"5f912f2e"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={browse:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({browse:"browse"}[e]||e)+"."+{browse:"753270c9"}[e]+".css",c=u.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===c)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],b.parentNode.removeChild(b),n(a)},b.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(b)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}c[e]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/Aniflix/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var b=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"07c7":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,c,a){var i=Object(r["z"])("router-view"),u=Object(r["z"])("Footer");return Object(r["s"])(),Object(r["f"])(r["a"],null,[Object(r["j"])(i),Object(r["j"])(u)],64)}var c=Object(r["g"])("ul",null,[Object(r["g"])("li",null,[Object(r["g"])("a",null,"Perguntas frequentes")]),Object(r["g"])("li",null,[Object(r["g"])("a",null,"Informações sobre a empresa")]),Object(r["g"])("li",null,[Object(r["g"])("a",null,"Centro de assistência")])],-1),a=[c];function i(e,t,n,o,c,i){return Object(r["s"])(),Object(r["f"])("footer",null,a)}var u={},s=(n("7fe9"),n("6b0d")),l=n.n(s);const f=l()(u,[["render",i]]);var b=f,d={components:{Footer:b}};n("f52c");const p=l()(d,[["render",o]]);var m=p,g=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),j=n("6340"),v=n.n(j),h={class:"home"},O=Object(r["g"])("div",{id:"home-img"},[Object(r["g"])("img",{src:v.a,alt:""})],-1);function y(e,t,n,o,c,a){var i=Object(r["z"])("NavBarHome"),u=Object(r["z"])("LoginHome");return Object(r["s"])(),Object(r["f"])("div",h,[Object(r["j"])(i),Object(r["j"])(u),O])}var w=n("9b19"),x=n.n(w),P=function(e){return Object(r["v"])("data-v-544e823b"),e=e(),Object(r["t"])(),e},_=P((function(){return Object(r["g"])("div",{id:"header-logo"},[Object(r["g"])("img",{src:x.a,alt:"ANIFLIX"})],-1)})),A=[_];function E(e,t,n,o,c,a){return Object(r["s"])(),Object(r["f"])("header",null,A)}var S={};n("f83d");const k=l()(S,[["render",E],["__scopeId","data-v-544e823b"]]);var L=k,B={class:"home-page",id:"main"},C={class:"home-section"},H=Object(r["g"])("h1",null,[Object(r["i"])("Bem-vindo ao "),Object(r["g"])("span",null,"Aniflix")],-1),N=Object(r["g"])("p",null,"A sua plataforma de streaming de séries e filmes de anime!",-1),T=Object(r["i"])("Vamos ver!"),I=Object(r["h"])('<section class="login home-section"><h1>Iniciar Sessão</h1><form action=""><input type="text" placeholder="Username"><input type="password" placeholder="Password"><button class="btn">Login</button></form></section>',1);function z(e,t,n,o,c,a){var i=Object(r["z"])("router-link");return Object(r["s"])(),Object(r["f"])("div",B,[Object(r["g"])("section",C,[H,N,Object(r["j"])(i,{class:"btn",to:"/browse"},{default:Object(r["E"])((function(){return[T]})),_:1})]),I])}var F={};n("c9eb");const M=l()(F,[["render",z]]);var q=M,J={name:"Home",components:{NavBarHome:L,LoginHome:q}};n("be2a");const D=l()(J,[["render",y]]);var U=D,K=[{path:"/",name:"Home",meta:{title:"Home"},component:U},{path:"/browse",name:"Browse",meta:{title:"Browse"},component:function(){return n.e("browse").then(n.bind(null,"b210"))}}],V=Object(g["a"])({history:Object(g["b"])(),routes:K});V.beforeEach((function(e,t,n){document.title=e.meta.title+" - Aniflix"||!1,n()}));var X=V;Object(r["c"])(m).use(X).mount("#app")},6340:function(e,t,n){e.exports=n.p+"img/ShonenJump.0d448b60.jpg"},"6cd6":function(e,t,n){},"7fe9":function(e,t,n){"use strict";n("07c7")},"9b19":function(e,t,n){e.exports=n.p+"img/logo.05ffc546.svg"},afd3:function(e,t,n){},b523:function(e,t,n){},be2a:function(e,t,n){"use strict";n("b523")},c9eb:function(e,t,n){"use strict";n("6cd6")},f52c:function(e,t,n){"use strict";n("f9d1")},f83d:function(e,t,n){"use strict";n("afd3")},f9d1:function(e,t,n){}});
//# sourceMappingURL=app.5e3a9e20.js.map