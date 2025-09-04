/***********************
 * 內容資料（EN / ZH）
 ***********************/
const content = {
  en: {
    nav: { about: "About", skills: "Skills", experience: "Experience", education: "Education", achievements: "Achievements", performance: "Performance", community: "Community", contact: "Contact" },
    name: "Henry Chang",
    title: "<strong>Acoustic Engineer</strong>",
    aboutHTML: `<strong>3.8 years</strong> of experience as an <strong>acoustic engineer</strong>. Love exploring the unknown things and knowledge. Extremely motivated to constantly develop my skills and grow professionally.`,
    address: "11F., No. 10, Wenlin N. Rd., Beitou Dist., Taipei City 112, Taiwan",
    email: "henry_0325@yahoo.com.tw",
    phone: "0975-260-521",
    pdfBtn: "Download PDF",

    skills: {
      professionalTitle: "Professional Skills",
      list: [
        "<strong>Exceptional communication</strong> and computer skills",
        "Work in a <strong>team</strong> or <strong>independently</strong>",
        "<strong>Handle work under stress</strong> and multitasking",
        "Follow instructions and provide <strong>high-quality results</strong>",
        "Quickly adapt and learn <strong>new things</strong>",
      ],
      bars: [
        { label: "Communication", pct: 95, cls: "bg-primary" },
        { label: "Python & Automation", pct: 90, cls: "bg-success" },
        { label: "Audio Measurement (AP / SoundCheck)", pct: 85, cls: "bg-info" },
      ],
      thoughtTitle: "Thought & Idea",
      thoughtList: [
        `Believe there is nothing "<strong>can't</strong>" achieve`,
        "Parental respect, work hard and enjoy life",
        "Never too old to learn",
      ],
    },

    experience: [
      {
        company: "<strong>Wistron</strong>",
        role: "Acoustic R&D",
        period: "Nov 2019 – 2023",
        points: [
          "Collaborated on <strong>acoustic design</strong> with mechanical team.",
          "Highly familiar with audio analyzers <strong>Audio Precision</strong> & <strong>SoundCheck</strong>.",
          "Proposed design changes to improve device performance.",
          "Managed <strong>GN Audio</strong> (Denmark) acoustic communication and tests.",
        ]
      },
      {
        company: "<strong>HTC</strong>",
        role: "R&D Intern",
        period: "Sep 2013 – Sep 2014",
        points: [
          "Learned and taught <strong>CAV 3D scan</strong> measurement.",
          "Improved <strong>mobile deformation & stress</strong> measurement process."
        ]
      }
    ],

    education: [
      { school: "<strong>Ming Chi University of Technology</strong>", degree: "Master in Mechanical Engineering", year: "2018" }
    ],

    achievements: [
      'Joined <strong>Wistron Acoustics</strong>; supported Avaya <strong>J189/K155/K175</strong> from design to MP.',
      'Collaborated on <strong>Gandalf</strong> acoustic design; promoted to <strong>Senior Engineer</strong>.',
      'Used <strong>Python</strong> to automate processes; improved work efficiency.',
    ],

    performance: [
      "Reduced cycle time by <strong>~70%</strong> (150 → 50 sec) in manufacturing test.",
      "Improved higher-frequency <strong>SPL</strong> by adding acoustic structure.",
      "Created <strong>SoundCheck</strong> automated test sequences."
    ],

    community: [
      "<strong>Art museum volunteer</strong> – Guided visitors to exhibition areas.",
      "<strong>Yuli church volunteer</strong> – Led children and produced review videos.",
      "<strong>Drama volunteer</strong> – Arranged and cleaned environment."
    ],

    contactLabel: { contact: "Contact" },
  },

  zh: {
    nav: { about: "關於我", skills: "技能", experience: "經歷", education: "學歷", achievements: "成就", performance: "效能提升", community: "社群與志工", contact: "聯絡" },
    name: "張思緯",
    title: "聲學工程師",
    aboutHTML: `擁有 <strong>3.8 年</strong>聲學工程經驗，熱衷探索未知並持續精進。專長於 <strong>音訊量測</strong>、<strong>Python 自動化</strong>與跨部門協作。`,
    address: "台北市北投區文林北路10號11樓",
    email: "henry_0325@yahoo.com.tw",
    phone: "0975-260-521",
    pdfBtn: "下載 PDF",

    skills: {
      professionalTitle: "專業技能",
      list: [
        "<strong>溝通能力佳</strong>與熟悉電腦操作",
        "能夠於<strong>團隊</strong>或<strong>獨立</strong>環境完成任務",
        "可在<strong>壓力下執行多工</strong>",
        "確實遵循要求並提供<strong>高品質成果</strong>",
        "快速學習並<strong>有效適應</strong>新領域",
      ],
      bars: [
        { label: "溝通協作", pct: 95, cls: "bg-primary" },
        { label: "Python 自動化", pct: 90, cls: "bg-success" },
        { label: "音訊量測（AP / SoundCheck）", pct: 85, cls: "bg-info" },
      ],
      thoughtTitle: "思想與理念",
      thoughtList: [
        '相信沒有做不到的事，不說「<strong>不行</strong>」。',
        "孝親、努力工作並享受生活。",
        "活到老學到老。",
      ],
    },

    experience: [
      {
        company: "<strong>緯創 Wistron</strong>",
        role: "聲學研發",
        period: "2019/11 – 2023",
        points: [
          "與機構團隊協作完成<strong>聲學設計</strong>。",
          "熟悉<strong>Audio Precision</strong>、<strong>SoundCheck</strong>量測與驗證。",
          "提出設計改善，提升成品效能與一致性。",
          "負責與<strong>GN Audio（丹麥）</strong>客戶之聲學溝通與測試。",
        ]
      },
      {
        company: "<strong>宏達電 HTC</strong>",
        role: "研發實習生",
        period: "2013/09 – 2014/09",
        points: [
          "學習並教學 <strong>CAV 3D 掃描</strong>量測流程。",
          "優化<strong>手機變形與應力</strong>量測流程。",
        ]
      }
    ],

    education: [
      { school: "<strong>明志科技大學</strong>", degree: "機械工程所 碩士", year: "2018" }
    ],

    achievements: [
      '加入<strong>Wistron Acoustics</strong>；支援 Avaya <strong>J189/K155/K175</strong> 從設計到量產。',
      '參與<strong>Gandalf</strong>聲學設計並升任<strong>高級工程師</strong>。',
      '以 <strong>Python</strong> 自動化流程，顯著提升效率。',
    ],

    performance: [
      "製造測試週期時間縮短<strong>約 70%</strong>（150 → 50 秒）。",
      "於高頻段以結構改良提升<strong>SPL</strong>表現。",
      "建立 <strong>SoundCheck</strong> 自動化測試流程。",
    ],

    community: [
      "<strong>美術館志工</strong>：引導參觀動線與解說。",
      "<strong>玉里教會志工</strong>：帶領孩童並製作回顧影片。",
      "<strong>戲劇志工</strong>：場地布置與環境維護。",
    ],

    contactLabel: { contact: "聯絡" },
  }
};

