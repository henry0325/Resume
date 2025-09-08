// 完整功能版 script.js
// 包含：語言切換、深色模式、內容 render、reveal 動畫（IntersectionObserver）、skill bar 動畫、回到頂端

document.addEventListener('DOMContentLoaded', () => {
  const darkBtn = document.getElementById('darkToggle');
  const langBtn = document.getElementById('langToggle');
  const backBtn = document.getElementById('backToTop');

  if (darkBtn) {
    darkBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      darkBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
  }

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'zh' : 'en';
      render(currentLang);
      langBtn.textContent = currentLang === 'en' ? '中文' : 'EN';
      // 重新觀察 reveal / skill bars
      observeReveals();
      observeSkillBars();
    });
  }

  // back to top 按鈕顯示/隱藏
  window.addEventListener('scroll', () => {
    if (!backBtn) return;
    backBtn.style.display = window.scrollY > 220 ? 'inline-flex' : 'none';
  });
  if (backBtn) backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // 初始 render
  render(currentLang);

  // 啟用觀察（動畫）
  observeReveals();
  observeSkillBars();
});

// 初始語言
let currentLang = 'en';

function pctToLevel(pct, lang='en') {
  // 規則： >=85 Expert, 70-84 Advanced, 50-69 Intermediate, <50 Beginner
  if (pct >= 85) return lang==='en' ? 'Expert' : '專家';
  if (pct >= 70) return lang==='en' ? 'Advanced' : '進階';
  if (pct >= 50) return lang==='en' ? 'Intermediate' : '中階';
  return lang==='en' ? 'Beginner' : '初階';
}
// 你 PDF 的內容（可在這裡調整）
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
      { name: "Acoustic Design", pct: 80, years: 3, sample: "" },
      { name: "Audio Measurement (AP / SoundCheck)", pct: 85, years: 3.5, sample: "" },
      { name: "Python & Automation", pct: 60, years: 1.5, sample: "" },
      { name: "Signal Processing", pct: 50, years: 2, sample: "" },
      { name: "Team Collaboration", pct: 90, years: 4, sample: "" }
    ],
    experience: [
      {
        company: "<strong>Wistron</strong>",
        role: "Acoustic R&D",
        period: "Nov 2019 – 2023",
        details: [
          "Collaboratively work with mechanical team to accomplish acoustic design.",
          "Highly familiar with audio measurement analyzer (Audio Precision, SoundCheck).",
          "Proposed design changes to improve device performance and manufacturability.",
          "Responsible for managing audio contact with GN Audio (Denmark)."
        ]
      },
      {
        company: "<strong>HTC</strong>",
        role: "R&D Intern",
        period: "Sep 2013 – Sep 2014",
        details: [
          "Learned and taught CAV 3D scan measurement.",
          "Improved mobile deformation and stress measurement process.",
          "Assisted in audio performance verification and test procedures."
        ]
      }
    ],
    education: [
      "<strong>Ming Chi University of Technology</strong> — Master in Mechanical Engineering, 2018"
    ],
    achievements: [
      "Joined Wistron Acoustics; supported Avaya J189/K155/K175 from design to MP.",
      "Collaborated on Gandalf acoustic design; promoted to senior engineer.",
      "Used Python to automate processes and improved efficiency."
    ],
    performance: [
      "Reduced cycle time by ~70% (150 → 50 sec) in manufacturing test.",
      "Improved higher-frequency SPL by adding acoustic structure modifications.",
      "Created SoundCheck automated test sequences."
    ],
    community: [
      "Art museum volunteer – Guided visitors to exhibition areas.",
      "Yuli church volunteer – Lead children and make review videos.",
      "Drama volunteer – Arrange and clean environments."
    ],
    contact: {
      email: "henry_0325@yahoo.com.tw",
      phone: "0975-260-521",
      address: "11F., No. 10, Wenlin N. Rd., Beitou Dist., Taipei City 112, Taiwan"
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
    about: "擁有 3.8 年聲學工程師經驗，熱衷於探索與學習。專長於音訊量測、Python 自動化與跨部門協作。",
    skills: [
      { name: "聲學設計", pct: 80, years: 3, sample: "" },
      { name: "音訊量測 (AP / SoundCheck)", pct: 85, years: 3.5, sample: "" },
      { name: "Python 自動化", pct: 60, years: 1.5, sample: "" },
      { name: "訊號處理", pct: 50, years: 2, sample: "" },
      { name: "團隊協作", pct: 90, years: 4, sample: "" }
    ],
    experience: [
      {
        company: "<strong>緯創</strong>",
        role: "聲學研發",
        period: "2019/11 – 2023",
        details: [
          "與機構團隊協作完成聲學設計。",
          "熟悉音頻測試設備 (Audio Precision, SoundCheck)。",
          "提出設計改善以提升效能與量產一致性。",
          "負責與 GN Audio（丹麥）客戶之聲學溝通與測試。"
        ]
      },
      {
        company: "<strong>宏達電</strong>",
        role: "研發實習生",
        period: "2013/09 – 2014/09",
        details: [
          "學習並教授 CAV 3D 掃描量測。",
          "優化手機變形與應力量測流程。",
          "協助音訊效能測試與驗證程序。"
        ]
      }
    ],
    education: [
      "<strong>明志科技大學</strong> — 機械工程所 碩士，2018"
    ],
    achievements: [
      "加入緯創聲學；支援 Avaya J189/K155/K175 從設計到量產。",
      "參與 Gandalf 聲學設計並升任資深工程師。",
      "運用 Python 自動化流程，顯著改善效率。"
    ],
    performance: [
      "製造測試週期縮短約 70%（150 → 50 秒）。",
      "於高頻段以結構改良提升 SPL 表現。",
      "建立 SoundCheck 自動化測試流程。"
    ],
    community: [
      "美術館志工 — 引導參觀動線與解說。",
      "玉里教會志工 — 帶領孩童並製作回顧影片。",
      "戲劇志工 — 場地布置與環境維護。"
    ],
    contact: {
      email: "henry_0325@yahoo.com.tw",
      phone: "0975-260-521",
      address: "台北市北投區文林北路10號11樓"
    }
  }
};

