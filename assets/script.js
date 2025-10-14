// assets/script.js - HenryResume Pro Version
// Features: multilingual, dark mode, reveal animations, skill bars, interactive experience expand.
// All dynamic text is sourced from `data` (English and Chinese).
// Sections auto-update by matching section IDs to data.sections keys.

document.addEventListener('DOMContentLoaded', () => {
  const darkToggle = document.getElementById('darkToggle');
  const langToggle = document.getElementById('langToggle');
  const backToTop = document.getElementById('backToTop');

  // Toggle dark mode (keeps button visible in dark mode via CSS)
  darkToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
    // swap icon
    darkToggle.textContent = document.documentElement.classList.contains('dark-mode') ? '☀️' : '🌙';
  });

  // Language toggle: flip between 'en' and 'zh'
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    langToggle.textContent = currentLang === 'en' ? '中文' : 'EN';
    render(currentLang);
  });

  // Back to top visibility
  window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 220 ? 'block' : 'none';
  });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Initial render
  render(currentLang);
  observeReveals();
  observeSkillBars();
});

let currentLang = 'en';

// helper: percent to level string
function pctToLevel(pct, lang='en') {
  if (pct >= 85) return lang==='en'? 'Expert':'專家';
  if (pct >= 70) return lang==='en'? 'Advanced':'進階';
  if (pct >= 50) return lang==='en'? 'Intermediate':'中階';
  return lang==='en'? 'Beginner':'初階';
}

