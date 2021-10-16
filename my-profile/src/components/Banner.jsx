import React from 'react';
import './style.css';
import { Facebook, Twitter, Instagram, Linkedin, Github } from '../assets';

export default function Banner() {
  return (
    <div class="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
      <div class="content text-center">
        <div>
          <p className="text h1 text-light">Hi, I am Software Engineer</p>
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
            {/* <a href="#">
              <img id="github-img" src={Github} alt="github" />
              <b id="github">brilianrn</b>
            </a> */}
            <a href="#">
              <img id="facebook-img" src={Facebook} alt="facebook" />
              <b id="facebook">Brilian Rachmad</b>
            </a>
            <a href="#">
              <img id="twitter-img" src={Twitter} alt="twitter" />
              <b id="twitter">@brilianrn</b>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
