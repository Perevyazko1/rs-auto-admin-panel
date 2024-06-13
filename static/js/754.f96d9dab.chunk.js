"use strict";(self.webpackChunkfront_rs_auto_admin=self.webpackChunkfront_rs_auto_admin||[]).push([[754],{2754:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ie});var o=r(5043),a=r(8587),n=r(8168),s=r(8387),i=r(8606),c=r(4350),l=r(4535),u=r(9662),d=r(579);const p=(0,u.A)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var m=r(7056),h=r(2400);function f(e){return(0,h.Ay)("MuiAvatar",e)}(0,m.A)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var g=r(4162);const x=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],v=(0,c.h)("MuiAvatar"),A=(0,l.Ay)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((e=>{let{theme:t}=e;return{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,n.A)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:(0,n.A)({backgroundColor:t.palette.grey[400]},t.applyStyles("dark",{backgroundColor:t.palette.grey[600]})))}]}})),b=(0,l.Ay)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),y=(0,l.Ay)(p,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});const S=o.forwardRef((function(e,t){const r=v({props:e,name:"MuiAvatar"}),{alt:c,children:l,className:u,component:p="div",slots:m={},slotProps:h={},imgProps:S,sizes:k,src:w,srcSet:C,variant:R="circular"}=r,j=(0,a.A)(r,x);let W=null;const M=function(e){let{crossOrigin:t,referrerPolicy:r,src:a,srcSet:n}=e;const[s,i]=o.useState(!1);return o.useEffect((()=>{if(!a&&!n)return;i(!1);let e=!0;const o=new Image;return o.onload=()=>{e&&i("loaded")},o.onerror=()=>{e&&i("error")},o.crossOrigin=t,o.referrerPolicy=r,o.src=a,n&&(o.srcset=n),()=>{e=!1}}),[t,r,a,n]),s}((0,n.A)({},S,{src:w,srcSet:C})),D=w||C,P=D&&"error"!==M,z=(0,n.A)({},r,{colorDefault:!P,component:p,variant:R}),N=(e=>{const{classes:t,variant:r,colorDefault:o}=e,a={root:["root",r,o&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,i.A)(a,f,t)})(z),[T,F]=(0,g.A)("img",{className:N.img,elementType:b,externalForwardedProps:{slots:m,slotProps:{img:(0,n.A)({},S,h.img)}},additionalProps:{alt:c,src:w,srcSet:C,sizes:k},ownerState:z});return W=P?(0,d.jsx)(T,(0,n.A)({},F)):l||0===l?l:D&&c?c[0]:(0,d.jsx)(y,{ownerState:z,className:N.fallback}),(0,d.jsx)(A,(0,n.A)({as:p,ownerState:z,className:(0,s.A)(N.root,u),ref:t},j,{children:W}))}));var k=r(8977),w=r(5376),C=r(5795),R=r(6803),j=r(2876),W=r(2191),M=r(5849),D=r(5865);function P(e){return(0,h.Ay)("MuiLink",e)}const z=(0,m.A)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var N=r(7162),T=r(7266);const F={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},G=e=>{let{theme:t,ownerState:r}=e;const o=(e=>F[e]||e)(r.color),a=(0,N.Yn)(t,"palette.".concat(o),!1)||r.color,n=(0,N.Yn)(t,"palette.".concat(o,"Channel"));return"vars"in t&&n?"rgba(".concat(n," / 0.4)"):(0,T.X4)(a,.4)},I=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],_=(0,l.Ay)(D.A,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t["underline".concat((0,R.A)(r.underline))],"button"===r.component&&t.button]}})((e=>{let{theme:t,ownerState:r}=e;return(0,n.A)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,n.A)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:G({theme:t,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},["&.".concat(z.focusVisible)]:{outline:"auto"}})})),L=o.forwardRef((function(e,t){const r=(0,j.A)({props:e,name:"MuiLink"}),{className:c,color:l="primary",component:u="a",onBlur:p,onFocus:m,TypographyClasses:h,underline:f="always",variant:g="inherit",sx:x}=r,v=(0,a.A)(r,I),{isFocusVisibleRef:A,onBlur:b,onFocus:y,ref:S}=(0,W.A)(),[k,w]=o.useState(!1),C=(0,M.A)(t,S),D=(0,n.A)({},r,{color:l,component:u,focusVisible:k,underline:f,variant:g}),z=(e=>{const{classes:t,component:r,focusVisible:o,underline:a}=e,n={root:["root","underline".concat((0,R.A)(a)),"button"===r&&"button",o&&"focusVisible"]};return(0,i.A)(n,P,t)})(D);return(0,d.jsx)(_,(0,n.A)({color:l,className:(0,s.A)(z.root,c),classes:h,component:u,onBlur:e=>{b(e),!1===A.current&&w(!1),p&&p(e)},onFocus:e=>{y(e),!0===A.current&&w(!0),m&&m(e)},ref:C,ownerState:D,variant:g,sx:[...Object.keys(F).includes(l)?[]:[{color:l}],...Array.isArray(x)?x:[x]]},v))}));var q=r(6446),B=r(410),V=r(2919),H=r(6060),O=r(8280);const U=["className","component","disableGutters","fixed","maxWidth","classes"],Y=(0,O.A)(),E=(0,H.A)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t["maxWidth".concat((0,B.A)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),X=e=>(0,V.A)({props:e,name:"MuiContainer",defaultTheme:Y});const Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=E,useThemeProps:r=X,componentName:c="MuiContainer"}=e,l=t((e=>{let{theme:t,ownerState:r}=e;return(0,n.A)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!r.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}})}),(e=>{let{theme:t,ownerState:r}=e;return r.fixed&&Object.keys(t.breakpoints.values).reduce(((e,r)=>{const o=r,a=t.breakpoints.values[o];return 0!==a&&(e[t.breakpoints.up(o)]={maxWidth:"".concat(a).concat(t.breakpoints.unit)}),e}),{})}),(e=>{let{theme:t,ownerState:r}=e;return(0,n.A)({},"xs"===r.maxWidth&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},r.maxWidth&&"xs"!==r.maxWidth&&{[t.breakpoints.up(r.maxWidth)]:{maxWidth:"".concat(t.breakpoints.values[r.maxWidth]).concat(t.breakpoints.unit)}})})),u=o.forwardRef((function(e,t){const o=r(e),{className:u,component:p="div",disableGutters:m=!1,fixed:f=!1,maxWidth:g="lg"}=o,x=(0,a.A)(o,U),v=(0,n.A)({},o,{component:p,disableGutters:m,fixed:f,maxWidth:g}),A=((e,t)=>{const{classes:r,fixed:o,disableGutters:a,maxWidth:n}=e,s={root:["root",n&&"maxWidth".concat((0,B.A)(String(n))),o&&"fixed",a&&"disableGutters"]};return(0,i.A)(s,(e=>(0,h.Ay)(t,e)),r)})(v,c);return(0,d.jsx)(l,(0,n.A)({as:p,ownerState:v,className:(0,s.A)(A.root,u),ref:t},x))}));return u}({createStyledComponent:(0,l.Ay)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t["maxWidth".concat((0,R.A)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,j.A)({props:e,name:"MuiContainer"})}),J=Z;var K=r(7344),Q=r(5969),$=r(4620),ee=r(1306),te=r(3637),re=r(3216),oe=r(7154),ae=r(4451);function ne(e){return(0,d.jsxs)(D.A,{variant:"body2",color:"text.secondary",align:"center",...e,children:["Copyright \xa9 ",(0,d.jsx)(L,{color:"inherit",href:"https://mui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}const se=(0,K.A)();const ie=function(){const e=(0,re.Zp)(),t=(0,ee.D)(),{authApp:r}=te.m.actions,[a,n]=(0,o.useState)(""),[s,i]=(0,o.useState)(""),[c,{data:l,isLoading:u,error:p}]=$.d.useAuthMutation();return(0,d.jsx)(Q.A,{theme:se,children:(0,d.jsxs)(J,{component:"main",maxWidth:"xs",children:[(0,d.jsx)(w.Ay,{}),(0,d.jsxs)(q.A,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,d.jsx)(S,{sx:{m:1,bgcolor:"secondary.main"}}),(0,d.jsx)(D.A,{component:"h1",variant:"h5",children:"\u0412\u0445\u043e\u0434"}),(0,d.jsx)(C.A,{value:a,onChange:e=>n(e.target.value),margin:"normal",required:!0,fullWidth:!0,id:"username",label:"\u041b\u043e\u0433\u0438\u043d",name:"username",autoComplete:"username",autoFocus:!0}),(0,d.jsx)(C.A,{value:s,onChange:e=>i(e.target.value),margin:"normal",required:!0,fullWidth:!0,name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",id:"password",autoComplete:"current-password"}),(0,d.jsx)(k.A,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},onClick:async()=>{try{var o;const c={username:a,password:s},l=await oe.A.post("".concat(ae.H,"organization_app/api/token/"),c);var n,i;if(l.data)localStorage.setItem("token",null===(n=l.data)||void 0===n?void 0:n.access),sessionStorage.setItem("refresh",null===(i=l.data)||void 0===i?void 0:i.refresh);null!==(o=l.data)&&void 0!==o&&o.access&&(localStorage.setItem("organization",a),t(r({auth:!0,user:a})),e("/"))}catch(p){console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:",p)}},children:"\u0412\u043e\u0439\u0442\u0438"})]}),(0,d.jsx)(ne,{sx:{mt:8,mb:4}})]})})}},4451:(e,t,r)=>{r.d(t,{A:()=>c,H:()=>s});var o=r(7068),a=r(5043),n=r(7154);o.Simulate.error;const s="https://rs-auto.tw1.ru/",i=n.A.create({baseURL:s});i.interceptors.request.use((e=>(e.headers.Authorization="Bearer ".concat(localStorage.getItem("token")),e))),i.interceptors.response.use((e=>e),(async e=>{if(401===e.response.status&&e.config&&!e.config._retry){e.config._retry=!0;try{const t={refresh:sessionStorage.getItem("refresh")},r=await n.A.post("".concat(s,"organization_app/api/token/refresh/"),t);return localStorage.setItem("token",r.data.access),i.request(e.config)}catch(t){console.log(t,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d")}}return Promise.reject(e)}));const c=()=>{const[e,t]=(0,a.useState)(null),[r,o]=(0,a.useState)(null),[n,s]=(0,a.useState)(!1);return{data:e,error:r,loading:n,executeRequest:async(e,a,n)=>{const c={"Content-Type":"application/json"};s(!0);try{let r;switch(e.toUpperCase()){case"GET":r=await i.get(a,{headers:c});break;case"POST":r=await i.post(a,n,{headers:c});break;case"PUT":r=await i.put(a,n,{headers:c});break;default:throw new Error("Unsupported method")}t(r.data),s(!1)}catch(r){o(r),s(!1)}}}}}}]);
//# sourceMappingURL=754.f96d9dab.chunk.js.map