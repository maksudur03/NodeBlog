(this.webpackJsonpbackend=this.webpackJsonpbackend||[]).push([[15],{495:function(e,a,t){"use strict";t.r(a);var r=t(74),n=t.n(r),l=t(79),c=t(1),s=t.n(c),o=t(11),m=t(63),i=t(216),u=t(217),p=t(4),d=t(5),E=t(0),g=t.n(E),N=t(2),f=t.n(N),b=t(3),h={tag:b.g,className:g.a.string,cssModule:g.a.object},y=function(e){var a=e.className,t=e.cssModule,r=e.tag,n=Object(d.a)(e,["className","cssModule","tag"]),l=Object(b.e)(f()(a,"card-group"),t);return s.a.createElement(r,Object(p.a)({},n,{className:l}))};y.propTypes=h,y.defaultProps={tag:"div"};var w=y,x=t(218),v=t(219),j=t(475),O=t(476),S=t(477),k=t(220),q=t(478),J=t(221),T=t(213);a.default=function(){var e=Object(T.a)(),a=e.register,t=e.handleSubmit,r=e.errors,c=function(){var e=Object(l.a)(n.a.mark((function e(a){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return alert(JSON.stringify(a,null)),(t=new FormData).append("user",new Blob([JSON.stringify(a)],{type:"application/json",processData:!1,contentType:!1,cache:!1})),e.next=5,fetch("/logintest",{method:"POST",body:t}).then((function(e){return e.json()})).catch((function(e){return console.error("Error:",e)})).then((function(e){return localStorage.setItem("user",JSON.stringify(e))}));case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement("div",{className:"app flex-row align-items-center"},s.a.createElement(m.a,null,s.a.createElement(i.a,{className:"justify-content-center"},s.a.createElement(u.a,{md:"8"},s.a.createElement(w,null,s.a.createElement(x.a,{className:"p-4"},s.a.createElement(v.a,null,s.a.createElement(j.a,{onSubmit:t(c)},s.a.createElement("h1",null,"Login"),s.a.createElement("p",{className:"text-muted"},"Sign In to your account"),s.a.createElement(O.a,{className:"mb-3"},s.a.createElement(S.a,{addonType:"prepend"},s.a.createElement(k.a,null,s.a.createElement("i",{className:"icon-user"}))),s.a.createElement(q.a,{type:"text",placeholder:"UserEmail",autoComplete:"useremail",name:"email",innerRef:a({required:!0})}),r.email&&"email required."),s.a.createElement(O.a,{className:"mb-4"},s.a.createElement(S.a,{addonType:"prepend"},s.a.createElement(k.a,null,s.a.createElement("i",{className:"icon-lock"}))),s.a.createElement(q.a,{type:"password",placeholder:"Password",autoComplete:"current-password",name:"password",innerRef:a({required:!0})}),r.password&&"password is required."),s.a.createElement(i.a,null,s.a.createElement(u.a,{xs:"6"},s.a.createElement(J.a,{color:"primary",className:"px-4"},"Login")),s.a.createElement(u.a,{xs:"6",className:"text-right"},s.a.createElement(J.a,{color:"link",className:"px-0"},"Forgot password?")))))),s.a.createElement(x.a,{className:"text-white bg-primary py-5 d-md-down-none",style:{width:"44%"}},s.a.createElement(v.a,{className:"text-center"},s.a.createElement("div",null,s.a.createElement("h2",null,"Sign up"),s.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),s.a.createElement(o.Link,{to:"/register"},s.a.createElement(J.a,{color:"primary",className:"mt-3",active:!0,tabIndex:-1},"Register Now!"))))))))))}}}]);
//# sourceMappingURL=15.50ea795d.chunk.js.map