import React from 'react';
import { DAPOERDINPUT, HIJABMEEZHA, MOVIEAPP, NADI, SPORTIRENA } from '../commons/assets/images';
import "./style/portfolio.style.css";

export default function Main() {

  function openNewTab({ event, url }) {
    event.preventDefault();

    window.open(url);
  }
  return (
    <section id="team" class="pb-5 pt-5">
      <div class="container">
        <h5 class="section-title h1 mt-2">My PORTFOLIOS</h5>
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="image-flip" >
              <div class="mainflip flip-0">
                <div class="frontside">
                  <div class="card">
                    <div class="card-body text-center">
                      <p>
                        <img class=" img-fluid" src={MOVIEAPP} alt="card image" />
                      </p>
                      <h4 class="card-title">Movie App</h4>
                      <p class="card-text">This application is used to view films that have been aired</p>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body text-center mt-4">
                      <h4 class="card-title">Movie App</h4>
                      <p class="card-text">
                        This application was created in April 2021 when I was completing my education as a Full Stack Javascript Developer. This application aims to see the films that have been aired. You can also view details from a movie. In addition, if you like one or more movies, you can add them to your favorites list.
                      </p>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <button className="btn btn-outline-info"
                            onClick={(event) => openNewTab({ event, url: "https://movieapp-reactcreate-brilianrn.web.app/" })}>
                            See Detail
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
              <div class="mainflip">
                <div class="frontside">
                  <div class="card">
                    <div class="card-body text-center">
                      <p>
                        <img class=" img-fluid" src={HIJABMEEZHA} alt="card image" />
                      </p>
                      <h4 class="card-title">Hijab Meeza</h4>
                      <p class="card-text">e-commerce application from Hijab Meezha</p>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body text-center mt-4">
                      <h4 class="card-title">Hijab Meezha</h4>
                      <p class="card-text">This application was created in May 2021 and is one of the e-commerce sites in selling various kinds of Muslim girl clothes, ranging from Hijab, Clothes and Dresses.</p>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <button className="btn btn-outline-info"
                            onClick={(event) => openNewTab({ event, url: "https://ecommerce-cust-brilian.web.app/login" })}>
                            See Detail
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
              <div class="mainflip">
                <div class="frontside">
                  <div class="card">
                    <div class="card-body text-center">
                      <p>
                        <img class=" img-fluid" src={SPORTIRENA} alt="card image" />
                      </p>
                      <h4 class="card-title">Sportirena</h4>
                      <p class="card-text">Online book and veneus management.</p>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body text-center mt-4">
                      <h4 class="card-title">Sportirena</h4>
                      <p class="card-text">This application for an integrated and easy to use online booking and facility management solution designed to help you manage your resources with ease.</p>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <button className="btn btn-outline-info"
                            onClick={(event) => openNewTab({ event, url: "https://www.sportirena.com/" })}>
                            See Detail
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
              <div class="mainflip">
                <div class="frontside">
                  <div class="card">
                    <div class="card-body text-center">
                      <p>
                        <img class=" img-fluid" src={NADI} alt="card image" />
                      </p>
                      <h4 class="card-title">Nadi Web Admin</h4>
                      <p class="card-text">Administrator management application in Nadi Health Berhad.</p>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body text-center mt-4">
                      <h4 class="card-title">Nadi Web Admin</h4>
                      <p class="card-text">This application is to manage all administration both for patients, clinics, nurses and also doctors who work with Nadi Health Berhard.</p>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <button className="btn btn-outline-info"
                            onClick={(event) => openNewTab({ event, url: "https://admin.nadihealth.com/#/" })}>
                            See Detail
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
              <div class="mainflip">
                <div class="frontside">
                  <div class="card">
                    <div class="card-body text-center">
                      <p>
                        <img class=" img-fluid" src={DAPOERDINPUT} alt="card image" />
                      </p>
                      <h4 class="card-title">Dapoer Dinput</h4>
                      <p class="card-text">Cake online shop in Jabodetabek areas</p>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body text-center mt-4">
                      <h4 class="card-title">Dapoer Dinput</h4>
                      <p class="card-text">This application is show all product cake from Dapoer Dinput and we can order from this application.</p>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <button className="btn btn-outline-info"
                            onClick={(event) => openNewTab({ event, url: "https://dapoer-dinput.web.app/" })}>
                            See Detail
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
