document.addEventListener('DOMContentLoaded', () => {
  const darkBtn = document.getElementById('darkToggle');
  const langBtn = document.getElementById('langToggle');
  const backBtn = document.getElementById('backToTop');

  // 深色模式
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

// 百分比 → 等級
function pctToLevel(pct, lang = 'en') {
  if (pct >= 85) return lang === 'en' ? 'Expert' : '專家';
  if (pct >= 70) return lang === 'en' ? 'Advanced' : '進階';
  if (pct >= 50) return lang === 'en' ? 'Intermediate' : '中階';
  return lang === 'en' ? 'Beginner' : '初階';
}

// 履歷資料（根據 PDF）
const data = {
  en: {
    sections: {
      about: 'About Me',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      achievements: 'Achievements',
      performance: 'Performance',
      community: 'Community Service',
      contact: 'Contact'
    },

    nav: {
      about: 'About', skills: 'Skills', experience: 'Experience',
      education: 'Education', achievements: 'Achievements',
      performance: 'Performance', community: 'Community Service', contact: 'Contact'
    },
    name: "Henry Chang",
    title: "Acoustic Engineer",
    about: "3.8 years of experience as an acoustic engineer. Love exploring the unknown things and knowledge. Extremely motivated to constantly develop my skills and grow professionally. I am confident in my ability to manage all the job that I need to do.",
    skills: [
      { name: "Communication & Computer Skills", pct: 90 },
      { name: "Team & Independent Work", pct: 85 },
      { name: "Stress Handling & Multitasking", pct: 80 },
      { name: "Follow Instructions Accurately", pct: 85 },
      { name: "Adapt & Learn New Things", pct: 90 }
    ],
    experience: [
      {
        role: "Acoustic Engineer",
        company: "Wistron (Acoustic R&D)",
        time: "Nov 2019 - Sep 2023",
        details: [
          "Collaboratively work with mechanical team to accomplish acoustic design.",
          "Highly familiar with audio measurement analyzer (Audio Precision, SoundCheck).",
          "Improved device performance by proposed changes to other teams.",
          "Outperformed on audio components design and cost evaluation.",
          "Analyzed manufacturing issue and identify solution by collaborating with SW, EE and ME.",
          "Responsible for managing audio contact with GN Audio (Denmark)."
        ]
      },
      {
        role: "R&D Intern",
        company: "HTC",
        time: "Sep 2013 - Sep 2014",
        details: [
          "Learned and taught CAV 3D scan measurement.",
          "Increased awareness of mobile phone life, strength, deformation, function.",
          "Improved mobile deformation, stress, and strength measurement process.",
          "Increased workplace ethics.",
          "Won leader's appreciation."
        ]
      }
    ],
    education: [
      { school: "Ming Chi University of Technology", degree: "Master in Mechanical Engineering", time: "2018" }
    ],
    achievements: [
      "Promotion from level 8 engineer to level 9 senior engineer",
      "Got the highest score in C++ course",
      "Presented Micro-Flexible Probe Research at the Nagoya seminar",
      "Created and integrated a one-click process for Line official accounts",
      "Built a website for SPI using Wix"
    ],
    performance: [
      "Reduced cycle time in manufacturing test by 70%",
      "Improved higher frequency SPL by structural audio reflection",
      "Created SoundCheck automated test sequence",
      "Organized task items to expedite schedule and prevent resource wastage"
    ],
    community: [
      "Art museum volunteer - Guided people to the exhibition area",
      "Yuli church volunteer - Lead children and make review video",
      "Drama volunteer - Arrange and clean the environment"
    ],
    contact: {
      email: 'henry_0325@yahoo.com.tw',
      phone: '0975-260-521',
      address: '11F., No. 10, Wenlin N. Rd., Beitou Dist., Taipei City 112, Taiwan'
    }
  },

  zh: {
    sections: {
      about: '關於我',
      skills: '技能',
      experience: '經歷',
      education: '學歷',
      achievements: '成就',
      performance: '績效',
      community: '社會服務',
      contact: '聯絡資訊'
    },

    nav: {
      about: '關於我', skills: '技能', experience: '經歷',
      education: '學歷', achievements: '成就',
      performance: '績效', community: '社會服務', contact: '聯絡資訊'
    },
    name: "張思緯",
    title: "聲學工程師",
    about: "擁有 3.8 年聲學工程師經驗，熱愛探索未知事物與知識。極度有動力不斷提升技能並專業成長。我相信自己能勝任所有必要的工作。",
    skills: [
      { name: "溝通與電腦技能", pct: 90 },
      { name: "團隊及獨立工作", pct: 85 },
      { name: "壓力處理與多工", pct: 80 },
      { name: "精準執行指示", pct: 85 },
      { name: "快速學習與適應", pct: 90 }
    ],
    experience: [
      {
        role: "聲學工程師",
        company: "緯創 (聲學研發)",
        time: "2019 年 11 月 - 2023 年 9 月",
        details: [
          "與機構團隊協作完成聲學設計。",
          "熟悉音訊量測分析儀 (Audio Precision, SoundCheck)。",
          "提出設計改善建議以提升裝置效能。",
          "擅長音訊元件設計及成本評估。",
          "與軟體、電機及機構團隊合作，分析製造問題並提供解決方案。",
          "負責與 GN Audio (丹麥) 聯繫管理音訊相關事宜。"
        ]
      },
      {
        role: "研發實習生",
        company: "宏達電 (HTC)",
        time: "2013 年 9 月 - 2014 年 9 月",
        details: [
          "學習並教導 CAV 3D 掃描量測。",
          "加深對手機壽命、強度、變形、功能的認識。",
          "改善手機變形、應力及強度量測流程。",
          "提升職場倫理。",
          "獲得主管讚賞。"
        ]
      }
    ],
    education: [
      { school: "明志科技大學", degree: "機械工程碩士", time: "2018" }
    ],
    achievements: [
      "從 8 級工程師晉升至 9 級資深工程師",
      "C++ 課程獲得最高分",
      "於名古屋研討會發表微型柔性探針研究",
      "建立並整合 LINE 官方帳號一鍵流程",
      "使用 Wix 建立 SPI 網站"
    ],
    performance: [
      "將製造測試循環時間縮短 70%",
      "透過結構聲音反射改善高頻 SPL",
      "建立 SoundCheck 自動測試序列",
      "組織任務項目，加速進度並避免資源浪費"
    ],
    community: [
      "美術館志工 - 引導參觀者至展覽區",
      "玉里教會志工 - 帶領孩童並製作回顧影片",
      "戲劇志工 - 安排及整理場地"
    ],
    contact: {
      email: 'henry_0325@yahoo.com.tw',
      phone: '0975-260-521',
      address: '台北市北投區文林北路10號11樓'
    }
  }
};

// render：渲染內容
function render(lang = 'en') {
  const d = data[lang];

  // 更新選單
  const navKeys = Object.keys(d.nav);
  document.querySelectorAll('#navLinks .nav-link').forEach((a, i) => {
    const key = navKeys[i];
    a.textContent = d.nav[key];
  });
  document.querySelectorAll('section').forEach(sec => {
    const key = sec.id;
    const title = sec.querySelector('h2');
    if (title && d.sections[key]) {
      title.textContent = d.sections[key];
    }
  });


  // Sidebar
  document.getElementById('name').textContent = d.name;
  document.getElementById('title').textContent = d.title;

  // About
  document.getElementById('aboutText').textContent = d.about;

  // Skills
  const skillsList = document.getElementById('skillsList');
  const skillBars = document.getElementById('skillBars');
  skillsList.innerHTML = d.skills.map(s => {
    const level = pctToLevel(s.pct, lang);
    return `<span class="skill-chip">${s.name} <small>${level}</small></span>`;
  }).join('');
  skillBars.innerHTML = d.skills.map(s => {
    const level = pctToLevel(s.pct, lang);
    return `
      <div class="col-md-6 mb-2">
        <div class="d-flex justify-content-between">
          <strong>${s.name}</strong>
          <small>${level}</small>
        </div>
        <div class="progress">
          <div class="progress-bar" style="width:0%" data-value="${s.pct}%"></div>
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
  document.getElementById('achieveList').innerHTML = d.achievements.map(a => `<li>${a}</li>`).join('');
  // Performance
  document.getElementById('perfList').innerHTML = d.performance.map(p => `<li>${p}</li>`).join('');
  // Community
  document.getElementById('communityList').innerHTML = d.community.map(c => `<li>${c}</li>`).join('');

  // Contact
  document.getElementById('contactEmail').href = `mailto:${d.contact.email}`;
  document.getElementById('contactEmail').textContent = d.contact.email;
  document.getElementById('contactPhone').textContent = d.contact.phone;
  document.getElementById('contactAddr').textContent = d.contact.address;

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
