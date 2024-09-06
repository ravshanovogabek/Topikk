import React from 'react';
import './StudentResult.css';

const images = [
  { src: 'https://optim.tildacdn.pub/tild3131-6162-4436-b066-336161303636/-/resize/654x/-/format/webp/noname_1_page-0001.jpg', topic: 'topic 5' },
  { src: 'https://optim.tildacdn.pub/tild3836-3864-4939-b163-626337636333/-/resize/654x/-/format/webp/asadbek_page-0001.jpg', topic: 'topic 5' },
  { src: 'https://optim.tildacdn.pub/tild3533-3038-4539-a530-646363633437/-/resize/654x/-/format/webp/11111.jpg', topic: 'topic 6' },
  { src: 'https://optim.tildacdn.pub/tild3133-6638-4766-b736-356166643839/-/resize/654x/-/format/webp/photo_2023-01-29_08-.jpg', topic: 'topic 3' },
  { src: 'https://optim.tildacdn.pub/tild6537-6337-4238-a138-336561656364/-/resize/654x/-/format/webp/photo_2023-01-29_08-.jpg', topic: 'topic 4' },
  { src: 'https://optim.tildacdn.pub/tild3239-6530-4163-a266-306438333536/-/resize/654x/-/format/webp/noname_page-0001_.jpg', topic: 'topic 4' },
  { src: 'https://optim.tildacdn.pub/tild3339-3662-4862-a663-373536353630/-/resize/654x/-/format/webp/noname_12_page-0001.jpg', topic: 'topic 6' }
];

const StudentResult = () => (
  <section id="results">
    <h1>O'quvchilarimizning Natijalari</h1>
    <div className="marquee-wrapper">
      <div className="marquee">
        {images.map((image, index) => (
          <div key={index} className="card">
            <img src={image.src} alt={`topic ${image.topic}`} />
            <div className="overlay">
              <h1>{image.topic}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="marquee marquee-reverse">
        {images.map((image, index) => (
          <div key={index} className="card">
            <img src={image.src} alt={`topic ${image.topic}`} />
            <div className="overlay">
              <h1>{image.topic}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StudentResult;