// Data extracted from your PDF and our conversation
const data = {
  en:{
    sections:{
      about:'About', skills:'Skills', experience:'Experience',
      education:'Education', achievements:'Achievements',
      performance:'Performance Improvements', community:'Community Service', contact:'Contact'
    },
    name:'Henry Chang',
    title:'Acoustic Engineer',
    tagline:'Solve, Connect, Deliver.',
    about:'3.8 years of experience as an acoustic engineer. Passionate about challenges and continuous learning. I combine acoustic analysis, automation, and mechanical integration skills to improve product performance and process efficiency. I proactively discover optimization points and propose practical solutions, and I enjoy sharing knowledge with teammates.',
    skills:[
      {name:'Acoustic Quality Analysis', pct:80, meta:'AP / SoundCheck'},
      {name:'Automation & Scripting (Python / Vibe)', pct:75, meta:'Test automation'},
      {name:'Mechanical Design Integration', pct:70, meta:'ME collaboration'},
      {name:'Vibe Coding & Tooling', pct:68, meta:'Measurement tooling'},
      {name:'Cross-functional Communication', pct:90, meta:'SW/EE/ME coordination'}
    ],
    experience:[
      {role:'Acoustic R&D', company:'Wistron', time:'Nov 2019 - 2023', details:[
        'Collaboratively work with mechanical team to accomplish acoustic design.',
        'Highly familiar with audio measurement analyzer (Audio Precision, SoundCheck).',
        'Proposed design changes to improve device performance and manufacturability.',
        'Analyzed manufacturing issues and provided solutions with SW, EE and ME.',
        'Managed audio contact with GN Audio (Denmark).'
      ]},
      {role:'R&D Intern', company:'HTC', time:'Sep 2013 - Sep 2014', details:[
        'Learned and taught CAV 3D scan measurement.',
        'Improved mobile deformation and stress measurement process.',
        'Assisted in audio performance verification and test procedures.'
      ]}
    ],
    education:[{school:'Ming Chi University of Technology', degree:'Master in Mechanical Engineering', time:'2018'}],
    achievements:[
      'Promotion from level 8 engineer to level 9 senior engineer',
      'Got the highest score in C++ course',
      'Presented Micro-Flexible Probe Research at the Nagoya seminar',
      'Created and integrated a one-click process for Line official accounts',
      'Built a website for SPI using Wix'
    ],
    performance:[
      'Reduced cycle time in manufacturing test by 70%',
      'Improved higher frequency SPL by structural audio reflection',
      'Created SoundCheck automated test sequence',
      'Organized task items to expedite schedule and prevent resource wastage'
    ],
    community:[
      'Art museum volunteer - Guided people to the exhibition area',
      'Yuli church volunteer - Lead children and make review video',
      'Drama volunteer - Arrange and clean the environment'
    ],
    contact:{email:'henry_0325@yahoo.com.tw', phone:'0975-260-521', address:'11F., No. 10, Wenlin N. Rd., Beitou Dist., Taipei City 112, Taiwan'}
  },
  zh:{
    sections:{
      about:'關於我', skills:'技能', experience:'經歷',
      education:'學歷', achievements:'成就',
      performance:'績效改善', community:'社會服務', contact:'聯絡資訊'
    },
    name:'張思緯',
    title:'聲學工程師',
    tagline:'解決問題、串連團隊、交付價值。',
    about:'擁有 3.8 年聲學工程師經驗，熱愛接受挑戰並不斷學習新知。我結合聲學分析、自動化與機構整合能力，持續提升產品效能與流程效率。擅長主動發現優化重點、提出具體方案，並樂於與同事分享合作。',
    skills:[
      {name:'聲音品質分析', pct:80, meta:'AP / SoundCheck'},
      {name:'自動化與腳本 (Python / Vibe)', pct:75, meta:'測試自動化'},
      {name:'機構設計整合', pct:70, meta:'與 ME 協作'},
      {name:'Vibe 開發與量測工具', pct:68, meta:'量測工具'},
      {name:'跨部門溝通協作', pct:90, meta:'SW/EE/ME 協調'}
    ],
    experience:[
      {role:'聲學研發', company:'緯創', time:'2019 年 11 月 - 2023 年', details:[
        '與機構團隊協作完成聲學設計。',
        '熟悉音訊量測分析儀 (Audio Precision, SoundCheck)。',
        '提出設計改良以提升裝置效能與量產性。',
        '與軟體、電機與機構團隊合作，分析製造問題並提供解決方案。',
        '負責與 GN Audio (丹麥) 的音訊聯繫與管理。'
      ]},
      {role:'研發實習生', company:'宏達電 (HTC)', time:'2013 年 9 月 - 2014 年 9 月', details:[
        '學習並教導 CAV 3D 掃描量測。',
        '改善手機變形、應力與強度量測流程。',
        '協助音訊效能驗證與測試程序。'
      ]}
    ],
    education:[{school:'明志科技大學', degree:'機械工程碩士', time:'2018'}],
    achievements:[
      '從 8 級工程師晉升至 9 級資深工程師',
      'C++ 課程獲得最高分',
      '於名古屋研討會發表微型柔性探針研究',
      '建立並整合 LINE 官方帳號一鍵流程',
      '使用 Wix 建置 SPI 網站'
    ],
    performance:[
      '將製造測試循環時間縮短 70%',
      '透過結構聲音反射改善高頻 SPL',
      '建立 SoundCheck 自動測試序列',
      '組織任務項目，加速進度並避免資源浪費'
    ],
    community:[
      '美術館志工 - 引導參觀者至展覽區',
      '玉里教會志工 - 帶領孩童並製作回顧影片',
      '戲劇志工 - 場地布置與環境維護'
    ],
    contact:{email:'henry_0325@yahoo.com.tw', phone:'0975-260-521', address:'台北市北投區文林北路10號11樓'}
  }
};

