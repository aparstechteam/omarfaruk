import{_ as l}from"./examloading.f66f2dcc.js";import{s as d,r as _,u as t,o as r,c as a,a as e,t as i,g as o,d as m,w as u,j as p}from"./index.ff7f570d.js";import{u as f}from"./examStore.6f1c53fc.js";import{f as x}from"./formatData.16acd92b.js";import"./api.0fbf7522.js";const h={key:0,class:"p-5 mx-auto my-10 space-y-4 text-center border border-gray-300 rounded-lg bangla ring ring-primary bg-gray-50 md:w-1/2"},g=e("div",null," \u098F\u0995\u09AC\u09BE\u09B0 \u098F\u0995\u09CD\u09B8\u09BE\u09AE \u09A6\u09BF\u09A4\u09C7 \u09A2\u09C1\u0995\u09B2\u09C7\u0987 \u09A4\u09CB\u09AE\u09BE\u09B0 \u09B8\u09AE\u09DF \u09B6\u09C1\u09B0\u09C1 \u09B9\u09DF\u09C7 \u09AF\u09BE\u09AC\u09C7\u0964 \u09AD\u09C1\u09B2\u09C7 \u09AC\u09BE \u09A8\u09C7\u099F\u09C7\u09B0 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE\u09DF \u09AC\u09BE \u0985\u09A8\u09CD\u09AF \u09AF\u09C7\u0995\u09CB\u09A8\u09CB \u0995\u09BE\u09B0\u09A3\u09C7 \u098F\u0995\u09BE\u09A7\u09BF\u0995\u09AC\u09BE\u09B0 \u098F\u0995\u09CD\u09B8\u09BE\u09AE \u09A6\u09C7\u09DF\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09B2\u09C7 \u09B0\u200D\u09CD\u09AF\u09BE\u0982\u0995\u09BF\u0982 \u098F \u09A4\u09CB\u09AE\u09BE\u09B0 \u09A8\u09BE\u09AE \u09B8\u09AC\u09BE\u09B0 \u09A8\u09BF\u099A\u09C7 \u099A\u09B2\u09C7 \u09AF\u09BE\u09AC\u09C7\u0964 ",-1),v={class:"text-2xl font-semibold text-orange-400"},y={class:"mt-3"},w=o(" \u098F\u0995\u09CD\u09B8\u09BE\u09AE \u09B6\u09C1\u09B0\u09C1 \u09B9\u09AC\u09C7: "),b=e("br",null,null,-1),k={class:"flex justify-center mt-3"},j=o("\u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09C1\u09A8"),B={key:1,class:"flex flex-col items-center justify-center w-full h-screen"},N=p('<img src="'+l+'" alt="" class="h-56"><div class="flex items-center justify-center space-x-1 text-sm text-gray-700"><svg fill="none" class="w-10 h-10 animate-spin" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z" fill="currentColor" fill-rule="evenodd"></path></svg><div class="text-lg">Please wait ...</div></div>',2),V=[N],M={setup(C){const n=f(),{curexam:s}=d(n);return(S,T)=>{const c=_("router-link");return t(s)&&t(s)._id?(r(),a("div",h,[g,e("div",null,[e("h1",v,i(t(s).title),1),e("h1",y,[w,b,o(" "+i(t(x)(t(s).start_time)),1)])]),e("div",k,[m(c,{to:`/exam/${t(s)._id}`,class:"!px-10 bg-primary squared_btn"},{default:u(()=>[j]),_:1},8,["to"])])])):(r(),a("div",B,V))}}};export{M as default};
