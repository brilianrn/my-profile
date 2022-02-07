import React from 'react';
import { About, Education, Skills } from '../app/index';
import { Banner } from './components';
import "./style/home.style.css";

export default function Main() {
  return (
    <div>
      <section className="page-section" id="home">
        <Banner />
      </section>
      <section className="page-section" id="about">
        <About />
      </section>
      <section className="page-section" id="education">
        <Education />
      </section>
      <section className="page-section" id="skills">
        <Skills />
      </section>
      {/* <section className="page-section" id="about-me">
        <About />
      </section>
      <section className="page-section" id="education">
        <Education />
      </section>
      <section className="page-section" id="portfolio">
        <Portfolio />
      </section>
      <Footer /> */}
    </div>
  );
}
