(this.webpackJsonphome=this.webpackJsonphome||[]).push([[0],{66:function(n,i,e){},67:function(n,i,e){},80:function(n,i,e){"use strict";e.r(i);var t=e(0),c=e.n(t),o=e(53),d=e.n(o),a=(e(66),e(67),e(15)),l=e(95),r=e(93),s=e(46),j=e(2);var u,v=function(n){var i=c.a.useState({}),e=Object(a.a)(i,2),o=e[0],d=e[1],v=c.a.useState(""),D=Object(a.a)(v,2),b=D[0],h=D[1],O=c.a.useState(""),x=Object(a.a)(O,2),g=x[0],p=x[1];function f(n){u.emit("API",{command:1===o[n.target.id]?"ON":"OFF",pinIndex:n.target.id})}return Object(t.useEffect)((function(){var n=window.location.href.split("/")[0]+"//"+window.location.href.split("/")[2];console.log("LIVE_URL",n),(u=Object(s.a)(n)).on("Welcome",(function(n){console.log(n),h(u.id)})),u.emit("JoinUser"),u.on("Data",(function(n){d(n)})),u.on("DeviceId",(function(n){p(n)}))}),[]),Object(j.jsx)("div",{children:g.length>0?Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)(l.a,{spacing:4,direction:"row",style:{padding:30},children:[Object(j.jsx)(r.a,{variant:1===(null===o||void 0===o?void 0:o.D2)?"outlined":"contained",id:"D2",onClick:f,children:"D2"}),Object(j.jsx)(r.a,{variant:1===(null===o||void 0===o?void 0:o.D3)?"outlined":"contained",id:"D3",onClick:f,children:"D3"})]}),Object(j.jsxs)(l.a,{spacing:4,direction:"row",style:{padding:30},children:[Object(j.jsx)(r.a,{variant:1===(null===o||void 0===o?void 0:o.D4)?"outlined":"contained",id:"D4",onClick:f,children:"D4"}),Object(j.jsx)(r.a,{variant:1===(null===o||void 0===o?void 0:o.D5)?"outlined":"contained",id:"D5",onClick:f,children:"D5"})]}),Object(j.jsxs)(l.a,{spacing:4,direction:"row",style:{padding:30},children:[Object(j.jsx)(r.a,{variant:1===(null===o||void 0===o?void 0:o.D6)?"outlined":"contained",id:"D6",onClick:f,children:"D6"}),Object(j.jsx)(r.a,{variant:1===(null===o||void 0===o?void 0:o.D7)?"outlined":"contained",id:"D7",onClick:f,children:"D7"})]}),Object(j.jsxs)(l.a,{spacing:4,direction:"row",style:{padding:30},children:[Object(j.jsx)(r.a,{variant:1===(null===o||void 0===o?void 0:o.D8)?"outlined":"contained",id:"D8",onClick:f,children:"D8"}),Object(j.jsx)(r.a,{variant:1===(null===o||void 0===o?void 0:o.D9)?"outlined":"contained",id:"D9",onClick:f,children:"D9"})]}),Object(j.jsxs)("div",{children:["My Socket ID : ",b]}),Object(j.jsxs)("div",{children:["Device ID : ",g]})]}):Object(j.jsx)("div",{children:"NO Device Connected"})})};var D=function(){return Object(j.jsx)(v,{})},b=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,96)).then((function(i){var e=i.getCLS,t=i.getFID,c=i.getFCP,o=i.getLCP,d=i.getTTFB;e(n),t(n),c(n),o(n),d(n)}))};d.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root")),b()}},[[80,1,2]]]);
//# sourceMappingURL=main.e28bb384.chunk.js.map