import{y as a,G as c,I as u,o as i,c as x,a as e,O as d,P as p,J as m,Q as _}from"./index.31a7fbbc.js";import"./axios.236eb5ed.js";const v={class:"container py-20 mx-auto"},h=e("h2",{class:"text-2xl font-bold text-center"},"Request For Access",-1),f=["onSubmit"],b={class:"space-y-2 form-control"},g=e("label",{for:"ttrx",class:""},"Phone Number",-1),y=e("p",{class:"text-sm"},null,-1),S={class:"text-center"},N={setup(w){const t=a(""),s=a(!1),l=c();u();const n=()=>{s.value=!0,t.value.length==11&&l.push("/register?ttrx="+t.value.substring(t.value.length-10,t.value.length)),s.value=!1};return(B,o)=>(i(),x("div",v,[h,e("form",{onSubmit:_(n,["prevent"]),class:"max-w-2xl mx-auto space-y-2"},[e("div",b,[g,y,d(e("input",{type:"text",placeholder:"e.g. 01xxxxxxxxx","onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r),class:"input input-bordered"},null,512),[[p,t.value]])]),e("div",S,[e("button",{type:"submit",class:m(["btn",{loading:s.value}])},"Submit",2)])],40,f)]))}};export{N as default};
