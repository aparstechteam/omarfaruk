import{G as m,H as p,y as r,I as _,o as v,c as x,a as e,O as n,P as i,J as f,Q as b}from"./index.31a7fbbc.js";const g={class:"container max-w-2xl px-2 py-20 mx-auto"},y=["onSubmit"],h={class:"form-control"},S=e("label",{for:"name"},"Name",-1),q={class:"form-control"},N=e("label",{for:"college"},"Institution",-1),U={class:"text-center"},V={setup(w){const a=m(),l=p(),t=r({ttrx:"",name:"",college:""});l.query.ttrx?t.value.ttrx=l.query.ttrx:a.replace("/login");const{setUser:u}=_(),c=r(!1),d=()=>{localStorage.setItem("bn23exam",JSON.stringify(t.value)),u(t.value),a.push("/")};return(B,s)=>(v(),x("div",g,[e("form",{onSubmit:b(d,["prevent"]),class:"space-y-3"},[e("div",h,[S,n(e("input",{type:"text",required:"","onUpdate:modelValue":s[0]||(s[0]=o=>t.value.name=o),class:"input input-bordered"},null,512),[[i,t.value.name]])]),e("div",q,[N,n(e("input",{type:"text",required:"","onUpdate:modelValue":s[1]||(s[1]=o=>t.value.college=o),placeholder:"College Name",class:"input input-bordered"},null,512),[[i,t.value.college]])]),e("div",U,[e("button",{type:"submit",class:f(["btn btn-primary",{loading:c.value}])},"Submit",2)])],40,y)]))}};export{V as default};