// render 主函式（會把資料塞到 DOM）
function render(lang = 'en') {
  const d = data[lang];

  // header / sidebar 基本
  document.querySelectorAll('#navLinks .nav-link').forEach(a => {
    const idx = a.getAttribute('data-nav-index');
    if (d.nav && d.nav[idx]) a.textContent = d.nav[idx];
  });
  const nameEl = document.getElementById('name');
  const titleEl = document.getElementById('title');
  if (nameEl) nameEl.textContent = d.name;
  if (titleEl) titleEl.innerHTML = d.title;

  // About
  const aboutEl = document.getElementById('aboutText');
  if (aboutEl) aboutEl.textContent = d.about;

  // Contact
  const emailA = document.getElementById('contactEmail');
  const phoneEl = document.getElementById('contactPhone');
  const pdfBtn = document.getElementById('pdfBtn');
  if (emailA) { emailA.href = `mailto:${d.contact.email}`; emailA.textContent = d.contact.email; }
  if (phoneEl) phoneEl.textContent = d.contact.phone;
  if (pdfBtn) pdfBtn.textContent = (lang === 'en' ? 'Download PDF' : '下載 PDF');

  // Skills badges + bars
  const skillsList = document.getElementById('skillsList');
  const skillBars = document.getElementById('skillBars');
  if (skillsList) {
    skillsList.innerHTML = d.skills.map(s => {
      const level = pctToLevel(s.pct, lang);
      const label = `${level}${s.years ? ` • ${s.years} ${lang==='en'?'yrs':'年'}` : ''}`;
      return `<span class="skill-chip" title="${label}">${s.name} <small class="skill-meta">${label}</small></span>`;
    }).join('');
  }
  if (skillBars) {
    skillBars.innerHTML = d.skills.map(s => {
      const level = pctToLevel(s.pct, lang);
      return `
      <div class="col-md-6">
        <div class="mb-1 d-flex justify-content-between">
          <strong>${s.name}</strong>
          <small class="text-muted">${level}${s.years ? ` • ${s.years}${lang==='en'?' yrs':' 年'}` : ''}</small>
        </div>
        <div class="progress">
          <div class="progress-bar" role="progressbar" style="width:0%" data-value="${s.pct}%"></div>
        </div>
      </div>
      `;
    }).join('');
  }
  observeReveals();
  observeSkillBars();
}

  // Experience timeline（每個 li 包 .timeline-panel）
  const expEl = document.getElementById('expTimeline');
  if (expEl) {
    expEl.innerHTML = d.experience.map(item => `
      <li>
        <div class="timeline-panel reveal">
          <h5>${item.company} · <strong>${item.role}</strong></h5>
          <div class="text-muted small mb-2">${item.period}</div>
          <ul>
            ${item.details.map(pt => `<li>${pt}</li>`).join('')}
          </ul>
        </div>
      </li>
    `).join('');
  }

  // Education / Achievements / Performance / Community
  const edu = document.getElementById('eduList');
  if (edu) edu.innerHTML = d.education.map(e => `<p>${e}</p>`).join('');
  const achieve = document.getElementById('achieveList');
  if (achieve) achieve.innerHTML = d.achievements.map(a => `<li>${a}</li>`).join('');
  const perf = document.getElementById('perfList');
  if (perf) perf.innerHTML = d.performance.map(p => `<li>${p}</li>`).join('');
  const comm = document.getElementById('communityList');
  if (comm) comm.innerHTML = d.community.map(c => `<li>${c}</li>`).join('');

  // 重新啟用觀察，讓 reveal / progress 會動
  observeReveals();
  observeSkillBars();
}

/* ------------------------
   Intersection Observer - reveal (scroll in)
   ------------------------ */
let revealObserver = null;
function observeReveals() {
  // disconnect old
  if (revealObserver) revealObserver.disconnect();

  const reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || reveals.length === 0) {
    // 無支援就直接顯示
    reveals.forEach(r => r.classList.add('in-view'));
    return;
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(r => {
    r.classList.remove('in-view');
    revealObserver.observe(r);
  });
}

/* ------------------------
   Intersection Observer - skill bars 動畫
   ------------------------ */
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

  bars.forEach(b => {
    b.style.width = '0%';
    skillObserver.observe(b);
  });
}

let revealObserver = null;
function observeReveals() {
  if (revealObserver) revealObserver.disconnect();
  const reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || reveals.length === 0) {
    reveals.forEach(r => r.classList.add('in-view'));
    return;
  }
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); });
  }, { threshold: 0.15 });
  reveals.forEach(r => { r.classList.remove('in-view'); revealObserver.observe(r); });
}

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
