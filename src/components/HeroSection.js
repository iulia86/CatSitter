import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <iframe allow="autoplay; fullscreen" className={"videoPlayer"} src={"https://player.vimeo.com/video/480867548?title=0&portrait=0&byline=0&autoplay=1"}/>
      <h1>Tu ce faci cu prietenul blanos cand pleci in vacanta?</h1>
      <p>CatSitter iti ofera solutia</p>
      <div className='hero-btns'>
      </div>
    </div>
  );
}

export default HeroSection;
