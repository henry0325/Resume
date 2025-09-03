// Dark Mode Toggle
document.getElementById('darkToggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Language Toggle
const langBtn = document.getElementById('langToggle');
let currentLang = 'en';

langBtn.addEventListener('click', function() {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  if (currentLang === 'zh') {
    translateToChinese();
    langBtn.textContent = 'EN';
  } else {
    translateToEnglish();
    langBtn.textContent = '中文';
  }
});

function translateToChinese() {
  document.getElementById('name').textContent = '張思緯';
  document.getElementById('title').textContent = '聲學工程師';
  document.getElementById('aboutText').textContent = '擁有 3.8 年聲學工程師經驗，熱愛探索未知並不斷學習成長。';
  document.getElementById('address').textContent = '台北市北投區文林北路10號11樓';
  document.getElementById('email').textContent = 'henry_0325@yahoo.com.tw';
  document.getElementById('phone').textContent = '0975-260-521';
  document.getElementById('pdfBtn').textContent = '下載 PDF';
}

function translateToEnglish() {
  document.getElementById('name').textContent = 'Henry Chang';
  document.getElementById('title').textContent = 'Acoustic Engineer';
  document.getElementById('aboutText').textContent = '3.8 years of experience as an acoustic engineer. Love exploring the unknown things and knowledge. Extremely motivated to constantly develop my skills and grow professionally.';
  document.getElementById('address').textContent = '11F., No. 10, Wenlin N. Rd., Beitou Dist., Taipei City 112, Taiwan';
  document.getElementById('email').textContent = 'henry_0325@yahoo.com.tw';
  document.getElementById('phone').textContent = '0975-260-521';
  document.getElementById('pdfBtn').textContent = 'Download PDF';
}
