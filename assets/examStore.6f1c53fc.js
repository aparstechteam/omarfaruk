import{k as g,l as o,h as a,m as v,n as E}from"./index.ff7f570d.js";import{a as S}from"./api.0fbf7522.js";const _=g("exams",()=>{const t=o([]),r=o([]),c=async()=>{const{data:e}=await S("/exam",{headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("omarfarukuser")).token}});t.value=e.exams},m=a(()=>t.value.filter(e=>e.is_upcoming)),i=a(()=>t.value.filter(e=>e.is_ended)),l=a(()=>t.value.filter(e=>e.is_running)),u=v(),x=(e=u.params.id)=>t.value.find(s=>s._id==e),p=a(()=>t.value.find(e=>u.params.id==e._id)),n=E(),d=e=>{n.push("/?subject="+e),r.value=t.value.filter(s=>s.subject===e)},f=a(()=>{let e=t.value.map(s=>s.subject);return[...new Set(e)]});return{exams:t,getExams:c,upcomingExams:m,pastExams:i,currentExams:l,getExam:x,getBySubject:d,getSetOfSubjects:f,startExam:e=>{n.push(`/exam/${e}`)},subjectExams:r,curexam:p}},{persist:{storage:sessionStorage}});export{_ as u};
