(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],{19:function(e,t,n){e.exports={button:"commonComponents_button__XXADh",red:"commonComponents_red__19MWl"}},22:function(e,t,n){e.exports={message:"Message_message__8WR15",avatar:"Message_avatar__3FT3j",content:"Message_content__Ltxgc",angle:"Message_angle__1T-oN",text:"Message_text__2fXBO",name:"Message_name__Tzmp0",time:"Message_time__HOFTG"}},27:function(e,t,n){e.exports={links:"PageStyles_links__3Mm-r",preJunior:"PageStyles_preJunior__3nJwL",junior:"PageStyles_junior___5BXl",upperJunior:"PageStyles_upperJunior__GlM6R",innerDiv:"PageStyles_innerDiv__C3LVS",visibleBlock:"PageStyles_visibleBlock__2xGax"}},29:function(e,t,n){e.exports={finalInputClassName:"SuperInputText_finalInputClassName__1OnRG",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},30:function(e,t,n){e.exports={value1:"hw11_value1__1f75k",value2:"hw11_value2__3zmz0",hr:"hw11_hr__2CYto"}},36:function(e,t,n){e.exports={inputClass:"Greeting_inputClass__14GLD",error:"Greeting_error__1uvQ8",button:"Greeting_button__24QRF",text:"Greeting_text__ruB1K"}},42:function(e,t,n){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},43:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},44:function(e,t,n){e.exports={select:"SuperSelect_select__3fEsa",option:"SuperSelect_option__33I2a"}},45:function(e,t,n){e.exports={radio:"SuperRadio_radio__3l3uR",label:"SuperRadio_label__2lqMv"}},46:function(e,t,n){e.exports={dark:"HW12_dark__-yEnK","dark-text":"HW12_dark-text__3aY9r",red:"HW12_red__b8fxn","red-text":"HW12_red-text__Xlm6C",green:"HW12_green__1J_ji","some-text":"HW12_some-text__1-Wyv"}},51:function(e,t,n){e.exports={title:"Title_title__R7nl6"}},52:function(e,t,n){e.exports={buttonPosition:"Affairs_buttonPosition__1vZOn"}},54:function(e,t,n){},55:function(e,t,n){e.exports={button:"styles_button__1Gmr9"}},57:function(e,t,n){e.exports={range:"SuperRange_range__2K0wQ"}},59:function(e,t,n){e.exports={App:"App_App__1q7st"}},70:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(32),s=n.n(r);n(70),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(23),o=n(27),j=n.n(o),l=n(0);var u=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:j.a.innerDiv,children:[Object(l.jsx)(i.b,{exact:!0,to:"/pre-junior/",className:j.a.preJunior,children:"PreJunior"}),Object(l.jsx)(i.b,{exact:!0,to:"/Junior",className:j.a.junior,children:"Junior"}),Object(l.jsx)(i.b,{exact:!0,to:"/Upper-Junior",className:j.a.upperJunior,children:"UpperJunior"}),Object(l.jsx)("div",{className:j.a.visibleBlock})]})})};var b=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"404"}),Object(l.jsx)("div",{children:"Page not found!"}),Object(l.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},d=n(22),O=n.n(d);var x=function(e){return Object(l.jsxs)("div",{className:O.a.message,children:[Object(l.jsx)("img",{className:O.a.avatar,src:e.avatar,alt:""}),Object(l.jsx)("div",{className:O.a.angle}),Object(l.jsxs)("div",{className:O.a.content,children:[Object(l.jsx)("span",{className:O.a.name,children:e.name}),Object(l.jsx)("div",{className:O.a.message,children:e.message}),Object(l.jsx)("div",{className:O.a.time,children:e.time})]})]})},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",m="Some Name",v="some text",f="22:00",p=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(x,{avatar:h,name:m,message:v,time:f})})},_=n(6),g=n(51),C=n.n(g);var N=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("span",{className:C.a.title,children:["* ",e.affair.name," *"]}),Object(l.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})},k=n(52),S=n.n(k),y=n(19),w=n.n(y),T=function(e){return Object(l.jsx)("button",{className:w.a.button,children:e.text})};var E=function(e){var t=e.data.map((function(t){return Object(l.jsx)(N,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n=function(){e.setFilter("all")};return Object(l.jsxs)("div",{children:[t,Object(l.jsxs)("div",{className:S.a.buttonPosition,children:[Object(l.jsx)(T,{onClick:n,text:"All"}),Object(l.jsx)("button",{onClick:n,className:w.a.button,children:"All"}),Object(l.jsx)("button",{onClick:function(){e.setFilter("high")},className:w.a.button,children:"High"}),Object(l.jsx)("button",{onClick:function(){e.setFilter("middle")},className:w.a.button,children:"Middle"}),Object(l.jsx)("button",{onClick:function(){e.setFilter("low")},className:w.a.button,children:"Low"})]})]})},I=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var J=function(){var e=Object(a.useState)(I),t=Object(_.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(_.a)(r,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"#2",Object(l.jsx)(E,{data:j,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}})]})},M=n(12),R=n(36),P=n.n(R),W=function(e){var t=e.name,n=e.setNameCallback,a=e.onEnter,c=e.addUser,r=e.error,s=e.totalUsers;return Object(l.jsxs)("div",{className:P.a.text,children:[Object(l.jsx)("input",{value:t,onChange:n,className:P.a.inputClass,onKeyDown:a}),Object(l.jsx)("span",{children:r}),Object(l.jsx)("button",{onClick:c,className:P.a.button,children:"add"}),Object(l.jsx)("span",{children:s})]})},A=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(_.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(""),j=Object(_.a)(o,2),u=j[0],b=j[1],d=function(){n(s),alert("Hello ".concat(s," !")),i("")},O=t.length;return Object(l.jsx)(W,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),b("")):i(""),b("name is require")},addUser:d,error:u,totalUsers:O,onEnter:function(e){"Enter"===e.key&&s&&d()}})},H=n(98);var D=function(){var e=Object(a.useState)([]),t=Object(_.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"# 3",Object(l.jsx)(A,{users:n,addUserCallback:function(e){var t={_id:Object(H.a)(),name:e};c([].concat(Object(M.a)(n),[t]))}})]})},F=n(9),L=n(13),G=n(29),B=n.n(G),U=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],z=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(L.a)(e,U),j="".concat(B.a.error," ").concat(i||""),u="".concat(B.a.input,"  ").concat(B.a.errorInput," ").concat(s);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",Object(F.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:u},o)),Object(l.jsx)("span",{className:j,children:r})]})},K=n(42),X=n.n(K),q=["red","className"],Q=function(e){var t=e.red,n=e.className,a=Object(L.a)(e,q),c="".concat(t?"".concat(w.a.red," ").concat(w.a.button):w.a.button," ").concat(n);return Object(l.jsx)("button",Object(F.a)({className:c},a))},Y=n(43),Z=n.n(Y),V=["type","onChange","onChangeChecked","className","spanClassName","children"],$=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(L.a)(e,V),s="".concat(Z.a.checkbox," ").concat(a||"");return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",Object(F.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),c&&Object(l.jsx)("span",{className:Z.a.spanClassName,children:c})]})},ee=n(54),te=n.n(ee);var ne=function(){var e=Object(a.useState)(""),t=Object(_.a)(e,2),n=t[0],c=t[1],r=n?"":"write something",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(_.a)(i,2),j=o[0],u=o[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"#4",Object(l.jsxs)("div",{className:X.a.column,children:[Object(l.jsx)(z,{value:n,onChangeText:c,onEnter:s,error:r}),Object(l.jsx)(z,{className:X.a.blue}),Object(l.jsx)(Q,{onClick:s,children:"alert"}),Object(l.jsx)(Q,{className:te.a.default,red:!0,children:"delete "}),Object(l.jsx)(Q,{disabled:!0,children:"disabled"}),Object(l.jsx)($,{onChange:function(){return u(!j)},onChangeChecked:u,children:"test checkbox"}),Object(l.jsx)($,{checked:j,onChange:function(e){return u(!e.currentTarget.checked)}})]})]})},ae=["autoFocus","onBlur","onEnter","spanProps"],ce=["children","onDoubleClick","className"],re=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(L.a)(e,ae),s=Object(a.useState)(!1),i=Object(_.a)(s,2),o=i[0],j=i[1],u=c||{},b=u.children,d=u.onDoubleClick,O=u.className,x=Object(L.a)(u,ce),h="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",O);return Object(l.jsx)(l.Fragment,{children:o?Object(l.jsx)(z,Object(F.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},r)):Object(l.jsx)("span",Object(F.a)(Object(F.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:h},x),{},{children:b||r.value}))})};function se(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ie(e,t){var n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}se("test",{x:"A",y:1});ie("test",{x:"",y:0});var oe=n(55),je=n.n(oe);var le=function(){var e=Object(a.useState)(""),t=Object(_.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"#6",Object(l.jsx)("div",{children:Object(l.jsx)(re,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(l.jsx)(Q,{onClick:function(){se("editable-span-value",n)},className:je.a.button,children:"save"}),Object(l.jsx)(Q,{onClick:function(){c(ie("editable-span-value",""))},children:"restore"})]})};var ue=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(p,{}),Object(l.jsx)(J,{}),Object(l.jsx)(D,{}),Object(l.jsx)(ne,{}),Object(l.jsx)(le,{})]})},be=n(8),de=n(44),Oe=n.n(de),xe=["options","className","onChange","onChangeOption"],he=function(e){var t=e.options,n=e.className,a=e.onChange,c=e.onChangeOption,r=Object(L.a)(e,xe),s=t?t.map((function(e,t){return Object(l.jsx)("option",{className:Oe.a.option,value:e,children:e},e+"-"+t)})):[],i=Oe.a.select+(n?""+n:"");return Object(l.jsx)("select",Object(F.a)(Object(F.a)({className:i,onChange:function(e){a&&a(e),c&&c(e.currentTarget.value)}},r),{},{children:s}))},me=n(45),ve=n.n(me),fe=["type","name","options","value","onChange","onChangeOption"],pe=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=e.onChange,r=e.onChangeOption,s=Object(L.a)(e,fe),i=function(e){c&&c(e),r&&r(e.currentTarget.value)},o=ve.a.radio,j=n?n.map((function(e,n){return Object(l.jsxs)("label",{className:ve.a.label,children:[Object(l.jsx)("input",Object(F.a)({type:"radio",className:o,name:t,checked:e===a,value:e,onChange:i},s)),e]},t+"-"+n)})):[];return Object(l.jsx)(l.Fragment,{children:j})},_e=["x","y","z"];var ge=function(){var e=Object(a.useState)(_e[1]),t=Object(_.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"#7",Object(l.jsx)("div",{children:Object(l.jsx)(he,{options:_e,value:n,onChangeOption:c})}),Object(l.jsx)("div",{children:Object(l.jsx)(pe,{name:"radio",options:_e,value:n,onChangeOption:c})})]})},Ce=function(e,t){switch(t.type){case"sort":var n=Object(M.a)(e).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return"up"===t.payload?n:n.reverse();case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},Ne=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ke=function(){var e=Object(a.useState)(Ne),t=Object(_.a)(e,2),n=t[0],c=t[1],r=n.map((function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("span",{children:e.name})},e._id)}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"#8",r,Object(l.jsxs)("div",{children:[Object(l.jsx)(Q,{onClick:function(){return c(Ce(Ne,{type:"sort",payload:"up"}))},children:"sort up"}),Object(l.jsx)(Q,{onClick:function(){return c(Ce(Ne,{type:"sort",payload:"down"}))},children:"sort down"}),Object(l.jsx)(Q,{onClick:function(){return c(Ce(Ne,{type:"check",payload:18}))},children:"check 18"})]})]})};var Se=function(){var e=Object(a.useState)(0),t=Object(_.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),s=Object(_.a)(r,2),i=s[0],o=s[1],j=Object(a.useState)(!1),u=Object(_.a)(j,2),b=u[0],d=u[1],O=function(){clearInterval(n)},x=(null===i||void 0===i?void 0:i.toLocaleTimeString())||Object(l.jsx)("br",{}),h=(null===i||void 0===i?void 0:i.toLocaleDateString())||Object(l.jsx)("br",{});return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},children:x}),b?Object(l.jsx)("div",{children:h}):Object(l.jsx)("br",{}),Object(l.jsx)(Q,{onClick:function(){O();var e=+setInterval((function(){o(new Date)}),1e3);c(e)},children:"start"}),Object(l.jsx)(Q,{onClick:O,children:"stop"})]})};var ye=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"#9",Object(l.jsx)(Se,{})]})},we=n(21),Te={isLoading:!0},Ee=function(e){return{type:"IS-LOADING",isLoading:e}},Ie=n.p+"static/media/preloader.ea356991.svg",Je=function(){return Object(l.jsx)("div",{style:{backgroundColor:"white"},children:Object(l.jsx)("img",{src:Ie})})};var Me=function(){var e=Object(we.c)((function(e){return e.loading.isLoading})),t=Object(we.b)();return setTimeout((function(){t(Ee(!1))}),1e3),Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"#10",e?Object(l.jsx)("div",{children:Object(l.jsx)(Je,{})}):Object(l.jsx)("div",{children:Object(l.jsx)(Q,{onClick:function(){t(Ee(!0))},children:"set loading..."})})]})},Re=n(97),Pe=n(57),We=n.n(Pe),Ae=n(100),He=["type","onChange","onChangeRange","className"],De=function(e){e.type,e.onChange,e.onChangeRange;var t=e.className;Object(L.a)(e,He),"".concat(We.a.range," ").concat(t||"");return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(Ae.a,{width:200,children:Object(l.jsx)(Re.a,{size:"medium",defaultValue:70,"aria-label":"Small",valueLabelDisplay:"auto"})})})},Fe=n(58),Le=n.n(Fe),Ge=(n(82),function(e){var t=e.min,n=e.max,c=e.onChange,r=Object(a.useState)(t),s=Object(_.a)(r,2),i=s[0],o=s[1],j=Object(a.useState)(n),u=Object(_.a)(j,2),b=u[0],d=u[1],O=Object(a.useRef)(null),x=Object(a.useRef)(null),h=Object(a.useRef)(null),m=Object(a.useCallback)((function(e){return Math.round((e-t)/(n-t)*100)}),[t,n]);return Object(a.useEffect)((function(){if(x.current){var e=m(i),t=m(+x.current.value);h.current&&(h.current.style.left="".concat(e,"%"),h.current.style.width="".concat(t-e,"%"))}}),[i,m]),Object(a.useEffect)((function(){if(O.current){var e=m(+O.current.value),t=m(b);h.current&&(h.current.style.width="".concat(t-e,"%"))}}),[b,m]),Object(a.useEffect)((function(){c({min:i,max:b})}),[i,b,c]),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("input",{type:"range",min:t,max:n,value:i,ref:O,onChange:function(e){var t=Math.min(+e.target.value,b-1);o(t),e.target.value=t.toString()},className:Le()("thumb thumb--zindex-3",{"thumb--zindex-5":i>n-100})}),Object(l.jsx)("input",{type:"range",min:t,max:n,value:b,ref:x,onChange:function(e){var t=Math.max(+e.target.value,i+1);d(t),e.target.value=t.toString()},className:"thumb thumb--zindex-4"}),Object(l.jsxs)("div",{className:"slider",children:[Object(l.jsx)("div",{className:"slider__track"}),Object(l.jsx)("div",{ref:h,className:"slider__range"}),Object(l.jsx)("div",{className:"slider__left-value",children:i}),Object(l.jsx)("div",{className:"slider__right-value",children:b})]})]})}),Be=n(30),Ue=n.n(Be);var ze=function(){var e=Object(a.useState)(0),t=Object(_.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(100),s=Object(_.a)(r,2);return s[0],s[1],Object(l.jsxs)("div",{className:Ue.a.mainDiv,children:[Object(l.jsx)("hr",{}),"#11",Object(l.jsx)("div",{className:Ue.a.value1,children:Object(l.jsxs)("span",{children:[n,Object(l.jsx)(De,{onChangeRange:c})]})}),Object(l.jsx)("div",{className:Ue.a.value2,children:Object(l.jsx)(Ge,{min:0,max:100,onChange:function(e){var t=e.min,n=e.max;return"min = ".concat(t,", max = ").concat(n)}})}),Object(l.jsx)("hr",{className:Ue.a.hr})]})};var Ke=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(ge,{}),Object(l.jsx)(ke,{}),Object(l.jsx)(ye,{}),Object(l.jsx)(Me,{}),Object(l.jsx)(ze,{})]})},Xe=n(46),qe=n.n(Xe),Qe={theme:"dark"};var Ye=function(){var e=Object(we.c)((function(e){return e.themeReducer.theme})),t=Object(we.b)(),n=function(e){t(function(e){return{type:"SWITCH-THEME",theme:e}}(e))};return Object(l.jsxs)("div",{className:qe.a[e],children:[Object(l.jsx)("hr",{}),Object(l.jsx)("span",{className:qe.a[e+"-text"],children:"#12"}),Object(l.jsx)(Q,{onClick:function(){return n("red")},children:"Red"}),Object(l.jsx)(Q,{onClick:function(){return n("dark")},children:"Dark"}),Object(l.jsx)(Q,{onClick:function(){return n("green")},children:"Green"}),Object(l.jsx)("hr",{})]})};var Ze=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(Ye,{})})},Ve="/pre-junior",$e="/Junior",et="/Upper-Junior";var tt=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(be.d,{children:[Object(l.jsx)(be.b,{path:"/",exact:!0,render:function(){return Object(l.jsx)(be.a,{to:Ve})}}),Object(l.jsx)(be.b,{path:Ve,render:function(){return Object(l.jsx)(ue,{})}}),Object(l.jsx)(be.b,{path:"/",exact:!0,render:function(){return Object(l.jsx)(be.a,{to:$e})}}),Object(l.jsx)(be.b,{path:$e,render:function(){return Object(l.jsx)(Ke,{})}}),Object(l.jsx)(be.b,{path:"/",exact:!0,render:function(){return Object(l.jsx)(be.a,{to:et})}}),Object(l.jsx)(be.b,{path:et,render:function(){return Object(l.jsx)(Ze,{})}}),Object(l.jsx)(be.b,{render:function(){return Object(l.jsx)(b,{})}})]})})};var nt=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(u,{}),Object(l.jsx)(tt,{})]})})},at=n(59),ct=n.n(at);var rt=function(){return Object(l.jsxs)("div",{className:ct.a.App,children:[Object(l.jsx)("div",{children:"Simple Tasks"}),Object(l.jsx)(nt,{})]})},st=n(47),it=Object(st.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS-LOADING":return Object(F.a)(Object(F.a)({},e),{},{isLoading:t.isLoading});default:return e}},themeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SWITCH-THEME":return Object(F.a)(Object(F.a)({},e),{},{theme:t.theme});default:return e}}}),ot=Object(st.b)(it),jt=ot;window.store=ot,s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(we.a,{store:jt,children:Object(l.jsx)(rt,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[83,1,2]]]);
//# sourceMappingURL=main.d023b16b.chunk.js.map