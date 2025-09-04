document.addEventListener('DOMContentLoaded', () => {
  const darkBtn = document.getElementById('darkToggle');
  const langBtn = document.getElementById('langToggle');
  const backToTop = document.getElementById('backToTop');

  // Dark Mode 切換
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
    });
  }

  // 回到頂端按鈕顯示/隱藏
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });

  // 回到頂端
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  render(currentLang);
});

let currentLang = "en";

// 履歷資料
const data = {
  en: {
    about: "Acoustic Engineer with MEMS expertise and hands-on experience in audio system design and optimization.",
    skills: ["Acoustic Design", "MEMS Process", "Python", "Dart", "Flutter", "Signal Processing"],
    experience: [
      {
        company: "Wistron",
        role: "Acoustic Engineer",
        period: "2019-2022",
        details: [
          "Developed microphone module for smart devices",
          "Improved SNR by 10% through design optimization",
          "Collaborated with cross-functional teams on acoustic simulations"
        ]
      },
      {
        company: "HTC",
        role: "Audio Engineer",
        period: "2015-2019",
        details: [
          "Optimized speaker tuning for flagship smartphones",
          "Implemented audio algorithms to enhance clarity",
          "Led testing and validation for audio performance"
        ]
      }
    ],
    education: [
      "Master in Microelectromechanical Systems (MEMS)",
      "Bachelor in Optical-Mechatronics Engineering"
    ],
    achievements: [
      "Project A: Reduced noise by 15% in MEMS microphones",
      "Project B: Improved frequency response consistency across devices"
    ],
    performance: [
      "Boosted audio performance by 20% in benchmark tests",
      "Reduced latency in signal processing by 30%"
    ],
    community: [
      "Volunteer in STEM education for underprivileged students",
      "Mentored junior engineers on audio technology"
    ]
  },
  zh: {
    about: "具有聲學與MEMS專業經驗的工程師，擅長音訊系統設計與優化。",
    skills: ["聲學設計", "MEMS製程", "Python", "Dart", "Flutter", "訊號處理"],
    experience: [
      {
        company: "緯創",
        role: "聲學工程師",
        period: "2019-2022",
        details: [
          "開發智慧裝置的麥克風模組",
          "透過設計優化提升SNR 10%",
          "與跨部門團隊合作進行聲學模擬"
        ]
      },
      {
        company: "宏達電",
        role: "音訊工程師",
        period: "2015-2019",
        details: [
          "優化旗艦智慧型手機的喇叭調音",
          "實作音訊演算法以提高清晰度",
          "負責音訊效能測試與驗證"
        ]
      }
    ],
    education: [
      "微機電系統碩士 (MEMS)",
      "光機電工程學士"
    ],
    achievements: [
      "專案A：降低MEMS麥克風噪音15%",
      "專案B：提升裝置間頻率響應一致性"
    ],
    performance: [
      "測試中音訊效能提升20%",
      "訊號處理延遲降低30%"
    ],
    community: [
      "協助弱勢學生進行STEM教育",
      "指導新進工程師音訊技術"
    ]
  }
};

// 渲染頁面
function render(lang) {
  const d = data[lang];

  // About
  document.getElementById('aboutText').textContent = d.about;

  // Skills
  document.getElementById('skillsList').innerHTML = d.skills
    .map(skill => `<span class="badge bg-primary me-1">${skill}</span>`)
    .join('');

  // Skills Bar
  document.getElementById('skillBars').innerHTML = d.skills
    .map(skill => `
      <div class="col-6">
        <p class="mb-1">${skill}</p>
        <div class="progress">
          <div class="progress-bar bg-info" role="progressbar" style="width: 0%" data-value="${Math.floor(Math.random() * 30) + 70}%"></div>
        </div>
      </div>
    `)
    .join('');

  // Animate bars
  setTimeout(() => {
    document.querySelectorAll('.progress-bar').forEach(bar => {
      bar.style.width = bar.getAttribute('data-value');
    });
  }, 300);

  // Experience
  document.getElementById('expTimeline').innerHTML = d.experience
    .map(exp => `
      <li>
        <h5>${exp.company} - <strong>${exp.role}</strong></h5>
        <small>${exp.period}</small>
        <ul>${exp.details.map(item => `<li>${item}</li>`).join('')}</ul>
      </li>
    `)
    .join('');

  // Education
  document.getElementById('eduList').innerHTML = d.education.map(e => `<p>${e}</p>`).join('');

  // Achievements
  document.getElementById('achieveList').innerHTML = d.achievements.map(a => `<li>${a}</li>`).join('');

  // Performance
  document.getElementById('perfList').innerHTML = d.performance.map(p => `<li>${p}</li>`).join('');

  // Community
  document.getElementById('communityList').innerHTML = d.community.map(c => `<li>${c}</li>`).join('');
}
