import React from 'react';
import './style.css';
import { Foto } from '../assets';
import { Experience } from '../components';

export default function About() {
  return (
    <div class="container pt-4 pb-3 mb-2" id="about-page">
      <div class="row g-0">
        <div class="col-md-4">
          <img src={Foto} class="img-fluid rounded-start" id="foto-profile" alt="brilian" />
        </div>
        <div class="col-md-8" id="text-about">
          <div class="card-body">
            <p class="card-title text h5">Hello, my name is</p>
            <p class="card-title text h2 fw-bold" id="name">Brilian Rachmad Nurwachidin</p>
            <p class="card-text">I am a software engineer who is good at both of <span><i>backend</i></span> and <span><i>frontend</i></span> development. I also have knowlage about 2 largest development language that is Javascript and Java. I like to always improve my skills also increase experiences and development knowledge. Besides that, I am a person who is resilient to be able to learn new things.
            </p>
            <p class="card-title text h5">and what things I am working...</p>
            <Experience />
            {/* <p class="card-text"><small class="text-muted">Full Stack Developer</small></p> */}
          </div>
        </div>
      </div>
    </div>
  )
}
