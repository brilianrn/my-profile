import React from 'react';

export default function MyPortofolios({ porto }) {
  return (
    <div class="col">
      <div class="card h-100 shadow">
        <a href="#">
          <img src={porto.imgCover} class="card-img-top porto-img" alt="overgeek" />
        </a>
        <div class="card-body">
          <a href="#" className="text-dark fw-bold text-decoration-none h4">{porto.title}</a>
          <p class="card-text">{porto.description}</p>
        </div>
      </div>
    </div>
  )
}
