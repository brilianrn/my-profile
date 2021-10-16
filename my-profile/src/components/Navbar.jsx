import React from 'react';
import './style.css';
import { MyProfileLogo } from '../assets';
import $ from "jquery";

export default function Navbar() {
  function navResponse(event) {
    $('#navbar .navbar-active .menu-navbar .navbar-nav a').on('click', function () {
      $('#navbar .navbar-active .menu-navbar .navbar-nav').find('li.active').removeClass('active');
      $(this).parent('li').addClass('active');
    });
  }


  window.addEventListener('scroll', function () {
    let nav = document.body.querySelector('#navbar');

    if (!nav) {
      return;
    }

    if (window.pageYOffset > 100) {
      nav.classList.add('scroll-down', 'shadow');
    } else {
      nav.classList.remove('scroll-down', 'shadow');
    }
  });

  return (
    <nav class="navbar fixed-top navbar-expand-lg p-md-3" id="navbar">
      <div class="container navbar-active">
        <a href="#" className="d-flex flex-row" id="main-btn">
          <img src={MyProfileLogo} alt="my profile" id="logo-navbar" />
          <h2 id="web-title" className="text-light">brilianrn</h2>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="nav menu-navbar" id="navbarNav">
          <ul className="nav navbar-nav">
            <li className="active nav-item menu-list" onClick={(event) => navResponse(event)}>
              <a href="#" className="nav-link menu-list">home</a>
            </li>
            <li className="nav-item menu-list" onClick={(event) => navResponse(event)}>
              <a href="#about-me" className="nav-link menu-list">about me</a>
            </li>
            <li className="nav-item menu-list" onClick={(event) => navResponse(event)}>
              <a href="#education" className="nav-link menu-list">education</a>
            </li>
            <li className="nav-item menu-list" onClick={(event) => navResponse(event)}>
              <a href="#portfolio" className="nav-link menu-list">portfolio</a>
            </li>
            <li className="nav-item menu-list" onClick={(event) => navResponse(event)}>
              <a href="#contact-me" className="nav-link menu-list">contact me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  )
}
