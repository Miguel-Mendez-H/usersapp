(this.webpackJsonpusersapp=this.webpackJsonpusersapp||[]).push([[0],{64:function(e,t,n){},65:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(22),s=n.n(a),r=(n(64),n(65),n(106)),o=n(105),d=n(107),l=n(108),h=n(2);function j(){return Object(h.jsx)(o.a,{sx:{flexGrow:1},children:Object(h.jsx)(r.a,{position:"static",children:Object(h.jsx)(d.a,{children:Object(h.jsx)(l.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Users"})})})})}var b=n(109),m=n(112),x=n(111),u=n(110),p=(n(71),n(12)),O=n(103),f=n(102),v={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function g(e){var t=i.a.useState(!1),n=Object(p.a)(t,2),c=n[0],a=n[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)(O.a,{onClick:function(){return a(!0)},children:"Open modal"}),Object(h.jsx)(f.a,{open:c,onClose:function(){return a(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(h.jsxs)(o.a,{sx:v,children:[Object(h.jsxs)(l.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:["Name:",e.children.name]}),Object(h.jsxs)(l.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:["Username: ",e.children.username]}),Object(h.jsxs)(l.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:["Email: ",e.children.email]}),Object(h.jsxs)(l.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:["Phone: ",e.children.phone]}),Object(h.jsxs)(l.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:["Website: ",e.children.website]}),Object(h.jsx)(l.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Address"}),Object(h.jsxs)(l.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:["Street: ",e.children.address.street]}),Object(h.jsxs)(l.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:["Suite: ",e.children.address.suite]}),Object(h.jsxs)(l.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:["City: ",e.children.address.city]}),Object(h.jsxs)(l.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:["Zipcode: ",e.children.address.zipcode]})]})})]})}var w=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return i(e)}))}),[]),n};o.a;function y(){return w().map((function(e){return Object(h.jsx)("div",{className:"singleCard",children:Object(h.jsxs)(b.a,{sx:{minWidth:275},children:[Object(h.jsx)(u.a,{component:"img",height:"140",image:"https://images.unsplash.com/photo-1634492599187-b89b0dfd1e50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",alt:"green iguana"}),Object(h.jsxs)(x.a,{children:[Object(h.jsxs)(l.a,{sx:{mb:1.5},color:"text.secondary",children:[Object(h.jsx)("b",{children:"Name:"})," ",e.name]}),Object(h.jsxs)(l.a,{sx:{mb:1.5},color:"text.secondary",children:[Object(h.jsx)("b",{children:"Username:"})," ",e.username]}),Object(h.jsxs)(l.a,{sx:{mb:1.5},color:"text.secondary",children:[Object(h.jsx)("b",{children:"Email:"})," ",e.email]}),Object(h.jsxs)(l.a,{sx:{mb:1.5},color:"text.secondary",children:[Object(h.jsx)("b",{children:"Phone:"})," ",e.phone]}),Object(h.jsxs)(l.a,{sx:{mb:1.5},color:"text.secondary",children:[Object(h.jsx)("b",{children:"Website:"})," ",e.website]})]}),Object(h.jsx)(m.a,{children:Object(h.jsx)(g,{children:e})})]})})}))}var C=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(j,{}),Object(h.jsx)("div",{className:"Container Cards",children:Object(h.jsx)(y,{})})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,114)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root")),S()}},[[72,1,2]]]);
//# sourceMappingURL=main.0a460451.chunk.js.map