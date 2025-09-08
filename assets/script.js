document.addEventListener('DOMContentLoaded', () => {
  const darkBtn = document.getElementById('darkToggle');
  const langBtn = document.getElementById('langToggle');
  const backBtn = document.getElementById('backToTop');

  // 深色模式切換
  if (darkBtn) {
    darkBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      darkBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
  }

  // 語言切換
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'zh' : 'en';
      render(currentLang);
      langBtn.textContent = currentLang === 'en' ? '中文' : 'EN';
      observeReveals();
      observeSkillBars();
    });
  }

  // 回頂按鈕
  if (backBtn) {
    window.addEventListener('scroll', () => {
      backBtn.style.display = window.scrollY > 220 ? 'inline-flex' : 'none';
    });
    backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  render(currentLang);
  observeReveals();
  observeSkillBars();
});

let currentLang = 'en';

// 百分比 → 等級（根據百分比）
function pctToLevel(pct, lang = 'en') {
  if (pct >= 85) return lang === 'en' ? 'Expert' : '專家';
  if (pct >= 70) return lang === 'en' ? 'Advanced' : '進階';
  if (pct >= 50) return lang === 'en' ? 'Intermediate' : '中階';
  return lang === 'en' ? 'Beginner' : '初階';
}

// 履歷資料
const data = {
  en: {
    nav: {
      about: 'About', skills: 'Skills', experience: 'Experience',
      education: 'Education', achievements: 'Achievements',
      performance: 'Performance', community: 'Community', contact: 'Contact'
    },
    name: "Henry Chang",
    title: "<strong>Acoustic Engineer</strong>",
    about: "3.8 years of experience as an acoustic engineer. Love exploring the unknown things and knowledge. Extremely motivated to constantly develop my skills and grow professionally.",
    skills: [
      { name: "Acoustic Design", pct: 80, years: 3 },
      { name: "Audio Measurement (AP / SoundCheck)", pct: 85, years: 3.5 },
      { name: "Python & Automation", pct: 60, years: 1.5 },
      { name: "Signal Processing", pct: 50, years: 2 },
      { name: "Team Collaboration", pct: 90, years: 4 }
    ],
    experience: [
      { role: "Acoustic Engineer", company: "Wisrton Corp", time: "2020 - 2023", details: ["Acoustic design", "Audio measurement automation", "Cross-team collaboration"] },
      { role: "Intern", company: "HTC Corp", time: "2019 - 2020", details: ["Learned and taught CAV 3D scan measurement", "Improved mobile deformation, stress, and strength measurement process."] }
    ],
    education: [
      { school: "Ming-Chi University of Technology", degree: "Master of Microelectromechanical Systems", time: "2018 - 2020" },
      { school: "Ming-Chi University of Technology", degree: "Bachelor of Mechatronics", time: "2014 - 2018" }
    ],
    achievements: ["Best Performance Award - Wistron Corp 2022", "Published 2 technical patents on acoustic design"],
    performance: ["Improved measurement automation by 40%", "Reduced test time by 70%"],
    community: ["Mentor in Acoustic Engineering Meetup", "Open-source contributor for Python audio tools"],
    contact: {
      email: 'henry_0325@yahoo.com.tw',
      phone: '0975-260-521',
      address: '11F., No. 10, Wenlin N. Rd., Beitou Dist., Taipei City 112, Taiwan'
    }
  },

  zh: {
    nav: {
      about: '關於我', skills: '技能', experience: '經歷',
      education: '學歷', achievements: '成就',
      performance: '績效', community: '社會服務', contact: '聯絡資訊'
    },
    name: "張思緯",
    title: "聲學工程師",
    about: "擁有 3.8 年聲學工程師經驗，熱衷探索與學習。專長於音訊量測、Python 自動化與跨部門協作。",
    skills: [
      { name: "聲學設計", pct: 80, years: 3 },
      { name: "音訊量測 (AP / SoundCheck)", pct: 85, years: 3.5 },
      { name: "Python 自動化", pct: 60, years: 1.5 },
      { name: "訊號處理", pct: 50, years: 2 },
      { name: "團隊協作", pct: 90, years: 4 }
    ],
    experience: [
      { role: "聲學工程師", company: "XYZ 音訊公司", time: "2020 - 2023", details: ["聲學設計", "音訊量測自動化", "跨部門協作"] },
      { role: "實習生", company: "ABC 科技", time: "2019 - 2020", details: ["學習並教導CAV 3D掃描測量","改進了手機變形、應力和強度測量流程。"] }
    ],
    education: [
      { school: "明志科技大學", degree: "微機電系統碩士", time: "2018 - 2020" },
      { school: "明志科技大學", degree: "光機電學士", time: "2014 - 2018" }
    ],
    achievements: ["XYZ 公司最佳表現獎 2022", "發表兩篇聲學設計相關專利"],
    performance: ["測試自動化效率提升 40%", "測試時間縮短 70%"],
    community: ["聲學工程聚會導師", "Python 音訊工具開源貢獻者"],
    contact: {
      email: 'henry_0325@yahoo.com.tw',
      phone: '0975-260-521',
      address: '台北市北投區文林北路10號11樓'
    }
  }
};

