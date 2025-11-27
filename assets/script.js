// ===== 全域變數 =====
let currentLang = 'en';
let currentTheme = 'light';

// ===== 語言切換功能 =====
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';

    // 切換英文內容
    document.querySelectorAll('.lang-en').forEach(el => {
        el.classList.toggle('hidden', currentLang === 'zh');
    });

    // 切換中文內容
    document.querySelectorAll('.lang-zh').forEach(el => {
        el.classList.toggle('hidden', currentLang === 'en');
    });

    // 更新有 data-en 和 data-zh 屬性的元素
    document.querySelectorAll('[data-en]').forEach(el => {
        if (el.hasAttribute('data-zh')) {
            el.textContent = currentLang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-zh');
        }
    });

    // 更新語言切換按鈕文字
    const langBtn = document.getElementById('langBtn');
    langBtn.textContent = currentLang === 'en' ? '中文' : 'English';
}

// ===== 深色模式切換功能 =====
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    const btn = document.getElementById('themeBtn');
    const icon = btn.querySelector('.theme-icon');

    if (currentTheme === 'dark') {
        btn.classList.add('dark');
        icon.textContent = '☀️';
    } else {
        btn.classList.remove('dark');
        icon.textContent = '🌙';
    }

    // 儲存使用者偏好到 localStorage
    localStorage.setItem('theme', currentTheme);
}

// ===== PDF 下載功能 =====
function downloadPDF() {
    // 開啟 PDF 檔案
    window.open('./assets/Henry-Chang.pdf', '_blank');

    // 如果你想要強制下載而非開啟，使用以下程式碼：
    // const link = document.createElement('a');
    // link.href = './assets/Henry-Chang.pdf';
    // link.download = 'Henry-Chang-Resume.pdf';
    // link.click();
}

// ===== 行動裝置技能卡片點擊展開功能 =====
function initSkillCards() {
    document.querySelectorAll('.skill-category').forEach(skill => {
        skill.addEventListener('click', function (e) {
            // 只在小螢幕上啟用點擊功能
            if (window.innerWidth <= 768) {
                // 關閉其他已展開的卡片
                document.querySelectorAll('.skill-category').forEach(s => {
                    if (s !== this) {
                        s.classList.remove('active');
                    }
                });
                // 切換當前卡片
                this.classList.toggle('active');
            }
        });
    });

    // 點擊技能卡片外部關閉展開的內容
    document.addEventListener('click', function (e) {
        if (window.innerWidth <= 768 && !e.target.closest('.skill-category')) {
            document.querySelectorAll('.skill-category').forEach(s => {
                s.classList.remove('active');
            });
        }
    });
}

// ===== 平滑滾動到錨點 =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== 載入時初始化 =====
document.addEventListener('DOMContentLoaded', function () {
    // 初始化語言按鈕文字
    const langBtn = document.getElementById('langBtn');
    langBtn.textContent = '中文';

    // 檢查系統主題偏好
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        if (savedTheme === 'dark' && currentTheme === 'light') {
            toggleTheme();
        }
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleTheme();
    }

    // 初始化技能卡片功能
    initSkillCards();

    // 初始化平滑滾動
    initSmoothScroll();

    // 載入時的淡入動畫
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== 視窗大小改變時重新檢查 =====
window.addEventListener('resize', function () {
    // 如果從小螢幕切換到大螢幕，關閉所有展開的技能卡片
    if (window.innerWidth > 768) {
        document.querySelectorAll('.skill-category').forEach(s => {
            s.classList.remove('active');
        });
    }
});

// ===== 額外功能：鍵盤快捷鍵 =====
document.addEventListener('keydown', function (e) {
    // Ctrl/Cmd + K: 切換語言
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        toggleLanguage();
    }

    // Ctrl/Cmd + D: 切換深色模式
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        toggleTheme();
    }
});

document.addEventListener('DOMContentLoaded', function () {

    const menuWrapper = document.getElementById("milestoneMenu");
    const menuInner = menuWrapper.querySelector(".milestone-menu");
    const menuItems = menuInner.querySelectorAll(".milestone-menu-item");

    // 置中功能
    function centerMenuItem(el) {
        if (!el) return;
        el.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest"
        });
    }

    // 初始化 Swiper
    const milestoneSwiper = new Swiper(".myMilestoneSwiper", {
        loop: false,
        spaceBetween: 30,
        pagination: { el: ".swiper-pagination", clickable: true },
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },

        on: {
            slideChange: function () {
                const index = this.activeIndex;

                // ⭐ 滑動時更新 menu active（唯一來源）
                updateMenuHighlight(index);

                // ⭐ 自動置中
                const item = document.querySelector(`.milestone-menu-item[data-slide="${index}"]`);
                centerMenuItem(item);
            }
        }
    });

    // 點擊 menu-item → 只切 slide，不設 active
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            const index = Number(this.dataset.slide);
            milestoneSwiper.slideTo(index);
            // ❌ 不做 active，不做置中（讓 slideChange 負責）
        });
    });

    // active 管理只靠這裡
    function updateMenuHighlight(index) {
        menuItems.forEach(item => {
            const itemIndex = Number(item.dataset.slide);
            item.classList.toggle("active", itemIndex === index);
        });
    }

    // 初始化
    updateMenuHighlight(0);
});


document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.side-nav-toggle');
    const sideNav = document.querySelector('.side-nav');

    navToggle.addEventListener('click', () => {
        sideNav.classList.toggle('show');
    });

    // 點擊選單後自動收回（提升手機使用體驗）
    sideNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            sideNav.classList.remove('show');
        });
    });
});