/***********************
 * 渲染邏輯
 ***********************/
function setHTML(el, html) { if (el) el.innerHTML = html; }
function setText(el, txt) { if (el) el.textContent = txt; }

function render(lang = 'en') {
  const t = content[lang];

  // Navbar
  document.querySelectorAll('[data-i18n^="nav."]').forEach(a => {
    const key = a.getAttribute('data-i18n').split('.')[1];
    a.textContent = t.nav[key];
  });
  setText(document.getElementById('navName'), t.name);

  // Header/About
  setText(document.getElementById('name'), t.name);
  setHTML(document.getElementById('title'), t.title);
  setHTML(document.getElementById('aboutText'), t.aboutHTML);
  setText(document.getElementById('address'), t.address);
  setText(document.getElementById('phone'), t.phone);
  const emailA = document.getElementById('email');
  if (emailA) { emailA.textContent = t.email; emailA.href = `mailto:${t.email}`; }
  const cEmail = document.getElementById('contactEmail');
  if (cEmail) { cEmail.textContent = t.email; cEmail.href = `mailto:${t.email}`; }
  setText(document.getElementById('contactPhone'), t.phone);
  setText(document.getElementById('pdfBtn'), t.pdfBtn);
  setText(document.getElementById('footName'), t.name);

  // Section titles
  document.querySelectorAll('[data-i18n^="sections."]').forEach(h => {
    const key = h.getAttribute('data-i18n').split('.')[1];
    const map = {
      skills: { en: "Skills", zh: "技能" },
      experience: { en: "Experience", zh: "經歷" },
      education: { en: "Education", zh: "學歷" },
      achievements: { en: "Achievements", zh: "成就" },
      performance: { en: "Performance Improvement", zh: "效能提升" },
      community: { en: "Community Work", zh: "社群與志工" },
      contact: { en: "Contact", zh: "聯絡" },
    };
    h.textContent = map[key][lang];
  });

  // Skills lists
  setText(document.querySelector('[data-i18n="skills.professionalTitle"]'), t.skills.professionalTitle);
  const skillsUl = document.getElementById('skillsList');
  skillsUl.innerHTML = t.skills.list.map(li => `<li>${li}</li>`).join("");
  setText(document.querySelector('[data-i18n="skills.thoughtTitle"]'), t.skills.thoughtTitle);
  const thoughtUl = document.getElementById('thoughtList');
  thoughtUl.innerHTML = t.skills.thoughtList.map(li => `<li>${li}</li>`).join("");

  // Skill bars
  const bars = document.getElementById('skillBars');
  bars.innerHTML = t.skills.bars.map(b => `
    <div class="col-md-4">
      <div class="card skill-card h-100">
        <div class="card-body">
          <div class="d-flex justify-content-between mb-1">
            <strong>${b.label}</strong><span>${b.pct}%</span>
          </div>
          <div class="progress">
            <div class="progress-bar ${b.cls}" role="progressbar" style="width:${b.pct}%"></div>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  // Experience timeline
  const exp = document.getElementById('expTimeline');
  exp.innerHTML = t.experience.map(item => `
    <li>
      <div class="card shadow-sm">
        <div class="card-body">
          <h5 class="mb-1">${item.company} · ${item.role}</h5>
          <div class="text-muted small mb-2">${item.period}</div>
          <ul class="mb-0">
            ${item.points.map(p => `<li>${p}</li>`).join("")}
          </ul>
        </div>
      </div>
    </li>
  `).join("");

  // Education
  const edu = document.getElementById('eduList');
  edu.innerHTML = t.education.map(e => `
    <p>${e.school} — ${e.degree}, ${e.year}</p>
  `).join("");

  // Achievements / Performance / Community
  document.getElementById('achieveList').innerHTML = t.achievements.map(a => `<li>${a}</li>`).join("");
  document.getElementById('perfList').innerHTML = t.performance.map(a => `<li>${a}</li>`).join("");
  document.getElementById('communityList').innerHTML = t.community.map(a => `<li>${a}</li>`).join("");
}

/***********************
 * 主題與互動
 ***********************/
// 自動偵測深色
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDark) document.body.classList.add('dark-mode');

// Dark Mode Toggle
const darkBtn = document.getElementById('darkToggle');
darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// 回到頂部
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  toTop.style.display = window.scrollY > 240 ? 'inline-flex' : 'none';
});
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// 語言切換
let currentLang = 'en';
const langBtn = document.getElementById('langToggle');
langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  render(currentLang);
  langBtn.textContent = currentLang === 'en' ? '中文' : 'EN';
});

// 初始渲染
render('en');
