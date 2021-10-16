import React from 'react';
import './style.css';
import { MainCarousel, Facebook, Twitter, Instagram, Linkedin, Foto } from '../assets';

export default function Carousel() {
  return (
    <div id="patch">
      <img src={MainCarousel} class="d-block" id="image-cover" alt="main-carousel" />
      <div id="text">
        <p className="text h1 text-light" id="title">Hi, I am Software Engineer</p>
        <p className="text text-uppercase text-light">a professional software engineer with strong ability in this field</p>
        <div>
          <a href="#">
            <img id="linkedin-img" src={Linkedin} alt="linkedin" />
            <b id="linkedin">Brilian Rachmad Nurwachidin</b>
          </a>
          <a href="#">
            <img id="instagram-img" src={Instagram} alt="instagram" />
            <b id="instagram">brilianrn</b>
          </a>
          <a href="#">
            <img id="facebook-img" src={Facebook} alt="facebook" />
            <b id="facebook">Brilian Rachmad</b>
          </a>
          <a href="#">
            <img id="twitter-img" src={Twitter} alt="twitter" />
            <b id="twitter">@brilianrn</b>
          </a>
        </div>
        <img src={Foto} alt="brilian" id="foto" />
        <p id="text-profile">Brilian Rachmad Nurwachidin</p>
      </div>
    </div>
  )
}
