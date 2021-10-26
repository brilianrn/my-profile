import React from 'react';
import Modal from 'react-modal';

export default function PortoDetail({ openModal, closeModal }) {
  function setModal({ event, isClose }) {
    event.preventDefault();

    closeModal(isClose)
  }
  return (
    <Modal isOpen={openModal} style={{ height: "2px", backgroundColor: "red" }}>
      <h1>masuk modal</h1>
      <button onClick={(event) => { setModal({ event, isClose: false }) }} type="submit" className="btn btn-danger form-control">Close</button>
    </Modal>
  )
}
