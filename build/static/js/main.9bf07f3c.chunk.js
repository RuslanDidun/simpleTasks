(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,function(e,t,n){e.exports={message:"Message_message__8WR15",avatar:"Message_avatar__3FT3j",content:"Message_content__Ltxgc",angle:"Message_angle__1T-oN",text:"Message_text__2fXBO",name:"Message_name__Tzmp0",time:"Message_time__HOFTG"}},,,,function(e,t,n){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},function(e,t,n){e.exports={finalInputClassName:"SuperInputText_finalInputClassName__1OnRG",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},,function(e,t,n){e.exports={inputClass:"Greeting_inputClass__14GLD",error:"Greeting_error__1uvQ8",button:"Greeting_button__24QRF",text:"Greeting_text__ruB1K"}},,function(e,t,n){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},,function(e,t,n){e.exports={App:"App_App__1Sc4o"}},function(e,t,n){e.exports={text:"Affairs_text__2R7Ad"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(14),s=n.n(r),i=(n(22),n(15)),o=n.n(i),l=n(3),j=n.n(l),u=n(0);var b=function(e){return Object(u.jsxs)("div",{className:j.a.message,children:[Object(u.jsx)("img",{className:j.a.avatar,src:e.avatar,alt:""}),Object(u.jsx)("div",{className:j.a.angle}),Object(u.jsxs)("div",{className:j.a.content,children:[Object(u.jsx)("span",{className:j.a.name,children:e.name}),Object(u.jsx)("div",{className:j.a.message,children:e.message}),Object(u.jsx)("div",{className:j.a.time,children:e.time})]})]})},d="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Some Name",x="some text",m="22:00",O=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(b,{avatar:d,name:h,message:x,time:m})})},_=n(2),p=n(16),f=n.n(p);var g=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("span",{className:f.a.text,children:["* ",e.affair.name," *"]}),Object(u.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var v=function(e){var t=e.data.map((function(t){return Object(u.jsx)(g,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(u.jsxs)("div",{children:[t,Object(u.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},C=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var k=function(){var e=Object(a.useState)(C),t=Object(_.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(_.a)(r,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 2",Object(u.jsx)(v,{data:l,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},N=n(17),S=n(10),w=n.n(S),y=function(e){var t=e.name,n=e.setNameCallback,a=e.onEnter,c=e.addUser,r=e.error,s=e.totalUsers;return Object(u.jsxs)("div",{className:w.a.text,children:[Object(u.jsx)("input",{value:t,onChange:n,className:w.a.inputClass,onKeyDown:a}),Object(u.jsx)("span",{children:r}),Object(u.jsx)("button",{onClick:c,className:w.a.button,children:"add"}),Object(u.jsx)("span",{children:s})]})},T=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(_.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(""),l=Object(_.a)(o,2),j=l[0],b=l[1],d=function(){n(s),alert("Hello ".concat(s," !")),i("")},h=t.length;return Object(u.jsx)(y,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),b("")):i(""),b("name is require")},addUser:d,error:j,totalUsers:h,onEnter:function(e){"Enter"===e.key&&s&&d()}})},A=n(26);var E=function(){var e=Object(a.useState)([]),t=Object(_.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 3",Object(u.jsx)(T,{users:n,addUserCallback:function(e){var t={_id:Object(A.a)(),name:e};c([].concat(Object(N.a)(n),[t]))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},I=n(4),F=n(5),M=n(8),G=n.n(M),B=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],W=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(F.a)(e,B),l="".concat(G.a.error," ").concat(i||""),j="".concat(G.a.input,"  ").concat(G.a.errorInput," ").concat(s);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(I.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:j},o)),Object(u.jsx)("span",{className:l,children:r})]})},H=n(12),U=n.n(H),K=n(7),R=n.n(K),J=["red","className"],X=function(e){var t=e.red,n=e.className,a=Object(F.a)(e,J),c="".concat(t?R.a.red:R.a.default," ").concat(n);return Object(u.jsx)("button",Object(I.a)({className:c},a))},L=n(13),P=n.n(L),q=["type","onChange","onChangeChecked","className","spanClassName","children"],z=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(F.a)(e,q),s="".concat(P.a.checkbox," ").concat(a||"");return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(I.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),c&&Object(u.jsx)("span",{className:P.a.spanClassName,children:c})]})};var D=function(){var e=Object(a.useState)(""),t=Object(_.a)(e,2),n=t[0],c=t[1],r=n?"":"write something",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(_.a)(i,2),l=o[0],j=o[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 4",Object(u.jsxs)("div",{className:U.a.column,children:[Object(u.jsx)(W,{value:n,onChangeText:c,onEnter:s,error:r}),Object(u.jsx)(W,{className:U.a.blue}),Object(u.jsx)(X,{onClick:s,children:"alert"}),Object(u.jsx)(X,{className:R.a.default,red:!0,children:"delete "}),Object(u.jsx)(X,{disabled:!0,children:"disabled"}),Object(u.jsx)(z,{onChange:function(){return j(!l)},onChangeChecked:j,children:"test checkbox "}),Object(u.jsx)(z,{checked:l,onChange:function(e){return j(!e.currentTarget.checked)}})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var Q=function(){return Object(u.jsx)("div",{children:"// add NavLinks"})};var Z=function(){return Object(u.jsx)("div",{children:"// add routes"})};var Y=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(Q,{}),Object(u.jsx)(Z,{})]})};var $=function(){return Object(u.jsxs)("div",{className:o.a.App,children:[Object(u.jsx)("div",{children:"react homeworks:"}),Object(u.jsx)(O,{}),Object(u.jsx)(k,{}),Object(u.jsx)(E,{}),Object(u.jsx)(D,{}),Object(u.jsx)(Y,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)($,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[24,1,2]]]);
//# sourceMappingURL=main.9bf07f3c.chunk.js.map