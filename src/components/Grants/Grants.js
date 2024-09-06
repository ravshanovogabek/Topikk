import React from 'react';
import './grants.css';

const Grants = () => (
  <section id="grants">
    <div className="containers">
      <h1 className="title">
        Koreya Universitetlariga 100% gacha grant yutish imkoniyati
      </h1>
      <div className="content">
        <div className="image-containers">
          <img src="https://topic-academy.vercel.app/assets/scholarship-BdpyUuyd.png" alt="scholarship" />
        </div>
        <div className="info">
          <h2 className="info-title">
            GKS (Global Korean Scholarship) <span className="amount">$70.000</span> lik Grant
          </h2>
          <p className="info-description">
            Janubiy Koreya hukumatining stipendiya dasturi (GKS) Koreyaning Xalqaro ta'lim bo'yicha milliy instituti tomonidan <span className="highlight">xorijiy</span> talabalarning Koreyada bakalavr va magistratura bosqichida <span className="highlight">100% gacha to’liq grant</span>
            <br />
            va oylik <span className="highlight">stipendiya</span> olish imkoniyatingiz bor
          </p>
          <ul className="benefits">
            <li>Dastur boshlanganida va tugaganida Koreyaga borish hamda Koreyadan qaytish xarajatlari qoplanadi.</li>
            <li>Koreyaga yetib borganda joylashib olish uchun bir martalik to'lov beriladi. Miqdori - 200 000 Koreya voni (taxminan 157 AQSh dollari).</li>
            <li>Til kursi va universitetning kontrak to'lovi to'liq to'lab beriladi (faqat magistr va doktorantlarga)... <span className="more">ko’proq</span></li>
          </ul>
        </div>
      </div>
      <h2 className="support-title">
        Muvafaqqiyatli bitiruvchilarimizga universitet tanlash va grant yutishda yordam beramiz
      </h2>
      <div className="ctas">
        <div className="cta-text">
          <h3>TOPIK academy consulting jamoasi sizga universitet tanlash, visa olish va grant yutishingizda yaqindan ko’maklashadi</h3>
          <p>Ko’proq ma’lumot olish uchun <br /> bepul konsultatsiyaga yoziling!</p>
          <a href="#faq" className="cta-button">Ariza Qoldirish</a>
        </div>
         <div className="gallery">
        
        </div>
      </div>
    </div>
  </section>
);

export default Grants;