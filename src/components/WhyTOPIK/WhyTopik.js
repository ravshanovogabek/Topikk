import React from 'react';
import './WhyTopik.css';

const WhyTOPIK = () => {
  const reasons = [
    { number: '01', title: 'Professional ustozlar', description: 'Sizga 4 yildan ortiq tajriba va Topik darajasi 6 bo\'lgan o\'qituvchilar dars beradi' },
    { number: '02', title: 'Bepul coworking zonalari', description: 'Erkin dars qilish, netvorking va o\'z ustingizda ishlash uchun bepul coworking zonalarimiz mavjud' },
    { number: '03', title: 'Haftalik tadbirlar', description: 'TOPIK acdemy jamoasi o\'quvchilari uchun doimiy ravishda qo\'shimcha tadbirar tashkilb keladi' },
    { number: '04', title: 'Bepul sinov imtihonlari', description: 'Har davomida tashkillanadigan sinov imtihonlarida qatnashib o\'z darajangizni bilib borasiz' },
    { number: '05', title: 'Yordamchi kuratorlar', description: 'Darslarni o\'zlashtirishda qiyinchilik bo\'lsa sizga yordam beradigan kuratoringiz bo\'ladi' },
    { number: '06', title: 'Konsulting xizmatlar', description: 'Muvafaqqiyatli bitirgan talabalarimizga Janubiy Koreyada o\'qish uchun visa olishda, universitet tanlash va grand yutishda yordam beramiz' },
  ];

  return (
    <section id="why-topik" className="why-topik">
      <h1 className="why-topik__title">
        Nima uchun aynan TOPIK academy?
      </h1>
      <div className="why-topik__grid">
        {reasons.map((reason, index) => (
          <div key={index} className="why-topik__item">
            <span className="why-topik__number">{reason.number}</span>
            <h2 className="why-topik__subtitle">{reason.title}</h2>
            <p className="why-topik__description">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyTOPIK;

