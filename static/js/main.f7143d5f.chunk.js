(this.webpackJsonpApi=this.webpackJsonpApi||[]).push([[0],{13:function(t,e,n){},21:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(15),o=n.n(a),u=(n(21),n(13),n(6)),i=n(0),j=function(t){var e=t.data;return Object(i.jsxs)("tr",{children:[Object(i.jsxs)("td",{children:[" ",e.id]}),Object(i.jsxs)("td",{children:[" ",e.title]}),Object(i.jsxs)("td",{children:[" ",e.body]})]})},s=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],r=e[1];return Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(t){return t.json()})).then((function(t){r(t),console.log(t)})).catch((function(t){console.log(t)}))})),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("center",{children:" Fetching Data from API "}),Object(i.jsxs)("table",{children:[Object(i.jsx)("thead",{className:"heading",children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Id"}),Object(i.jsx)("th",{children:"Title"}),Object(i.jsx)("th",{children:"Body"})]})}),Object(i.jsx)("tbody",{children:n.map((function(t){return Object(i.jsx)(j,{data:t},t.id)}))})]})]})},l=n(8),d=function(){var t=Object(c.useState)({uid:" ",pid:" ",title:" ",content:" "}),e=Object(u.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(null),o=Object(u.a)(a,2),j=(o[0],o[1],Object(c.useRef)(null));function s(t){var e=Object(l.a)({},n);e[t.target.id]=t.target.value,r(e)}return Object(i.jsx)("center",{children:Object(i.jsxs)("form",{ref:j,onSubmit:function(t){return function(t){t.preventDefault();var e=new FormData(j.current);fetch("https://jsonplaceholder.typicode.com/posts/",{method:"POST",body:e}).then((function(t){return t.json()})).then((function(t){alert("Data successfully added")})).catch((function(t){alert(t)}))}(t)},children:[Object(i.jsx)("input",{type:"text",name:"uid",onChange:function(t){return s(t)},placeholder:" Enter UserId"}),Object(i.jsx)("input",{type:"text",name:"pid",onChange:function(t){return s(t)},placeholder:" Enter Id"}),Object(i.jsx)("input",{type:"text",name:"title",onChange:function(t){return s(t)},placeholder:" Enter Title"}),Object(i.jsx)("input",{type:"text",name:"content",onChange:function(t){return s(t)},placeholder:"Enter data"}),Object(i.jsx)("input",{type:"submit",value:"Submit"})]})})},h=function(){var t=Object(c.useState)({uid:" ",pid:" ",title:" ",content:" "}),e=Object(u.a)(t,2),n=e[0],r=e[1],a=Object(c.useRef)(null);function o(t){var e=Object(l.a)({},n);e[t.target.id]=t.target.value,r(e)}return Object(i.jsxs)("center",{children:[Object(i.jsx)("h4",{children:"Please enter any value that is already exist and you want to update that value"}),Object(i.jsxs)("form",{ref:a,onSubmit:function(t){return function(t){t.preventDefault();var e=new FormData(a.current);fetch("https://jsonplaceholder.typicode.com/posts/1",{method:"PUT",body:e}).then((function(t){return t.json()})).then((function(t){alert("Data updated successfully")})).catch((function(t){alert(t)}))}(t)},children:[Object(i.jsx)("input",{type:"text",name:"uid",onChange:function(t){return o(t)},placeholder:" Enter UserId"}),Object(i.jsx)("input",{type:"text",name:"pid",onChange:function(t){return o(t)},placeholder:" Enter Id"}),Object(i.jsx)("input",{type:"text",name:"title",onChange:function(t){return o(t)},placeholder:" Enter Title"}),Object(i.jsx)("input",{type:"text",name:"content",onChange:function(t){return o(t)},placeholder:"Enter data"}),Object(i.jsx)("input",{type:"submit",value:"Submit"})]})]})},b=n(30),p=n(4),O=Object(p.a)();var x=function(){return Object(i.jsx)("center",{children:Object(i.jsxs)("form",{children:[Object(i.jsx)("input",{type:"button",onClick:function(){return O.push("/Extract")},value:"Fetch Data"}),Object(i.jsx)("h3",{children:"Click button to fetch data"}),Object(i.jsx)("input",{type:"button",onClick:function(){return O.push("/Post")},value:"Create Data"}),Object(i.jsx)("h3",{children:"Click button to create data"}),Object(i.jsx)("input",{type:"button",onClick:function(){return O.push("/Update")},value:"Update Data"}),Object(i.jsx)("h3",{children:"Click button to update data"})]})})};var f=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(b.b,{history:O,children:Object(i.jsxs)(b.c,{children:[Object(i.jsx)(b.a,{path:"/",exact:!0,component:Object(b.d)(x)}),Object(i.jsx)(b.a,{path:"/extract",component:s}),Object(i.jsx)(b.a,{path:"/post",component:d}),Object(i.jsx)(b.a,{path:"/update",component:h})]})})})};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.f7143d5f.chunk.js.map