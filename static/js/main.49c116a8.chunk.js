(this["webpackJsonpbreaking-bad"]=this["webpackJsonpbreaking-bad"]||[]).push([[0],{14:function(e,a,t){e.exports=t.p+"static/media/logo.3795f66d.png"},17:function(e,a,t){e.exports=t.p+"static/media/spinner.235b9b3e.gif"},18:function(e,a,t){e.exports=t(42)},23:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(13),l=t.n(c),i=t(2),o=(t(23),t(14)),s=t.n(o),u=function(){return r.a.createElement("header",{className:"center"},r.a.createElement("img",{src:s.a,alt:"Breaking-Bad"}))},m=t(3),d=t.n(m),h=t(15),E=t(16),f=t.n(E),g=function(e){var a=Object(n.useState)([]),t=Object(i.a)(a,2),r=t[0],c=t[1],l=Object(n.useState)(!0),o=Object(i.a)(l,2),s=o[0],u=o[1];return Object(n.useEffect)((function(){(function(){var a=Object(h.a)(d.a.mark((function a(){var t;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.a.get(e);case 3:t=a.sent,c(t.data),u(!1),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),alert("Could not fetch Data");case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(){return a.apply(this,arguments)}})()()}),[e]),{cast:r,isLoading:s}},p=function(e){var a=e.character;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("div",{className:"card-front"},r.a.createElement("img",{src:a.img,alt:""})),r.a.createElement("div",{className:"card-back"},r.a.createElement("h1",null,a.name),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Actor Name:")," ",a.portrayed),r.a.createElement("li",null,r.a.createElement("strong",null,"Nickname:")," ",a.nickname),r.a.createElement("li",null,r.a.createElement("strong",null,"Birthday:")," ",a.birthday),r.a.createElement("li",null,r.a.createElement("strong",null,"Status:")," ",a.status)))))},b=t(17),v=t.n(b),k=function(){return r.a.createElement("img",{src:v.a,alt:"Loading...",style:{display:"block",width:"20%",margin:"10% auto"}})},w=function(e){var a=e.isLoading,t=e.cast;return a?r.a.createElement(k,null):r.a.createElement("section",{className:"cards"},t.map((function(e){return r.a.createElement(p,{key:e.char_id,character:e})})))},N=function(e){var a=e.handleSubmit,t=Object(n.useState)(""),c=Object(i.a)(t,2),l=c[0],o=c[1];return r.a.createElement("section",{className:"search"},r.a.createElement("form",null,r.a.createElement("input",{type:"search",className:"form-control",placeholder:"Search Characters",value:l,autoFocus:!0,onChange:function(e){o(e.target.value),a(e.target.value)}})))},j=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],c=a[1],l=g("https://www.breakingbadapi.com/api/characters?name=".concat(t)),o=l.cast,s=l.isLoading;return r.a.createElement("div",{className:"container"},r.a.createElement(u,null),r.a.createElement(N,{handleSubmit:function(e){return c(e)}}),r.a.createElement(w,{isLoading:s,cast:o}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.49c116a8.chunk.js.map