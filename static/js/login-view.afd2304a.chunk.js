(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{182:function(e,a,t){e.exports={form:"LoginView_form__9kRj8",field:"LoginView_field__1Vk2q"}},222:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var r=t(166),o=t(0),i=t(13),n=t(17),c=t(23),s=t(216),l=t(148),u=t(60),b=t(182),m=t.n(b),f=t(3);function p(){var e=Object(i.b)(),a=Object(i.c)(n.b.getLoading),t=Object(o.useState)(""),b=Object(r.a)(t,2),p=b[0],d=b[1],j=Object(o.useState)(""),h=Object(r.a)(j,2),g=h[0],w=h[1],O=function(e){var a=e.target,t=a.name,r=a.value;switch(t){case"email":d(r);break;case"password":w(r);break;default:return}};return Object(f.jsxs)("form",{onSubmit:function(a){if(a.preventDefault(),!p.trim()||!g.trim())return c.b.error("\u041d\u0435 \u0432\u0441\u0456 \u043f\u043e\u043b\u044f \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u0456!");e(n.a.logIn({email:p,password:g})),d(""),w("")},className:m.a.form,autoComplete:"off",children:[Object(f.jsx)(s.a,{label:"Email",variant:"outlined",color:"primary",type:"email",name:"email",value:p,onChange:O,className:m.a.field}),Object(f.jsx)(s.a,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",variant:"outlined",color:"primary",type:"password",name:"password",value:g,onChange:O,className:m.a.field}),!a&&Object(f.jsx)(l.a,{variant:"contained",color:"primary",size:"large",type:"submit",children:"\u0423\u0432\u0456\u0439\u0442\u0438"}),a&&Object(f.jsx)(u.a,{})]})}}}]);
//# sourceMappingURL=login-view.afd2304a.chunk.js.map