(this["webpackJsonpsindicarne-grid"]=this["webpackJsonpsindicarne-grid"]||[]).push([[0],{145:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(88),c=a.n(r),l=(a(99),a(0));function o(){return Object(l.jsxs)("div",{className:"fadeInUp text-shadow border-t-4 border-green divide-y-2 text-center gap-4   bg-header-blue py-4 w-full flex flex-col text-gray-300 font-medium items-center justify-center ",children:[Object(l.jsxs)("div",{className:"gap-4 ",children:[Object(l.jsx)("p",{children:"Sindicato de la Carne R\xedo Cuarto"}),Object(l.jsx)("p",{children:"Lavalle 992, Esq. Bolivar - R\xedo Cuarto - C\xf3rdoba"}),Object(l.jsx)("p",{children:"0358-4649-942"}),Object(l.jsx)("p",{children:"sin.dela.carnerioiv@hotmail.com"}),Object(l.jsx)("a",{className:"font-bold",href:"https://sindicarne.com.ar/politica_privacidad",children:"Leer politica de privacidad de nuestra app "})]}),Object(l.jsx)("div",{className:"py-2  w-2/3 lg:w-1/3 border-0 border-green",children:Object(l.jsxs)("p",{className:"w-full",children:["Desarrollado por ",Object(l.jsxs)("a",{href:"https://www.itecriocuarto.org.ar/",className:"font-bold ",children:[Object(l.jsx)("span",{className:"text-red-400",children:"i"}),Object(l.jsx)("span",{className:"text-blue-400",children:"T"}),Object(l.jsx)("span",{className:"text-yellow-400",children:"e"}),Object(l.jsx)("span",{className:"text-green-400",children:"c"})," LABs"]})]})})]})}function i(){return Object(l.jsx)("div",{className:"fadeInDown shadow-2xl border-b-8 border-green bg-header-blue py-4 w-full flex items-center justify-center ",children:Object(l.jsx)("img",{alt:"sindicato de la carne",className:"w-2/3 md:w-2/4 lg:w-1/5",src:"/sindicarne-grid/assets/logo.png"})})}var u=a(4),d=a.n(u),j=a(8),b=a(3),x=a(5),f=function(){var e=Object(j.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=[],t&&1==t.ok){e.next=3;break}return e.abrupt("return",a);case 3:return e.next=5,fetch("https://api.sindicarne.com.ar/postulantes",{headers:{"Content-Type":"application/json","x-auth-token":t.token}}).then((function(e){return e.json()})).then((function(e){a=e}));case 5:return e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=a(89),m=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=JSON.parse(localStorage.getItem("token"))){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Object(p.a)(t.token);case 5:if(!(e.sent.exp<Date.now()/1e3)){e.next=8;break}return e.abrupt("return",!0);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=a(13);var h=Object(n.createContext)(),v=function(e){var t=Object(n.useState)({status:!1,currentIndex:0}),a=Object(b.a)(t,2),s=a[0],r=a[1],c=Object(n.useState)([]),o=Object(b.a)(c,2),i=o[0],u=o[1],d=Object(n.useState)(i),j=Object(b.a)(d,2),x=j[0],f=j[1];return Object(l.jsx)(h.Provider,{value:{filteredPostulantesState:[x,f],postulantesState:[i,u],modalPostulanteState:[s,r]},children:e.children})},g=a(94),N=function(e){var t=e.postulante,a=Object(n.useContext)(h),s=a.modalPostulanteState,r=a.postulantesState,c=Object(b.a)(s,2),o=c[0],i=c[1],u=Object(b.a)(r,2),d=u[0];u[1];return Object(l.jsxs)("div",{className:" w-80 lg:w-96 p-6 text-center  flex items-center  justify-center ",children:[Object(l.jsx)("div",{className:"w-1/6 select-none\t",children:Object(l.jsx)(g.a,{className:"text-shadow rounded-full card-shadow font-bold",name:t.nombrePostulante,size:"50"})}),Object(l.jsxs)("div",{className:"ml-2 w-4/6  text-left flex flex-col items-center",children:[Object(l.jsx)("p",{className:"font-bold text-center",children:t.nombrePostulante}),Object(l.jsxs)("span",{children:["DNI: ",Object(l.jsx)("span",{className:"font-bold",children:t.dniPostulante})]}),Object(l.jsxs)("span",{children:["Estado: ",1==t.activoPostulante?Object(l.jsx)("span",{className:"text-green-500  font-bold",children:"Activo"}):Object(l.jsx)("span",{className:"text-red-500  font-bold",children:"Inactivo"})]})]}),Object(l.jsx)("div",{className:"text-center w-1/6 ",children:Object(l.jsxs)("p",{className:"flex text-xs cursor-pointer items-center",onClick:function(){d.map((function(e,a){e.idPostulante==t.idPostulante&&i(Object(O.a)(Object(O.a)({},o),{},{status:!0,currentIndex:a}))}))},children:[Object(l.jsx)("i",{className:"pr-1 fas fa-info-circle text-base text-blue  "})," VER"]})})]})},w=function(){var e=Object(j.a)(d.a.mark((function e(t,a,n){var s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=[],t&&1==t.ok){e.next=3;break}return e.abrupt("return",s);case 3:return e.next=5,fetch("https://api.sindicarne.com.ar/postulantes/".concat(a,"/status"),{method:"PUT",headers:{"Content-Type":"application/json","x-auth-token":t.token},body:JSON.stringify({status:1==n?"active":"inactive"})}).then((function(e){return e.json()})).then((function(e){s=e})).catch((function(e){s=e}));case 5:return e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();function y(e){var t=e.description,a=e.value,n=e.icon;return Object(l.jsxs)("div",{className:"flex flex-col pb-2 mb-4 rounded-xl text-gray-700 border-b-2 border-green px-4",children:[Object(l.jsxs)("span",{className:"font-bold",children:[Object(l.jsx)("i",{className:"text-gray-700 "+n}),Object(l.jsx)("span",{className:"pl-2",children:t})]}),Object(l.jsx)("span",{className:"pl-2 text-gray-800 ",children:a})]})}var S=function(e){var t;return(t=e.split("-").reverse())[0]=t[0].substring(0,2),t.join(" / ")};function k(e){var t=e.postulante,a=Object(n.useContext)(h),s=a.modalPostulanteState,r=a.postulantesState,c=Object(b.a)(s,2),o=c[0],i=c[1],u=Object(b.a)(r,2),p=(u[0],u[1]),v=Object(n.useState)(1==t.activoPostulante),g=Object(b.a)(v,2),N=g[0],k=g[1],C=Object(n.useState)(!1),I=Object(b.a)(C,2),P=I[0],E=I[1],J=Object(n.useState)(!1),D=Object(b.a)(J,2),F=D[0],L=D[1],T=Object(n.useState)(),A=Object(b.a)(T,2),B=A[0],R=A[1],U=Object(x.f)(),z=function(){var e=Object(j.a)(d.a.mark((function e(){var a,n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=JSON.parse(localStorage.getItem("token")),e.t0=!a,e.t0){e.next=7;break}return e.next=5,m();case 5:e.t1=e.sent,e.t0=1==e.t1;case 7:if(!e.t0){e.next=9;break}U.replace("/auth");case 9:return e.next=11,w(a,t.idPostulante,N);case 11:if(!(n=e.sent)||200!=n.status){e.next=21;break}return e.next=15,f(a);case 15:s=e.sent,p(s),E(!1),R(!1),e.next=22;break;case 21:R(!0);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"fadeIn h-full flex flex-col items-center pt-2 text-left ",children:[Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)("div",{className:"pb-8 flex items-center justify-center",children:Object(l.jsx)("p",{className:"text-center  text-xl font-bold text-gray-800 border-b-2 border-green max-w-min",children:"INFO"})}),Object(l.jsx)(y,{icon:"fas fa-user",description:"Nombre",value:t.nombrePostulante}),Object(l.jsx)(y,{icon:"fas fa-id-card",description:"DNI",value:t.dniPostulante}),Object(l.jsx)(y,{icon:"fas fa-calendar-alt",description:"Fecha de nacimiento",value:S(t.fnacimientoPostulante)}),Object(l.jsx)(y,{icon:"fas fa-envelope",description:"Email",value:t.emailPostulante}),Object(l.jsx)(y,{icon:"fas fa-phone-alt",description:"Tel\xe9fono / Celular",value:t.telPostulante}),Object(l.jsx)(y,{icon:"fas fa-building",description:"Empresa",value:t.empresaPostulante}),Object(l.jsx)(y,{icon:"fas fa-users",description:"Grupo familiar",value:0==t.estadocivil?"No":"Si"}),Object(l.jsxs)("div",{className:"flex flex-col pb-2 mb-4 rounded-xl text-gray-700 border-b-2 border-green px-4",children:[Object(l.jsxs)("div",{className:"flex justify-between",children:[Object(l.jsxs)("span",{className:"font-bold",children:[Object(l.jsx)("i",{className:"text-gray-700 fas fa-users"}),Object(l.jsx)("span",{className:"pl-2",children:"Estado"})]}),Object(l.jsxs)("span",{onClick:function(){E(!P),L(!1),R(null),k(t.activoPostulante)},className:"transition cursor-pointer outline-none text-xs hover-press-animation shadow-2xl  ".concat(1==P?"text-green ":"text-blue"),children:[Object(l.jsx)("i",{className:"fas fa-pencil-alt text-xl  "}),"Editar"]})]}),Object(l.jsxs)("div",{className:"flex  pl-2 pt-4 pb-2 justify-between ",children:[Object(l.jsx)("div",{className:"flex",children:1==N?Object(l.jsx)("p",{className:"transition duration-500 text-green-400 font-bold",children:"Activo"}):Object(l.jsx)("p",{className:"transition duration-500 text-red-500 font-bold",children:"Inactivo"})}),1==P?Object(l.jsx)("div",{className:"flex transition fadeIn  ",children:Object(l.jsx)("label",{htmlFor:"toogleA",className:"flex items-center cursor-pointer",children:Object(l.jsxs)("div",{className:"relative",children:[Object(l.jsx)("input",{onClick:function(){k(!N),L(1!=F)},id:"toogleA",type:"checkbox",className:"sr-only "}),Object(l.jsx)("div",{className:"w-10 h-4 bg-gray-400 rounded-full shadow-inner"}),Object(l.jsx)("div",{className:"dot absolute w-6 h-6 ".concat(1==N?" bg-green-400 ":" bg-red-400"," rounded-full shadow -left-1 -top-1 transition")})]})})}):""]}),1==B?Object(l.jsxs)("span",{className:"flex items-center justify-center text-red-400 font-semibold text-xs text-shadow-sm uppercase py-1",children:[Object(l.jsx)("i",{className:"fas fa-times"}),Object(l.jsx)("p",{className:"pl-2",children:"Intente m\xe1s tarde"})]}):0==B?Object(l.jsxs)("p",{className:"flex items-center justify-center text-green-400 font-semibold text-shadow-sm text-sm",children:[Object(l.jsx)("i",{className:"fas fa-check"}),Object(l.jsx)("p",{className:"pl-2",children:"Se actualiz\xf3 el estado"})]}):""]})]}),Object(l.jsxs)("div",{className:"flex w-full justify-between px-4",children:[Object(l.jsxs)("div",{onClick:function(){return i(Object(O.a)(Object(O.a)({},o),{},{status:!o.status}))},className:"cursor-pointer h-12 w-12  text-center transition fadeIn transition relative",children:[Object(l.jsx)("i",{className:"transition fas fa-angle-double-left absolute left-0 right-0 text-blue  hover-text-green font-bold text-shadow-sm  press-animation\t text-4xl "}),Object(l.jsx)("p",{className:"text-xs text-gray-800 absolute bottom-0 left-0 right-0",children:"Volver"})]}),1==F&&1==P?Object(l.jsxs)("div",{onClick:z,className:"h-12 w-12 pt-1 text-center transition fadeIn transition relative",children:[Object(l.jsx)("i",{className:"transition far fa-save absolute text-blue left-0 right-0 hover-text-green font-bold text-shadow-sm  press-animation\t text-3xl "}),Object(l.jsx)("p",{className:"text-xs text-gray-800 absolute bottom-0 left-0 right-0",children:"Guardar"})]}):""]})]})}var C=function(e){var t=e.data,a=Object(n.useState)(""),s=Object(b.a)(a,2),r=s[0],c=s[1],o=Object(n.useContext)(h).filteredPostulantesState,i=Object(b.a)(o,2),u=(i[0],i[1]);return Object(n.useEffect)((function(){u("object"==typeof t&&t.filter((function(e){return(""==r||e.nombrePostulante.toLowerCase().includes(r.toLowerCase())||!!e.dniPostulante.toLowerCase().includes(r.toLowerCase()))&&e})))}),[r]),Object(l.jsxs)("div",{className:"relative",children:[Object(l.jsx)("input",{value:r,onChange:function(e){return c(e.target.value)},type:"text",onBlur:function(e){return e.target.placeholder="Nombre / DNI"},onSelect:function(e){return e.target.placeholder=""},className:"px-6 rounded border-2 py-2 border-gray-400 focus-border-green outline-none text-center w-full",placeholder:"Nombre / DNI"}),""!=r&&Object(l.jsx)("div",{onClick:function(){return c("")},className:"hover:text-red-400  transition fadeIn cursor-pointer select-none absolute top-1/2  transform -translate-y-1/2 right-3 font-bold text-xl text-gray-600",children:"X"})]})},I=function(){var e=Object(n.useState)(!0),t=Object(b.a)(e,2),a=t[0],s=t[1],r=Object(n.useContext)(h),c=r.modalPostulanteState,o=r.postulantesState,i=r.filteredPostulantesState,u=Object(b.a)(c,2),p=u[0],O=(u[1],Object(b.a)(o,2)),v=O[0],g=O[1],w=Object(b.a)(i,2),y=w[0],S=(w[1],Object(x.f)());return Object(n.useEffect)(Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=JSON.parse(localStorage.getItem("token")),e.t0=!t,e.t0){e.next=7;break}return e.next=5,m();case 5:e.t1=e.sent,e.t0=1==e.t1;case 7:if(!e.t0){e.next=9;break}S.replace("/auth");case 9:return e.t2=g,e.next=12,f(t);case 12:e.t3=e.sent,(0,e.t2)(e.t3),v&&s(!1);case 15:case"end":return e.stop()}}),e)}))),[]),Object(l.jsx)("div",{className:"flex flex-col w-full  items-center justify-center pb-10 mt-6",children:Object(l.jsx)("div",{className:"fadeIn h-full rounded-md glass card-shadow w-5/6 lg:w-1/2   pb-10 py-6 my-2 lg:my-6 flex flex-col items-center justify-center ",children:1==a?Object(l.jsxs)("div",{className:"h-80 flex flex-col items-center justify-center gap-2",children:[Object(l.jsx)("p",{className:"uppercase text-semibold ",children:"Cargando"}),Object(l.jsx)("div",{className:" lds-dual-ring-blue\ttext-shadow "})]}):0==p.status?Object(l.jsxs)("div",{className:"fadeIn fadeOutflex w-full text-gray-800 flex flex-col items-center justify-center ",children:[Object(l.jsxs)("div",{className:" pb-4 flex flex-col items-center justify-center",children:[Object(l.jsx)("p",{className:" max-w-min font-bold  uppercase border-b-2 border-green text-lg",children:"Postulantes"}),Object(l.jsx)("div",{className:"w-3/4 pt-4",children:Object(l.jsx)(C,{data:v})})]}),Object(l.jsx)("div",{children:v.length>0?y.map((function(e){return e?Object(l.jsx)(N,{postulante:e}):""})):Object(l.jsx)("p",{className:"text-center px-10",children:"No hay postulantes cargados en la base de datos."})})]}):Object(l.jsx)(k,{postulante:v[p.currentIndex]})})})},P=function(){var e=Object(j.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.sindicarne.com.ar/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:t.username,password:t.password})}).then((function(e){return e.json()})).then((function(e){a=e})).catch((function(e){a=e}));case 2:return e.abrupt("return",a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=function(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(f){return console.log(f),t}})),s=Object(b.a)(a,2),r=s[0],c=s[1];return[r,function(t){try{var a=t instanceof Function?t(r):t;c(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(f){console.log(f)}}]}("token",null),t=Object(b.a)(e,2),a=(t[0],t[1]),s=Object(n.useState)({username:"",password:""}),r=Object(b.a)(s,2),c=r[0],o=r[1],i=Object(n.useState)(""),u=Object(b.a)(i,2),f=u[0],p=u[1],h=Object(x.f)();Object(n.useEffect)(Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=JSON.parse(localStorage.getItem("token")),e.t0=t,!e.t0){e.next=7;break}return e.next=5,m();case 5:e.t1=e.sent,e.t0=0==e.t1;case 7:if(!e.t0){e.next=9;break}h.replace("/");case 9:return e.next=11,m();case 11:if(e.t2=e.sent,1!=e.t2){e.next=14;break}p("El login expir\xf3. Ingrese nuevamente.");case 14:case"end":return e.stop()}}),e)}))),[]);var v=function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,P(c);case 3:null!=(n=e.sent)&&1==n.ok?(a(n),h.replace("/")):(p(n.message),o({username:"",password:""}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"flex items-center justify-center gap-4 flex-col  my-20 cursor-pointer p-4 rounded ",children:[Object(l.jsxs)("form",{onChange:function(){return p(!1)},onSubmit:v,className:"flex flex-col",children:[Object(l.jsxs)("label",{className:"flex flex-col",children:[Object(l.jsx)("span",{children:"Usuario: "}),Object(l.jsx)("input",{type:"text",value:c.username,onChange:function(e){return o(Object(O.a)(Object(O.a)({},c),{},{username:e.target.value}))},className:"border-2 border-gray-500 outline-none  py-2 text-center"})]}),Object(l.jsxs)("label",{className:"flex flex-col\t",children:[Object(l.jsx)("span",{children:"Contrase\xf1a: "}),Object(l.jsx)("input",{type:"password",value:c.password,onChange:function(e){return o(Object(O.a)(Object(O.a)({},c),{},{password:e.target.value}))},className:"border-2 border-gray-500 outline-none py-2 text-center"})]}),Object(l.jsx)("button",{className:"text-center self-center mt-4 px-4 py-2 bg-gray-500 rounded ",children:"Ingresar"})]}),""!=f?Object(l.jsx)("p",{children:f}):""]})},J=a(28);var D=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{}),Object(l.jsx)(J.a,{children:Object(l.jsxs)(x.c,{children:[Object(l.jsx)(x.a,{exact:!0,path:"/",children:Object(l.jsx)(I,{})}),Object(l.jsx)(x.a,{path:"/auth",children:Object(l.jsx)(E,{})})]})}),Object(l.jsx)(o,{})]})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,146)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};c.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(v,{children:Object(l.jsx)(D,{})})}),document.getElementById("root")),F()},99:function(e,t,a){}},[[145,1,2]]]);
//# sourceMappingURL=main.f1acf82c.chunk.js.map