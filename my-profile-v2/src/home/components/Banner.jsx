import React from 'react';
import "../style/home.style.css";

export default function Banner() {
  return (
    <div id="banner" className="w-100 vh-100 d-flex justify-content-center align-items-center">
      <div class="content text-center">
        <div>
          <p className="text h1">
            <span className="banner-text">
              Hi, I am Software Engineer
            </span>
          </p>
          <p className="text text-uppercase">
            <span className="banner-text">
              a professional software engineer with strong ability in this field
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
