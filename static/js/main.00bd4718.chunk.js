(this["webpackJsonp3-musket-timers"]=this["webpackJsonp3-musket-timers"]||[]).push([[0],{44:function(e,t,n){e.exports=n(57)},49:function(e,t,n){},53:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),l=n.n(c),u=(n(49),n(12)),i=n(77),o=n(78),m=n(26),s=n.n(m),f=n(30),E=n(31);function h(){return(h=Object(f.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.location.search.slice(1),!(n=Object(E.parse)(t).jwt||null)){e.next=4;break}return e.abrupt("return",fetch("".concat("http://localhost:8888","/api/user?jwt=").concat(n)).then((function(e){return e.json()})).then((function(e){var t;return(null===(t=e.payload)||void 0===t?void 0:t.username)||""})).catch((function(e){return console.error(e)})));case 4:return e.abrupt("return","");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(53);var v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Made with ","<3"," by \xa0",r.a.createElement("a",{href:"https://github.com/AluBhorta/3-Musket-Timers"},"AluBhorta"),".")))},b=n(72),d=n(73),p=function(e){var t=e.username;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{position:"relative"},r.a.createElement(d.a,null,r.a.createElement("div",{style:{flex:1}},r.a.createElement("h1",null,"3 Musket-Timers")),r.a.createElement("p",null,t))))},j=n(74),k=n(75),O=n(80),T=n(81),w=n(76),g=n(59);function S(e,t){var n=e*t/1e3,a=Math.floor(n/60),r=n-60*a;return"".concat(a,":").concat(r.toFixed(3))}var y=function(e){var t=e.interval,n=e.title,c=e.callbackTime,l=Object(a.useState)(0),i=Object(u.a)(l,2),o=i[0],m=i[1],s=Object(a.useRef)(),f=Object(a.useState)("HALTED"),E=Object(u.a)(f,2),h=E[0],v=E[1],b=function(){s.current&&clearInterval(s.current),v("HALTED")},d=function(){b(),s.current=setInterval((function(){m((function(e){return c(e+1),e+1}))}),t),v("RUNNING")},p=function(){b(),m(0),c(0),v("HALTED")};return Object(a.useEffect)((function(){return d(),function(){p()}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,null,r.a.createElement(k.a,null,r.a.createElement("div",{className:"_center"},r.a.createElement("h1",null,n||"Timer"," - (i ",t/1e3,"s)"),r.a.createElement("h1",null,S(o,t)),r.a.createElement(O.a,{marginBottom:2},r.a.createElement(T.a,{label:h,variant:"outlined"})),r.a.createElement(w.a,{variant:"contained"},"HALTED"===h?r.a.createElement(g.a,{onClick:function(){return d()}},"Start"):r.a.createElement(g.a,{onClick:function(){return b()}},"Pause"),r.a.createElement(g.a,{color:"primary",onClick:function(){return p()}},"Reset"))))))},M=function(e){var t=10*e.tenSecs+e.oneSecs+.1*e.hundredMs;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,null,r.a.createElement(k.a,null,r.a.createElement("div",{className:"_center"},r.a.createElement("h1",null,"Total Timer"),r.a.createElement("h1",null,S(t,1e3))))))};var x=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(0),m=Object(u.a)(l,2),s=m[0],f=m[1],E=Object(a.useState)(0),b=Object(u.a)(E,2),d=b[0],j=b[1],k=Object(a.useState)(""),O=Object(u.a)(k,2),T=O[0],w=O[1];return Object(a.useEffect)((function(){return function(){return h.apply(this,arguments)}().then((function(e){e&&w(e)})).catch((function(e){return console.error(e)})),function(){}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{username:T}),r.a.createElement(i.a,{maxWidth:"md"},r.a.createElement(o.a,{container:!0,spacing:3,justify:"space-evenly",alignItems:"center"},r.a.createElement(o.a,{item:!0},r.a.createElement(y,{title:"Timer 1",interval:1e4,callbackTime:function(e){c(e)}})),r.a.createElement(o.a,{item:!0},r.a.createElement(y,{title:"Timer 2",interval:1e3,callbackTime:function(e){f(e)}})),r.a.createElement(o.a,{item:!0},r.a.createElement(y,{title:"Timer 3",interval:100,callbackTime:function(e){j(e)}}))),r.a.createElement(M,{tenSecs:n,oneSecs:s,hundredMs:d})),r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.00bd4718.chunk.js.map