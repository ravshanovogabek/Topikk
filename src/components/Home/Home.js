

import React from 'react';
import './home.css';

const Home = () => (
  <section className="home">
    <div className="container">
      <div className="header">
        <div className="divider"></div>
        <h1 className="subtitle">3 oyda Koreys tilida gapirishni boshlang</h1>
      </div>
      <h1 className="title">
        Janubiy Koreya Universitetlarida 100% gacha grant asosida o’qish imkoniyati
      </h1>
      <div className="info">
        <div className="info-item">
          <img
            src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='15'%20height='37'%20viewBox='0%200%2015%2037'%20fill='none'%3e%3cpath%20d='M12.4383%208.36725C11.6597%206.48423%208.77345%201.55129%208.14546%201.02953C7.3602%200.377302%206.82647%200.848342%204.98869%203.81481C-1.05027%2013.5615%20-1.07593%2023.3184%204.91098%2033.4675C6.63202%2036.3847%207.06851%2036.8544%207.87958%2036.6613C8.49814%2036.5141%2011.8919%2030.8146%2012.9047%2028.2214C13.9611%2025.5178%2014.7713%2021.0337%2014.6785%2018.4046C14.5853%2015.7559%2013.5201%2010.9834%2012.4383%208.36725Z'%20fill='%23ABDDB1'%3e%3c/path%3e%3c/svg%3e"
            alt="decoration"
            className="icon"
          />
          <p className="info-text">5 oyda Topikdan 6 darajagacha olishda yordam beramiz</p>
        </div>
        <div className="info-item">
          <img
            src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='15'%20height='37'%20viewBox='0%200%2015%2037'%20fill='none'%3e%3cpath%20d='M12.4383%208.36725C11.6597%206.48423%208.77345%201.55129%208.14546%201.02953C7.3602%200.377302%206.82647%200.848342%204.98869%203.81481C-1.05027%2013.5615%20-1.07593%2023.3184%204.91098%2033.4675C6.63202%2036.3847%207.06851%2036.8544%207.87958%2036.6613C8.49814%2036.5141%2011.8919%2030.8146%2012.9047%2028.2214C13.9611%2025.5178%2014.7713%2021.0337%2014.6785%2018.4046C14.5853%2015.7559%2013.5201%2010.9834%2012.4383%208.36725Z'%20fill='%23ABDDB1'%3e%3c/path%3e%3c/svg%3e"
            alt="decoration"
            className="icon"
          />
          <p className="info-text">Topikdan yuqori darajani qo’lga kiritib, Janubiy Koreyada o’qish va ishlash imkoniyati</p>
        </div>
      </div>
      <div className="cta">
        <a href="#faq" className="cta-button">bepul darsga yoziling</a>
        <h3 className="cta-text">Birinchi darsga bepul yoziling!</h3>
      </div>
      <div className="image-container">
        <img
          src="https://topic-academy.vercel.app/assets/mainimg-B-oYHcso.png"
          alt="main img"
          className="main-img"
        />
      </div>
    </div>
  </section>
);

export default Home;
