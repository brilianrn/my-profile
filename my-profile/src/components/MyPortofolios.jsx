import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { PortoDetail } from '../pages';

export default function MyPortofolios({ porto }) {
  const history = useHistory();
  const [openModal, setOpenModal] = useState(false);

  function toPortoDetail({ event }) {
    event.preventDefault();

    setOpenModal(true);
  }

  function closeModal() {
    setOpenModal(false);
  }

  return (
    <div class="col">
      <PortoDetail openModal={openModal} closeModal={closeModal} />
      <div class="card h-100 shadow">
        <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={(event) => toPortoDetail({ event })}>
          <img src={porto.imgCover} class="card-img-top porto-img" alt={porto.title} />
        </a>
        <div class="card-body">
          <a href="#" className="text-dark fw-bold text-decoration-none h4">{porto.title}</a>
          <p class="card-text">{porto.description}</p>
        </div>
      </div>
    </div>
  )
}