// Render function: updates nav, section headings, content
function render(lang='en'){
  const d = data[lang];
  // nav links
  document.querySelectorAll('#navLinks .nav-link').forEach(a=>{
    const key = a.getAttribute('data-nav-index');
    if(d.sections && d.sections[key]) a.textContent = d.sections[key];
  });
  // section titles (auto by section id)
  document.querySelectorAll('main .resume-section').forEach(sec=>{
    const id = sec.id;
    const h2 = sec.querySelector('h2');
    if(h2 && d.sections && d.sections[id]) h2.textContent = d.sections[id];
  });
  // sidebar
  const nameEl = document.getElementById('name');
  const titleEl = document.getElementById('title');
  const taglineEl = document.getElementById('tagline');
  if(nameEl) nameEl.textContent = d.name;
  if(titleEl) titleEl.textContent = d.title;
  if(taglineEl) taglineEl.textContent = d.tagline;

  // about
  const about = document.getElementById('aboutText');
  if(about) about.textContent = d.about;

  // skills chips and bars
  const skillsList = document.getElementById('skillsList');
  const skillBars = document.getElementById('skillBars');
  if(skillsList) skillsList.innerHTML = d.skills.map(s=>`<span class="skill-chip">${s.name}<span class="skill-meta"> ${pctToLevel(s.pct,lang)} • ${s.meta||''}</span></span>`).join('');
  if(skillBars) skillBars.innerHTML = d.skills.map(s=>`<div class="col-md-6 mb-2"><div class="d-flex justify-content-between"><strong>${s.name}</strong><small class="small-muted">${pctToLevel(s.pct,lang)}</small></div><div class="progress"><div class="progress-bar" role="progressbar" style="width:0%" data-value="${s.pct}%"></div></div></div>`).join('');

  // experience timeline (interactive: click to toggle details)
  const expEl = document.getElementById('expTimeline');
  if(expEl){
    expEl.innerHTML = d.experience.map((e, idx)=>`<li class="exp-item"><div class="timeline-panel"><div class="exp-head"><strong>${e.role}</strong> - ${e.company} <span class="small-muted">(${e.time})</span></div><div class="exp-body" data-open="false">${e.details.map(it=>`<li>${it}</li>`).join('')}</div></div></li>`).join('');
    // attach toggle listeners for expand/collapse
    document.querySelectorAll('.exp-item .exp-head').forEach((h, i)=>{
      h.style.cursor='pointer';
      h.addEventListener('click', ()=>{
        const body = h.parentElement.querySelector('.exp-body');
        const open = body.getAttribute('data-open')==='true';
        body.style.display = open ? 'none' : 'block';
        body.setAttribute('data-open', open? 'false':'true');
      });
      // default collapse
      const body = h.parentElement.querySelector('.exp-body');
      if(body){ body.style.display='none'; body.setAttribute('data-open','false'); }
    });
  }

  // education/achievements/performance/community/contact
  const edu = document.getElementById('eduList');
  if(edu) edu.innerHTML = d.education.map(ed=>`<p><strong>${ed.school}</strong> — ${ed.degree} <em>(${ed.time})</em></p>`).join('');
  const achieve = document.getElementById('achieveList');
  if(achieve) achieve.innerHTML = d.achievements.map(a=>`<li>${a}</li>`).join('');
  const perf = document.getElementById('perfList');
  if(perf) perf.innerHTML = d.performance.map(p=>`<li>${p}</li>`).join('');
  const comm = document.getElementById('communityList');
  if(comm) comm.innerHTML = d.community.map(c=>`<li>${c}</li>`).join('');
  const contact = document.getElementById('contactInfo');
  if(contact) contact.innerHTML = `<p>Email: <a href="mailto:${d.contact.email}">${d.contact.email}</a></p><p>Phone: ${d.contact.phone}</p><p class="small-muted">${d.contact.address}</p>`;

  // re-init observers/animations
  observeReveals();
  observeSkillBars();
}

// IntersectionObserver: reveal on scroll
let revealObserver = null;
function observeReveals(){
  if(revealObserver) revealObserver.disconnect();
  const reveals = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window) || reveals.length===0){
    reveals.forEach(r=>r.classList.add('in-view'));
    return;
  }
  revealObserver = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in-view'); });
  }, {threshold:0.12});
  reveals.forEach(r=>{ r.classList.remove('in-view'); revealObserver.observe(r); });
}

// Skill bars: animate when visible
let skillObserver = null;
function observeSkillBars(){
  if(skillObserver) skillObserver.disconnect();
  const bars = document.querySelectorAll('.progress-bar');
  if(!('IntersectionObserver' in window) || bars.length===0){
    bars.forEach(b=>b.style.width = b.getAttribute('data-value') || '80%');
    return;
  }
  skillObserver = new IntersectionObserver((entries, obs)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const bar = entry.target;
        const val = bar.getAttribute('data-value') || '80%';
        bar.style.width = val;
        obs.unobserve(bar);
      }
    });
  }, {threshold:0.2});
  bars.forEach(b=>{ b.style.width='0%'; skillObserver.observe(b); });
}

// initial render
render(currentLang);

/* END of script.js */
