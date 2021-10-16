import React from 'react';
import { Banner, Footer } from '../components';
import { About, Education, Portfolio } from '.';
import './style.css'

export default function Home() {
  return (
    <div>
      <section className="page-section">
        <Banner />
      </section>
      <section className="page-section" id="about-me">
        <About />
      </section>
      <section className="page-section" id="education">
        <Education />
      </section>
      <section className="page-section" id="portfolio">
        <Portfolio />
      </section>
      <Footer />
    </div>
  )
}
