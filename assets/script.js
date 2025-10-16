// assets/script.js
// Henry Resume (Updated Language & Text Version)
// 保留原有互動功能 + 新版文字內容

document.addEventListener("DOMContentLoaded", function () {
  const darkToggle = document.getElementById("darkToggle");
  const langToggle = document.getElementById("langToggle");
  let currentLang = "en";

  // 🌙 Dark mode
  darkToggle?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });

  // 🌏 Language toggle
  langToggle?.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "zh" : "en";
    langToggle.textContent = currentLang === "en" ? "中文" : "EN";
    render(currentLang);
  });

  // scroll reveal
  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.1 }
  );
  revealEls.forEach((el) => observer.observe(el));

  // back to top
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 250 ? "block" : "none";
  });
  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  render(currentLang);
});

// 🔰 Resume data
const data = {
  en: {
    sections: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      achievements: "Achievements",
      performance: "Performance",
      community: "Community",
      contact: "Contact",
    },
    name: "Henry Chang",
    title: "Acoustic Engineer",
    tagline: "Solve, Connect, Deliver.",
    about:
      "A self-driven engineer passionate about challenges and continuous learning. Experienced in acoustic quality analysis, automation, and mechanical design, with proven ability to optimize processes and enhance team collaboration.",
    skills: [
      { name: "Acoustic Analysis", pct: 85 },
      { name: "Automation Programming", pct: 80 },
      { name: "Mechanical Design", pct: 75 },
      { name: "Vibe Coding", pct: 70 },
      { name: "Cross-team Collaboration", pct: 90 },
    ],
    experience: [
      {
        role: "Acoustic R&D Engineer",
        company: "Wistron",
        time: "2019 - 2023",
        details: [
          "Collaborated with Jabra’s acoustic engineers to co-develop and mass-produce the Gandalf project.",
          "Automated testing processes that reduced measurement cycle time by 70%.",
          "Proposed and implemented process improvements that enhanced acoustic validation efficiency.",
        ],
      },
    ],
    achievements: [
      "Promoted to Senior Engineer within three years due to strong technical and collaborative performance.",
    ],
    performance: [
      "Reduced test cycle time by 70% through process optimization and automation.",
    ],
    community: [
      "Volunteered at an art museum to guide visitors and organize exhibitions.",
    ],
    contact: {
      email: "henry_0325@yahoo.com.tw",
      phone: "0975-260-521",
      address: "Taipei, Taiwan",
    },
  },
  zh: {
    sections: {
      about: "關於我",
      skills: "技能",
      experience: "經歷",
      education: "學歷",
      achievements: "成就",
      performance: "績效",
      community: "社會服務",
      contact: "聯絡資訊",
    },
    name: "張思緯",
    title: "聲學工程師",
    tagline: "解決問題、串連團隊、交付價值。",
    about:
      "熱愛挑戰與學習新知，擅長聲音品質分析、自動化流程及機構設計，並能跨領域協作提升團隊效率。",
    skills: [
      { name: "聲音分析", pct: 85 },
      { name: "自動化程式設計", pct: 80 },
      { name: "機構設計", pct: 75 },
      { name: "Vibe 程式開發", pct: 70 },
      { name: "跨部門協作", pct: 90 },
    ],
    experience: [
      {
        role: "聲學研發工程師",
        company: "緯創",
        time: "2019 - 2023",
        details: [
          "與 Jabra 聲學工程師合作開發並量產 Gandalf 專案。",
          "建立自動化測試流程，縮短量測週期 70%。",
          "提出並實現流程改善，提升聲學驗證效率。",
        ],
      },
    ],
    achievements: [
      "三年內晉升為資深工程師，展現優秀技術與團隊協作能力。",
    ],
    performance: [
      "透過流程優化與自動化，將測試週期縮短 70%。",
    ],
    community: [
      "擔任美術館志工，協助引導參觀與展區導覽。",
    ],
    contact: {
      email: "henry_0325@yahoo.com.tw",
      phone: "0975-260-521",
      address: "台北市北投區文林北路10號11樓",
    },
  },
};

// 🧠 Render
function render(lang = "en") {
  const d = data[lang];
  if (!d) return;

  // sidebar info
  document.getElementById("name").textContent = d.name;
  document.getElementById("title").textContent = d.title;
  document.getElementById("tagline").textContent = d.tagline;

  // nav menu
  document.querySelectorAll(".nav-link").forEach((link) => {
    const key = link.getAttribute("data-nav-index");
    link.textContent = d.sections[key];
  });

  // section titles
  document.querySelectorAll("section.resume-section").forEach((sec) => {
    const id = sec.id;
    const h2 = sec.querySelector("h2");
    if (d.sections[id] && h2) h2.textContent = d.sections[id];
  });

  // about
  document.getElementById("aboutText").textContent = d.about;

  // skills
  const skillBars = document.getElementById("skillBars");
  skillBars.innerHTML = "";
  d.skills.forEach((s) => {
    const bar = document.createElement("div");
    bar.className = "skill-item";
    bar.innerHTML = `
      <div class="skill-label">
        <strong>${s.name}</strong><span>${s.pct}%</span>
      </div>
      <div class="progress"><div class="progress-bar" style="width:${s.pct}%"></div></div>
    `;
    skillBars.appendChild(bar);
  });

  // experience
  const exp = document.getElementById("expTimeline");
  exp.innerHTML = d.experience
    .map(
      (e) => `
      <li>
        <div class="timeline-panel">
          <h3>${e.role}</h3>
          <p><strong>${e.company}</strong> <em>${e.time}</em></p>
          <ul>${e.details.map((x) => `<li>${x}</li>`).join("")}</ul>
        </div>
      </li>
    `
    )
    .join("");

  // achievements
  document.getElementById("achieveList").innerHTML = d.achievements
    .map((a) => `<li>${a}</li>`)
    .join("");

  // performance
  document.getElementById("perfList").innerHTML = d.performance
    .map((p) => `<li>${p}</li>`)
    .join("");

  // community
  document.getElementById("communityList").innerHTML = d.community
    .map((c) => `<li>${c}</li>`)
    .join("");

  // contact
  const contact = d.contact;
  document.getElementById("contactInfo").innerHTML = `
    <p>Email: <a href="mailto:${contact.email}">${contact.email}</a></p>
    <p>Phone: ${contact.phone}</p>
    <p>${contact.address}</p>
  `;
}
