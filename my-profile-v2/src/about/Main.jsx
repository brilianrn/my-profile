import React from 'react';
import { Foto } from '../commons/assets/images';
import { Experience } from "./components";
import "./style/about.style.css";

export default function Main() {
  return (
    <div className="container">
      <div class="row" id="bg-about">
        <div class="col-lg-5 col-12">
          <img src={Foto} alt="foto" id="foto" className="d-flex ms-auto me-auto img-fluid rounded-start" />
        </div>
        <div class="col-lg-7 col-12">
          <p class="card-title text h5 text-lg-start text-center">Hello, my name is</p>
          <p class="card-title text h2 fw-bold text-lg-start text-center" id="name">Brilian Rachmad Nurwachidin</p>
          <p class="card-text">I am a software engineer who is good at both of <span><i>backend</i></span> and <span><i>frontend</i></span> development. I also have knowlage about 2 largest development language that is Javascript and Java. I like to always improve my skills also increase experiences and development knowledge.
          </p>
          <p class="card-title text h5">and what things I am working...</p>
          <Experience />
        </div>
      </div>
    </div>
  );
}
