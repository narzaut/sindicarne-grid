(this["webpackJsonpsindicarne-grid"]=this["webpackJsonpsindicarne-grid"]||[]).push([[0],{145:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(88),c=a.n(r),l=(a(99),a(0));function i(){return Object(l.jsxs)("div",{className:"fadeInUp text-shadow border-t-4 border-green divide-y-2 text-center gap-4   bg-header-blue py-4 w-full flex flex-col text-gray-300 font-medium items-center justify-center ",children:[Object(l.jsxs)("div",{className:"gap-4 ",children:[Object(l.jsx)("p",{children:"Sindicato de la Carne R\xedo Cuarto"}),Object(l.jsx)("p",{children:"Lavalle 992, Esq. Bolivar - R\xedo Cuarto - C\xf3rdoba"}),Object(l.jsx)("p",{children:"0358-4649-942"}),Object(l.jsx)("p",{children:"sin.dela.carnerioiv@hotmail.com"}),Object(l.jsx)("a",{className:"font-bold",href:"https://sindicarne.com.ar/politica_privacidad",children:"Leer politica de privacidad de nuestra app "})]}),Object(l.jsx)("div",{className:"py-2  w-2/3 lg:w-1/3 border-0 border-green",children:Object(l.jsxs)("p",{className:"w-full",children:["Desarrollado por ",Object(l.jsxs)("a",{href:"https://www.itecriocuarto.org.ar/",className:"font-bold ",children:[Object(l.jsx)("span",{className:"text-red-400",children:"i"}),Object(l.jsx)("span",{className:"text-blue-400",children:"T"}),Object(l.jsx)("span",{className:"text-yellow-400",children:"e"}),Object(l.jsx)("span",{className:"text-green-400",children:"c"})," LABs"]})]})})]})}function o(){return Object(l.jsx)("div",{className:"fadeInDown z-10 shadow-2xl border-b-8 border-green bg-header-blue py-4 w-full flex items-center justify-center ",children:Object(l.jsx)("img",{alt:"sindicato de la carne",className:"w-2/3 md:w-2/4 lg:w-1/5",src:"/sindicarne-grid/assets/logo.png"})})}var d=a(4),u=a.n(d),b=a(8),j=a(3),x=a(5),f=function(){var e=Object(b.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=[],t&&1==t.ok){e.next=3;break}return e.abrupt("return",a);case 3:return e.next=5,fetch("https://api.sindicarne.com.ar/postulantes",{headers:{"Content-Type":"application/json","x-auth-token":t.token}}).then((function(e){return e.json()})).then((function(e){a=e}));case 5:return e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=a(89),m=function(){var e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=JSON.parse(localStorage.getItem("token"))){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Object(p.a)(t.token);case 5:if(!(e.sent.exp<Date.now()/1e3)){e.next=8;break}return e.abrupt("return",!0);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=a(13);var O=Object(s.createContext)(),g=function(e){var t=Object(s.useState)({status:!1,currentIndex:0}),a=Object(j.a)(t,2),n=a[0],r=a[1],c=Object(s.useState)([]),i=Object(j.a)(c,2),o=i[0],d=i[1],u=Object(s.useState)(o),b=Object(j.a)(u,2),x=b[0],f=b[1];return Object(l.jsx)(O.Provider,{value:{filteredPostulantesState:[x,f],postulantesState:[o,d],modalPostulanteState:[n,r]},children:e.children})},v=function(e){var t;return(t=e.split("-").reverse())[0]=t[0].substring(0,2),t.join(" / ")},N=function(e){return e.toLowerCase().replace(/(?:^|\s)\S/g,(function(e){return e.toUpperCase()}))},w=a(94),y=function(e){var t=e.postulante,a=Object(s.useContext)(O),n=a.modalPostulanteState,r=a.postulantesState,c=Object(j.a)(n,2),i=c[0],o=c[1],d=Object(j.a)(r,2),u=d[0];d[1];return Object(l.jsxs)("div",{className:"  w-80 lg:w-full   px-6 lg:p-0 lg:py-4 text-center  flex items-center  justify-center ",children:[Object(l.jsx)("div",{className:"w-1/6 lg:w-1/8 select-none\t",children:Object(l.jsx)(w.a,{className:"text-shadow rounded-full card-shadow font-bold ",name:t.nombrePostulante,size:"50"})}),Object(l.jsxs)("div",{className:" ml-2 lg:ml-0 w-4/6 lg:w-1/8 text-left flex flex-col items-center ",children:[Object(l.jsx)("p",{className:"font-bold  text-center ",children:N(t.nombrePostulante)}),Object(l.jsxs)("span",{className:"lg:invisible lg:h-0",children:["DNI: ",Object(l.jsx)("span",{className:"font-bold",children:t.dniPostulante})]}),Object(l.jsxs)("span",{className:"lg:invisible lg:h-0",children:["Estado: ",1==t.activoPostulante?Object(l.jsx)("span",{className:"text-green-400 text-shadow-sm font-bold",children:"Activo"}):Object(l.jsx)("span",{className:"text-red-400 text-shadow-sm font-bold",children:"Inactivo"})]})]}),Object(l.jsx)("div",{className:"lg:w-1/8   w-0 invisible lg:visible",children:t.dniPostulante}),Object(l.jsx)("div",{className:"lg:w-1/8  w-0 invisible lg:visible",children:t.telPostulante}),Object(l.jsx)("div",{className:"lg:w-1/8  w-0 invisible lg:visible",children:v(t.fnacimientoPostulante)}),Object(l.jsx)("div",{className:"lg:w-1/8  w-0 invisible lg:visible",children:N(t.empresaPostulante)}),Object(l.jsx)("div",{className:"lg:w-1/8  w-0 invisible lg:visible",children:1==t.activoPostulante?Object(l.jsx)("p",{className:"text-green-400 font-bold text-shadow-sm",children:"Activo"}):Object(l.jsx)("p",{className:"text-red-400 font-bold text-shadow-sm",children:"Inactivo"})}),Object(l.jsx)("div",{className:"text-center lg:w-1/8 w-1/6  flex  justify-center",children:Object(l.jsxs)("div",{className:"flex text-xs cursor-pointer items-center text-blue hover-text-green transition\tselect-none",onClick:function(){u.map((function(e,a){e.idPostulante==t.idPostulante&&o(Object(h.a)(Object(h.a)({},i),{},{status:!0,currentIndex:a}))}))},children:[Object(l.jsx)("i",{className:"pr-1 fas fa-info-circle text-base   "})," VER"]})})]})},S=function(){var e=Object(b.a)(u.a.mark((function e(t,a,s){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=[],t&&1==t.ok){e.next=3;break}return e.abrupt("return",n);case 3:return e.next=5,fetch("https://api.sindicarne.com.ar/postulantes/".concat(a,"/status"),{method:"PUT",headers:{"Content-Type":"application/json","x-auth-token":t.token},body:JSON.stringify({status:1==s?"active":"inactive"})}).then((function(e){return e.json()})).then((function(e){n=e})).catch((function(e){n=e}));case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}();function k(e){var t=e.description,a=e.value,s=e.icon;return Object(l.jsxs)("div",{className:"flex flex-col pb-2 mb-4 rounded-xl text-gray-700 border-b-2 border-green px-4",children:[Object(l.jsxs)("span",{className:"font-bold",children:[Object(l.jsx)("i",{className:"text-gray-700 "+s}),Object(l.jsx)("span",{className:"pl-2",children:t})]}),Object(l.jsx)("span",{className:"pl-2 text-gray-800 ",children:a})]})}function C(e){var t=e.postulante,a=Object(s.useContext)(O),n=a.modalPostulanteState,r=a.postulantesState,c=Object(j.a)(n,2),i=c[0],o=c[1],d=Object(j.a)(r,2),p=(d[0],d[1]),g=Object(s.useState)(1==t.activoPostulante),w=Object(j.a)(g,2),y=w[0],C=w[1],I=Object(s.useState)(!1),P=Object(j.a)(I,2),E=P[0],D=P[1],L=Object(s.useState)(!1),T=Object(j.a)(L,2),J=T[0],F=T[1],A=Object(s.useState)(),B=Object(j.a)(A,2),R=B[0],U=B[1],z=Object(x.f)(),G=function(){var e=Object(b.a)(u.a.mark((function e(){var a,s,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=JSON.parse(localStorage.getItem("token")),e.t0=!a,e.t0){e.next=7;break}return e.next=5,m();case 5:e.t1=e.sent,e.t0=1==e.t1;case 7:if(!e.t0){e.next=9;break}z.replace("/auth");case 9:return e.next=11,S(a,t.idPostulante,y);case 11:if(!(s=e.sent)||200!=s.status){e.next=21;break}return e.next=15,f(a);case 15:n=e.sent,p(n),D(!1),U(!1),e.next=22;break;case 21:U(!0);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"fadeIn h-full flex flex-col items-center pt-2 text-left ",children:[Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)("div",{className:"pb-8 flex items-center justify-center",children:Object(l.jsx)("p",{className:"text-center  text-xl font-bold text-gray-800 border-b-2 border-green max-w-min",children:"INFO"})}),Object(l.jsx)(k,{icon:"fas fa-user",description:"Nombre",value:N(t.nombrePostulante)}),Object(l.jsx)(k,{icon:"fas fa-id-card",description:"DNI",value:t.dniPostulante}),Object(l.jsx)(k,{icon:"fas fa-calendar-alt",description:"Fecha de nacimiento",value:v(t.fnacimientoPostulante)}),Object(l.jsx)(k,{icon:"fas fa-envelope",description:"Email",value:t.emailPostulante}),Object(l.jsx)(k,{icon:"fas fa-phone-alt",description:"Tel\xe9fono / Celular",value:t.telPostulante}),Object(l.jsx)(k,{icon:"fas fa-building",description:"Empresa",value:N(t.empresaPostulante)}),Object(l.jsx)(k,{icon:"fas fa-users",description:"Grupo familiar",value:0==t.estadocivil?"No":"Si"}),Object(l.jsxs)("div",{className:"flex flex-col pb-2 mb-4 rounded-xl text-gray-700 border-b-2 border-green px-4",children:[Object(l.jsxs)("div",{className:"flex justify-between",children:[Object(l.jsxs)("span",{className:"font-bold",children:[Object(l.jsx)("i",{className:"text-gray-700 fas fa-users"}),Object(l.jsx)("span",{className:"pl-2 ",children:"Estado"})]}),Object(l.jsxs)("span",{onClick:function(){D(!E),F(!1),U(null),C(t.activoPostulante)},className:"transition cursor-pointer outline-none text-xs hover-press-animation shadow-2xl select-none ".concat(1==E?"text-green ":"text-blue"),children:[Object(l.jsx)("i",{className:"fas fa-pencil-alt text-xl  "}),"Editar"]})]}),Object(l.jsxs)("div",{className:"flex  pl-2 pt-4 pb-2 justify-between ",children:[Object(l.jsx)("div",{className:"flex",children:1==y?Object(l.jsx)("p",{className:"transition duration-500 text-shadow-sm text-green-400 font-bold",children:"Activo"}):Object(l.jsx)("p",{className:"transition duration-500 text-shadow-sm text-red-400 font-bold",children:"Inactivo"})}),1==E?Object(l.jsx)("div",{className:"flex transition fadeIn  ",children:Object(l.jsx)("label",{htmlFor:"toogleA",className:"flex items-center cursor-pointer",children:Object(l.jsxs)("div",{className:"relative",children:[Object(l.jsx)("input",{onClick:function(){C(!y),F(1!=J)},id:"toogleA",type:"checkbox",className:"sr-only "}),Object(l.jsx)("div",{className:"w-10 h-4 bg-gray-400 rounded-full shadow-inner"}),Object(l.jsx)("div",{className:"dot absolute w-6 h-6 ".concat(1==y?" bg-green-400 ":" bg-red-400"," rounded-full shadow -left-1 -top-1 transition")})]})})}):""]}),1==R?Object(l.jsxs)("span",{className:"flex items-center justify-center text-red-400 font-semibold text-xs text-shadow-sm uppercase py-1",children:[Object(l.jsx)("i",{className:"fas fa-times"}),Object(l.jsx)("p",{className:"pl-2",children:"Intente m\xe1s tarde"})]}):0==R?Object(l.jsxs)("p",{className:"flex items-center justify-center text-green-400 font-semibold text-shadow-sm text-sm",children:[Object(l.jsx)("i",{className:"fas fa-check"}),Object(l.jsx)("p",{className:"pl-2",children:"Se actualiz\xf3 el estado"})]}):""]})]}),Object(l.jsxs)("div",{className:"flex w-full justify-between px-4",children:[Object(l.jsxs)("div",{onClick:function(){return o(Object(h.a)(Object(h.a)({},i),{},{status:!i.status}))},className:"cursor-pointer h-12 w-12  text-center transition fadeIn transition relative",children:[Object(l.jsx)("i",{className:"transition fas fa-angle-double-left absolute left-0 right-0 text-blue  hover-text-green font-bold text-shadow-sm  press-animation\t text-4xl "}),Object(l.jsx)("p",{className:"text-xs text-gray-800 absolute bottom-0 left-0 right-0",children:"Volver"})]}),1==J&&1==E?Object(l.jsxs)("div",{onClick:G,className:"h-12 w-12 pt-1 text-center transition fadeIn transition relative",children:[Object(l.jsx)("i",{className:"transition far fa-save absolute text-blue left-0 right-0 hover-text-green font-bold text-shadow-sm  press-animation\t text-3xl "}),Object(l.jsx)("p",{className:"text-xs text-gray-800 absolute bottom-0 left-0 right-0",children:"Guardar"})]}):""]})]})}var I=function(e){var t=e.data,a=Object(s.useState)(""),n=Object(j.a)(a,2),r=n[0],c=n[1],i=Object(s.useContext)(O).filteredPostulantesState,o=Object(j.a)(i,2),d=(o[0],o[1]);return Object(s.useEffect)((function(){d("object"==typeof t&&t.filter((function(e){return(""==r||e.nombrePostulante.toLowerCase().includes(r.toLowerCase())||!!e.dniPostulante.toLowerCase().includes(r.toLowerCase()))&&e})))}),[r]),Object(l.jsxs)("div",{className:"relative",children:[Object(l.jsx)("input",{value:r,onChange:function(e){return c(e.target.value)},type:"text",onBlur:function(e){return e.target.placeholder="Nombre / DNI"},onSelect:function(e){return e.target.placeholder=""},className:"px-6 rounded border-2 py-2 border-gray-400 focus-border-green outline-none text-center w-full",placeholder:"Nombre / DNI"}),""!=r&&Object(l.jsx)("div",{onClick:function(){return c("")},className:"hover:text-red-400  transition fadeIn cursor-pointer select-none absolute top-1/2  transform -translate-y-1/2 right-3 font-bold text-xl text-gray-600",children:"X"})]})},P=function(){var e=Object(s.useState)(!0),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(s.useContext)(O),c=r.modalPostulanteState,i=r.postulantesState,o=r.filteredPostulantesState,d=Object(j.a)(c,2),p=d[0],h=(d[1],Object(j.a)(i,2)),g=h[0],v=h[1],N=Object(j.a)(o,2),w=N[0],S=(N[1],Object(x.f)());return Object(s.useEffect)(Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=JSON.parse(localStorage.getItem("token")),e.t0=!t,e.t0){e.next=7;break}return e.next=5,m();case 5:e.t1=e.sent,e.t0=1==e.t1;case 7:if(!e.t0){e.next=9;break}S.replace("/auth");case 9:return e.t2=v,e.next=12,f(t);case 12:e.t3=e.sent,(0,e.t2)(e.t3),g&&n(!1);case 15:case"end":return e.stop()}}),e)}))),[]),Object(l.jsx)("div",{className:"bg-gray-200 flex flex-col w-full flex-grow  items-center justify-center pb-10 mt-6",children:Object(l.jsx)("div",{className:"fadeIn h-full rounded-md glass card-shadow w-5/6 lg:w-4/5\t  pb-10 py-6 my-2 lg:my-6 flex flex-col items-center justify-center ",children:1==a?Object(l.jsxs)("div",{className:"h-80 flex flex-col items-center justify-center gap-2",children:[Object(l.jsx)("p",{className:"uppercase text-semibold ",children:"Cargando"}),Object(l.jsx)("div",{className:" lds-dual-ring-blue\ttext-shadow "})]}):0==p.status?Object(l.jsxs)("div",{className:"fadeIn fadeOutflex w-full text-gray-800 flex flex-col items-center justify-center ",children:[Object(l.jsxs)("div",{className:" pb-4 flex flex-col items-center justify-center",children:[Object(l.jsx)("p",{className:" max-w-min font-bold  uppercase border-b-2 border-green text-lg",children:"Postulantes"}),Object(l.jsx)("div",{className:"w-3/4 pt-4",children:Object(l.jsx)(I,{data:g})})]}),Object(l.jsxs)("div",{className:"border-b-4 border-green shadow-lg lg:mb-6  rounded-full  pb-2 lg:pt-8 flex w-full text-center invisible h-0 lg:h-auto lg:visible ",children:[Object(l.jsx)("p",{className:"w-1/8 "}),Object(l.jsx)("p",{className:"w-1/8 font-bold uppercase text-gray-800 text-sm",children:"Nombre"}),Object(l.jsx)("p",{className:"w-1/8 font-bold uppercase text-gray-800 text-sm",children:"DNI"}),Object(l.jsx)("p",{className:"w-1/8 font-bold uppercase text-gray-800 text-sm",children:"Tel\xe9fono / Celular"}),Object(l.jsx)("p",{className:"w-1/8 font-bold uppercase text-gray-800 text-sm",children:"Fecha de nacimiento"}),Object(l.jsx)("p",{className:"w-1/8 font-bold uppercase text-gray-800 text-sm",children:"Empresa"}),Object(l.jsx)("p",{className:"w-1/8 font-bold uppercase text-gray-800 text-sm",children:"Estado"}),Object(l.jsx)("p",{className:"w-1/8 font-bold uppercase text-gray-800 text-sm"})]}),Object(l.jsx)("div",{className:"lg:w-full ",children:w.length>0?w.map((function(e){return e&&Object(l.jsx)(y,{postulante:e})})):Object(l.jsx)("p",{className:"text-center px-10 uppercase text-gray-800",children:"No se encontr\xf3"})})]}):Object(l.jsx)(C,{postulante:g[p.currentIndex]})})})},E=function(){var e=Object(b.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.sindicarne.com.ar/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:t.username,password:t.password})}).then((function(e){return e.json()})).then((function(e){a=e})).catch((function(e){a=e}));case 2:return e.abrupt("return",a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=function(e,t){var a=Object(s.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(f){return console.log(f),t}})),n=Object(j.a)(a,2),r=n[0],c=n[1];return[r,function(t){try{var a=t instanceof Function?t(r):t;c(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(f){console.log(f)}}]}("token",null),t=Object(j.a)(e,2),a=(t[0],t[1]),n=Object(s.useState)({username:"",password:""}),r=Object(j.a)(n,2),c=r[0],i=r[1],o=Object(s.useState)(""),d=Object(j.a)(o,2),f=d[0],p=d[1],O=Object(x.f)();Object(s.useEffect)(Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=JSON.parse(localStorage.getItem("token")),e.t0=t,!e.t0){e.next=7;break}return e.next=5,m();case 5:e.t1=e.sent,e.t0=0==e.t1;case 7:if(!e.t0){e.next=9;break}O.replace("/");case 9:return e.next=11,m();case 11:if(e.t2=e.sent,1!=e.t2){e.next=14;break}p("");case 14:case"end":return e.stop()}}),e)}))),[]);var g=function(){var e=Object(b.a)(u.a.mark((function e(t){var s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,E(c);case 3:null!=(s=e.sent)&&1==s.ok?(a(s),O.replace("/")):(p(0==s.ok?"acceso denegado":"error. intente m\xe1s tarde."),i({username:"",password:""}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"fadeInDown z-0 h-full flex items-center justify-center gap-4 flex-col   p-4 rounded ",children:[Object(l.jsx)("p",{className:"border-b-4 border-green font-semibold text-lg text-gray-800",children:"INGRESO"}),Object(l.jsxs)("form",{onChange:function(){return p(!1)},onSubmit:g,className:"flex flex-col",children:[Object(l.jsxs)("label",{className:"flex flex-col",children:[Object(l.jsx)("span",{children:"Usuario: "}),Object(l.jsx)("input",{type:"text",value:c.username,onChange:function(e){return i(Object(h.a)(Object(h.a)({},c),{},{username:e.target.value}))},className:"border-2 border-gray-500 outline-none  py-2 text-center focus-border-green"})]}),Object(l.jsxs)("label",{className:"flex flex-col\tpt-4",children:[Object(l.jsx)("span",{children:"Contrase\xf1a: "}),Object(l.jsx)("input",{type:"password",value:c.password,onChange:function(e){return i(Object(h.a)(Object(h.a)({},c),{},{password:e.target.value}))},className:"border-2 border-gray-500 outline-none py-2 text-center"})]}),Object(l.jsx)("button",{className:"text-center text-sm self-center mt-4 px-4 py-2 bg-green rounded  text-gray-200  transition border-4 hover:text-gray-800 border-transparen hover:bg-transparent hover-border-green",children:"CONTINUAR"})]}),""!=f?Object(l.jsx)("p",{className:"fadeIn transition text-red-400 font-bold text-shadow-sm uppercase text-base",children:f}):""]})},L=function(){return Object(l.jsx)("div",{className:"fadeIn transition flex  flex-col w-full   items-center justify-center h-full",children:Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)("p",{className:"text-8xl pb-10",children:"404"}),Object(l.jsx)("p",{className:"pb-10",children:"La p\xe1gina no ha sido encontrada"}),Object(l.jsx)("a",{className:"bg-green px-4 py-2 rounded text-gray-100",href:"https://sindicarne.com.ar",children:"Volver"})]})})},T=a(28);var J=function(){return Object(l.jsxs)("div",{className:"bg-gray-200 flex flex-col h-screen",children:[Object(l.jsx)(o,{}),Object(l.jsx)(T.a,{children:Object(l.jsxs)(x.c,{children:[Object(l.jsx)(x.a,{exact:!0,path:"/",children:Object(l.jsx)(P,{})}),Object(l.jsx)(x.a,{path:"/auth",children:Object(l.jsx)(D,{})}),Object(l.jsx)(x.a,{children:Object(l.jsx)(L,{})})]})}),Object(l.jsx)(i,{})]})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,146)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),r(e),c(e)}))};c.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(g,{children:Object(l.jsx)(J,{})})}),document.getElementById("root")),F()},99:function(e,t,a){}},[[145,1,2]]]);
//# sourceMappingURL=main.28d1eaa1.chunk.js.map