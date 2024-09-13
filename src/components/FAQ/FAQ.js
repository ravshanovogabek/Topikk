import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      question: 'O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium alias quas minima assumenda maxime, eligendi odio atque voluptatem corporis quod earum fugit perspiciatis ullam eum, quae pariatur minus totam recusandae, reiciendis possimus. Autem sed tempora suscipit dolores sapiente, quis alias ut labore et, earum, consectetur ipsam ab est quia neque?',
    },
    {
      question: 'O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium alias quas minima assumenda maxime, eligendi odio atque voluptatem corporis quod earum fugit perspiciatis ullam eum, quae pariatur minus totam recusandae, reiciendis possimus. Autem sed tempora suscipit dolores sapiente, quis alias ut labore et, earum, consectetur ipsam ab est quia neque?',
    },
    {
      question: 'O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium alias quas minima assumenda maxime, eligendi odio atque voluptatem corporis quod earum fugit perspiciatis ullam eum, quae pariatur minus totam recusandae, reiciendis possimus. Autem sed tempora suscipit dolores sapiente, quis alias ut labore et, earum, consectetur ipsam ab est quia neque?',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const botToken = '7496766116:AAEsA1AgikT-Y78kILJ9SNW5RuxFJIAF-sw'; // Replace with your actual Telegram bot token
    const chatId = '7251438309'; // Replace with your actual chat ID or channel ID
    const text = `Ismi: ${name}\nTelefon: ${phone}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Your message has been sent!');
        setName('');
        setPhone('');
      } else {
        alert(`Failed to send message: ${data.description}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message. Please try again later.');
    }
  };

  return (
    <section id='faq' className="faq-container">
      <h1 className="faq-title">Ko’p beriladigan savollar</h1>
      <div className="faq-items">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h2 className="faq-question-text">{faq.question}</h2>
              <i className={`faq-toggle-icon ${openIndex === index ? 'open' : ''}`}></i>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="contact-form-container">
        <div className="contact-form-content">
          <h1 className="contact-title">Savollaringiz qoldimi?</h1>
          <p className="contact-description">Ma’lumotlaringizni qoldiring, siz bilan bog’lanib barcha savollaringizga javob beramiz.</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Ismingiz" 
              className="contact-input" 
              name="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
            <input 
              type="tel" 
              placeholder="+998 12 345 67 89" 
              className="contact-input" 
              name="phone" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              required 
            />
            <button type="submit" className="contact-button">Savol berish</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
