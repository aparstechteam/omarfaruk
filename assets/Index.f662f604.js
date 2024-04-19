import{_ as T}from"./examloading.f66f2dcc.js";import{_ as B,u as M,a as L}from"./plugin-vue_export-helper.15a5e94e.js";import{o,c as i,a as t,t as r,u as N,r as j,b as S,d as s,e as f,f as $,w as k,g as w,F as C,h as v,s as A,i as Q,j as V}from"./index.fa6901f6.js";import{f as p,a as x}from"./formatData.16acd92b.js";import"./headlessui.esm.7e190dfd.js";const F={name:"timer",props:{end:{requiblue:!0}},data(){return{days:0,hours:0,minute:0,second:0}},methods:{formatNumber(m){return Intl.NumberFormat("bn-BD").format(m)},showRemaining(){const m=setInterval(()=>{const c=this.end-Date.now();if(c<0){clearInterval(m);return}const u=Math.floor(c/this._days),a=Math.floor(c%this._days/this._hours),l=Math.floor(c%this._hours/this._minutes),e=Math.floor(c%this._minutes/this._seconds);this.second=e<10?"0"+e:e,this.minute=l<10?"0"+l:l,this.hours=a<10?"0"+a:a,this.days=u<10?"0"+u:u})}},computed:{_seconds:()=>1e3,_minutes(){return this._seconds*60},_hours(){return this._minutes*60},_days(){return this._hours*24}},mounted(){this.showRemaining()}},I={class:"space-x-3"},R={class:"inline-flex flex-col items-center justify-center w-16 h-16 my-2 text-gray-800 bg-gray-300 rounded-full dark:bg-white sm:w-20 sm:h-20 ring-2 ring-offset-1 ring-red-500"},q={class:"text-xl font-bold"},H=t("p",{class:"text-sm"},"\u09A6\u09BF\u09A8",-1),z={class:"inline-flex flex-col items-center justify-center w-16 h-16 my-2 text-gray-800 bg-gray-300 rounded-full dark:bg-white sm:w-20 sm:h-20 ring-2 ring-offset-1 ring-blue-400"},P={class:"text-xl font-bold"},G=t("p",{class:"text-sm"},"\u0998\u09A8\u09CD\u099F\u09BE",-1),J={class:"inline-flex flex-col items-center justify-center w-16 h-16 my-2 text-gray-800 bg-gray-300 rounded-full dark:bg-white sm:w-20 sm:h-20 ring-2 ring-offset-1 ring-indigo-400"},K={class:"text-xl font-bold"},O=t("p",{class:"text-sm"},"\u09AE\u09BF\u09A8\u09BF\u099F",-1),U={class:"inline-flex flex-col items-center justify-center w-16 h-16 my-2 text-gray-800 bg-gray-300 rounded-full dark:bg-white sm:w-20 sm:h-20 ring-2 ring-offset-1 ring-emerald-400"},W={class:"text-xl font-bold"},X=t("p",{class:"text-sm"},"\u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1",-1);function Y(m,c,u,a,l,e){return o(),i("div",I,[t("div",R,[t("h2",q,r(e.formatNumber(l.days)),1),H]),t("div",z,[t("h2",P,r(e.formatNumber(l.hours)),1),G]),t("div",J,[t("h2",K,r(e.formatNumber(l.minute)),1),O]),t("div",U,[t("h2",W,r(e.formatNumber(l.second)),1),X])])}var Z=B(F,[["render",Y]]);const h={exam:"/omarfaruk/assets/icons/exam.png",live:"/omarfaruk/assets/icons/live.png",rank:"/omarfaruk/assets/icons/rank.png",schedule:"/omarfaruk/assets/icons/schedule.png",time:"/omarfaruk/assets/icons/time.png"},tt={class:"text-right"},st=["onClick"],et={class:"text-xl font-bold text-center text-red-500 animate-pulse"},ot={class:"my-3 text-center"},nt={class:"text-2xl font-bold"},it=["innerHTML"],rt={class:"grid gap-5 mb-4 md:grid-cols-2"},dt={class:"flex items-center gap-2 overflow-hidden border rounded-lg"},lt={class:"p-2 bg-gray-100"},ct=["src"],at={class:"text-sm font-semibold"},_t=t("p",{class:"text-gray-500"},"\u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u09B6\u09C1\u09B0\u09C1\u0983",-1),ut={class:"flex items-center gap-2 overflow-hidden border rounded-lg"},ht={class:"p-2 bg-gray-100"},mt=["src"],gt={class:"text-sm font-semibold"},pt=t("p",{class:"text-gray-500"},"\u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u09B6\u09C7\u09B7\u0983",-1),bt={class:"grid grid-cols-2 gap-5"},ft={class:"flex items-center gap-2 overflow-hidden border rounded-lg"},xt={class:"p-2 bg-gray-100"},vt=["src"],yt={class:"text-sm font-semibold"},$t=t("p",{class:"text-gray-500"},"\u09AA\u09C2\u09B0\u09CD\u09A3\u09AE\u09BE\u09A8\u0983",-1),kt={class:"flex items-center gap-2 overflow-hidden border rounded-lg"},wt={class:"p-2 bg-gray-100"},Ct=["src"],Et={class:"text-sm font-semibold"},Dt=t("p",{class:"text-gray-500"},"\u09B8\u09AE\u09DF\u0983",-1),Mt={class:"my-2 space-y-3 text-center"},Nt={class:"font-semibold text-center"},jt={key:0,class:"grid grid-cols-3 gap-4 text-center"},St=["onClick"],Tt=v(" \u0989\u09A4\u09CD\u09A4\u09B0\u09AA\u09A4\u09CD\u09B0 "),D={props:{exams:{type:Array,required:!0}},setup(m){const{upcomingAlert:c}=M(),{startExam:u}=N(),a=l=>{const e=document.createElement("textarea");e.value=window.location.href+`link/${l}`,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),alert("Link Copied")};return(l,e)=>{const g=j("router-link");return o(!0),i(C,null,S(m.exams,(n,b)=>(o(),i("div",{key:b,class:"relative max-w-2xl p-5 mx-2 my-4 border border-black shadow-md bangla bg-slate-50/10 rounded-2xl md:mx-auto"},[t("div",tt,[t("button",{class:"px-2 py-1 text-white bg-gray-700 border rounded",onClick:_=>a(n._id)}," \u0995\u09AA\u09BF \u09B2\u09BF\u0999\u09CD\u0995 ",8,st)]),t("h1",et,r(n.is_running?"\u099A\u09B2\u09AE\u09BE\u09A8":"\u09AA\u09B0\u09AC\u09B0\u09CD\u09A4\u09C0")+" \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE... ",1),t("div",ot,[t("h1",nt,r(n.title),1),t("h2",{innerHTML:n.subject},null,8,it)]),t("div",rt,[t("div",dt,[t("div",lt,[t("img",{src:s(h).schedule,class:"h-8",alt:"Exam Duration"},null,8,ct)]),t("div",at,[_t,t("p",null,r(s(p)(n.start_time)),1)])]),t("div",ut,[t("div",ht,[t("img",{src:s(h).schedule,class:"h-8",alt:"Exam Duration"},null,8,mt)]),t("div",gt,[pt,t("p",null,r(s(p)(n.end_time)),1)])])]),t("div",bt,[t("div",ft,[t("div",xt,[t("img",{src:s(h).exam,class:"h-8",alt:"Exam Duration"},null,8,vt)]),t("div",yt,[$t,t("p",null,r(s(x)(n.total_marks))+" \u09AE\u09BF\u09A8\u09BF\u099F",1)])]),t("div",kt,[t("div",wt,[t("img",{src:s(h).time,class:"h-8",alt:"Exam Duration"},null,8,Ct)]),t("div",Et,[Dt,t("p",null,r(s(x)(n.duration))+" \u09AE\u09BF\u09A8\u09BF\u099F",1)])])]),t("div",Mt,[t("p",Nt," \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE "+r(n.is_running?"\u09B6\u09C7\u09B7":"\u09B6\u09C1\u09B0\u09C1")+" \u09B9\u09A4\u09C7 \u09B8\u09AE\u09DF \u09AC\u09BE\u0995\u09BF ",1),f(Z,{end:new Date(n.is_running?n.end_time:n.start_time)},null,8,["end"])]),n.is_running?(o(),i("div",jt,[n.is_upcoming?(o(),i("button",{key:1,class:"px-4 py-2 font-semibold text-white bg-green-600 border rounded-md",onClick:e[0]||(e[0]=_=>s(c)("MCQ Exam","starts"))}," \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE ")):(o(),i("button",{key:0,class:"px-4 py-2 font-semibold text-white bg-green-600 border rounded-md",onClick:_=>s(u)(n._id,n.chapter)}," \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE ",8,St)),n.solution_published?(o(),$(g,{key:2,class:"px-4 py-2 font-semibold text-white bg-red-500 border rounded-md",to:`/solution/${n._id}`},{default:k(()=>[Tt]),_:2},1032,["to"])):(o(),i("button",{key:3,class:"px-4 py-2 font-semibold text-white bg-red-500 border rounded-md",onClick:e[1]||(e[1]=_=>s(c)("MCQ Solve","Ends"))}," \u0989\u09A4\u09CD\u09A4\u09B0\u09AA\u09A4\u09CD\u09B0 ")),t("button",{class:"px-4 py-2 font-semibold text-white border rounded-md bg-violet-500",onClick:e[2]||(e[2]=_=>s(c)("Leaderboard","Ends"))}," \u09AB\u09B2\u09BE\u09AB\u09B2 ")])):w("",!0)]))),128)}}},Bt={key:0,class:"container py-5 mx-auto"},Lt={key:0},At={key:1},Qt={class:"grid gap-4 px-2 mx-auto bangla md:grid-cols-2 bensen"},Vt={class:"text-lg font-bold text-center"},Ft={class:"text-center"},It=t("span",{class:"font-semibold"},"\u09AC\u09BF\u09B7\u09DF\u0983 ",-1),Rt={class:"grid gap-5 mb-4 md:grid-cols-2"},qt={class:"flex items-center gap-2 overflow-hidden border rounded-lg"},Ht={class:"p-2 bg-gray-100"},zt=["src"],Pt={class:"text-sm font-semibold"},Gt=t("p",{class:"text-gray-500"},"\u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u09B6\u09C1\u09B0\u09C1\u0983",-1),Jt={class:"flex items-center gap-2 overflow-hidden border rounded-lg"},Kt={class:"p-2 bg-gray-100"},Ot=["src"],Ut={class:"text-sm font-semibold"},Wt=t("p",{class:"text-gray-500"},"\u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u09B6\u09C7\u09B7\u0983",-1),Xt={class:"grid grid-cols-2 gap-5"},Yt={class:"flex items-center gap-2 overflow-hidden border rounded-lg"},Zt={class:"p-2 bg-gray-100"},ts=["src"],ss={class:"text-sm font-semibold"},es=t("p",{class:"text-gray-500"},"\u09AA\u09C2\u09B0\u09CD\u09A3\u09AE\u09BE\u09A8\u0983",-1),os={class:"flex items-center gap-2 overflow-hidden border rounded-lg"},ns={class:"p-2 bg-gray-100"},is=["src"],rs={class:"text-sm font-semibold"},ds=t("p",{class:"text-gray-500"},"\u09B8\u09AE\u09DF\u0983",-1),ls={class:"grid grid-cols-3 gap-4 text-center"},cs=["onClick"],as=v("\u0989\u09A4\u09CD\u09A4\u09B0\u09AA\u09A4\u09CD\u09B0 "),_s=["onClick"],us=v("\u09AB\u09B2\u09BE\u09AB\u09B2 "),hs={key:1,class:"flex flex-col items-center justify-center w-full h-screen"},ms=V('<img src="'+T+'" alt="" class="h-56"><div class="flex items-center justify-center space-x-1 text-sm text-gray-700"><svg fill="none" class="w-10 h-10 animate-spin" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z" fill="currentColor" fill-rule="evenodd"></path></svg><div class="text-lg">Please wait ...</div></div>',2),gs=[ms],$s={setup(m){const c=N(),{startExam:u}=c,{exams:a,upcomingExams:l,currentExams:e}=A(c),{upcomingAlert:g}=M(),n=Q(()=>a.value.reverse().filter(b=>b.is_ended));return(b,_)=>{const E=j("router-link");return o(),i(C,null,[s(a).length>0?(o(),i("div",Bt,[s(e).length>0?(o(),i("div",Lt,[f(D,{exams:s(e)},null,8,["exams"])])):w("",!0),s(l).length>0?(o(),i("div",At,[f(D,{exams:s(l)},null,8,["exams"])])):w("",!0),t("div",Qt,[(o(!0),i(C,null,S(s(n),(d,ps)=>(o(),i("div",{key:d.id,class:"relative p-4 space-y-2 border-2 border-gray-700 rounded-xl"},[t("h1",Vt,r(d.title),1),t("p",Ft,[It,v(" "+r(d.subject),1)]),t("div",Rt,[t("div",qt,[t("div",Ht,[t("img",{src:s(h).schedule,class:"h-8",alt:"Exam Duration"},null,8,zt)]),t("div",Pt,[Gt,t("p",null,r(s(p)(d.start_time)),1)])]),t("div",Jt,[t("div",Kt,[t("img",{src:s(h).schedule,class:"h-8",alt:"Exam Duration"},null,8,Ot)]),t("div",Ut,[Wt,t("p",null,r(s(p)(d.end_time)),1)])])]),t("div",Xt,[t("div",Yt,[t("div",Zt,[t("img",{src:s(h).exam,class:"h-8",alt:"Exam Duration"},null,8,ts)]),t("div",ss,[es,t("p",null,r(s(x)(d.total_marks))+" \u09AE\u09BF\u09A8\u09BF\u099F",1)])]),t("div",os,[t("div",ns,[t("img",{src:s(h).time,class:"h-8",alt:"Exam Duration"},null,8,is)]),t("div",rs,[ds,t("p",null,r(s(x)(d.duration))+" \u09AE\u09BF\u09A8\u09BF\u099F",1)])])]),t("div",ls,[d.is_upcoming?(o(),i("button",{key:1,class:"px-4 py-2 font-semibold text-white bg-green-600 border rounded-md",onClick:_[0]||(_[0]=y=>s(g)("MCQ Exam","starts"))}," \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE ")):(o(),i("button",{key:0,class:"px-4 py-2 font-semibold text-white bg-green-600 border rounded-md",onClick:y=>s(u)(d._id,d.chapter)}," \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE ",8,cs)),d.solution_published?(o(),$(E,{key:2,class:"px-4 py-2 font-semibold text-white bg-red-500 border rounded-md",to:`/solution/${d._id}`},{default:k(()=>[as]),_:2},1032,["to"])):(o(),i("button",{key:3,class:"px-4 py-2 font-semibold text-white bg-red-500 border rounded-md",onClick:y=>s(g)("MCQ Solve","Ends at "+s(p)(d.solution_publish_time))}," \u0989\u09A4\u09CD\u09A4\u09B0\u09AA\u09A4\u09CD\u09B0 ",8,_s)),d.result_published?(o(),$(E,{key:4,class:"px-4 py-2 font-semibold text-white border rounded-md bg-violet-500",to:`/ranking/${d._id}`},{default:k(()=>[us]),_:2},1032,["to"])):(o(),i("button",{key:5,class:"px-4 py-2 font-semibold text-white bg-red-500 border rounded-md",onClick:_[1]||(_[1]=y=>s(g)("MCQ Leaderboard","Ends"))}," \u09AB\u09B2\u09BE\u09AB\u09B2 "))])]))),128))])])):(o(),i("div",hs,gs)),f(L)],64)}}};export{$s as default};
