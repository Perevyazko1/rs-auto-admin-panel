"use strict";(self.webpackChunkfront_rs_auto_admin=self.webpackChunkfront_rs_auto_admin||[]).push([[354],{1354:(e,t,a)=>{a.r(t),a.d(t,{default:()=>z});var r=a(5043),i=a(3120);const n="ListSettings_ListSettings__DYb6w";var s=a(8977),o=a(3766),l=a(8561),c=a(6605),d=a(710),h=a(1337),m=a(6499),p=a(6446),x=a(5865),u=a(4836),g=a(3193),A=a(9190),w=a(1659),j=a(2143),v=a(5795),y=a(4451),b=a(1306),f=a(2832),k=a(3545),_=a(579);const C=(0,r.memo)((e=>{const{className:t,children:a,open:i,handleClose:n,...o}=e,[l,c]=(0,r.useState)(!1),{executeRequest:d}=(0,y.A)(),{data:h,error:C,loading:S,executeRequest:M}=(0,y.A)(),{typeWorkApp:W}=f._.actions,{typeWorkReset:T}=f._.actions,{typeWorkName:z}=f._.actions,{typeWork:V}=(0,b.G)((e=>e.typeWorkSlice)),{listTypeWorkApp:H}=k.R.actions,{listTypeWork:N}=(0,b.G)((e=>e.listTypeWorksSlice));(0,r.useEffect)((()=>{h&&Z(H(h))}),[h]);const Z=(0,b.D)();return(0,_.jsx)("div",{children:(0,_.jsx)(m.A,{open:i,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,_.jsxs)(p.A,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},children:[(0,_.jsx)(x.A,{id:"modal-modal-title",variant:"h6",component:"h2",children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0438\u043f \u0440\u0430\u0431\u043e\u0442"}),(0,_.jsxs)("div",{children:[(0,_.jsx)(s.A,{onClick:()=>{c(!1),Z(T())},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"}),(0,_.jsx)(s.A,{onClick:()=>{c(!0),(async()=>{try{await M("GET","organization_app/get_type_of_work/")}catch(C){console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445:",C)}})()},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})]}),(0,_.jsx)(u.A,{direction:"right",in:l,mountOnEnter:!0,unmountOnExit:!0,children:(0,_.jsxs)(g.A,{sx:{"& .MuiTextField-root":{m:1,width:"25ch"},marginBottom:"10px"},fullWidth:!0,size:"medium",children:[(0,_.jsx)(A.A,{id:"demo-select-small-label",children:"\u0412\u044b\u0431\u043e\u0440 \u0443\u0441\u043b\u0443\u0433\u0438 \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"}),(0,_.jsx)(w.A,{labelId:"demo-select-small-label",id:"demo-select-small",value:V.name_type,label:"\u0412\u044b\u0431\u043e\u0440 \u0443\u0441\u043b\u0443\u0433\u0438",children:N&&N.map(((e,t)=>(0,_.jsx)(j.A,{value:e.name_type,onClick:()=>Z(W(e)),children:e.name_type},t)))})]})}),(0,_.jsx)(v.A,{sx:{"& .MuiTextField-root":{m:1,width:"25ch"},marginBottom:"10px"},error:!1,fullWidth:!0,size:"medium",helperText:"",id:"outlined",label:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0443\u0441\u043b\u0443\u0433\u0438",value:V.name_type,onChange:e=>Z(z(e.target.value))}),(0,_.jsx)(s.A,{disabled:""===V.name_type,onClick:()=>{n(),(async()=>{try{await d("PUT","organization_app/update_or_create_type_of_work/",V)}catch(C){console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445:",C)}})()},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})})}));var S=a(4584),M=a(8512);const W=(0,r.memo)((e=>{const{className:t,children:a,open:i,handleClose:n,...o}=e,[l,c]=(0,r.useState)(!1),{executeRequest:d}=(0,y.A)(),{data:h,executeRequest:f}=(0,y.A)(),{data:C,error:W,loading:T,executeRequest:z}=(0,y.A)(),V=(0,b.D)(),{varietyWorkApp:H}=S.K.actions,{varietyWorkName:N}=S.K.actions,{varietyWorkCost:Z}=S.K.actions,{varietyWorkMinutes:G}=S.K.actions,{varietyWorkType:I}=S.K.actions,{varietyWorkReset:R}=S.K.actions,{varietyWork:B}=(0,b.G)((e=>e.varietyWorksSlice)),{listVarietyWorkApp:L}=M.F.actions,{listVarietyWork:D}=(0,b.G)((e=>e.listVarietyWorksSlice)),{typeWork:E}=(0,b.G)((e=>e.typeWorkSlice)),{listTypeWorkApp:P}=k.R.actions,{listTypeWork:F}=(0,b.G)((e=>e.listTypeWorksSlice));(0,r.useEffect)((()=>{(async()=>{try{await f("GET","organization_app/get_type_of_work/")}catch(W){console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445:",W)}})()}),[]),(0,r.useEffect)((()=>{h&&V(P(h))}),[h]),(0,r.useEffect)((()=>{console.log(C),C&&V(L(C))}),[C]);return(0,_.jsx)("div",{children:(0,_.jsx)(m.A,{open:i,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,_.jsxs)(p.A,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},children:[(0,_.jsx)(x.A,{id:"modal-modal-title",variant:"h6",component:"h2",children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0438\u043f \u0440\u0430\u0431\u043e\u0442"}),(0,_.jsxs)("div",{children:[(0,_.jsx)(s.A,{onClick:()=>{c(!1),V(R())},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"}),(0,_.jsx)(s.A,{onClick:()=>{c(!0),(async()=>{try{await z("GET","organization_app/get_variety_of_work/")}catch(W){console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445:",W)}})()},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})]}),(0,_.jsx)(u.A,{direction:"right",in:l,mountOnEnter:!0,unmountOnExit:!0,children:(0,_.jsxs)(g.A,{sx:{"& .MuiTextField-root":{m:1,width:"25ch"},marginBottom:"10px"},fullWidth:!0,size:"medium",children:[(0,_.jsx)(A.A,{id:"demo-select-small-label",children:"\u0412\u044b\u0431\u043e\u0440 \u0442\u0438\u043f\u0430 \u0440\u0430\u0431\u043e\u0442 \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"}),(0,_.jsx)(w.A,{labelId:"demo-select-small-label",id:"demo-select-small",value:B.name_variety,label:"\u0412\u044b\u0431\u043e\u0440 \u0443\u0441\u043b\u0443\u0433\u0438",onChange:e=>V(N(e.target.value)),children:D&&D.map(((e,t)=>(0,_.jsx)(j.A,{value:e.name_variety,onClick:()=>{V(H(e))},children:e.name_variety},t)))})]})}),(0,_.jsx)(v.A,{sx:{"& .MuiTextField-root":{m:1,width:"25ch"},marginBottom:"10px"},error:!1,fullWidth:!0,size:"medium",helperText:"",id:"outlined",label:"\u0420\u0430\u0437\u043d\u043e\u0432\u0438\u0434\u043d\u043e\u0441\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0438",value:B.name_variety,onChange:e=>V(N(e.target.value))}),(0,_.jsx)(v.A,{sx:{"& .MuiTextField-root":{m:1,width:"25ch"},marginBottom:"10px"},error:!1,fullWidth:!0,size:"medium",helperText:"",id:"outlined",label:"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u044b",type:"number",value:B.cost,onChange:e=>{let t=e.target.value;t.length>1&&"0"===t[0]&&(t=t.slice(1,t.length)),e.target.value=t,V(Z(Number(t)))}}),(0,_.jsx)(v.A,{sx:{"& .MuiTextField-root":{m:1,width:"25ch"},marginBottom:"10px"},error:!1,fullWidth:!0,size:"medium",helperText:"",id:"outlined",label:"\u0414\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u044b \u0432 \u043c\u0438\u043d\u0443\u0442\u0430\u0445",type:"number",value:B.duration_in_minutes,onChange:e=>{let t=e.target.value;t.length>1&&"0"===t[0]&&(t=t.slice(1,t.length)),e.target.value=t,V(G(Number(t)))}}),(0,_.jsxs)(g.A,{sx:{"& .MuiTextField-root":{m:1,width:"25ch"},marginBottom:"10px"},fullWidth:!0,size:"medium",children:[(0,_.jsx)(A.A,{id:"demo-select-small-label",children:"\u0422\u0438\u043f \u0443\u0441\u043b\u0443\u0433\u0438"}),(0,_.jsx)(w.A,{labelId:"demo-select-small-label",id:"demo-select-small",value:B.type_work,label:"\u0422\u0438\u043f \u0443\u0441\u043b\u0443\u0433\u0438",onChange:e=>V(I(e.target.value)),children:F&&F.map(((e,t)=>(0,_.jsx)(j.A,{value:e.name_type,onClick:()=>V(I(e.name_type)),children:e.name_type},t)))})]}),(0,_.jsx)(s.A,{disabled:""===B.type_work||0===B.cost||0===B.duration_in_minutes||""===B.name_variety,onClick:()=>{n(),(async()=>{try{await d("PUT","organization_app/update_or_create_variety_of_work/",B)}catch(W){console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445:",W)}})()},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})})})),T=(0,r.memo)((e=>{const{className:t,children:a,...i}=e,[m,p]=(0,r.useState)(!1),[x,u]=(0,r.useState)(!1);return(0,_.jsxs)("div",{className:n,children:[(0,_.jsx)(C,{open:m,handleClose:()=>{p(!1)}}),(0,_.jsx)(W,{open:x,handleClose:()=>{u(!1)}}),(0,_.jsxs)(o.A,{children:[(0,_.jsx)(c.A,{expandIcon:(0,_.jsx)(h.A,{}),"aria-controls":"panel1-content",id:"panel1-header",children:"\u0422\u0438\u043f \u0443\u0441\u043b\u0443\u0433"}),(0,_.jsx)(d.A,{}),(0,_.jsxs)(l.A,{children:[(0,_.jsx)(s.A,{children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),(0,_.jsx)(s.A,{onClick:()=>p(!0),children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c / \u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})]}),(0,_.jsxs)(o.A,{children:[(0,_.jsx)(c.A,{expandIcon:(0,_.jsx)(h.A,{}),"aria-controls":"panel2-content",id:"panel2-header",children:"\u0420\u0430\u0437\u043d\u043e\u0432\u0438\u0434\u043d\u043e\u0441\u0442\u044c \u0443\u0441\u043b\u0443\u0433"}),(0,_.jsx)(d.A,{}),(0,_.jsxs)(l.A,{children:[(0,_.jsx)(s.A,{children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),(0,_.jsx)(s.A,{onClick:()=>{u(!0)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})]})]}),(0,_.jsxs)(o.A,{disabled:!0,children:[(0,_.jsx)(c.A,{expandIcon:(0,_.jsx)(h.A,{}),"aria-controls":"panel3-content",id:"panel3-header",children:"\u0410\u043a\u0446\u0438\u0438"}),(0,_.jsx)(d.A,{}),(0,_.jsxs)(l.A,{children:[(0,_.jsx)(s.A,{children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),(0,_.jsx)(s.A,{children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})]})]})]})})),z=(0,r.memo)((e=>{const{className:t,children:a,...r}=e;return(0,_.jsx)(i.P,{children:(0,_.jsx)(T,{})})}))},4451:(e,t,a)=>{a.d(t,{A:()=>l,H:()=>s});var r=a(7068),i=a(5043),n=a(7154);r.Simulate.error;const s="https://rs-auto.tw1.ru/",o=n.A.create({baseURL:s});o.interceptors.request.use((e=>(e.headers.Authorization="Bearer ".concat(localStorage.getItem("token")),e))),o.interceptors.response.use((e=>e),(async e=>{if(401===e.response.status&&e.config&&!e.config._retry){e.config._retry=!0;try{const t={refresh:sessionStorage.getItem("refresh")},a=await n.A.post("".concat(s,"organization_app/api/token/refresh/"),t);return localStorage.setItem("token",a.data.access),o.request(e.config)}catch(t){console.log(t,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d")}}return Promise.reject(e)}));const l=()=>{const[e,t]=(0,i.useState)(null),[a,r]=(0,i.useState)(null),[n,s]=(0,i.useState)(!1);return{data:e,error:a,loading:n,executeRequest:async(e,i,n)=>{const l={"Content-Type":"application/json"};s(!0);try{let a;switch(e.toUpperCase()){case"GET":a=await o.get(i,{headers:l});break;case"POST":a=await o.post(i,n,{headers:l});break;case"PUT":a=await o.put(i,n,{headers:l});break;default:throw new Error("Unsupported method")}t(a.data),s(!1)}catch(a){r(a),s(!1)}}}}},3120:(e,t,a)=>{a.d(t,{P:()=>R});var r=a(5043),i=a(4535),n=a(6240),s=a(6446),o=a(295),l=a(2314),c=a(5263),d=a(5721),h=a(5376),m=a(5865),p=a(9336),x=a(7392),u=a(681),g=a(8968),A=a(2050),w=a(8734),j=a(1306),v=a(579);const y=(0,r.memo)((e=>{const{theme:t}=(0,j.G)((e=>e.themeAppSlice)),{className:a,children:r,style:i,...n}=e;return(0,v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 24 24",width:"35",height:"35",fill:t?"rgb(42, 127, 189)":"rgb(42,71,189)",children:(0,v.jsx)("path",{d:"M19,2h-1V1c0-.552-.448-1-1-1s-1,.448-1,1v1H8V1c0-.552-.448-1-1-1s-1,.448-1,1v1h-1C2.243,2,0,4.243,0,7v12c0,2.757,2.243,5,5,5h4c.552,0,1-.448,1-1s-.448-1-1-1H5c-1.654,0-3-1.346-3-3V10H23c.552,0,1-.448,1-1v-2c0-2.757-2.243-5-5-5Zm3,6H2v-1c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v1Zm-3.121,4.879l-5.707,5.707c-.755,.755-1.172,1.76-1.172,2.829v1.586c0,.552,.448,1,1,1h1.586c1.069,0,2.073-.417,2.828-1.172l5.707-5.707c.567-.567,.879-1.32,.879-2.122s-.312-1.555-.878-2.121c-1.134-1.134-3.11-1.134-4.243,0Zm2.828,2.828l-5.708,5.707c-.377,.378-.879,.586-1.414,.586h-.586v-.586c0-.534,.208-1.036,.586-1.414l5.708-5.707c.377-.378,1.036-.378,1.414,0,.189,.188,.293,.439,.293,.707s-.104,.518-.293,.707Zm-16.707-1.707c0-.552,.448-1,1-1h7c.552,0,1,.448,1,1s-.448,1-1,1H6c-.552,0-1-.448-1-1Zm6,4c0,.552-.448,1-1,1H6c-.552,0-1-.448-1-1s.448-1,1-1h4c.552,0,1,.448,1,1Z"})})})),b=(0,r.memo)((e=>{const{className:t,children:a,theme:r,...i}=e;return(0,v.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24",width:"35",height:"35",fill:r?"white":"rgba(34,35,35,0.94)",children:[(0,v.jsx)("rect",{y:"11",width:"24",height:"2",rx:"1"}),(0,v.jsx)("rect",{y:"4",width:"24",height:"2",rx:"1"}),(0,v.jsx)("rect",{y:"18",width:"24",height:"2",rx:"1"})]})})),f=(0,r.memo)((e=>{const{theme:t}=(0,j.G)((e=>e.themeAppSlice)),{className:a,children:r,...i}=e;return(0,v.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24",width:"35",height:"35",fill:t?"rgb(42, 127, 189)":"rgb(42,71,189)",children:[(0,v.jsx)("path",{d:"M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"}),(0,v.jsx)("path",{d:"M21.294,13.9l-.444-.256a9.1,9.1,0,0,0,0-3.29l.444-.256a3,3,0,1,0-3-5.2l-.445.257A8.977,8.977,0,0,0,15,3.513V3A3,3,0,0,0,9,3v.513A8.977,8.977,0,0,0,6.152,5.159L5.705,4.9a3,3,0,0,0-3,5.2l.444.256a9.1,9.1,0,0,0,0,3.29l-.444.256a3,3,0,1,0,3,5.2l.445-.257A8.977,8.977,0,0,0,9,20.487V21a3,3,0,0,0,6,0v-.513a8.977,8.977,0,0,0,2.848-1.646l.447.258a3,3,0,0,0,3-5.2Zm-2.548-3.776a7.048,7.048,0,0,1,0,3.75,1,1,0,0,0,.464,1.133l1.084.626a1,1,0,0,1-1,1.733l-1.086-.628a1,1,0,0,0-1.215.165,6.984,6.984,0,0,1-3.243,1.875,1,1,0,0,0-.751.969V21a1,1,0,0,1-2,0V19.748a1,1,0,0,0-.751-.969A6.984,6.984,0,0,1,7.006,16.9a1,1,0,0,0-1.215-.165l-1.084.627a1,1,0,1,1-1-1.732l1.084-.626a1,1,0,0,0,.464-1.133,7.048,7.048,0,0,1,0-3.75A1,1,0,0,0,4.79,8.992L3.706,8.366a1,1,0,0,1,1-1.733l1.086.628A1,1,0,0,0,7.006,7.1a6.984,6.984,0,0,1,3.243-1.875A1,1,0,0,0,11,4.252V3a1,1,0,0,1,2,0V4.252a1,1,0,0,0,.751.969A6.984,6.984,0,0,1,16.994,7.1a1,1,0,0,0,1.215.165l1.084-.627a1,1,0,1,1,1,1.732l-1.084.626A1,1,0,0,0,18.746,10.125Z"})]})}));var k=a(8577),_=a(7843),C=a(432);const S=(0,r.memo)((e=>{const t=(0,j.D)(),{themeApp:a}=C.T.actions,{theme:r}=(0,j.G)((e=>e.themeAppSlice)),{className:n,children:s,...o}=e,l=(0,i.Ay)(_.A)((e=>{let{theme:t}=e;return{width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>\')')},"& + .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===t.palette.mode?"#8796A5":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:"dark"===t.palette.mode?"#003892":"#001e3c",width:32,height:32,"&::before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>\')')}},"& .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===t.palette.mode?"#8796A5":"#aab4be",borderRadius:10}}}));return(0,v.jsx)("div",{style:{marginLeft:"auto"},children:(0,v.jsx)(k.A,{checked:r,onChange:()=>t(a(!r)),control:(0,v.jsx)(l,{}),label:""})})}));var M=a(5475);const W=(0,r.memo)((e=>{const{className:t,children:a,...r}=e,{theme:i}=(0,j.G)((e=>e.themeAppSlice));return(0,v.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Outline",viewBox:"0 0 24 24",width:"35",height:"35",fill:i?"rgb(42, 127, 189)":"rgb(42,71,189)",children:[(0,v.jsx)("path",{d:"M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z"}),(0,v.jsx)("path",{d:"M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"}),(0,v.jsx)("path",{d:"M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z"}),(0,v.jsx)("path",{d:"M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"})]})})),T={toolbar:"MiniDrawer_toolbar__te4HI",headerDrawer:"MiniDrawer_headerDrawer__rg1kL",buttonText:"MiniDrawer_buttonText__N9MM8"},z=240,V=e=>({width:z,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),overflowX:"hidden"}),H=e=>({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:"calc(".concat(e.spacing(7)," + 1px)"),[e.breakpoints.up("sm")]:{width:"calc(".concat(e.spacing(8)," + 1px)")}}),N=(0,i.Ay)("div")((e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",justifyContent:"flex-end",padding:t.spacing(0,1),...t.mixins.toolbar}})),Z=(0,i.Ay)(l.A,{shouldForwardProp:e=>"open"!==e})((e=>{let{theme:t,open:a}=e;return{zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),...a&&{marginLeft:z,width:"calc(100% - ".concat(z,"px)"),transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})}}})),G=(0,i.Ay)(o.Ay,{shouldForwardProp:e=>"open"!==e})((e=>{let{theme:t,open:a}=e;return{width:z,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box",...a&&{...V(t),"& .MuiDrawer-paper":V(t)},...!a&&{...H(t),"& .MuiDrawer-paper":H(t)}}}));function I(e){const{children:t}=e,{theme:a}=(0,j.G)((e=>e.themeAppSlice)),{isAuth:i}=(0,j.G)((e=>e.authAppSlice)),[o,l]=((0,n.A)(),r.useState(!1)),k={"\u0417\u0430\u043f\u0438\u0441\u0438":[(0,v.jsx)(W,{}),"/"],"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c":[(0,v.jsx)(y,{}),"/record"],"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438":[(0,v.jsx)(f,{}),"/setting"]};return(0,v.jsxs)(s.A,{sx:{display:"flex"},children:[(0,v.jsx)(h.Ay,{}),(0,v.jsx)(Z,{position:"fixed",open:o,children:(0,v.jsxs)(c.A,{className:T.toolbar,children:[(0,v.jsx)(x.A,{color:"inherit","aria-label":"open drawer",onClick:()=>{l(!0)},edge:"start",sx:{marginRight:5,...o&&{display:"none"}},children:(0,v.jsx)(b,{theme:!0})}),(0,v.jsx)(m.A,{variant:"h6",noWrap:!0,component:"div",children:i.user.toUpperCase()}),(0,v.jsx)(S,{})]})}),(0,v.jsxs)(G,{variant:"permanent",open:o,children:[(0,v.jsx)(N,{className:T.headerDrawer,children:(0,v.jsx)(x.A,{onClick:()=>{l(!1)},children:(0,v.jsx)(b,{theme:!0})})}),(0,v.jsx)(p.A,{}),(0,v.jsx)(d.A,{className:T.drawer,children:Object.entries(k).map((e=>{let[t,a]=e;return(0,v.jsx)(M.N_,{style:{textDecoration:"none",color:"inherit"},to:"".concat(a[1]),children:(0,v.jsx)(u.Ay,{disablePadding:!0,sx:{display:"block",marginTop:"20px"},children:(0,v.jsxs)(g.A,{sx:{minHeight:48,justifyContent:o?"initial":"center",px:2.5},children:[(0,v.jsx)(A.A,{sx:{minWidth:0,mr:o?3:"auto",justifyContent:"center"},children:a[0]}),(0,v.jsx)(w.A,{primary:t,sx:{fontSize:"18px",fontWeight:"bold",opacity:o?1:0}})]})})},t)}))})]}),(0,v.jsxs)(s.A,{component:"main",sx:{height:"100vh",backgroundColor:a?"rgb(43,43,43)":"rgba(233, 237, 243, 1)",flexGrow:1,p:3},children:[(0,v.jsx)(N,{}),t]})]})}const R=(0,r.memo)((e=>{const{className:t,children:a,...r}=e;return(0,v.jsx)(I,{children:a})}))}}]);
//# sourceMappingURL=354.43eea90f.chunk.js.map