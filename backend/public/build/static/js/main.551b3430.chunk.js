(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{73:function(t,e,n){},74:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(34),u=n.n(r),o=n(7),s=n(76),i=n(35),f="connection",j="chat message",b="game update",O=n.n(i)()("http://flatiron-mafia.herokuapp.com"),g=n(36),l=n(0),m=function(t){var e=t.messages;return Object(l.jsx)("ol",{id:"messages",children:e.map((function(t){return Object(l.jsx)("li",{children:t},"".concat(t," ").concat(Date.now()))}))})},d=function(){var t=Object(c.useState)([]),e=Object(o.a)(t,2),n=e[0],a=e[1];return Object(c.useEffect)((function(){return O.on(j,(function(t){return a([].concat(Object(g.a)(n),[t]))})),function(){O.off(j)}}),[n]),Object(l.jsx)(m,{messages:n})},h=function(t){var e=t.onSubmit,n=t.onMessageChange,c=t.message;return Object(l.jsxs)("form",{onSubmit:e,children:[Object(l.jsx)("input",{id:"chat-input",type:"text",value:c,onChange:n}),Object(l.jsx)("button",{type:"submit",children:"Send"})]})},p=function(){var t=Object(c.useState)(""),e=Object(o.a)(t,2),n=e[0],a=e[1];return Object(l.jsx)(h,{message:n,onMessageChange:function(t){return a(t.target.value)},onSubmit:function(t){t.preventDefault(),O.emit(j,n),a("")}})},x=(n(73),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{}),Object(l.jsx)(p,{})]})}),S=function(t){t.gameState,t.currentPlayerId;return Object(l.jsx)(x,{})},v=function(){var t=Object(c.useState)(""),e=Object(o.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(null),u=Object(o.a)(r,2),i=u[0],j=u[1],g=Object(c.useState)(!1),m=Object(o.a)(g,2);m[0],m[1];return Object(c.useEffect)((function(){var t=localStorage.getItem("mafiaPlayerId");t||(t=Object(s.a)(),localStorage.setItem("mafiaPlayerId",t)),a(t)}),[]),Object(c.useEffect)((function(){return O.on(f,(function(t){return j(t)})),O.on(b,(function(t){return j(t)})),function(){O.off(f),O.off(b)}}),[]),Object(l.jsx)(S,{gameState:i,currentPlayerId:n})},I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,u=e.getTTFB;n(t),c(t),a(t),r(t),u(t)}))};u.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),I()}},[[74,1,2]]]);
//# sourceMappingURL=main.551b3430.chunk.js.map