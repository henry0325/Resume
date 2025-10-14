// assets/script.js - corrected and robust version
// 功能：中英切換、深夜模式、reveal、技能進度條、experience 展開互動
// 請完整覆蓋你 repo 中的 assets/script.js

(function () {
  'use strict';

  // ---------- 初始綁定 DOM 事件 ----------
  document.addEventListener('DOMContentLoaded', function () {
    var darkToggle = document.getElementById('darkToggle');
    var langToggle = document.getElementById('langToggle');
    var backToTop = document.getElementById('backToTop');

    if (darkToggle) {
      darkToggle.addEventListener('click', function () {
        document.documentElement.classList.toggle('dark-mode');
        darkToggle.textContent = document.documentElement.classList.contains('dark-mode') ? '☀️' : '🌙';
      });
    }

    if (langToggle) {
      langToggle.addEventListener('click', function () {
        currentLang = (currentLang === 'en') ? 'zh' : 'en';
        langToggle.textContent = (currentLang === 'en') ? '中文' : 'EN';
        render(currentLang);
      });
    }

    if (backToTop) {
      window.addEventListener('scroll', function () {
        backToTop.style.display = (window.scrollY > 220) ? 'block' : 'none';
      });
      backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // initial render + observers
    render(currentLang);
    observeReveals();
    observeSkillBars();
  });

  // ---------- 語言狀態 ----------
  var currentLang = 'en';

  // ---------- 工具函式 ----------
  function pctToLevel(pct, lang) {
    lang = lang || 'en';
    if (pct >= 85) return lang === 'en' ? 'Expert' : '專家';
    if (pct >= 70) return lang === 'en' ? 'Advanced' : '進階';
    if (pct >= 50) return lang === 'en' ? 'Intermediate' : '中階';
    return lang === 'en' ? 'Beginner' : '初階';
  }

  // ---------- 主要資料（取自你的 PDF & 我們討論） ----------
  var data = {
    en: {
      sections: {
        about: 'About', skills: 'Skills', experience: 'Experience',
        education: 'Education', achievements: 'Achievements',
        performance: 'Performance', community: 'Community', contact: 'Contact'
      },
      name: 'Henry Chang',
      title: 'Acoustic Engineer',
      tagline: 'Solve, Connect, Deliver.',
      about: '3.8 years of experience as an acoustic engineer. Passionate about challenges and continuous learning.',
      skills: [
        { name: 'Acoustic Analysis', pct: 80, meta: 'AP / SoundCheck' },
        { name: 'Automation', pct: 75, meta: 'Python / Vibe' },
        { name: 'Mechanical Design', pct: 70, meta: 'ME collaboration' },
        { name: 'Coding (Vibe)', pct: 68, meta: 'Measurement tooling' },
        { name: 'Cross-functional Communication', pct: 90, meta: 'SW/EE/ME' }
      ],
      experience: [
        {
          role: 'Acoustic R&D',
          company: 'Wistron',
          time: 'Nov 2019 - 2023',
          details: [
            'Collaborated with Jabra engineers for Gandalf project and achieved mass-production readiness.',
            'Developed and automated audio testing workflows (SoundCheck / AP).'
          ]
        }
      ],
      education: [{ school: 'Ming Chi University of Technology', degree: 'Master in Mechanical Engineering', time: '2018' }],
      achievements: ['Promotion from level 8 engineer to level 9 senior engineer'],
      performance: ['Reduced cycle time in manufacturing test by 70%'],
      community: ['Art museum volunteer - Guided people to the exhibition area'],
      contact: { email: 'henry_0325@yahoo.com.tw', phone: '0975-260-521', address: 'Taipei, Taiwan' }
    },

    zh: {
      sections: {
        about: '關於我', skills: '技能', experience: '經歷',
        education: '學歷', achievements: '成就',
        performance: '績效', community: '社會服務', contact: '聯絡資訊'
      },
      name: '張思緯',
      title: '聲學工程師',
      tagline: '解決問題、串連團隊、交付價值。',
      about: '擁有 3.8 年聲學工程經驗，熱愛挑戰並持續學習。',
      skills: [
        { name: '聲音分析', pct: 80, meta: 'AP / SoundCheck' },
        { name: '自動化', pct: 75, meta: 'Python / Vibe' },
        { name: '機構設計', pct: 70, meta: '與 ME 協作' },
        { name: 'Vibe 開發', pct: 68, meta: '量測工具' },
        { name: '跨部門協作', pct: 90, meta: 'SW/EE/ME' }
      ],
      experience: [
        {
          role: '聲學研發',
          company: '緯創',
          time: '2019 - 2023',
          details: [
            '與 Jabra 工程師共同開發 Gandalf 專案並量產。',
            '建立自動化音訊測試流程。'
          ]
        }
      ],
      education: [{ school: '明志科技大學', degree: '機械工程碩士', time: '2018' }],
      achievements: ['從 8 級工程師晉升至 9 級資深工程師'],
      performance: ['將製造測試循環時間縮短 70%'],
      community: ['美術館志工 - 引導參觀者至展覽區'],
      contact: { email: 'henry_0325@yahoo.com.tw', phone: '0975-260-521', address: '台北市北投區文林北路10號11樓' }
    }
  };

  // ---------- render：把 data 塞到 DOM 裡 ----------
  function render(lang) {
    lang = lang || 'en';
    var d = data[lang] || data['en'];

    // sidebar
    var nameEl = document.getElementById('name');
    var titleEl = document.getElementById('title');
    var taglineEl = document.getElementById('tagline');
    if (nameEl) nameEl.textContent = d.name;
    if (titleEl) titleEl.textContent = d.title;
    if (taglineEl) taglineEl.textContent = d.tagline;

    // nav links
    var navLinks = document.querySelectorAll('#navLinks .nav-link');
    navLinks.forEach(function (a) {
      var key = a.getAttribute('data-nav-index');
      if (d.sections && d.sections[key]) a.textContent = d.sections[key];
    });

    // section headings (自動根據 section id)
    var sections = document.querySelectorAll('main .resume-section');
    sections.forEach(function (sec) {
      var id = sec.id;
      var h2 = sec.querySelector('h2');
      if (h2 && d.sections && d.sections[id]) h2.textContent = d.sections[id];
    });

    // about
    var aboutEl = document.getElementById('aboutText');
    if (aboutEl) aboutEl.textContent = d.about;

    // skills chips + bars
    var skillsList = document.getElementById('skillsList');
    var skillBars = document.getElementById('skillBars');
    if (skillsList) {
      skillsList.innerHTML = d.skills.map(function (s) {
        return '<span class="skill-chip">' + escapeHtml(s.name) + '<span class="skill-meta"> ' + pctToLevel(s.pct, lang) + (s.meta ? ' • ' + escapeHtml(s.meta) : '') + '</span></span>';
      }).join('');
    }
    if (skillBars) {
      skillBars.innerHTML = d.skills.map(function (s) {
        return '<div class="skill-row"><div class="skill-header"><strong>' + escapeHtml(s.name) + '</strong><small class="small-muted">' + pctToLevel(s.pct, lang) + '</small></div><div class="progress"><div class="progress-bar" role="progressbar" style="width:0%" data-value="' + s.pct + '%"></div></div></div>';
      }).join('');
    }

    // experience timeline (interactive expand)
    var expEl = document.getElementById('expTimeline');
    if (expEl) {
      expEl.innerHTML = d.experience.map(function (e) {
        var details = (e.details || []).map(function (it) { return '<li>' + escapeHtml(it) + '</li>'; }).join('');
        return '<li class="exp-item"><div class="timeline-panel"><div class="exp-head"><strong>' + escapeHtml(e.role) + '</strong> - ' + escapeHtml(e.company) + ' <span class="small-muted">(' + escapeHtml(e.time) + ')</span></div><div class="exp-body" data-open="false" style="display:none"><ul>' + details + '</ul></div></div></li>';
      }).join('');

      // attach toggle handlers
      var heads = document.querySelectorAll('.exp-item .exp-head');
      heads.forEach(function (h) {
        h.style.cursor = 'pointer';
        h.addEventListener('click', function () {
          var body = h.parentElement.querySelector('.exp-body');
          if (!body) return;
          var open = body.getAttribute('data-open') === 'true';
          body.style.display = open ? 'none' : 'block';
          body.setAttribute('data-open', open ? 'false' : 'true');
        });
      });
    }

    // other lists
    var eduEl = document.getElementById('eduList');
    if (eduEl) {
      eduEl.innerHTML = (d.education || []).map(function (ed) {
        return '<p><strong>' + escapeHtml(ed.school) + '</strong> — ' + escapeHtml(ed.degree) + ' <em>(' + escapeHtml(ed.time) + ')</em></p>';
      }).join('');
    }
    var achieveEl = document.getElementById('achieveList');
    if (achieveEl) achieveEl.innerHTML = (d.achievements || []).map(function (a) { return '<li>' + escapeHtml(a) + '</li>'; }).join('');
    var perfEl = document.getElementById('perfList');
    if (perfEl) perfEl.innerHTML = (d.performance || []).map(function (p) { return '<li>' + escapeHtml(p) + '</li>'; }).join('');
    var commEl = document.getElementById('communityList');
    if (commEl) commEl.innerHTML = (d.community || []).map(function (c) { return '<li>' + escapeHtml(c) + '</li>'; }).join('');
    var contactEl = document.getElementById('contactInfo');
    if (contactEl) {
      contactEl.innerHTML = '<p>Email: <a href="mailto:' + encodeURIComponent(d.contact.email) + '">' + escapeHtml(d.contact.email) + '</a></p><p>Phone: ' + escapeHtml(d.contact.phone) + '</p><p class="small-muted">' + escapeHtml(d.contact.address) + '</p>';
    }

    // re-init observers
    observeReveals();
    observeSkillBars();
  }

  // ---------- reveal observer ----------
  var revealObserver = null;
  function observeReveals() {
    if (revealObserver) revealObserver.disconnect();
    var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
    if (!('IntersectionObserver' in window) || reveals.length === 0) {
      reveals.forEach(function (r) { r.classList.add('in-view'); });
      return;
    }
    revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add('in-view');
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (r) { r.classList.remove('in-view'); revealObserver.observe(r); });
  }

  // ---------- skill bars observer ----------
  var skillObserver = null;
  function observeSkillBars() {
    if (skillObserver) skillObserver.disconnect();
    var bars = Array.prototype.slice.call(document.querySelectorAll('.progress-bar'));
    if (!('IntersectionObserver' in window) || bars.length === 0) {
      bars.forEach(function (b) { b.style.width = b.getAttribute('data-value') || '80%'; });
      return;
    }
    skillObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var bar = entry.target;
          var val = bar.getAttribute('data-value') || '80%';
          bar.style.width = val;
          obs.unobserve(bar);
        }
      });
    }, { threshold: 0.2 });
    bars.forEach(function (b) { b.style.width = '0%'; skillObserver.observe(b); });
  }

  // ---------- small safe helper to avoid XSS when inserting text ----------
  function escapeHtml(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // initial render (safe guard if called before DOM ready)
  // render(currentLang); // render() is called after DOMContentLoaded above

})();
