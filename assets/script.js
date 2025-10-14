document.addEventListener('DOMContentLoaded',()=>{
  const dark=document.getElementById('darkToggle'),lang=document.getElementById('langToggle'),topBtn=document.getElementById('backToTop');
  dark.addEventListener('click',()=>{document.documentElement.classList.toggle('dark-mode');dark.textContent=document.documentElement.classList.contains('dark-mode')?'☀️':'🌙';});
  lang.addEventListener('click',()=>{currentLang=currentLang==='en'?'zh':'en';lang.textContent=currentLang==='en'?'中文':'EN';render(currentLang);});
  window.addEventListener('scroll',()=>{topBtn.style.display=window.scrollY>200?'block':'none';});
  topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  render(currentLang);
});

let currentLang='en';
const data={en:{sections:{about:'About',skills:'Skills',experience:'Experience'},about:'3.8 years acoustic engineer.',skills:[{name:'Acoustic',pct:80},{name:'Automation',pct:75}],experience:[{role:'Acoustic R&D',company:'Wistron',time:'2019-2023',details:['Worked on Gandalf project.']}]},zh:{sections:{about:'關於我',skills:'技能',experience:'經歷'},about:'3.8 年聲學經驗。',skills:[{name:'聲音分析',pct:80},{name:'自動化',pct:75}],experience:[{role:'聲學研發',company:'緯創',time:'2019-2023',details:['開發 Gandalf 專案。']}]};

function render(l){const d=data[l];document.getElementById('aboutText').textContent=d.about;
document.querySelectorAll('#navLinks .nav-link').forEach(a=>{const k=a.dataset.navIndex;if(d.sections[k])a.textContent=d.sections[k];});
const sb=document.getElementById('skillBars');sb.innerHTML=d.skills.map(v=>`<div><div>${v.name}</div><div class='progress'><div class='progress-bar' style='width:0%' data-value='${v.pct}%'></div></div></div>`).join('');
const e=document.getElementById('expTimeline');e.innerHTML=d.experience.map(v=>`<li><div class='timeline-panel'><b>${v.role}</b> - ${v.company} (${v.time})<ul>${v.details.map(x=>`<li>${x}</li>`).join('')}</ul></div></li>`).join('');
document.querySelectorAll('.progress-bar').forEach(b=>{setTimeout(()=>b.style.width=b.dataset.value,300);});}