// render：渲染整個頁面
function render(lang = 'en') {
  const d = data[lang];

  // 更新 nav
  document.querySelectorAll('#navLinks .nav-link').forEach(a => {
    const idx = a.getAttribute('data-nav-index');
    if (d.nav && d.nav[idx]) a.textContent = d.nav[idx];
  });

  // Sidebar
  document.getElementById('name').textContent = d.name;
  document.getElementById('title').innerHTML = d.title;

  // About
  document.getElementById('aboutText').textContent = d.about;

  // Contact
  const emailA = document.getElementById('contactEmail');
  const phone = document.getElementById('contactPhone');
  const addr = document.getElementById('contactAddr');
  emailA.href = `mailto:${d.contact.email}`;
  emailA.textContent = d.contact.email;
  phone.textContent = d.contact.phone;
  addr.textContent = d.contact.address;

  // Skills
  const skillsList = document.getElementById('skillsList');
  const skillBars = document.getElementById('skillBars');
  skillsList.innerHTML = d.skills.map(s => {
    const level = pctToLevel(s.pct, lang);
    const label = `${level}${s.years ? ` • ${s.years}${lang === 'en' ? ' yrs' : ' 年'}` : ''}`;
    return `<span class="skill-chip" title="${label}">${s.name} <small class="skill-meta">${label}</small></span>`;
  }).join('');
  skillBars.innerHTML = d.skills.map(s => {
    const level = pctToLevel(s.pct, lang);
    return `
      <div class="col-md-6">
        <div class="mb-1 d-flex justify-content-between">
          <strong>${s.name}</strong>
          <small class="text-muted">${level}${s.years ? ` • ${s.years}${lang === 'en' ? ' yrs' : ' 年'}` : ''}</small>
        </div>
        <div class="progress">
          <div class="progress-bar" role="progressbar" style="width:0%" data-value="${s.pct}%"></div>
        </div>
      </div>
    `;
  }).join('');

  // Experience
  const expTimeline = document.getElementById('expTimeline');
  expTimeline.innerHTML = d.experience.map(e => `
    <li>
      <div class="timeline-panel">
        <h5><strong>${e.role}</strong> - ${e.company}</h5>
        <p><em>${e.time}</em></p>
        <ul>${e.details.map(item => `<li>${item}</li>`).join('')}</ul>
      </div>
    </li>
  `).join('');

  // Education
  const eduList = document.getElementById('eduList');
  eduList.innerHTML = d.education.map(ed => `
    <p><strong>${ed.school}</strong> — ${ed.degree} <em>(${ed.time})</em></p>
  `).join('');

  // Achievements
  const achieveList = document.getElementById('achieveList');
  achieveList.innerHTML = d.achievements.map(a => `<li>${a}</li>`).join('');

  // Performance
  const perfList = document.getElementById('perfList');
  perfList.innerHTML = d.performance.map(p => `<li>${p}</li>`).join('');

  // Community
  const communityList = document.getElementById('communityList');
  communityList.innerHTML = d.community.map(c => `<li>${c}</li>`).join('');

  observeReveals();
  observeSkillBars();
}

// Reveal 動畫
let revealObserver = null;
function observeReveals() {
  if (revealObserver) revealObserver.disconnect();
  const reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || reveals.length === 0) {
    reveals.forEach(r => r.classList.add('in-view'));
    return;
  }
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); });
  }, { threshold: 0.15 });
  reveals.forEach(r => { r.classList.remove('in-view'); revealObserver.observe(r); });
}

// 技能條動畫
let skillObserver = null;
function observeSkillBars() {
  if (skillObserver) skillObserver.disconnect();
  const bars = document.querySelectorAll('.progress-bar');
  if (!('IntersectionObserver' in window) || bars.length === 0) {
    bars.forEach(b => b.style.width = b.getAttribute('data-value') || '80%');
    return;
  }
  skillObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const val = bar.getAttribute('data-value') || '80%';
        bar.style.width = val;
        obs.unobserve(bar);
      }
    });
  }, { threshold: 0.2 });
  bars.forEach(b => { b.style.width = '0%'; skillObserver.observe(b); });
}
