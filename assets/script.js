document.addEventListener("DOMContentLoaded", () => {
  const toggleDark = document.getElementById("toggleDark");
  const toggleLang = document.getElementById("toggleLang");
  const body = document.body;
  const backToTop = document.getElementById("backToTop");
  let isDark = false;
  let lang = "en";
  const data = {
    en: {
      sections: {about:"About",skills:"Skills",experience:"Experience",education:"Education",achievements:"Achievements",performance:"Performance",community:"Community",contact:"Contact"},
      about:`I am passionate about challenges and continuous learning, skilled in analyzing and optimizing sound quality from a cross-disciplinary perspective. Combining acoustic analysis, mechanical design, and automation programming, I constantly improve product performance and process efficiency. I enjoy collaboration, knowledge sharing, and proactively identify key improvement points to deliver practical and effective solutions.`,
      skills:[{name:"Acoustic Quality Analysis",level:90},{name:"Automation Development",level:85},{name:"Mechanical Design Integration",level:80},{name:"Vibe System Coding",level:75},{name:"Cross-functional Collaboration",level:88}],
      experience:["Co-developed the Jabra 'Gandalf' project with acoustic engineers, leading design validation and acoustic optimization to achieve mass production readiness."],
      contact:"Email: henry@example.com"
    },
    zh: {
      sections:{about:"關於我",skills:"技能",experience:"經歷",education:"學歷",achievements:"成就",performance:"績效",community:"社會服務",contact:"聯絡資訊"},
      about:`我熱愛挑戰與學習新知識，擅長從跨領域角度分析與優化聲音品質。結合聲學分析、機構設計與自動化開發的能力，持續提升產品效能與開發效率。我樂於分享、協作，並主動發掘流程中的瓶頸，提出實際可行的解決方案。`,
      skills:[{name:"聲音品質分析",level:90},{name:"程序自動化",level:85},{name:"機構設計整合",level:80},{name:"Vibe 系統開發",level:75},{name:"跨部門協作",level:88}],
      experience:["與 Jabra 聲學工程師共同開發 Gandalf 並成功量產，主導設計驗證與聲學優化。"],
      contact:"電子郵件: henry@example.com"
    }
  };
  function render(){
    const d=data[lang];
    document.querySelectorAll("[data-nav-index]").forEach(el=>{const k=el.getAttribute("data-nav-index");if(d.sections[k])el.textContent=d.sections[k];});
    document.querySelectorAll("section").forEach(sec=>{const k=sec.id;const t=sec.querySelector("h2");if(t&&d.sections[k])t.textContent=d.sections[k];});
    document.getElementById("aboutContent").textContent=d.about;
    const skills=d.skills.map(s=>`<div class='skill-item'><strong>${s.name}</strong><div class='progress'><div class='progress-bar' style='width:${s.level}%;'></div></div></div>`).join("");
    document.getElementById("skillsContent").innerHTML=skills;
    const exp=d.experience.map(e=>`<li>${e}</li>`).join("");
    document.getElementById("expContent").innerHTML=`<ul class='timeline'>${exp}</ul>`;
    document.getElementById("contactContent").textContent=d.contact;
  }
  toggleDark.addEventListener("click",()=>{isDark=!isDark;body.classList.toggle("dark-mode",isDark);});
  toggleLang.addEventListener("click",()=>{lang=lang==="en"?"zh":"en";render();});
  window.addEventListener("scroll",()=>{backToTop.style.display=window.scrollY>200?"block":"none";});
  backToTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
  render();
});
